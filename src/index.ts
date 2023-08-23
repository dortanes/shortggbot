/**
 * @shortggbot
 * Telegram TikTok/Reels/Shorts Downloader Bot
 */

import axios from "axios";
import { readFile, unlink } from "fs/promises";
import TelegramBot from "node-telegram-bot-api";

import { ReelsResult } from "./ts/reelsTypes";
import { ShortsResult } from "./ts/shortsTypes";
import { TikTokResult } from "./ts/tiktokTypes";
import { downloadFile } from "./utils";

const downloadTikTok = require("tiktok-no-watermark-api");

if (!process.env.BOT_TOKEN)
  throw new Error("You need to specify BOT_TOKEN in .env file");

console.info("Token specified:", process.env.BOT_TOKEN);

const bot = new TelegramBot(String(process.env.BOT_TOKEN));

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  let downloadingMsg: TelegramBot.Message;

  try {
    if (
      text &&
      (text.includes("tiktok.com") ||
        text.includes("instagram.com") ||
        text.includes("youtube.com"))
    ) {
      console.info("Got a message in chat", chatId, msg.message_id);

      downloadingMsg = await bot.sendMessage(chatId, "⏳");

      let videoUrl: string | Buffer | null = null;

      if (text.includes("instagram.com")) {
        // Get Reels video data
        const video: ReelsResult | null = (
          await axios.get(" https://api10.reelsdownloader.io/allinone", {
            headers: {
              url: text,
            },
          })
        )?.data;

        if (video) {
          // Retreive video URL
          videoUrl = video.media?.[0]?.url;
        }
      } else if (text.includes("tiktok.com")) {
        // Get TikTok video data
        const video: TikTokResult | null = await downloadTikTok(text);

        if (video) {
          // Retreive video URL
          videoUrl =
            video?.result?.video?.bit_rate?.[0]?.play_addr?.url_list?.[0];
        }
      } else if (text.includes("youtube.com")) {
        // Get Shorts video data
        const video: ShortsResult | null = (
          await axios.get("https://cdn19.savetube.me/info?url=" + text)
        )?.data;

        if (video) {
          // Retreive video URL
          const ytVideoUrl = video?.data?.video_formats?.[0]?.url;
          const videoFilePath = "./temp/" + video?.data?.id + ".mp4";

          // Download video locally
          await downloadFile(String(ytVideoUrl), videoFilePath);
          // Upload video to Telegram
          videoUrl = await readFile(videoFilePath);
          // Delete video locally
          await unlink(videoFilePath);
        }
      }

      if (videoUrl) {
        // Send the video to the chat
        await bot.sendVideo(chatId, videoUrl, {
          reply_to_message_id: msg.message_id,
        });
      } else {
        await bot.sendMessage(chatId, "Something went wrong. :(", {
          reply_to_message_id: msg.message_id,
        });
      }

      // Delete the first message
      await bot.deleteMessage(chatId, downloadingMsg.message_id);
    }
  } catch (e) {
    console.error(e);

    if (downloadingMsg) {
      // Delete the first message
      await bot.deleteMessage(chatId, downloadingMsg.message_id);
    }

    await bot.sendMessage(chatId, "Something went wrong. :(", {
      reply_to_message_id: msg.message_id,
    });
  }
});

bot.on("inline_query", async (payload) => {
  const text = payload.query;

  try {
    if (
      text &&
      (text.includes("tiktok.com") ||
        text.includes("instagram.com") ||
        text.includes("youtube.com"))
    ) {
      console.info("Got a inline query", text);

      let videoUrl: string | null = null;
      let posterUrl: string | null = null;

      if (text.includes("instagram.com")) {
        // Get Reels video data
        const video: ReelsResult | null = (
          await axios.get(" https://api10.reelsdownloader.io/allinone", {
            headers: {
              url: text,
            },
          })
        )?.data;

        if (video) {
          // Retreive video URL
          videoUrl = video.media?.[0]?.url;
          posterUrl = video.media?.[0]?.poster;
        }
      } else if (text.includes("tiktok.com")) {
        // Get TikTok video data
        const video: TikTokResult | null = await downloadTikTok(text);

        if (video) {
          // Retreive video URL
          videoUrl =
            video?.result?.video?.bit_rate?.[0]?.play_addr?.url_list?.[0];
          posterUrl = video?.result?.video?.cover?.url_list?.find((c) =>
            c.includes(".jpeg")
          );
        }
      } else if (text.includes("youtube.com")) {
        return await bot.answerInlineQuery(payload.id, [
          {
            type: "article",
            id: "error",
            title: "YouTube Shorts is currently unsupported in Inline Mode",
            input_message_content: {
              message_text: "Something went wrong",
            },
          },
        ]);
      }

      if (videoUrl) {
        await bot.answerInlineQuery(payload.id, [
          {
            type: "video",
            id: "video",
            video_url: videoUrl,
            mime_type: "video/mp4",
            thumb_url: posterUrl,
            title: "Send video",
          },
        ]);
      } else {
        await bot.answerInlineQuery(payload.id, [
          {
            type: "article",
            id: "error",
            title: "Something went wrong",
            input_message_content: {
              message_text: "Something went wrong",
            },
          },
        ]);
      }
    }
  } catch (e) {
    console.error(e);

    await bot.answerInlineQuery(payload.id, [
      {
        type: "article",
        id: "error",
        title: "Something went wrong",
        input_message_content: {
          message_text: "Something went wrong",
        },
      },
    ]);
  }
});

bot.startPolling();

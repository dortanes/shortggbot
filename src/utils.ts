import axios from "axios";
import { createWriteStream } from "fs";
import * as stream from "stream";
import { promisify } from "util";

import { TikTokAPISearchResult } from "./ts/tiktokApiTypes";

const finished = promisify(stream.finished);

export async function downloadFile(
  fileUrl: string,
  outputLocationPath: string
): Promise<any> {
  const writer = createWriteStream(outputLocationPath);
  return axios
    .get(fileUrl, {
      responseType: "stream",
    })
    .then((response) => {
      response.data.pipe(writer);
      return finished(writer); //this is a Promise
    });
}

export async function retreiveFile(fileUrl: string): Promise<any> {
  return axios
    .get(fileUrl, {
      responseType: "arraybuffer",
    })
    .then((r) => r.data);
}

export async function fetchTTSearch(
  searchString: string,
  offset: number = 0,
  type: number = 1
) {
  const url = `https://www.tiktok.com/api/search/general/full/?WebIdLastTime=1696541552&aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=MacIntel&browser_version=5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15&channel=tiktok_web&cookie_enabled=true&device_id=7286590434435040774&device_platform=web_pc&device_type=web_h264&focus_state=true&from_page=search&history_len=5&is_fullscreen=false&is_page_visible=true&keyword=${searchString}&${decodeURIComponent(
    process.env.TT_SEARCH_PAYLOAD.replace("[offset]", `${offset}`)
  )}`;

  const result: TikTokAPISearchResult = await axios
    .get(url, {
      headers: {
        Cookie: process.env.TT_SEARCH_COOKIES,
        "User-Agent": process.env.TT_SEARCH_USER_AGENT,
      },
    })
    .then((r) => r.data);

  console.log(
    url,
    {
      Cookie: process.env.TT_SEARCH_COOKIES,
    },
    result
  );

  const filteredResult = result.data.filter((i) => i.type === type);

  return filteredResult.map((i) => ({
    id: i.item.id,
    description: i.item.desc,
    videoUrl: i.item.video.playAddr,
    posterUrl: i.item.video.cover,
    authorId: i.item.author.uniqueId,
    link: `https://www.tiktok.com/@${i.item.author.uniqueId}/video/${i.item.id}`,
  }));
}

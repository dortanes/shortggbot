export interface TikTokResult {
  status: string;
  result: Result;
}

interface Result {
  aweme_id: string;
  desc: string;
  create_time: number;
  author: Author;
  music: Music;
  cha_list: Chalist[];
  video: Video;
  share_url: string;
  user_digged: number;
  statistics: Statistics;
  status: Status;
  rate: number;
  text_extra: Textextra[];
  is_top: number;
  label_top: Avatarlarger;
  share_info: Shareinfo3;
  distance: string;
  video_labels: any[];
  is_vr: boolean;
  is_ads: boolean;
  duration: number;
  aweme_type: number;
  cmt_swt: boolean;
  image_infos?: any;
  risk_infos: Riskinfos;
  is_relieve: boolean;
  sort_label: string;
  position?: any;
  uniqid_position?: any;
  author_user_id: number;
  bodydance_score: number;
  geofencing: any[];
  is_hash_tag: number;
  is_pgcshow: boolean;
  region: string;
  video_text: any[];
  collect_stat: number;
  label_top_text?: any;
  group_id: string;
  prevent_download: boolean;
  nickname_position?: any;
  challenge_position?: any;
  item_comment_settings: number;
  with_promotional_music: boolean;
  long_video?: any;
  item_duet: number;
  item_react: number;
  desc_language: string;
  interaction_stickers?: any;
  misc_info: string;
  origin_comment_ids?: any;
  commerce_config_data?: any;
  distribute_type: number;
  video_control: Videocontrol;
  commerce_info: Commerceinfo;
  anchors?: any;
  hybrid_label?: any;
  with_survey: boolean;
  geofencing_regions?: any;
  cover_labels?: any;
  mask_infos: any[];
  search_highlight?: any;
  playlist_blocked: boolean;
  green_screen_materials?: any;
  interact_permission: Interactpermission;
  question_list?: any;
  content_desc: string;
  content_desc_extra: any[];
  products_info?: any;
  follow_up_publish_from_id: number;
  disable_search_trending_bar: boolean;
  music_begin_time_in_ms: number;
  music_end_time_in_ms: number;
  item_distribute_source: string;
  item_source_category: number;
  branded_content_accounts?: any;
  is_description_translatable: boolean;
  follow_up_first_item_id: string;
  follow_up_item_id_groups: string;
  is_text_sticker_translatable: boolean;
  text_sticker_major_lang: string;
  original_client_text: Originalclienttext;
  music_selected_from: string;
  tts_voice_ids?: any;
  reference_tts_voice_ids?: any;
  voice_filter_ids?: any;
  reference_voice_filter_ids?: any;
  music_title_style: number;
  animated_image_info: Animatedimageinfo;
  added_sound_music_info: Music;
  origin_volume: string;
  music_volume: string;
  support_danmaku: boolean;
  has_danmaku: boolean;
  muf_comment_info_v2?: any;
  behind_the_song_music_ids?: any;
  behind_the_song_video_music_ids?: any;
  content_original_type: number;
  operator_boost_info?: any;
  log_info: Loginfo;
  main_arch_common: string;
  aigc_info: Aigcinfo;
}

interface Aigcinfo {
  aigc_label_type: number;
}

interface Loginfo {
  order: string;
}

interface Animatedimageinfo {
  type: number;
  effect: number;
}

interface Originalclienttext {
  markup_text: string;
  text_extra: Textextra2[];
}

interface Textextra2 {
  start: number;
  end: number;
  type: number;
  hashtag_name: string;
  is_commerce: boolean;
  sub_type: number;
  line_idx: number;
  tag_id: string;
}

interface Interactpermission {
  duet: number;
  stitch: number;
  duet_privacy_setting: number;
  stitch_privacy_setting: number;
  upvote: number;
  allow_adding_to_story: number;
  allow_create_sticker: Allowcreatesticker;
}

interface Allowcreatesticker {
  status: number;
}

interface Commerceinfo {
  adv_promotable: boolean;
  branded_content_type: number;
}

interface Videocontrol {
  allow_download: boolean;
  share_type: number;
  show_progress_bar: number;
  draft_progress_bar: number;
  allow_duet: boolean;
  allow_react: boolean;
  prevent_download_type: number;
  allow_dynamic_wallpaper: boolean;
  timer_status: number;
  allow_music: boolean;
  allow_stitch: boolean;
}

interface Riskinfos {
  vote: boolean;
  warn: boolean;
  risk_sink: boolean;
  type: number;
  content: string;
}

interface Shareinfo3 {
  share_url: string;
  share_weibo_desc: string;
  share_desc: string;
  share_title: string;
  bool_persist: number;
  share_title_myself: string;
  share_title_other: string;
  share_link_desc: string;
  share_signature_url: string;
  share_signature_desc: string;
  share_quote: string;
  share_desc_info: string;
  now_invitation_card_image_urls?: any;
  share_button_display_mode: number;
}

interface Textextra {
  start: number;
  end: number;
  user_id: string;
  type: number;
  hashtag_name: string;
  hashtag_id: string;
  is_commerce: boolean;
  sec_uid: string;
}

interface Status {
  aweme_id: string;
  is_delete: boolean;
  allow_share: boolean;
  allow_comment: boolean;
  is_private: boolean;
  with_goods: boolean;
  private_status: number;
  in_reviewing: boolean;
  reviewed: number;
  self_see: boolean;
  is_prohibited: boolean;
  download_status: number;
}

interface Statistics {
  aweme_id: string;
  comment_count: number;
  digg_count: number;
  download_count: number;
  play_count: number;
  share_count: number;
  forward_count: number;
  lose_count: number;
  lose_comment_count: number;
  whatsapp_share_count: number;
  collect_count: number;
}

interface Video {
  play_addr: Playaddr;
  cover: Avatarlarger;
  height: number;
  width: number;
  dynamic_cover: Avatarlarger;
  origin_cover: Avatarlarger;
  ratio: string;
  download_addr: Downloadaddr;
  has_watermark: boolean;
  bit_rate: Bitrate[];
  duration: number;
  download_suffix_logo_addr: Downloadaddr;
  has_download_suffix_logo_addr: boolean;
  is_h265: number;
  cdn_url_expired: number;
  need_set_token: boolean;
  CoverTsp: number;
  misc_download_addrs: string;
  tags?: any;
  big_thumbs?: any;
  is_bytevc1: number;
  meta: string;
  cover_is_custom: boolean;
  source_HDR_type: number;
  bit_rate_audio: any[];
}

interface Bitrate {
  gear_name: string;
  quality_type: number;
  bit_rate: number;
  play_addr: Playaddr;
  is_h265: number;
  is_bytevc1: number;
  dub_infos?: any;
  HDR_type: string;
  HDR_bit: string;
}

interface Downloadaddr {
  uri: string;
  url_list: string[];
  width: number;
  height: number;
  data_size: number;
  url_prefix?: any;
}

interface Playaddr {
  uri: string;
  url_list: string[];
  width: number;
  height: number;
  url_key: string;
  data_size: number;
  file_hash: string;
  url_prefix?: any;
}

interface Chalist {
  cid: string;
  cha_name: string;
  desc: string;
  schema: string;
  author: Author2;
  user_count: number;
  share_info: Shareinfo2;
  connect_music: any[];
  type: number;
  sub_type: number;
  is_pgcshow: boolean;
  collect_stat: number;
  is_challenge: number;
  view_count: number;
  is_commerce: boolean;
  hashtag_profile: string;
  cha_attrs?: any;
  banner_list?: any;
  show_items?: any;
  search_highlight?: any;
}

interface Shareinfo2 {
  share_url: string;
  share_weibo_desc: string;
  share_desc: string;
  share_title: string;
  bool_persist: number;
  share_title_myself: string;
  share_title_other: string;
  share_signature_url: string;
  share_signature_desc: string;
  share_quote: string;
  share_desc_info: string;
  now_invitation_card_image_urls?: any;
}

interface Author2 {
  followers_detail?: any;
  platform_sync_info?: any;
  geofencing?: any;
  cover_url?: any;
  item_list?: any;
  type_label?: any;
  ad_cover_url?: any;
  relative_users?: any;
  cha_list?: any;
  need_points?: any;
  homepage_bottom_toast?: any;
  can_set_geofencing?: any;
  white_cover_url?: any;
  user_tags?: any;
  bold_fields?: any;
  search_highlight?: any;
  mutual_relation_avatars?: any;
  events?: any;
  advance_feature_item_order?: any;
  advanced_feature_info?: any;
  user_profile_guide?: any;
  shield_edit_field_info?: any;
  can_message_follow_status_list?: any;
  account_labels?: any;
}

interface Music {
  id: number;
  id_str: string;
  title: string;
  author: string;
  album: string;
  cover_hd: Avatarlarger;
  cover_large: Avatarlarger;
  cover_medium: Avatarlarger;
  cover_thumb: Avatarlarger;
  play_url: Avatarlarger;
  schema_url: string;
  source_platform: number;
  start_time: number;
  end_time: number;
  duration: number;
  extra: string;
  user_count: number;
  position?: any;
  collect_stat: number;
  status: number;
  offline_desc: string;
  owner_id: string;
  owner_nickname: string;
  is_original: boolean;
  mid: string;
  binded_challenge_id: number;
  redirect: boolean;
  is_restricted: boolean;
  author_deleted: boolean;
  is_del_video: boolean;
  is_video_self_see: boolean;
  owner_handle: string;
  author_position?: any;
  prevent_download: boolean;
  strong_beat_url: Avatarlarger;
  prevent_item_download_status: number;
  external_song_info: any[];
  sec_uid: string;
  avatar_thumb: Avatarlarger;
  avatar_medium: Avatarlarger;
  avatar_large: Avatarlarger;
  preview_start_time: number;
  preview_end_time: number;
  is_commerce_music: boolean;
  is_original_sound: boolean;
  artists?: any;
  lyric_short_position?: any;
  mute_share: boolean;
  tag_list?: any;
  is_author_artist: boolean;
  is_pgc: boolean;
  search_highlight?: any;
  multi_bit_rate_play_info?: any;
  tt_to_dsp_song_infos?: any;
  recommend_status: number;
}

interface Author {
  uid: string;
  short_id: string;
  nickname: string;
  gender: number;
  signature: string;
  avatar_larger: Avatarlarger;
  avatar_thumb: Avatarlarger;
  avatar_medium: Avatarlarger;
  birthday: string;
  follow_status: number;
  aweme_count: number;
  following_count: number;
  follower_count: number;
  favoriting_count: number;
  total_favorited: number;
  is_block: boolean;
  hide_search: boolean;
  custom_verify: string;
  unique_id: string;
  bind_phone: string;
  special_lock: number;
  need_recommend: number;
  has_facebook_token: boolean;
  has_twitter_token: boolean;
  fb_expire_time: number;
  tw_expire_time: number;
  has_youtube_token: boolean;
  youtube_expire_time: number;
  room_id: number;
  live_verify: number;
  authority_status: number;
  verify_info: string;
  shield_follow_notice: number;
  shield_digg_notice: number;
  shield_comment_notice: number;
  share_info: Shareinfo;
  with_commerce_entry: boolean;
  verification_type: number;
  enterprise_verify_reason: string;
  is_ad_fake: boolean;
  followers_detail?: any;
  region: string;
  account_region: string;
  commerce_user_level: number;
  live_agreement: number;
  platform_sync_info?: any;
  with_shop_entry: boolean;
  is_discipline_member: boolean;
  secret: number;
  has_orders: boolean;
  prevent_download: boolean;
  show_image_bubble: boolean;
  geofencing: any[];
  unique_id_modify_time: number;
  video_icon: Shareqrcodeurl;
  ins_id: string;
  google_account: string;
  youtube_channel_id: string;
  youtube_channel_title: string;
  apple_account: number;
  with_fusion_shop_entry: boolean;
  is_phone_binded: boolean;
  accept_private_policy: boolean;
  twitter_id: string;
  twitter_name: string;
  user_canceled: boolean;
  has_email: boolean;
  live_agreement_time: number;
  status: number;
  create_time: number;
  avatar_uri: string;
  follower_status: number;
  comment_setting: number;
  duet_setting: number;
  reflow_page_gid: number;
  reflow_page_uid: number;
  user_rate: number;
  download_setting: number;
  download_prompt_ts: number;
  react_setting: number;
  live_commerce: boolean;
  cover_url: Avatarlarger[];
  language: string;
  has_insights: boolean;
  share_qrcode_uri: string;
  item_list?: any;
  user_mode: number;
  user_period: number;
  is_star: boolean;
  cv_level: string;
  type_label: any[];
  ad_cover_url?: any;
  comment_filter_status: number;
  avatar_168x168: Avatarlarger;
  avatar_300x300: Avatarlarger;
  relative_users?: any;
  cha_list?: any;
  sec_uid: string;
  need_points?: any;
  homepage_bottom_toast?: any;
  can_set_geofencing?: any;
  white_cover_url?: any;
  user_tags?: any;
  stitch_setting: number;
  bold_fields?: any;
  search_highlight?: any;
  mutual_relation_avatars?: any;
  events?: any;
  matched_friend: Matchedfriend;
  advance_feature_item_order?: any;
  advanced_feature_info?: any;
  user_profile_guide?: any;
  shield_edit_field_info?: any;
  friends_status: number;
  can_message_follow_status_list?: any;
  account_labels?: any;
}

interface Matchedfriend {
  video_items?: any;
}

interface Shareinfo {
  share_url: string;
  share_weibo_desc: string;
  share_desc: string;
  share_title: string;
  share_qrcode_url: Shareqrcodeurl;
  share_title_myself: string;
  share_title_other: string;
  share_desc_info: string;
  now_invitation_card_image_urls?: any;
}

interface Shareqrcodeurl {
  uri: string;
  url_list: any[];
  width: number;
  height: number;
  url_prefix?: any;
}

interface Avatarlarger {
  uri: string;
  url_list: string[];
  width: number;
  height: number;
  url_prefix?: any;
}

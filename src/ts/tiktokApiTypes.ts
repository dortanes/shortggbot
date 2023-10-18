export interface TikTokAPISearchResult {
  status_code: number;
  data: Datum[];
  qc: string;
  cursor: number;
  has_more: number;
  ad_info: Adinfo;
  extra: Extra;
  log_pb: Logpb;
  global_doodle_config: Globaldoodleconfig;
  backtrace: string;
}

interface Globaldoodleconfig {
  feedback_survey?: any;
}

interface Logpb {
  impr_id: string;
}

interface Extra {
  now: number;
  logid: string;
  fatal_item_ids: any[];
  search_request_id: string;
}

interface Adinfo {}

interface Datum {
  type: number;
  item: Item;
  common: Common;
}

interface Common {
  doc_id_str: string;
}

interface Item {
  id: string;
  desc: string;
  createTime: number;
  video: Video;
  author: Author;
  music: Music;
  challenges?: Challenge[];
  stats: Stats;
  duetInfo: DuetInfo;
  originalItem: boolean;
  officalItem: boolean;
  textExtra?: TextExtra[];
  secret: boolean;
  forFriend: boolean;
  digged: boolean;
  itemCommentStatus: number;
  showNotPass: boolean;
  vl1: boolean;
  itemMute: boolean;
  authorStats: AuthorStats;
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  shareEnabled: boolean;
  isAd: boolean;
  collected: boolean;
  effectStickers?: EffectSticker[];
  stickersOnItem?: StickersOnItem[];
}

interface StickersOnItem {
  stickerType: number;
  stickerText: string[];
}

interface EffectSticker {
  name: string;
  ID: string;
}

interface AuthorStats {
  followingCount: number;
  followerCount: number;
  heartCount: number;
  videoCount: number;
  diggCount: number;
  heart: number;
}

interface TextExtra {
  awemeId: string;
  start: number;
  end: number;
  hashtagName: string;
  hashtagId: string;
  type: number;
  userId: string;
  isCommerce: boolean;
  userUniqueId: string;
  secUid: string;
  subType: number;
}

interface DuetInfo {
  duetFromId: string;
}

interface Stats {
  diggCount: number;
  shareCount: number;
  commentCount: number;
  playCount: number;
  collectCount: number;
}

interface Challenge {
  id: string;
  title: string;
  desc: string;
  profileThumb: string;
  profileMedium: string;
  profileLarger: string;
  coverThumb: string;
  coverMedium: string;
  coverLarger: string;
  isCommerce: boolean;
}

interface Music {
  id: string;
  title: string;
  playUrl: string;
  coverThumb: string;
  coverMedium: string;
  coverLarge: string;
  authorName: string;
  original: boolean;
  duration: number;
  album: string;
}

interface Author {
  id: string;
  uniqueId: string;
  nickname: string;
  avatarThumb: string;
  avatarMedium: string;
  avatarLarger: string;
  signature: string;
  verified: boolean;
  secUid: string;
  secret: boolean;
  ftc: boolean;
  relation: number;
  openFavorite: boolean;
  commentSetting: number;
  duetSetting: number;
  stitchSetting: number;
  privateAccount: boolean;
  downloadSetting: number;
}

interface Video {
  id: string;
  height: number;
  width: number;
  duration: number;
  ratio: string;
  cover: string;
  originCover: string;
  dynamicCover: string;
  playAddr: string;
  downloadAddr: string;
  shareCover: string[];
  reflowCover: string;
  bitrate: number;
  encodedType: string;
  format: string;
  videoQuality: string;
  encodeUserTag: string;
}

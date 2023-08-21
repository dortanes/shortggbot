export interface ReelsResult {
  media: Media[];
  owner_info: Ownerinfo;
  media_type: string;
}

interface Ownerinfo {
  username: string;
  is_verified: boolean;
  profile_pic_url: string;
}

interface Media {
  url: string;
  poster: string;
  is_video: boolean;
}

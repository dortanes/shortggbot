interface ReelsResult {
  author: Author;
  video: Video;
}

interface Video {
  likesCount: number;
  commentCount: number;
  "@type": string;
  uploadDate: string;
  description: string;
  name: string;
  caption: string;
  height: string;
  width: string;
  contentUrl: string;
  thumbnailUrl: string;
  genre: any[];
  keywords: any[];
  interactionStatistic?: any;
}

interface Author {
  id: string;
  image: string;
  name: string;
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

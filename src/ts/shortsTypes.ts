export interface ShortsResult {
  data: Data;
  message: string;
  status: boolean;
}

interface Data {
  audio_formats: Audioformat[];
  default_selected: number;
  duration: number;
  durationLabel: string;
  fromCache: boolean;
  id: string;
  key: string;
  thumbnail: string;
  title: string;
  titleSlug: string;
  url: string;
  video_formats: Videoformat[];
}

interface Videoformat {
  default_selected: number;
  height: number;
  label: string;
  quality: number;
  url?: string;
  width: number;
}

interface Audioformat {
  label: string;
  quality: number;
  url?: any;
}

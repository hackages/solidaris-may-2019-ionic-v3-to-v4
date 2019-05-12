export interface DataResponse {
  schedule: ScheduleItem[];
  speakers: SpeakersItem[];
  map: MapItem[];
}

export interface ScheduleItem {
  date: string;
  groups: GroupsItem[];
  shownSessions?: number
}

export interface GroupsItem {
  time: string;
  hide?: boolean;
  sessions: SessionsItem[];
}

export interface SessionsItem {
  hide?: boolean;
  name: string;
  timeStart: string;
  timeEnd: string;
  location: string;
  tracks: string[];
  id: string;
  description?: string;
  speakerNames?: string[];
}

export interface SpeakersItem {
  name: string;
  profilePic: string;
  twitter: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  id: string;
}

export interface MapItem {
  name: string;
  lat: number;
  lng: number;
  center?: boolean;
}

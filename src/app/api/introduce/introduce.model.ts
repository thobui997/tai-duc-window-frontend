import {Image} from '../advisories/advisories.model';

export interface IntroduceModel {
  title: string;
  description: string;
  body: string;
  youtubeId: string;
  youtubeAvatar: Image;
}

export interface Advisories {
  id: string;
  title: string;
  description: string;
  body: string;
  image: Image;
  createdAt: string;
}

export interface Image {
  url: string;
}

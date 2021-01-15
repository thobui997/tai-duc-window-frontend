import { Image } from '../advisories/advisories.model';

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  body: string;
  images: Image[];
  avatar: Image;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  products: ProductModel[];
}

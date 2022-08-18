import { Brand } from "./brand";
import { Category } from "./category";

export interface SlideAttributeValue{
    name: string;
    slug: string;

}
export interface SlideAttribute{
    name: string;
    slug: string;
    featured: boolean;
    values: SlideAttributeValue[];

}
export interface Slide {
    id: number;
    slug: string;
    name: string;
    sku: string;
    price: number;
    copareAtPrice: number |null;
    images: string[];
    rating: number;
    reviews: number;
    avaliability: string;
    brand: Brand|null;
    categories: Category[];
    attributes: SlideAttribute[];
}

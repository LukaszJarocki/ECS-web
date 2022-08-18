export interface Category {
    id: number;
    name: string;
    slug: string;
    path: string;
    image: string | null;
    items: number;
    parent?: Category[];
    children?: Category[];
}

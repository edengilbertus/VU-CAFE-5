
export type Category = 'All' | 'Pizza' | 'Burgers' | 'Salads' | 'Desserts' | 'Drinks';

export interface FoodItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    imageUrl: string;
}

export interface CartItem extends FoodItem {
    quantity: number;
}

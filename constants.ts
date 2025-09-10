
import { FoodItem, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Pizza', 'Burgers', 'Salads', 'Desserts', 'Drinks'];

export const MENU_ITEMS: FoodItem[] = [
  {
    id: 'p1',
    name: 'Margherita Supreme',
    description: 'Classic cheese and tomato base with fresh basil and a drizzle of olive oil.',
    price: 12.99,
    category: 'Pizza',
    imageUrl: 'https://picsum.photos/id/2/400/300',
  },
  {
    id: 'p2',
    name: 'Pepperoni Power',
    description: 'A generous helping of spicy pepperoni on our signature tomato sauce.',
    price: 14.50,
    category: 'Pizza',
    imageUrl: 'https://picsum.photos/id/292/400/300',
  },
  {
    id: 'b1',
    name: 'The Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, onion, and our secret sauce.',
    price: 10.99,
    category: 'Burgers',
    imageUrl: 'https://picsum.photos/id/1080/400/300',
  },
  {
    id: 'b2',
    name: 'Bacon Avocado Burger',
    description: 'Our classic burger topped with crispy bacon and fresh avocado.',
    price: 13.99,
    category: 'Burgers',
    imageUrl: 'https://picsum.photos/id/77/400/300',
  },
  {
    id: 's1',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.',
    price: 8.99,
    category: 'Salads',
    imageUrl: 'https://picsum.photos/id/25/400/300',
  },
  {
    id: 's2',
    name: 'Greek Salad',
    description: 'Tomatoes, cucumbers, onions, olives, and feta cheese with a lemon-herb vinaigrette.',
    price: 9.50,
    category: 'Salads',
    imageUrl: 'https://picsum.photos/id/305/400/300',
  },
  {
    id: 'd1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
    price: 7.50,
    category: 'Desserts',
    imageUrl: 'https://picsum.photos/id/225/400/300',
  },
  {
    id: 'd2',
    name: 'New York Cheesecake',
    description: 'Rich and creamy cheesecake with a graham cracker crust.',
    price: 6.99,
    category: 'Desserts',
    imageUrl: 'https://picsum.photos/id/326/400/300',
  },
    {
    id: 'dr1',
    name: 'Sparkling Water',
    description: 'Chilled sparkling mineral water.',
    price: 2.50,
    category: 'Drinks',
    imageUrl: 'https://picsum.photos/id/400/400/300',
  },
  {
    id: 'dr2',
    name: 'Fresh Lemonade',
    description: 'House-made lemonade with fresh lemons.',
    price: 3.50,
    category: 'Drinks',
    imageUrl: 'https://picsum.photos/id/1015/400/300',
  },
];

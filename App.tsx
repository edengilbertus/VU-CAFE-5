
import React, { useState, useMemo, useCallback } from 'react';
import { FoodItem, CartItem, Category } from './types';
import { MENU_ITEMS, CATEGORIES } from './constants';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import FoodCard from './components/FoodCard';
import Cart from './components/Cart';
import { getMealSuggestion } from './services/geminiService';
import SearchBox from './components/SearchBox';
import SuggestionButton from './components/SuggestionButton';

const App: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category>('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestedItemIds, setSuggestedItemIds] = useState<string[]>([]);
    const [isSuggesting, setIsSuggesting] = useState(false);
    const [suggestionError, setSuggestionError] = useState<string | null>(null);

    const handleAddToCart = useCallback((itemToAdd: FoodItem) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...itemToAdd, quantity: 1 }];
        });
    }, []);

    const handleUpdateQuantity = useCallback((itemId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            setCartItems(prev => prev.filter(item => item.id !== itemId));
        } else {
            setCartItems(prev => prev.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            ));
        }
    }, []);

    const handleGetSuggestion = useCallback(async () => {
        setIsSuggesting(true);
        setSuggestionError(null);
        setSuggestedItemIds([]);
        try {
            const ids = await getMealSuggestion(MENU_ITEMS);
            setSuggestedItemIds(ids);
        } catch (error) {
            console.error("Failed to get meal suggestion:", error);
            setSuggestionError("Sorry, I couldn't come up with a suggestion right now. Please try again later.");
        } finally {
            setIsSuggesting(false);
        }
    }, []);


    const filteredMenuItems = useMemo(() => {
        return MENU_ITEMS.filter(item => {
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  item.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    const cartItemCount = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    return (
        <div className="min-h-screen bg-surface-container-high">
            <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-12">
                    <h1 className="font-display text-5xl md:text-7xl text-primary tracking-wider">
                        Flavor Fusion
                    </h1>
                    <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                        Crafted with passion, served with style. Your next favorite meal is just a click away.
                    </p>
                </div>
                
                <div className="sticky top-0 bg-surface-container-high z-10 py-4 mb-6">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
                       <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                       <SuggestionButton 
                            isSuggesting={isSuggesting} 
                            onClick={handleGetSuggestion} 
                        />
                    </div>
                    <CategoryTabs
                        categories={CATEGORIES}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </div>
                
                {suggestionError && <p className="text-center text-red-500 mb-4">{suggestionError}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredMenuItems.map(item => (
                        <FoodCard
                            key={item.id}
                            item={item}
                            onAddToCart={handleAddToCart}
                            isSuggested={suggestedItemIds.includes(item.id)}
                        />
                    ))}
                </div>
            </main>

            <Cart 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
            />
        </div>
    );
};

export default App;

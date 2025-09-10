
import React from 'react';
import { FoodItem } from '../types';
import PillButton from './PillButton';

interface FoodCardProps {
    item: FoodItem;
    onAddToCart: (item: FoodItem) => void;
    isSuggested: boolean;
}

const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-300">
        <path fillRule="evenodd" d="M10.868 2.884c.321.64.321 1.393 0 2.034l-1.428 2.856c-.16.32-.458.53-.8.53s-.64-.21-.8-.53L6.412 4.918c-.321-.64-.321-1.393 0-2.034a1.001 1.001 0 0 1 1.6 0l.972 1.944.972-1.944a1.001 1.001 0 0 1 1.6 0ZM4.5 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4.5-5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-3.5 7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z" clipRule="evenodd" />
    </svg>
);


const FoodCard: React.FC<FoodCardProps> = ({ item, onAddToCart, isSuggested }) => {
    return (
        <div className={`relative bg-surface rounded-3xl shadow-m3-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 group ${isSuggested ? 'animate-pulse-glow ring-2 ring-secondary' : ''}`}>
            {isSuggested && (
                 <div className="absolute top-3 right-3 bg-secondary text-on-surface text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                    <SparkleIcon />
                    <span>Suggested</span>
                </div>
            )}
            <div className="relative">
                <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-on-surface font-display tracking-wide">{item.name}</h3>
                    <p className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</p>
                </div>
                <p className="text-sm text-on-surface-variant mt-2 mb-4 h-10">{item.description}</p>
                <PillButton onClick={() => onAddToCart(item)}>
                    Add to Cart
                </PillButton>
            </div>
        </div>
    );
};

export default FoodCard;

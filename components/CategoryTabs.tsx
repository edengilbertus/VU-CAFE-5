
import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
    categories: Category[];
    selectedCategory: Category;
    onSelectCategory: (category: Category) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex justify-center mt-8 mb-4 overflow-x-auto pb-2">
            <div className="flex items-center space-x-2 bg-primary-light p-1.5 rounded-full shadow-inner">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-light ${
                            selectedCategory === category
                                ? 'bg-primary text-white shadow-md'
                                : 'text-primary hover:bg-primary/10'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;

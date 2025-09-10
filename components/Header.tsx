
import React from 'react';
import IconButton from './IconButton';

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
}

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
    return (
        <header className="bg-surface shadow-m3-sm sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                         <span className="font-display text-3xl text-primary tracking-wide">Expressive Eats</span>
                    </div>
                    <div className="relative">
                       <IconButton onClick={onCartClick} ariaLabel="Open cart">
                            <CartIcon />
                        </IconButton>
                        {cartItemCount > 0 && (
                             <span className="absolute -top-2 -right-2 flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-on-surface text-xs font-bold">
                                {cartItemCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

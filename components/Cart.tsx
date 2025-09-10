
import React from 'react';
import { CartItem } from '../types';
import IconButton from './IconButton';
import PillButton from './PillButton';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onUpdateQuantity: (itemId: string, newQuantity: number) => void;
}

const CloseIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
)

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity }) => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-m3-md z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-outline/20">
                        <h2 className="text-2xl font-display text-primary">Your Cart</h2>
                        <IconButton onClick={onClose} ariaLabel="Close cart">
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    
                    {cartItems.length === 0 ? (
                        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                            <img src="https://picsum.photos/seed/cart/200/200" alt="Empty cart" className="rounded-full w-40 h-40 object-cover mb-4" />
                            <h3 className="text-xl font-bold text-on-surface">Your cart is empty</h3>
                            <p className="text-on-surface-variant mt-2">Looks like you haven't added anything yet. Let's find something delicious!</p>
                        </div>
                    ) : (
                        <div className="flex-grow overflow-y-auto p-6 space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center space-x-4 bg-surface-container-high p-3 rounded-2xl">
                                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-on-surface">{item.name}</h4>
                                        <p className="text-sm text-primary font-semibold">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center mt-2">
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center rounded-full border border-outline text-on-surface-variant hover:bg-primary-light">-</button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center rounded-full border border-outline text-on-surface-variant hover:bg-primary-light">+</button>
                                        </div>
                                    </div>
                                    <IconButton onClick={() => onUpdateQuantity(item.id, 0)} ariaLabel={`Remove ${item.name}`}>
                                        <TrashIcon />
                                    </IconButton>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {cartItems.length > 0 && (
                        <div className="p-6 border-t border-outline/20 bg-surface">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-medium text-on-surface-variant">Subtotal</span>
                                <span className="text-2xl font-bold text-primary">${subtotal.toFixed(2)}</span>
                            </div>
                            <PillButton onClick={() => alert('Checkout is not implemented.')} className="w-full">
                                Proceed to Checkout
                            </PillButton>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;

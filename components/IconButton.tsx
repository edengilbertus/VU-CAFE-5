
import React from 'react';

interface IconButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children, className = '', ariaLabel }) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`flex items-center justify-center w-12 h-12 rounded-full text-on-surface-variant hover:bg-primary-light focus:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 ${className}`}
        >
            {children}
        </button>
    );
};

export default IconButton;

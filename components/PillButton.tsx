
import React from 'react';

interface PillButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

const PillButton: React.FC<PillButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-3 px-6 bg-primary text-white font-bold rounded-full shadow-m3-sm hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-primary-light transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
};

export default PillButton;

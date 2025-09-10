
import React from 'react';

interface SuggestionButtonProps {
    isSuggesting: boolean;
    onClick: () => void;
}

const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10.868 2.884c.321.64.321 1.393 0 2.034l-1.428 2.856c-.16.32-.458.53-.8.53s-.64-.21-.8-.53L6.412 4.918c-.321-.64-.321-1.393 0-2.034a1.001 1.001 0 0 1 1.6 0l.972 1.944.972-1.944a1.001 1.001 0 0 1 1.6 0ZM4.5 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4.5-5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-3.5 7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z" clipRule="evenodd" />
    </svg>
);

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


const SuggestionButton: React.FC<SuggestionButtonProps> = ({ isSuggesting, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={isSuggesting}
            className="flex-shrink-0 w-full md:w-auto h-14 px-6 flex items-center justify-center gap-2 font-semibold text-primary bg-secondary rounded-full shadow-m3-sm hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-amber-200 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait"
        >
            {isSuggesting ? (
                <>
                    <LoadingSpinner />
                    <span>Thinking...</span>
                </>
            ) : (
                <>
                    <SparkleIcon />
                    <span>Get Suggestion</span>
                </>
            )}
        </button>
    );
};

export default SuggestionButton;

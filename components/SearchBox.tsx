
import React from 'react';

interface SearchBoxProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-on-surface-variant" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
);


const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="relative w-full md:w-auto flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon />
            </div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a dish..."
                className="w-full h-14 pl-12 pr-4 bg-surface rounded-full border-2 border-outline/30 focus:border-primary focus:ring-2 focus:ring-primary-light transition-colors duration-200"
            />
        </div>
    );
};

export default SearchBox;

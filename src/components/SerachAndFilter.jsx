import React from 'react';

function SearchAndFilter({ searchTerm, genderFilter, setSearchParams }) {
    const handleSearchChange = (e) => {
        setSearchParams({ name: e.target.value, gender: genderFilter });
    };

    const handleGenderChange = (e) => {
        setSearchParams({ name: searchTerm, gender: e.target.value });
    };

    return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-10 mb-6">
            <input
                type="text"
                placeholder="Search characters..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 sm:p-3 md:p-4 border border-blue-400 rounded-lg shadow-lg focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-102 sm:hover:scale-105 text-sm sm:text-base"
            />
            <select
                value={genderFilter}
                onChange={handleGenderChange}
                className="w-full sm:w-auto p-2 sm:p-3 md:p-4 border border-blue-400 rounded-lg shadow-lg focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-102 sm:hover:scale-105 text-sm sm:text-base"
            >
                <option value="all" className="text-blue-600 font-semibold hover:bg-blue-100">All Genders</option>
                <option value="male" className="text-green-600 font-semibold hover:bg-green-100">Male Characters</option>
                <option value="female" className="text-pink-600 font-semibold hover:bg-pink-100">Female Characters</option>
                <option value="unknown" className="text-purple-600 font-semibold hover:bg-purple-100">Unknown Gender</option>
            </select>
        </div>
    );
}

export default SearchAndFilter;

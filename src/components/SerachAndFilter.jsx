


function SerachAndFilter({searchTerm,genderFilter,setSearchParams}) {

    const handleSearchChange = (e) => {
        setSearchParams({ name: e.target.value, gender: genderFilter });
    };

    const handleGenderChange = (e) => {
        setSearchParams({ name: searchTerm, gender: e.target.value });
    };

    return (
        <div className="flex space-x-4 mb-4">
            <input
                type="text"
                placeholder="Search characters..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 border rounded"
            />
            <select
                value={genderFilter}
                onChange={handleGenderChange}
                className="p-2 border rounded"
            >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    )
}
export default SerachAndFilter;
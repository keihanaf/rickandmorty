import { useContext, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext.jsx';
import SearchAndFilter from "../components/SerachAndFilter.jsx";
import Character from "../components/Character.jsx";

function CharacterList() {
    const {
        setSearchTerm,
        setGenderFilter,
    } = useContext(CharacterContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = useMemo(() => searchParams.get('name') || '', [searchParams]);
    const genderFilter = useMemo(() => searchParams.get('gender') || 'all', [searchParams]);

    useEffect(() => {
        setSearchTerm(searchTerm);
        setGenderFilter(genderFilter);
    }, [searchTerm, genderFilter, setSearchTerm, setGenderFilter]);


    return (
        <>
            <SearchAndFilter setSearchParams={setSearchParams} searchTerm={searchTerm} genderFilter={genderFilter}/>
            <Character/>
        </>
    );
};

export default CharacterList;

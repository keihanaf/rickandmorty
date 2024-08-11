import {useContext, useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext.jsx';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import SerachAndFilter from "../components/SerachAndFilter.jsx";

const CharacterList = () => {
    const {
        characters,
        setSearchTerm,
        setGenderFilter,
        updateFavorites,
        favorites,
    } = useContext(CharacterContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get('name') || '';
    const genderFilter = searchParams.get('gender') || 'all';

    useEffect(() => {
        setSearchTerm(searchTerm);
        setGenderFilter(genderFilter);
    }, [searchTerm, genderFilter, setSearchTerm, setGenderFilter]);


    const isFavorite = (character) => favorites.some((fav) => fav.id === character.id);

    return (
        <div>
            <SerachAndFilter setSearchParams={setSearchParams} searchTerm={searchTerm} genderFilter={genderFilter}/>

            <div className="flex flex-wrap gap-4">
                {characters.map((character) => (
                    <div key={character.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border rounded shadow-lg bg-white flex flex-col items-center">
                        <Link to={`/character/${character.id}`}>
                            <img src={character.image} alt={character.name} className="w-full h-64 object-cover rounded mb-2" />
                            <h3 className="text-center text-lg font-semibold">{character.name}</h3>
                        </Link>
                        <button
                            onClick={() => updateFavorites(character)}
                            className="mt-2 text-red-500 text-2xl hover:text-red-700 transition-colors"
                        >
                            {isFavorite(character) ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;

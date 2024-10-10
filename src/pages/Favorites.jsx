import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext.jsx';
import { FaHeart } from "react-icons/fa";

function Favorites() {
    const { favorites, updateFavorites } = useContext(CharacterContext);

    const favoriteCharacters = useMemo(() => {
        return favorites.map((character) => (
            <div key={character.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <Link to={`/character/${character.id}`} className="block">
                    <div className="relative">
                        <img src={character.image} alt={character.name} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        <h3 className="absolute bottom-0 left-0 right-0 text-white text-xl font-bold p-4">{character.name}</h3>
                    </div>
                </Link>
                <div className="p-4 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">{character.species}</span>
                    <button
                        onClick={() => updateFavorites(character.id)}
                        className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                        <FaHeart className="text-3xl" />
                    </button>
                </div>
            </div>
        ));
    }, [favorites, updateFavorites]);

    if (favorites.length === 0) {
        return <div className="text-center mt-8">No favorites added yet.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 border-b-4 border-blue-400 pb-4">My Favorite Characters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {favoriteCharacters}
            </div>
        </div>
    );
};

export default Favorites;
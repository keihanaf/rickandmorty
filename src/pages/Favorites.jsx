import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext.jsx';
import {FaHeart} from "react-icons/fa";

const Favorites = () => {
    const { favorites, updateFavorites } = useContext(CharacterContext);

    if (favorites.length === 0) {
        return <div className="text-center mt-8">No favorites added yet.</div>;
    }

    const handleRemoveFavorite = (characterId) => {
        const character = favorites.find((char) => char.id === characterId);
        if (character) {
            updateFavorites(character);
        }
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">My Favorites</h2>
            <div className="grid grid-cols-3 gap-4">
                {favorites.map((character) => (
                    <div key={character.id} className="p-4 border rounded shadow">
                        <Link to={`/character/${character.id}`}>
                            <img src={character.image} alt={character.name} className="w-full rounded" />
                            <h3 className="text-center mt-2">{character.name}</h3>
                        </Link>
                        <button
                            onClick={() => handleRemoveFavorite(character.id)}
                            className="mt-2 text-red-500 text-2xl"
                        >
                            <FaHeart />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;

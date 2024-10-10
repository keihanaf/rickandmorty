import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Character() {
    const { characters, updateFavorites, favorites } = useContext(CharacterContext);

    const isFavorite = (character) => favorites.some((fav) => fav.id === character.id);
    
    return (
        <div className="flex flex-wrap gap-10">
            {characters.map((character) => (
                <div key={character.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <Link to={`/character/${character.id}`}>
                        <img src={character.image} alt={character.name} className="w-full h-72 object-cover rounded-lg mb-4 border-4 border-blue-400 shadow-lg transition-transform transform hover:scale-110" />
                        <h3 className="text-center text-3xl font-extrabold text-blue-800 hover:text-blue-600 transition-colors">{character.name}</h3>
                    </Link>
                    <button
                        onClick={() => updateFavorites(character)}
                        className="mt-4 text-red-600 text-5xl hover:text-red-800 transition-colors"
                    >
                        {isFavorite(character) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Character;
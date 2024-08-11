import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState('all');
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character/', {
                    params: {
                        name: searchTerm,
                        gender: genderFilter === 'all' ? undefined : genderFilter,
                    },
                });
                setCharacters(response.data.results.slice(0, 6));
            } catch (error) {
                console.error('Error fetching data:', error);
                setCharacters([]);
            }
        };

        fetchCharacters();
    }, [searchTerm, genderFilter]);

    const updateFavorites = (character) => {
        const updatedFavorites = favorites.some((fav) => fav.id === character.id)
            ? favorites.filter((fav) => fav.id !== character.id)
            : [...favorites, character];

        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <CharacterContext.Provider
            value={{
                characters,
                selectedCharacter,
                setSelectedCharacter,
                searchTerm,
                setSearchTerm,
                genderFilter,
                setGenderFilter,
                favorites,
                updateFavorites,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
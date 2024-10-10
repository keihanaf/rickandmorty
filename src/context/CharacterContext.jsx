import { createContext, useState, useEffect, useMemo } from 'react';
import { getCharacters } from '../services/charecterApi'; 
import ErrorModal from '../components/ErrorModal';

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
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await getCharacters(searchTerm, genderFilter); 
                
                if (response && Array.isArray(response)) {
                    setCharacters(response.slice(0, 6)); 
                } else {
                    setCharacters([]); 
                }
            } catch (error) {
                setErrorMessage(error.message || "An error occurred while fetching characters.");
            }
        };

        fetchCharacters();
    }, [searchTerm, genderFilter]);

    const updateFavorites = (character) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.some((fav) => fav.id === character.id)
                ? prevFavorites.filter((fav) => fav.id !== character.id)
                : [...prevFavorites, character];

            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const contextValue = useMemo(() => ({
        characters,
        selectedCharacter,
        setSelectedCharacter,
        searchTerm,
        setSearchTerm,
        genderFilter,
        setGenderFilter,
        favorites,
        updateFavorites,
    }), [characters, selectedCharacter, searchTerm, genderFilter, favorites]);

    const handleCloseModal = () => {
        setErrorMessage('');
    };

  return (
    <>
      <CharacterContext.Provider value={contextValue}>
        {children}
      </CharacterContext.Provider>
      <ErrorModal message={errorMessage} onClose={handleCloseModal} />
    </>
  );
};

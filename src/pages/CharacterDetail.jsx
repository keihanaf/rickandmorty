import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext.jsx';

const CharacterDetail = () => {
    const { id } = useParams();
    const { characters, setSelectedCharacter, selectedCharacter } = useContext(CharacterContext);

    useEffect(() => {
        const character = characters.find(c => c.id === parseInt(id));
        setSelectedCharacter(character);
    }, [id, characters, setSelectedCharacter]);

    if (!selectedCharacter) return <div>Loading...</div>;

    return (
        <div className="mt-8 p-4 border rounded shadow">
            <h2 className="text-2xl mb-4">{selectedCharacter.name}</h2>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-48 rounded"/>
            <p><strong>Status:</strong> {selectedCharacter.status}</p>
            <p><strong>Species:</strong> {selectedCharacter.species}</p>
            <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
            <p><strong>Location:</strong> {selectedCharacter.location.name}</p>
        </div>
    );
};

export default CharacterDetail;

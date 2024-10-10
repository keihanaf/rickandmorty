import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext.jsx';

function CharacterDetail() {
    const { id } = useParams();
    const { characters, setSelectedCharacter, selectedCharacter } = useContext(CharacterContext);

    useEffect(() => {
        const character = characters.find(c => c.id === parseInt(id));
        setSelectedCharacter(character);
    }, [id, characters, setSelectedCharacter]);

    if (!selectedCharacter) return <div>Loading...</div>;

    return (
        <div className="mt-8 p-6 border rounded-lg shadow-lg bg-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">{selectedCharacter.name}</h2>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500"/>
            <div className="mt-4 text-center">
                <p className="text-lg"><strong>Status:</strong> <span className="text-green-500">{selectedCharacter.status}</span></p>
                <p className="text-lg"><strong>Species:</strong> {selectedCharacter.species}</p>
                <p className="text-lg"><strong>Gender:</strong> {selectedCharacter.gender}</p>
                <p className="text-lg"><strong>Location:</strong> {selectedCharacter.location.name}</p>
            </div>
        </div>
    );
};

export default CharacterDetail;

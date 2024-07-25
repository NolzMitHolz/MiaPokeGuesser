import { useEffect, useState } from 'react';
import Select from 'react-select';
import PokeSelectFile from '../files/PokeSelectFile.json';

export default function GuessTheName({ currentPoke, handleNextPoke }) {
    const [poke, setPoke] = useState(currentPoke);
    const [selectedPoke, setSelectedPoke] = useState(null);
    const [correctPoke, setCorrectPoke] = useState(null);

    const pokeSelect = PokeSelectFile;

    useEffect(() => {
        setPoke(currentPoke);
    }, [currentPoke]);

    const handleChange = (event) => {
        setSelectedPoke(event);
        if (event.value === +currentPoke.id) {
            setCorrectPoke(true);
        } else {
            setCorrectPoke(false);
        }
    };

    const handleNext = () => {
        handleNextPoke();
        setSelectedPoke(null);
        setCorrectPoke(null);
    };

    return (
        <>
            {poke && (
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${+poke.id}.png`}
                        alt={'Pokemon'}
                    />

                    {correctPoke && <p>correct</p>}
                    {correctPoke !== null && !correctPoke && <p>not correct</p>}

                    {!correctPoke && (
                        <button onClick={() => handleNext()}>Skip</button>
                    )}
                    {correctPoke && (
                        <button onClick={() => handleNext()}>Next</button>
                    )}
                </div>
            )}
            <Select
                options={pokeSelect}
                onChange={(e) => handleChange(e)}
                value={selectedPoke}
            />
        </>
    );
}

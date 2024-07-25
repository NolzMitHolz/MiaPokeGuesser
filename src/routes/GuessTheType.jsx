import { useEffect, useState } from 'react';
import Select from 'react-select';

const types = [
    { label: 'Normal', value: 1 },
    { label: 'Kampf', value: 2 },
    { label: 'Flug', value: 3 },
    { label: 'Gift', value: 4 },
    { label: 'Boden', value: 5 },
    { label: 'Gestein', value: 6 },
    { label: 'Käfer', value: 7 },
    { label: 'Geist', value: 8 },
    { label: 'Stahl', value: 9 },
    { label: 'Feuer', value: 10 },
    { label: 'Wasser', value: 11 },
    { label: 'Pflanze', value: 12 },
    { label: 'Elektro', value: 13 },
    { label: 'Psycho', value: 14 },
    { label: 'Eis', value: 15 },
    { label: 'Drache', value: 16 },
    { label: 'Unlicht', value: 17 },
    { label: 'Fee', value: 18 },
];

export default function GuessTheType({ currentPoke, handleNextPoke }) {
    const [poke, setPoke] = useState(currentPoke);
    const [correctPoke, setCorrectPoke] = useState(null);
    const [selectedType1, setSelectedType1] = useState(0);
    const [selectedType2, setSelectedType2] = useState(0);

    useEffect(() => {
        setPoke(currentPoke);
    }, [currentPoke]);

    useEffect(() => {
        if (!poke) {
            return;
        }

        if (poke.types.length === 1) {
            if (poke.types[0] === selectedType1.label) setCorrectPoke(true);
            else setCorrectPoke(false);
        }
    }, [selectedType1]);

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
                        <button onClick={() => handleNextPoke()}>Skip</button>
                    )}
                    {correctPoke && (
                        <button onClick={() => handleNextPoke()}>Next</button>
                    )}

                    <Select
                        options={types}
                        value={selectedType1}
                        onChange={(e) => setSelectedType1(e)}
                    />

                    {poke.types.length > 1 && (
                        <Select
                            options={types}
                            value={selectedType2}
                            onChange={(e) => setSelectedType2(e)}
                        />
                    )}
                </div>
            )}
        </>
    );
}

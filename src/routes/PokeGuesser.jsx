import { useEffect, useState } from 'react';
import { loadPokemonList } from '../customFunctions';
import GuessTheName from './GuessTheName';
import GenInputs from '../files/components/GenInputs';
import GuessTheType from './GuessTheType';

export default function PokeGuesser() {
    const [config, setConfig] = useState({
        gen1: true,
        gen2: true,
        gen3: true,
        gen4: true,
        gen5: true,
        gen6: true,
        gen7: true,
        gen8: true,
        gen9: true,
    });
    const [pokeData, setPokeData] = useState(loadPokemonList(config));
    const [randomNumber, setRandomNumber] = useState();
    const [currentPoke, setCurrentPoke] = useState(null);
    const [gameMode, setGameMode] = useState(0);

    const handleNextPoke = () => {
        console.log('next');
        setRandomNumber(Math.ceil(Math.random() * pokeData.length - 1));
    };

    const handleApply = () => {
        setPokeData(loadPokemonList(config));
    };

    useEffect(() => {
        setCurrentPoke(pokeData[randomNumber]);
    }, [randomNumber, pokeData]);

    useEffect(() => {
        setRandomNumber(Math.ceil(Math.random() * pokeData.length - 1));
    }, [pokeData]);

    return (
        <div>
            <h1>Poke Guesser</h1>
            <select
                value={gameMode}
                onChange={(e) => setGameMode(e.target.value)}>
                <option value={0} disabled={true}>
                    Choose Gamemode
                </option>
                <option value={1}>Guess the name</option>
                <option value={2}>Guess the type</option>
                <option value={3}>Random</option>
            </select>
            <GenInputs
                config={config}
                setConfig={setConfig}
                handleApply={handleApply}
            />
            {+gameMode === 1 && (
                <>
                    <GuessTheName
                        currentPoke={currentPoke}
                        handleNextPoke={handleNextPoke}
                    />
                </>
            )}
            {+gameMode === 2 && (
                <>
                    <GuessTheType
                        currentPoke={currentPoke}
                        handleNextPoke={handleNextPoke}
                    />
                </>
            )}
        </div>
    );
}

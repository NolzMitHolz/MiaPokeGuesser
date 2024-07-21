import {useEffect, useState} from "react";
import PokeFile from "../files/PokeFile.json";
import PokeSelectFile from "../files/PokeSelectFile.json";
import Select from "react-select";
import {loadPokemonList} from "../customFunctions";

export default function PokeGuesser() {
    const [config, setConfig] = useState({gen1:false, gen2:false, gen3:false, gen4:false, gen5:false, gen6:true, gen7:true, gen8:true, gen9:true, });
    const [pokeData, setPokeData] = useState(loadPokemonList(config));
    const [selectedPoke, setSelectedPoke] = useState(null);
    const [randomNumber, setRandomNumber] = useState();
    const [currentPoke, setCurrentPoke] = useState(pokeData[randomNumber]);
    const [pokeSelect, setPokeSelect] = useState(PokeSelectFile);
    const [correctPoke, setCorrectPoke] = useState(null);

    const handleChange = (event) => {
        setSelectedPoke(event);
        console.log(event);
        console.log(currentPoke);
        if (event.value === +currentPoke.id) {
            setCorrectPoke(true);
        } else {
            setCorrectPoke(false);
        }
    }

    const handleNextPoke = () => {
        setRandomNumber(Math.ceil(Math.random() * pokeData.length));
        setSelectedPoke(null);
        setCorrectPoke(null);
    }

    const handleApply = () => {
        setPokeData(loadPokemonList(config));
    }

    useEffect(() => {
        setCurrentPoke(pokeData[randomNumber]);
    }, [randomNumber])

    useEffect(() => {
        setRandomNumber(Math.ceil(Math.random() * pokeData.length));
    }, [pokeData])



    useEffect(() => {
        console.log(currentPoke);
    }, [currentPoke])

    return (
        <div>
            <h1>Poke Guesser</h1>
            <div>
                <label>Gen 1</label>
                <input type={'checkbox'} value={'true'} checked={config.gen1} data-gen={'gen1'}
                       onChange={(e) => setConfig({...config, gen1: !config.gen1})}/>
                <label>Gen 2</label>
                <input type={'checkbox'} value={'true'} checked={config.gen2}
                       onChange={(e) => setConfig({...config, gen2: !config.gen2})}/>
                <label>Gen 3</label>
                <input type={'checkbox'} value={'true'} checked={config.gen3}
                       onChange={(e) => setConfig({...config, gen3: !config.gen3})}/>
                <label>Gen 4</label>
                <input type={'checkbox'} value={'true'} checked={config.gen4}
                       onChange={(e) => setConfig({...config, gen4: !config.gen4})}/>
                <label>Gen 5</label>
                <input type={'checkbox'} value={'true'} checked={config.gen5}
                       onChange={(e) => setConfig({...config, gen5: !config.gen5})}/>
                <label>Gen 6</label>
                <input type={'checkbox'} value={'true'} checked={config.gen6}
                       onChange={(e) => setConfig({...config, gen6: !config.gen6})}/>
                <label>Gen 7</label>
                <input type={'checkbox'} value={'true'} checked={config.gen7}
                       onChange={(e) => setConfig({...config, gen7: !config.gen7})}/>
                <label>Gen 8</label>
                <input type={'checkbox'} value={'true'} checked={config.gen8}
                       onChange={(e) => setConfig({...config, gen8: !config.gen8})}/>
                <label>Gen 9</label>
                <input type={'checkbox'} value={'true'} checked={config.gen9}
                       onChange={(e) => setConfig({...config, gen9: !config.gen9})}/>
                <button onClick={() => handleApply()}>Apply</button>
            </div>
            { currentPoke && (<div>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${+currentPoke.id}.png`}
                    alt={'Pokemon'}/>

                {correctPoke && (<p>correct</p>)}
                {correctPoke !== null && !correctPoke && (<p>not correct</p>)}

                {!correctPoke && (<button
                    onClick={() => handleNextPoke()}>Skip</button>)}
                {correctPoke && (<button
                    onClick={() => handleNextPoke()}>Next</button>)}


            </div>)}
            <Select options={pokeSelect} onChange={(e) => handleChange(e)} value={selectedPoke}/>
        </div>
    )

}
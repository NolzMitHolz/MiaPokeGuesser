export default function GenInputs({ config, setConfig, handleApply }) {
    return (
        <div>
            <label>Gen 1</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen1}
                data-gen={'gen1'}
                onChange={() => setConfig({ ...config, gen1: !config.gen1 })}
            />
            <label>Gen 2</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen2}
                onChange={() => setConfig({ ...config, gen2: !config.gen2 })}
            />
            <label>Gen 3</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen3}
                onChange={() => setConfig({ ...config, gen3: !config.gen3 })}
            />
            <label>Gen 4</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen4}
                onChange={() => setConfig({ ...config, gen4: !config.gen4 })}
            />
            <label>Gen 5</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen5}
                onChange={() => setConfig({ ...config, gen5: !config.gen5 })}
            />
            <label>Gen 6</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen6}
                onChange={() => setConfig({ ...config, gen6: !config.gen6 })}
            />
            <label>Gen 7</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen7}
                onChange={() => setConfig({ ...config, gen7: !config.gen7 })}
            />
            <label>Gen 8</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen8}
                onChange={() => setConfig({ ...config, gen8: !config.gen8 })}
            />
            <label>Gen 9</label>
            <input
                type={'checkbox'}
                value={'true'}
                checked={config.gen9}
                onChange={() => setConfig({ ...config, gen9: !config.gen9 })}
            />
            <button onClick={() => handleApply()}>Apply</button>
        </div>
    );
}

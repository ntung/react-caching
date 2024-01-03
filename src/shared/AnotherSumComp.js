import React, {useState, useCallback} from 'react';

function ChildComponent({onClick}) {
    console.log('ChildComponent is rendered');
    return (
        <button onClick={onClick}>Click me</button>
    );
}

function AnotherSumComp() {
    const [count, setCount] = useState(0);
    const [txt, setTxt] = useState("Some text…");
    const incrementCount = useCallback(() => {
        console.log("Calling an expensive computing...");
        setCount(prevCount => prevCount + 1);
    }, [setCount]);
    return (
        <div>
            <p>Text: {txt}</p>
            <p>Count: {count}</p>
            <button onClick={() => {
                console.log("Setting a new text...");
                const text = Math.random().toString(36).slice(2, 7);
                setTxt(text);
            }}>Set Text</button>
            {/*<button onClick={() => { setCount(count + 1); }}>Increment</button>*/}
            <button onClick={() => { incrementCount(); }}>Increment</button>
            <ChildComponent onClick={incrementCount}/>
        </div>
    );
}

export default AnotherSumComp;

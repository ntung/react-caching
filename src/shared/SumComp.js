import React, {useState, useMemo} from 'react';

function SumComp() {
    console.log("Rendering SumComp component...");
    const COLOURS = ['aqua', 'blue', 'fuchsia', 'gray', 'green',
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
        'silver', 'teal', 'yellow'];
    const cId = randomColor(COLOURS.length);
    const [colorName, setColorName] = useState(COLOURS[cId]);
    const [txt, setTxt] = useState("Some text");
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const sum = useMemo(() => {
        console.log("Computing sum...");
        return a + b;
    }, [a, b]);


    // const sum = useMemo(() => {
    //     return expensiveComputing(a, b);
    // }, [a, b]);

    return (
        <div>
            <p>Text: <span style={{"color": colorName}}>{txt}</span></p>
            <p>a: {a}</p>
            <p>b: {b}</p>
            <p>sum: {sum}</p>
            <button onClick={() => {
                const text = Math.random().toString(36).slice(2, 7);
                setTxt(text);
                const colorIndex = randomColor(COLOURS.length);
                const colorName = COLOURS[colorIndex];
                setColorName(colorName);
            }}>Click here to change text and color</button>
            <button onClick={() => setA(a + 1)}>Increment a</button>
            <button onClick={() => setB(b + 1)}>Increment b</button>
        </div>
    );
}

function randomColor(max) {
    console.log("Calling random color index...")
    return Math.floor(Math.random()*max);
}
function expensiveComputing(x, y) {
    console.log("Calling expensive computing...");
    return x + y;
}

export default SumComp;
import * as React from "react";
import { useState } from "react";
import { Example } from "./Components/Example";
import { Refresh } from "./Components/Refresh";



export const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Refresh onClick={() => setCount(count + 1)} />
            <div className="example-container">
                <Example key={count} />
            </div>
        </>
    );
};

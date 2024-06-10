import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/secondscounter.jsx";

function App() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <SecondsCounter seconds={seconds} />;
}

ReactDOM.render(<App />, document.querySelector("#app"));

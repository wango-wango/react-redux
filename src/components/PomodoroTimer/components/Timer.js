import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";

function Timer(props) {
    const { theSelctedList } = props;
    const { todo, workingTime, breakTime } = theSelctedList;
    console.log(theSelctedList);
    const [workingCount, setWorkingCount] = useState(workingTime);
    const [breakCount, setBreakCount] = useState(breakTime);

    return (
        <>
            <div className="timerTitle">
                <h1>Timer</h1>
            </div>
            <div className="listTitle">
                <h2>{todo}</h2>
            </div>
            <div className="circularContainer">
                <CircularProgressbar
                    value={workingTime}
                    text={`${workingTime}`}
                    minValue={0}
                    maxValue={60}
                    styles={buildStyles({
                        // rounded : 'round', flat: 'butt'
                        strokeLinecap: "round",
                        // Text size
                        textSize: "1rem",
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 1,
                        // Colors
                        pathColor: `rgba(78, 130, 175, ${
                            (100 - workingTime + 20) / 100
                        })`,
                        textColor: "#eee",
                        trailColor: "#d6d6d6",
                    })}
                />
            </div>
        </>
    );
}

export default Timer;

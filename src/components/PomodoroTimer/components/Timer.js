import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Timer(props) {
    const { theSelctedList, isPause, setIsPause } = props;
    const { todo, workingTime, breakTime } = theSelctedList;

    // 工作或是休息模式
    const [mode, setMode] = useState("working");
    // 剩餘時間
    const [secondLeft, setSecondLeft] = useState(0);
    // 存取 interval ID
    const [timer, setTimer] = useState();

    const switchMode = () => {
        // 切換模式
        const nextMode = mode === "working" ? "break" : "working";
        // 切換秒數
        const nextSeconds = nextMode === "working" ? workingTime : breakTime;
        setMode(nextMode);
        setSecondLeft(nextSeconds);
    };

    // 每秒計時
    const tick = () => {
        setSecondLeft((secondLeft) => secondLeft - 1);
    };

    // 設定起始狀態
    const init = () => {
        setMode("working");
        setSecondLeft(workingTime);
    };

    const start = () => {
        const timerID = setInterval(() => {
            // 倒數計時
            tick();
        }, 1000);

        setTimer(timerID);
        return () => clearInterval(timerID);
    };

    const nextAction = () => {
        Swal.fire({
            icon: "success",
            title: "恭喜完成",
            text: "明天繼續努力唷",
            color: "#224040",
            background: "#FFF",
            showConfirmButton: false,
            showDenyButton: true,
            denyButtonColor: "#224040",
            denyButtonText: "OK!",
        });
    };

    // ----------工作流程---------- //

    // 1. 設定初始值
    useEffect(() => {
        init();
    }, [theSelctedList]);

    // 2. 如果 isPause = false 就開始倒數計時
    useEffect(() => {
        if (!isPause) start();
    }, [isPause]);

    // 3. 監測剩餘秒數以及暫停/播放
    useEffect(() => {
        if (isPause) clearInterval(timer);
        if (secondLeft === 0) {
            switchMode();
            if (mode === "break") {
                clearInterval(timer);
                setIsPause(!isPause);
            }
        }
    }, [secondLeft, timer]);

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
                    value={secondLeft}
                    text={`${secondLeft}`}
                    minValue={0}
                    maxValue={60}
                    styles={buildStyles({
                        // rounded : 'round', flat: 'butt'
                        strokeLinecap: "round",
                        // Text size
                        textSize: secondLeft <= 3 ? "2rem" : "1rem",
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 1,
                        // Colors
                        pathColor:
                            mode === "working"
                                ? `rgba(78, 130, 175, ${
                                      (100 - secondLeft + 20) / 100
                                  })`
                                : `rgba(40, 170, 100, ${
                                      (100 - secondLeft + 20) / 100
                                  })`,
                        textColor: secondLeft <= 3 ? "#f86666" : "#eee",
                        trailColor: "#d6d6d6",
                    })}
                />
            </div>
        </>
    );
}

export default Timer;

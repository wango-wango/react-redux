import React from "react";
import { useState } from "react";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";

function PlayBtn(props) {
    const { isPause, setIsPause } = props;
    return (
        <div className="btnContainer">
            <button
                className={isPause ? "playBtn fade" : "playBtn"}
                onClick={() => {
                    setIsPause(!isPause);
                }}
            >
                <BsPlayFill size={50} />
            </button>
            <button
                className={isPause ? "pauseBtn" : "pauseBtn fade"}
                onClick={() => {
                    setIsPause(!isPause);
                }}
            >
                <BsFillPauseFill size={50} />
            </button>
        </div>
    );
}

export default PlayBtn;

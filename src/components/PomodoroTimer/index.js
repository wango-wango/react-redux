import React from "react";
import Timer from "./components/Timer";
import "../style/pomodoro.scss";
import { useState, useEffect } from "react";
import SettingBtn from "./components/SettingBtn";
import Setting from "./components/Setting";
import PlayBtn from "./components/PlayBtn";
import { useSelector, useDispatch } from "react-redux";

function PomodoroTimer(props) {
    // useSelector 是一種hook 用來檢視目前 redux 中的存放的 reducer
    const { value, selectedId } = useSelector((state) => state.todoList);
    // useDispatch 用來 執行 action
    const dispatch = useDispatch();

    // 判斷現在是否為設定狀態
    const [isSetting, setIsSetting] = useState(true);

    // 判斷是否暫停
    const [isPause, setIsPause] = useState(false);
    // 設定被選擇的初始值
    const [theSelctedList, setTheSelectedList] = useState({});

    // 從 redux 中 選出使用者選擇的該筆資料
    const selection = () => {
        let selected = value.filter((v) => v.id === selectedId);
        setTheSelectedList(selected[0]);
    };

    // 只要 todoList 或是 selectedId 有改變
    // 就重新選擇該筆資料
    useEffect(() => {
        selection();
    }, [value, selectedId]);

    return (
        <>
            <div className="pomodoroContainer">
                <Timer theSelctedList={theSelctedList} />
                {isSetting ? (
                    <PlayBtn isPause={isPause} setIsPause={setIsPause} />
                ) : (
                    <Setting
                        theSelctedList={theSelctedList}
                        dispatch={dispatch}
                    />
                )}
                <SettingBtn isSetting={isSetting} setIsSetting={setIsSetting} />
            </div>
        </>
    );
}

export default PomodoroTimer;

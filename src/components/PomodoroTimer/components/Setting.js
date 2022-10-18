import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { updateTodoList } from "../../../reducers/todoSlice";

function Setting(props) {
    const { theSelctedList, dispatch } = props;
    const { workingTime, breakTime, id, todo } = theSelctedList;

    return (
        <div className="SettingContainer">
            <div className="workingTime">workingTime : {workingTime} Sec</div>
            <Slider
                className={"workingTimeSlider"}
                min={0}
                max={60}
                value={workingTime}
                railStyle={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#ccc",
                }}
                handleStyle={{
                    height: 20,
                    width: 20,
                    opacity: 1,
                    backgroundColor: "#d6d6d6",
                    border: 0,
                }}
                trackStyle={{
                    height: 10,
                    background: "#4eaf5ecd",
                    borderRadius: 5,
                }}
                onChange={(value) => {
                    console.log(value);
                    if (theSelctedList) {
                        dispatch(
                            updateTodoList({
                                id: id,
                                todo: todo,
                                workingTime: value,
                                breakTime: breakTime,
                            })
                        );
                    }
                }}
            />

            <div className="breakingTime">breakTime : {breakTime} Sec</div>
            <Slider
                className={"breakingTimeSlider"}
                min={0}
                max={60}
                value={breakTime}
                railStyle={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#ccc",
                }}
                handleStyle={{
                    height: 20,
                    width: 20,
                    opacity: 1,
                    backgroundColor: "#d6d6d6",
                    border: 0,
                }}
                trackStyle={{
                    height: 10,
                    background: "#f44a4acd",
                    borderRadius: 5,
                }}
                onChange={(e) => {
                    dispatch(
                        updateTodoList({
                            id: id,
                            todo: todo,
                            workingTime: workingTime,
                            breakTime: e.target.value,
                        })
                    );
                }}
            />
        </div>
    );
}

export default Setting;

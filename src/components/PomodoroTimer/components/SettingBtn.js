import React from "react";
import { AiOutlineSetting, AiOutlineDownSquare } from "react-icons/ai";

function SettingBtn(props) {
    const { isSetting, setIsSetting } = props;
    return (
        <div className="settings">
            {isSetting ? (
                <button
                    className="settingBtn"
                    onClick={() => {
                        setIsSetting(!isSetting);
                    }}
                >
                    <AiOutlineSetting size={25} />
                    setting
                </button>
            ) : (
                <button
                    className="submitBtn"
                    onClick={() => {
                        setIsSetting(!isSetting);
                    }}
                >
                    <AiOutlineDownSquare size={25} />
                    submit
                </button>
            )}
        </div>
    );
}

export default SettingBtn;

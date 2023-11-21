import React from "react";
import webImg from "../assets/web-dev.svg";

function image(props) {
    return (
        <div className=" flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
            <div className=" w-3/5">
                <img src={props.img} alt="img" />
                <img src="ui.jpg" alt="" />
            </div>

        </div>
    );
}

export default image;
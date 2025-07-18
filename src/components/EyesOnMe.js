import React from "react";

function EyesOnMe() {
    function onButtonFocus(){
        console.log('Good!');
    }
    function onButtonBlur() {
        console.log('Hey! Eyes on me!');
    }
    return (
        <button onFocus={onButtonFocus} onBlur={onButtonBlur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;

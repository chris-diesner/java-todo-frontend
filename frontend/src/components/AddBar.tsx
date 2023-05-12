import React, {ChangeEvent, useEffect, useState} from 'react';
import {
    postTodo
} from "./KanbanAPIFunctions";

function AddBar() {
    const [inputNewToDo, setInputNewToDo] = useState("")

    function newDescription(event:ChangeEvent<HTMLInputElement>) {
        setInputNewToDo(event.target.value)
    }





    return (
        <div>
            <input type={"description"} value={inputNewToDo} onInput={newDescription}/><button>Add</button>
        </div>
    );
}

export default AddBar;
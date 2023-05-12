import React from 'react';


type Props = {
    toDo: ToDo
}

type ToDo = {
    id: string
    description: string
    status: string
}

function advanceToDoing() {

}

function ToDoCard(props: Props) {
    return (
        <div className={"todo-wrapper"}>
            <h4>{props.toDo.description}</h4>
            <div className={"todo-functions"}>
                <p>Details</p><p>Edit</p><button>Advance</button>
            </div>
        </div>
    );
}

export default ToDoCard;
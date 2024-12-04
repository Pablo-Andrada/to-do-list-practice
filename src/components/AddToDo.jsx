import { useState } from "react"


const AddToDo = () => {
    const [todos, SetTodos] = useState("");

    const handleSubmit = (e) => {
        SetTodos(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" value={todos}           
                    placeholder="Ingrese aquí una tarea... " />
            <button>Añadir tarea</button>
            </form>
        </div>
    )
}

export default AddToDo;
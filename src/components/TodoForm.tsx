import { useState } from "react";
import Task from "../others/Task";

interface TodoFormProps {
    onAddTask: (task: Task) => void;
}


const TodoForm: React.FC<TodoFormProps> = ({onAddTask}) => {

    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const addTask = () => {
        console.log(`Added task: ${inputValue}`);
        onAddTask(new Task(inputValue));
        setInputValue("");
    }

    return (
        <>
            <input type="text" name="new-task" id="new-task" value={inputValue} onChange={handleInputChange} />
            <button className="btn btn-blue" onClick={addTask}>Add task</button>
        </>
    );
}

export default TodoForm;
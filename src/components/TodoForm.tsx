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
            <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="new-task" id="new-task" value={inputValue} onChange={handleInputChange} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addTask}>Add task</button>
        </>
    );
}

export default TodoForm;
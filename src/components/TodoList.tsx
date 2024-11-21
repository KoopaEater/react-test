import { useState } from "react";
import ListOfTasks from "./ListOfTasks";
import TodoForm from "./TodoForm";
import Task from "../others/Task";

const TodoList: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    }


    return (
        <>
            <h1 className="text-3xl font-bold underline">Todo list</h1>
            <TodoForm onAddTask={addTask} />
            <ListOfTasks tasks={tasks}/>
        </>
    );
}

export default TodoList;
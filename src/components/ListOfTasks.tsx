import Task from "../others/Task";


interface ListOfTasksProps {
    tasks: Task[];
}


const ListOfTasks: React.FC<ListOfTasksProps> = ({tasks}) => {

    const listTasks = tasks.map(task => 
        <li key={task.id}>
            {task.task}
        </li>
    );

    return (
        <ul>
            {listTasks}
        </ul>
    );
}

export default ListOfTasks;
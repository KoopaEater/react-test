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
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            {listTasks}
        </ul>
    );
}

export default ListOfTasks;
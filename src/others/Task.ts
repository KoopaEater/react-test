
let counter = 0;

const getNextId = () => {
    const id = counter;
    counter++;
    return id;
}

class Task {
    task: string;
    id: number;
    constructor(task: string) {
        this.task = task;
        this.id = getNextId();
    }
}

export default Task;
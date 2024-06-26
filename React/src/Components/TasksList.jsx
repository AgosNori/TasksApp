import { getAllTasks } from "../api/tasks_api";
import { useEffect, useState } from "react";
import TaskCard from "./TasksCard";


export function TasksList() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data)
        }
        loadTasks();
    }, [])
    return (
        <div>
            {tasks.map(task => (
               <TaskCard key={task.id} task={task}/>
            ))}
        </div>

    )
}
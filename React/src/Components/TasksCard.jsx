import { useNavigate } from 'react-router-dom';
import '../Styles/TasksCard.css';
function TaskCard({ task }) {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='cardTask'
                onClick={() => {
                    navigate(`/tasks/${task.id}`);
                }}
            >
                <h2>{task.title}</h2>
                <p>{task.description}</p>

            </div>
        </div>

    )
}
export default TaskCard
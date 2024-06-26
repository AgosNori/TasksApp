import { set, useForm } from 'react-hook-form';
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks_api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../Styles/TaskForm.css'

function TasksFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateTask(params.id, data)
        } else {
            await createTask(data);

        }

        navigate('/tasks');
    })
    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data } = await getTask(params.id);
                setValue('title', data.title);
                setValue('description', data.description)

            }
        }
        loadTask()
    })
    return (
        <div className="formContainer">
            <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Title" className="inputField" {...register('title', { required: true })} />
                {errors.title && <span className="errorText">This field is required</span>}
                <textarea rows="3" placeholder="Description" className="textArea" {...register('description', { required: true })}></textarea>
                {errors.description && <span className="errorText">This field is required</span>}
                <button className="saveButton">Save</button>
            </form>
            {
                params.id && (
                    <button className="deleteButton" onClick={async () => {
                        const accepted = window.confirm('Are you sure?');
                        if (accepted) {
                            await deleteTask(params.id);
                            navigate('/tasks');
                        }
                    }}>Delete</button>
                )
            }
        </div>
    )
}
export default TasksFormPage
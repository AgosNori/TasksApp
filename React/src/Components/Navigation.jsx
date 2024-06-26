import { Link } from "react-router-dom"
import '../Styles/Navigation.css';
function Navigation() {
    return (
        <div className="Navegacion">
            <h1 > <Link to="/" className="titulo">Tasks App</Link></h1>
            <div className="botonNew">
                <Link className="newTask" to='/tasks-create'> Create tasks</Link>
            </div>

        </div>

    )
}
export default Navigation
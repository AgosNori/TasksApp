import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TasksPage from './Pages/TasksPages';
import TasksFormPage from './Pages/TasksFormPage';
import Navigation from './Components/Navigation';

function App() {

  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to ='tasks/'/>}/>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TasksFormPage />} />
        <Route path="/tasks/:id" element={<TasksFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

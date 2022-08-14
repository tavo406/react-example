import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export default function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className='bg-gray-800 text-white'>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button className='bg-red-500 px-2 pt-1 rounded-sm mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  )
}
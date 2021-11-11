import React, { FC } from 'react'
import { ITask } from '../../types'
import cl from './taskList.module.scss'
import TaskItem from '../TaskItem/TaskItem';
import { Link } from 'react-router-dom';

interface ITaskListPropsTypes {
    tasks: ITask[]
}
const TaskList:FC<ITaskListPropsTypes> = ({tasks}) => {

    return (
        <div className={cl.taskList}>
            <div className={cl.taskList__header}>
                <div className={cl.taskList__date}><span>Номер / Дата</span></div>
                <div className={cl.taskList__author}><span>Тип задания / Автор</span></div>
                <div className={cl.taskList__account}><span>Аккаунт / Терминал</span></div>
                <div className={cl.taskList__status}><span>Статус</span></div>
            </div> 
            <ul className={cl.taskList__list}>                       
            {tasks.map(task => 
                <li 
                    key={task.id} 
                    className={cl.taskList__item}
                >
                    <Link to={`/task/${task.id}`}>
                        <TaskItem task={task} />
                    </Link>
                </li>
            )}
        </ul>
        </div>        
    )
}

export default TaskList
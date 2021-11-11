import React, { FC, useEffect, useRef } from 'react'
import { ITask } from '../../types'
import cl from './taskItem.module.scss'

interface ITaskItemProps {
    task: ITask
}
const TaskItem: FC<ITaskItemProps> = ({task}) => {
    const col = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (col.current !== null) {
            }
            
        })
    })

    return (
        <div className={cl.taskItem}>
            <span className={cl.taskItem__desc}>Номер / Дата</span>
            <div className={cl.taskItem__col}>
                <span>{'№'+task.id}</span>
                <span>
                    {
                        new Intl.DateTimeFormat('ru', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(task.created_date)
                    }
                </span>
            </div>
            <span className={cl.taskItem__desc}>Тип задания / Автор</span>
            <div className={cl.taskItem__col} ref={col}>
                <span>{task.order_type.name}</span>
                <span>
                    {
                        task.created_user.surname + ' ' +
                        task.created_user.name[0].toUpperCase() + '.' +
                        task.created_user.patronymic[0].toUpperCase() + '.'
                    }
                </span>
            </div>
            <span className={cl.taskItem__desc}>Аккаунт / Терминал</span>
            <div className={cl.taskItem__col}>
                <span className={cl.taskItem__topText}>{task.account.name}</span>
                <span className={cl.taskItem__bottomText}>{task.terminal.name}</span>
            </div>
            <span className={cl.taskItem__desc}>Статус</span>
            <div className={[cl.taskItem__statusCol, cl[`taskItem__statusCol_${task.status}`]].join(' ')}>
               <span>{task.status}</span>
            </div>
        </div>
    )
}

export default TaskItem
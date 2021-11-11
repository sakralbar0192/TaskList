import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../../context/index';

export default function TaskPage() {
    const params = useParams()
    const taskId = params.id
    const { data } = useContext(AppContext)
    const task = data.find(item => `${item.id}` === taskId)

    if (taskId !== undefined && task !== undefined) {
        return (
            <div>
                 {task.account.name}
            </div>
        )
    } else {
        return (
            <div>
                Здесь ничего нет
            </div>
        ) 
    }    
}

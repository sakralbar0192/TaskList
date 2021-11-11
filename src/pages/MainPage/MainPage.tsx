import React, { useContext, useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import TaskList from '../../components/TaskList/TaskList'
import { ITask } from '../../types'
import cl from './mainPage.module.scss'
import { AppContext } from '../../context/index';

export default function MainPage() {
    const [page, setPage] = useState<number>(1)
    const [pagePerView, setPagePerView] = useState<number>(10)
    const [displayedTasks, detDisplayedTasks] = useState<ITask[]>([])

    const {data} = useContext(AppContext)

    useEffect(() => {
        detDisplayedTasks(data.slice((page-1)*pagePerView, page*pagePerView))
    }, [page, pagePerView, data])

    return (
        <div className={cl.mainPage}>
            <h1>Список задач</h1>
            <div className={cl.mainPage__taskList}>
                <TaskList tasks={displayedTasks}/>
            </div>
            <div className={cl.mainPage__pagination}>
                <Pagination 
                    totalCount={data.length} 
                    currentPage={page}
                    itemPerView={pagePerView}
                    setCurrentPage={setPage}
                    setPagePerView={setPagePerView}
                />
            </div>            
            
        </div> 
    )  
}

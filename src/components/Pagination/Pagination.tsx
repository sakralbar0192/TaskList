
import { FC, useEffect } from 'react'
import { Pagination } from 'antd'
import 'antd/dist/antd.css';
import useWindowDimensions from '../../hooks/useWindowDimension';

interface IPagintionProps {
    totalCount: number
    currentPage: number
    itemPerView: number
    setCurrentPage: (page: number) => void
    setPagePerView:  (pagePerView: number) => void
}

const AppPagination: FC<IPagintionProps> = ({totalCount, currentPage, itemPerView, setCurrentPage, setPagePerView}) => {
    
    const {width} = useWindowDimensions()

    useEffect(() => {
        if (width > 450) {showTotal(totalCount)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    function showTotal(total:number) {
        if (window.innerWidth > 450) {
            return `Записи ${(currentPage-1)*itemPerView+1} - ${(currentPage-1)*itemPerView+itemPerView} items`;
        }else {
            return null
        }        
    }

    function onChange(page:any, pageSize:any) {
        setCurrentPage(page)
        setPagePerView(pageSize)
    }

    if (totalCount === 0) {
        return null
    } 
    
    return (
        <Pagination 
            total={totalCount} 
            showTotal={showTotal} 
            onChange={onChange}
            responsive={true}            
        />
    );
}

export default AppPagination;
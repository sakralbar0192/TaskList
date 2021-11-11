export type statusType = 'new' | 'completed' | 'assigned_to' | 'started' | 'declined'

export interface ITask {
    id: number
    status: string
    order_type: {
        name: string
    }
    terminal: {
        name: string
    }
    account: {
        name: string
    }
    created_user: {
        surname: string
        name: string
        patronymic: string

    }
    created_date: number     
}
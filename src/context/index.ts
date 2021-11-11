import { createContext } from "react";
import { ITask } from '../types'

interface IContext {
    data: ITask[]
}

const defaultState: IContext = {
    data: []
}

export const AppContext = createContext<IContext>(defaultState);
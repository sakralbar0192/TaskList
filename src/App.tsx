import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import TaskPage from './pages/TaskPage/TaskPage';
import cl from './app.module.scss';
import { AppContext } from './context/index';
import data from './data/data.json'

function App() {

  const contextValue = {
    data: data
  }
  return (
    <AppContext.Provider value = {contextValue}>
      <BrowserRouter>
        <div className={cl.app}>
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path='/task/:id' element={<TaskPage />} />        
          </Routes>  
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

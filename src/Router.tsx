import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import WritePage from './pages/Write/WritePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/write' element={<WritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;


import './App.css';

import Navbar from "./components/Navbar";
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';
import AddUsers from './components/AddUser';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import EditUsers from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={ <CodeforInterview />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

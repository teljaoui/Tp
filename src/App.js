import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './composant/AddUser';
import UpdateUser from './composant/UpdateUser';
import UserList from './composant/UserList';
function App() {
  return (
    <div style={{ paddingLeft: 40 }}>
      <h1>Liste de produits</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList /> } />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/update-user/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
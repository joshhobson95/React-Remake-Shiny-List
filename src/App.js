
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Auth from './components/Auth';
import AuthContext from './store/authContext';
import Form from './components/TestForm';






function App() {

const authCtx = useContext(AuthContext);



  return (
    <div className="App">
        <Header />
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>}/>
         <Route path='/form' element={authCtx.token ? <Form/> : <Navigate to='/auth'/>}/>
         
    
         
        </Routes>
      

    </div>
  )
}

export default App;

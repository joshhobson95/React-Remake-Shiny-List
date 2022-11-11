import './Header.css'
import { useContext } from 'react'
import {NavLink} from 'react-router-dom'


import AuthContext from '../store/authContext';

function Header () {
    const authCtx = useContext(AuthContext)


    return (
        <header>
 <h1>Shiny Pokemon Checklist</h1>
 <div className='home'>
    <NavLink to='/'>Home</NavLink>
 </div>
 <div className='login'>
 <NavLink to='/auth'>Login or Signup</NavLink>
 </div>
 <div>
 <NavLink to='form'>Add Post</NavLink>
 </div>
 <div>
 <button className='logout-btn' onClick={() => authCtx.logout()}>Logout</button>
 </div>
 
        </header>
    )
}
export default Header;
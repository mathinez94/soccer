import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import DrawerMenu from './DrawerMenu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page after logout
    window.location.reload(); // Reload the page to update the UI
  }

  const theme = useTheme();
  const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
    {

      isMediaMatch ?
      <div className='bg-gray-800 text-white py-2 px-4 mb-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10'>
        <DrawerMenu />
        <Link to='/' className='text-white text-5xl font-bold w-[20%] flex justify-center items-center hover:underline'>
           <img 
          src="../images/logoo.jpg" 
          alt="logo" 
          className='w-14 h-14 rounded-full'
          />
        </Link>
        {user ? (
          <div className='flex flex-col space-x-4 w-[30%] justify-center items-center'>
            <span className='text-lg text-blue-200 font-serif'>{user?.username}</span>
            <span className='text-sm font-semibold text-red-700 hover:underline cursor-pointer' onClick={handleLogout}>
               <LogoutIcon color='error'/> Logout
            </span>
          </div>
        ) : (
          <Link to='/login' className='text-lg mr-[5%] font-serif text-blue-500 hover:underline'>
            <LoginIcon color='primary'/> Login
          </Link>
        )}
      </div>

      :

       <div className='bg-gray-800 text-white py-2 px-4 mb-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10'>
        <Link to='/' className='text-white text-5xl font-bold w-[20%] flex justify-center items-center hover:underline'>
          <img 
          src="../images/logoo.jpg" 
          alt="logo" 
          className='w-32 h-32 rounded-full'
          />
        </Link>
        <ul className='flex space-x-4 w-[50%] justify-center items-center'>
          <li><Link to='/prediction' className='text-3xl font-bold hover:underline'>Prediction</Link></li>
          <li><Link to='/' className='text-3xl font-bold hover:underline'>News</Link></li>
          <li><Link to='/scores' className='text-3xl font-bold hover:underline'>Scores</Link></li>
        </ul>
        {user ? (
          <div className='flex space-x-4 w-[30%] justify-center items-center'>
            <span className='text-2xl text-blue-200 font-serif'>{user?.username}</span>
            <span className='text-lg font-semibold text-red-700 hover:underline cursor-pointer' onClick={handleLogout}>
               <LogoutIcon color='error'/> Logout
            </span>
          </div>
        ) : (
          <Link to='/login' className='text-lg text-blue-500 mr-[5%] font-serif hover:underline'>
            <LoginIcon color='primary'/> Login
          </Link>
        )}
      </div>
    }
    </>

  )
}

export default Navbar
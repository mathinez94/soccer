import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    // const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const response = await axios.post('https://soccer-math.netlify.app/login', formData);
            console.log('Login successful:', response.data);

            // Store the token in local storage
            if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            alert('login successfully');
            navigate('/prediction'); 
        }
            
        } catch (error) {
            // setError(error.response.data.message);
            console.error('Error during login:', error);
            
        }
    }

      const theme = useTheme();
      const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
     <>
     <div className="container mx-auto flex flex-col justify-center items-center h-screen">
        <h1 className={isMediaMatch ?"text-2xl font-bold mb-4 mt-20" : "text-4xl font-bold mb-4  mt-35"}>Welcome to the Login Page</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-lg">Please fill in the form below to login.</p>
            <form className="mt-4" onSubmit={handleSubmit}>
             {
                // Display error messages if any
                <p className="text-red-500 text-sm"></p>
            }
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <input type="text" id="username" name="username" onChange={handleChange} className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</button>
            </form>
                <p className="mt-4 text-sm">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link></p>
                <p className="mt-4 text-sm">Return to  <Link to="/" className="text-blue-600 hover:underline">prediction</Link></p>
        </div>
    </div>
    </>
  )
}

export default Login
 
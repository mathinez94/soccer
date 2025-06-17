import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useTheme, useMediaQuery } from '@mui/material';


const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirm_password: ''
    });
    const [error, setError] = useState(null);

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

        // Perform registration logic here
        try {
            const response = await axios.post('http://localhost:3000/auth/register', formData);
            console.log('Registration successful:', response);

            // Handle success (e.g., redirect to login page or show success message)
            if (response.status === 200) {
                alert('Registration successful! You can now log in.');
                // Redirect to login page or perform any other action
                navigate('/login');
            }

            // Handle error (e.g., show error message to user)
            if (response.status === 203) {
                setError('User already exists. Please choose a different username.');
            }
            if (response.status === 202) {
                setError('Passwords do not match. Please try again.');
            }
            if (response.status === 201) {
                setError('Please fill in all fields.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            // Handle error (e.g., show error message to user)
            // setError('An error occurred. Please try again later.');
        }
    }

    const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center h-screen">
                <h1 className={isMediaMatch ? "text-2xl font-bold mb-4 mt-20" : "text-4xl font-bold mb-4 mt-35"}>Welcome to the Register Page</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <p className="text-lg">Please fill in the form below to create an account.</p>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        {
                            // Display error messages if any
                            <p className="text-red-500 text-sm">{error}</p>
                        }
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                            <input type="text" id="username" name="username" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                            <input type="password" id="password" name="password" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm password:</label>
                            <input type="password" id="confirm_password" name="confirm_password" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Register</button>
                    </form>
                    <p className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link></p>
                </div>
            </div>
        </>
    )
}

export default Register
import React, { useState } from 'react'
import { ArrowBack } from '@mui/icons-material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useTheme, useMediaQuery } from "@mui/material";



const PredictionForm = () => {

    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        country: '',
        home: '',
        away: '',
        outcome: ''
    });


const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
}

const {id} = useParams();

const navigate = useNavigate();

// fetch user data to prefill the form

const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

        try {
            const response = await axios.post(`https://soccer-spot.onrender.com/auth/prediction_form/${id}`, formData);
            console.log(response); 

            if(response.status === 201){
            alert('Prediction submitted successfully');
            navigate('/prediction');
        }

        if(response.status === 210){
            setError(response.data.message);
        }
        if(response.status === 211){
            setError(response.data.message);
        }
        if(response.status === 212){
            setError(response.data.message);
        }
        if(response.status === 213){
            setError(response.data.message);
        }
        if(response.status === 500){
            setError(response.data.message);
        }
        if(response.status === 214){
            setError(response.data.message);
        }


        } catch (error) {
            console.error('Error fetching prediction data:', error);
        }
    }
    
    const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down("md"));  
    


  return (
    <div className={isMediaMatch ? "w-[95%] mx-auto flex flex-col justify-center items-center h-screen" : "container mx-auto flex flex-col justify-center items-center h-screen"}>
        <Link to="/prediction" className={ isMediaMatch ? "absolute top-4 left-4 mt-5" : "absolute top-4 left-4"}>
          <ArrowBack/>
        </Link>
      <h1 className={isMediaMatch ? "text-2xl font-bold mt-20" : "text-4xl font-bold mb-4"}>Make a Prediction</h1>
        <p className={isMediaMatch ? "text-sm mb-6" : "text-lg mb-6"}>Please fill in the form below to submit your prediction.</p>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <form className="mt-4" onSubmit={handleSubmit}>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" name="country" onChange={handleChange} className="mt-1 block px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="home">Home Team:</label>
                    <input type="text" id="home" name="home" onChange={handleChange} className="mt-1 block px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="away">Away Team:</label>
                    <input type="text" id="away" name="away" onChange={handleChange} className="mt-1 block px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="outcome">Predicted Outcome:</label>
                    <input type="text" id="outcome" name="outcome" onChange={handleChange} className="mt-1 block px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit Prediction</button>
            </form>
        </div>
        <p className="text-sm text-gray-500">Note: Ensure to be sincere about your predictions as other folks will be using it.</p>
    </div>
)
}

export default PredictionForm
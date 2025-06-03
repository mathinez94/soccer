import React, { useEffect, useContext } from 'react';   
import axios from 'axios';
import { useTheme, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';
import Tables from './Table';
import { AuthContext } from '../../components/AuthContext';
import PredCarousel from './PredCarousel';





const Prediction = () => {
  const { user, setUser } = useContext(AuthContext);
    const [prediction, setPrediction] = React.useState(null);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://soccer-math.netlify.app/auth/prediction', { 
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      console.log("User data fetched:", response.data);
      setUser(response.data.user);
      setPrediction(response.data.prediction[0]);

    } catch (error) {
      console.error("error fetching user", error);
    }
  }

  useEffect(() => {
    fetchUser();
  },[])

    const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down("md"));  

  

  return (
    <>
      
      <div  className={isMediaMatch ? 'bg-[f9f9f9] w-full mt-25 flex justify-center mx-auto' : 'bg-[f9f9f9] w-[80%] mt-40 flex flex-col justify-center mx-auto'}>
        <div className={isMediaMatch ? "w-full flex flex-col px-5"  : "flex flex-col gap-5 mt-20 mb-10"}>
          <span className={  isMediaMatch  ? "text-2xl font-bold ": "text-5xl font-semibold text-black"}>
            Lets Make Money!!!
          </span>
          <span  className={  isMediaMatch ? "text-sm text-[#7d7d7d] font-semibold" : "text-xl font-semibold text-black" }>
            Kindly follow the rules to ensure a smooth experience 
          </span>
        </div>

      </div>

      <div className={isMediaMatch ? 'w-[95%] mt-5 mx-auto' : 'w-[80%] mb-20 mx-auto'}>
        <PredCarousel />
      </div>

      <div className={isMediaMatch ? 'w-[95%] mt-20 bg-[#2F0A07] mb-20 mx-auto flex flex-col' : 'w-full h-screen mt-20 bg-[#2F0A07] mb-20 mx-auto flex flex-col'}>
        <span
            className={
              isMediaMatch
                ? "text-2xl font-bold text-white mt-5 px-5"
                : "text-5xl font-semibold text-white mt-20 py-2 px-20"
            }
          >
            Today's Predictions
          </span>
        <div className={isMediaMatch ? 'w-[90%] mb-20 mx-auto h-auto' :'w-[90%] h-[500px] mt-10 mb-20 mx-auto'}>
          <p className={isMediaMatch ? 'text-white text-sm font-serif mb-5' : 'text-white text-lg font-serif mb-5'}>Here are the predictions made by users today</p>
          <Tables prediction={prediction}/>
          <div className='flex justify-end mt-5'>
            {
              user ? 
            <Link to={`/prediction_form/${user?.id}`}>
              <button className='bg-[#f1f1f1] text-black px-4 py-2 rounded-lg hover:bg-[#e0e0e0] cursor-pointer'>Make a Prediction</button>
            </Link>
            :
            <div className='flex flex-col items-center justify-center gap-2'>
              <button className='bg-[#f1f1f1] text-black px-4 py-2 rounded-lg hover:cursor-not-allowed'>Make a Prediction</button>
              <p className='text-red-500 text-sm italic font-serif mx-20'>You need to login to make a prediction</p>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Prediction
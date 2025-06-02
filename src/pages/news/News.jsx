import React,{useEffect} from 'react'
import axios from 'axios'
import { useTheme, useMediaQuery, Divider, Paper, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'



const News = () => {
 

  const options = {
  method: 'GET',
  url: `https://google-news13.p.rapidapi.com/sport`,
  params: {lr: 'en-US'},
  headers: {
    'x-rapidapi-key': '90f1f5611cmsh71a35539b7795f8p1e0ac0jsn17117842c2cb',
    'x-rapidapi-host': 'google-news13.p.rapidapi.com'
  }
};



const dataFetcher = () => {
  return  axios.request(options);
}

useEffect(() => {
   dataFetcher(options)
},[])


  const {data} = useQuery({
    queryKey: ['news'],
    queryFn: dataFetcher
  })
//  console.log(data)

const theme = useTheme();
const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
     <div className={isMediaMatch ?
     'bg-[f9f9f9] w-full mt-[20%] flex flex-col items-center justify-center mx-auto' :
     'bg-[f9f9f9] w-[80%] mt-[12%] flex flex-col items-center justify-center mx-auto'}>
      <Paper elevation={2} className={isMediaMatch ? 'w-full px-2 py-14 flex items-center justify-center' : 'w-full px-2 py-14 flex items-center justify-center'}>
        <span className={isMediaMatch  ? 
          "text-3xl font-semibold text-blue-500 " : 
          "text-8xl font-semibold font-serif text-blue-500 "}>Sports news</span>
      </Paper>
      <div className='mt-5 px-4'>
        {
          data?.data.items.map(newsData => {
            return<Link to={newsData.newsUrl} target='blank'>
              <div className='mt-1' key={newsData.id}>
               <Paper elevation={1} className='px-2 py-2'>
                {/* <div>
                  <img src={newsData.images.thumbnail} alt="News/Image" />
                </div> */}
                <div className='px-2 '>                
                    <Typography 
                    variant={isMediaMatch ? 'h6' : 'h4'} 
                    className='flex items-center justify-center'
                    fontFamily={'serif'} 
                    color='primary'>{newsData.title}
                    </Typography>
                    <Divider />
                    <Typography 
                    variant={isMediaMatch ? 'title1' : 'h6'} 
                    className='flex items-center justify-center'
                    >{newsData.snippet}
                    </Typography><br />

                    <Typography 
                    variant={isMediaMatch ? 'title2' : 'h6'} 
                    color='primary'
                    className='flex items-center justify-center'
                    >Source: {newsData.publisher}
                    </Typography>
                </div>
               </Paper>
               </div>
            </Link>
          })
        }
      </div>
    </div>
    </>
  )
}

export default News 
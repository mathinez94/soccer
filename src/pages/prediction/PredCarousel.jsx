    import Carousel from 'react-multi-carousel';
    import { useTheme, useMediaQuery } from "@mui/material";
    import { Link } from 'react-router-dom';
    
    
    function PredCarousel() {
     const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },

    };
    const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down("md")); 
      return (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={ isMediaMatch ? true : false}
          responsive={responsive}
        >
                    <div className='w-[381px] h-[398px] bg-[#2F0A07] flex items-center justify-center'>
                      <div className='flex flex-col justify-center items-center gap-2 w-[300px]'>
                        <h2 className='text-2xl font-semibold text-white font-serif'>RULE #1</h2>
                        <p className={isMediaMatch ? 'text-sm text-white font-normal' : 'text-lg text-white font-normal'}>Create an account and login to participate in our daily predictions</p>
                      </div>
                    </div>
          
                    <div className='w-[381px] h-[398px] bg-[#f1f1f1] flex items-center justify-center'>
                      <div className='flex flex-col justify-center items-center gap-2 w-[300px]'>
                        <h2 className='text-2xl font-semibold font-serif '>RULE #2</h2>
                        <p className={isMediaMatch ? 'text-sm text-black font-normal' : 'text-lg text-black font-normal'}>Each user can only make a maximum of two predictions per day and is allow to predict similar event if outcome are different</p>
                      </div>
                    </div> 
                    
                    <div className='w-[381px] h-[398px] bg-[#2F0A07] flex items-center justify-center'>
                      <div className='flex flex-col justify-center items-center gap-2 w-[300px]'>
                        <h2 className='text-2xl text-white font-semibold font-serif'>RULE #3</h2>
                        <p className={isMediaMatch ? 'text-sm text-white font-normal' : 'text-lg text-white font-normal'}>Ensure to be sincere about your predictions as other folks will be using it.</p>
                      </div>
                    </div>
        </Carousel>
      );
    }
    export default PredCarousel;
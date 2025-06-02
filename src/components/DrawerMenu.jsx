import React,{useState} from 'react'
import { Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';





const DrawerMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const HideDrawer = () => {
        setOpenDrawer(false)
    }

    
  return (
    <div>
        <Drawer
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        sx={{ width: 240, bgcolor: '#fff', color: '#000' }}
        anchor={'top'}
        aria-hidden={false}
        >
            <div className="py-3 font-semibold">
                <nav className='flex flex-col gap-7 items-start justify-center px-6 py-3'>            
                    <div className='flex items-center justify-center gap-3'><NewspaperOutlinedIcon /><NavLink to='/' className='navlink' onClick={HideDrawer}>News</NavLink> </div>
                    <div className='flex items-center justify-center gap-3'><BatchPredictionOutlinedIcon/><NavLink to='/prediction' className='navlink' onClick={HideDrawer}> Prediction</NavLink></div>
                    <div className='flex items-center justify-center gap-3'><ScoreboardOutlinedIcon/><NavLink to='/scores' className='navlink' onClick={HideDrawer}>Scores</NavLink></div>
                </nav>
            </div>

        </Drawer>
            <div onClick={() => setOpenDrawer(true)} className=''>
                <MenuIcon fontSize='large' className='text-[#e93323]'/>
            </div>
    </div>
  )
}

export default DrawerMenu
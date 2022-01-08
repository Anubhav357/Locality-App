import { Typography ,Button,Box} from '@mui/material';
import React from 'react'
import Link from '@mui/material/Link';
import ResponsiveAppBar from '../component/ResponsiveAppBar';

const HomeScreen=()=>{
    return(
        <React.Fragment>
            <ResponsiveAppBar/>
            <Box mt={2} sx={{textAlign:'center'}}>
                <Typography component="h1" variant='h3' sx={{mb:"20vh"}}>Let us connect this world</Typography>
            </Box>
            <Box sx={{textAlign:'center'}}>
                <Typography component="h6" variant="h6">Want to know about your neighbour</Typography>
                <Box mt={2} sx={{textAlign:'center'}}>
                    <Button variant="contained"><Link href='/findneighbors' underline='none' sx={{color:'white'}}>Want to Know?</Link></Button>
                </Box>
                <Typography component="p" sx={{mt:2}}>With a click on this button you can search about your neighbors,can find all the  different type of shops,all the school,tutions,all the  different types of workers(like property dealers,construction workers,painter,lawyer) in your neighborhood by just mentioning your area name </Typography>
            </Box>
            <Box sx={{mt:"20vh",textAlign:'center'}}>
                <Typography component="h6" variant="h6">Want to promote on your work in your neighbour</Typography>
                <Box mt={2} sx={{textAlign:'center'}}>
                    <Button variant="contained"><Link href='/promoteneighbors' underline='none' sx={{color:'white'}}>Want to Promote?</Link></Button>
                </Box>
                <Typography component="p" sx={{mt:2}}>With a click on this button you will be prompt to a page where you can enter all your information.So that other in your neighbor can find you</Typography>
            </Box>
        </React.Fragment>
    )
}

export default HomeScreen;
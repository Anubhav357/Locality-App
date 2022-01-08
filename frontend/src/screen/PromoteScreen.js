import React from 'react'
import ResponsiveAppBar from '../component/ResponsiveAppBar';
import {Box,TextField, Typography,Button} from '@mui/material';

const PromoteScreen=()=>{
    return (
        <React.Fragment>
            <ResponsiveAppBar/>
            <Box sx={{ml:3,mt:3,textAlign:'center'}}>
                <Box>
                    <Typography variant='h6' component='h6'>Please enter your details (* represent required field)</Typography>
                </Box>
                <Box sx={{mt:4}}>
                    <Typography variant='h6' component='h6'>Basic info</Typography>
                </Box>
                <Box>
                    <TextField label="Name" variant="outlined" sx={{width:"30vw"}} helperText="Enter your Name" />
                </Box>
                <Box mt={4}>
                    <TextField label="Organization Name" variant="outlined" sx={{width:"30vw"}} helperText="Enter your organization name"/>
                </Box>
                <Box mt={4}>
                    <Typography variant='h6' component='h6'>Contact info</Typography>
                </Box>
                <Box>
                    <TextField label="Email" variant="outlined" sx={{width:"30vw"}}  helperText="Enter your Email"  required/>
                </Box>
                <Box mt={4}>
                    <TextField label="Contact number" variant="outlined" sx={{width:"30vw"}} helperText="Enter your Contact number" />
                </Box>
                <Box mt={4} >
                    <TextField label="Address" variant="outlined" sx={{width:"30vw"}}  helperText="Enter your address" multiline />
                </Box>
                <Box mt={4}>
                    <Typography variant='h6' component='h6'>Professional info</Typography>
                </Box>
                <Box>
                    <TextField label="Type of work" variant="outlined" sx={{width:"30vw"}}  helperText="Please enter the type of work which you do" required/>
                </Box>
                <Box mt={4}>
                    <TextField label="Description" variant="outlined" sx={{width:"30vw"}}  helperText="Please describe your work in more details" multiline />
                </Box>
                <Box mt={4} mb={4}>
                    <Button variant="contained">Submit</Button>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default PromoteScreen;
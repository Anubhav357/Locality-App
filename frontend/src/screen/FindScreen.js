import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography ,Button} from '@mui/material';
import ResponsiveAppBar from '../component/ResponsiveAppBar';
import DisplayResult from '../component/DisplayResult';

const FindScreen=()=>{
    const [area, setarea] = useState('Delhi')
    const [category, setcategory] = useState('')
    const tmpResult=[{type:'Shop',description:'Shop Owner at shiv vihar'},{type:'Property Dealer',description:'Property Dealer at Shiv Vihar'}];
    const [searchResult, setsearchResult] = useState(tmpResult);
    return (
        <React.Fragment>
            <ResponsiveAppBar/>
            <Box sx={{mt:4,ml:5}}>
                <Typography component="h4" variant="h6">Please enter following information to search</Typography>
                <Box sx={{mt:1, display: 'flex' ,justifyContent: 'space-between',alignItems:'center',alignContent: 'center' }}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Area Name"
                    value={area}
                    sx={{ flexGrow: 0.8 ,mr:2}}
                    onChange={(e)=>{
                        setarea(e.target.value)
                    }}
                    />
                    <TextField
                    id="outlined-disabled"
                    label="Category (eg:Shops,Schools)"
                    value={category}
                    sx={{ flexGrow: 0.8,mr:2 }}
                    onChange={(e)=>{
                        setcategory(e.target.value)
                    }}
                    />
                    <Button variant="contained" sx={{ flexGrow: 0.2 }}>Find</Button>
                </Box>
                <Box sx={{mt:5}}>
                    <Typography variant='h6' component="p">Search Result</Typography>
                    {
                        searchResult.map((result,index)=>{
                            return (<DisplayResult key={index+1} result={result}/>);
                        })
                    }
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default FindScreen;
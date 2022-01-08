import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

export default function ActionAreaCard(prop) {
  const result=prop.result;
  return (
    <Card sx={{mt:0.5}} >
      <CardActionArea sx={{m:0,p:0}}>
      <CardHeader sx={{m:0.5,p:0.5}}
        avatar={
          <Avatar aria-label="recipe">
            {result.type[0]}
          </Avatar>
        }
        title={result.type}
      />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {result.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

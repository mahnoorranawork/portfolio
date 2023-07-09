import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
export default function ExperienceCard(props) {
  const {name,certificatename, role, year, location, link} = props.experience
  return (
    <Card sx={{height: '100%'}}>
      <CardContent>
      {name ?
        <Typography variant="h6" component="div" gutterBottom lineHeight={1.3} height={60}>
          {name}
        </Typography>
        :""}
        {certificatename ?
        <Typography variant="h6" component="div" gutterBottom lineHeight={1.3} height={30}>
          {certificatename}
        </Typography>
        :""}
        {role? 
        <Typography variant="h5" sx={{ fontSize: 14 }} color="text.secondary" component="div" gutterBottom>
          {role}
        </Typography>
        :""}
        <Typography fontWeight={500} sx={{ mb: 1.5, fontSize: 14}} color="text.secondary">
          {year.from || ""} {year.to? "-":""} {year?year.to:""}
        </Typography>
        {location ?
        <Typography variant="body2">
          {location}
        </Typography>
         :""}
         {link ?
        <Typography variant="body2">
         
          <Link href={link} underline="none" target='blank'>Certificate Link</Link>
        </Typography>
        :""}
      </CardContent>
    </Card>
  );
}

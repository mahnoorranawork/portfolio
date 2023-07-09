import React from 'react'
import Grid from '@mui/material/Grid';
import ExperienceCard from '@components/ExperienceCard'
import ExploreIcon from '@mui/icons-material/Explore';
import Header from '@components/Header'

export default function Expereinces() {
  const componentCount = [
    {
      name: "Apurba Technologies Inc (Remote)",
      role: "Senior Frontend Developer",
      year: { from: 2022, to: 'Present' },
      location: "Canada"
    },
    {
      name: "i-ways sales solutios GmbH (Remote)",
      role: "Senior Frontend Developer",
      year: { from: 2020, to: 2022 },
      location: "Berlin, Germany"
    },
    {
      name: "Azure Innovations Pvt. Ltd",
      role: "Frontend Developer",
      year: { from: 2019, to: 2020 },
      location: "Lahore, Pakistan"
    },
  ]
    ;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Header title={'Experience'} icon={ExploreIcon} />
      </Grid>
      {componentCount.map((ex, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <ExperienceCard experience={ex} />
        </Grid>
      ))}
    </Grid>
  )
}
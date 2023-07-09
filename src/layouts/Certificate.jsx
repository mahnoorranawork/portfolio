import React from 'react'
import Grid from '@mui/material/Grid';
import ExperienceCard from '@components/ExperienceCard'
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Header from '@components/Header'

export default function Expereinces() {
  const componentCount = [
    {
      certificatename: "Google Project Management",
      role: "Issue by: Coursera",
      year: { from: 2023, to: '' },
      link:"https://coursera.org/share/77ec3934b99ab118203946cdc8e7ad6a"
    },
    {
      certificatename: "Project Management",
      role: "Issue by: Project Management Institute",
      year: { from: 2023, to: '' },
      link:"https://www.credly.com/badges/6b05ac25-8f29-43a6-94da-d678115efdf3/linked_in_profile"
    }
  ]
    ;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Header title={'Certificate'} icon={CardMembershipIcon} />
      </Grid>
      {componentCount.map((ex, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <ExperienceCard experience={ex} />
        </Grid>
      ))}
    </Grid>
  )
}
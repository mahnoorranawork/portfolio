import React from 'react';
import Skill from '@components/SkillProgress';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import HardwareIcon from '@mui/icons-material/Hardware';
import Header from '@components/Header'
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Skills = () => {
  const theme = useTheme();
  const spacerValue = theme.spacing(3);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} >
        <Header title={'Skills'} icon={HardwareIcon} />
      </Grid>
      <Grid item xs={12} md={4} >
        <Paper elevation={2} style={{marginLeft:"-10px"}} sx={{ p: spacerValue }}>
          <Skill label="HTML"  icon="html5/html5-original.svg" />
          <Skill label="CSS"  icon="css3/css3-original.svg" />
          <Skill label="Bootstrap"  icon="bootstrap/bootstrap-plain.svg" />
          <Skill label="Tailwind"  icon="/tailwindcss/tailwindcss-plain.svg" />
          <Skill label="JavaScript/ES6"  icon="javascript/javascript-original.svg" />
        </Paper>

      </Grid>
      <Grid item xs={12} md={4}  >
        <Paper elevation={2} style={{marginLeft:"-10px"}} sx={{ p: spacerValue }}>
          <Skill label="React"  icon="react/react-original.svg" />
          <Skill label="Redux"  icon="redux/redux-original.svg" />
          <Skill label="Webpack"  icon="webpack/webpack-original.svg" />
          <Skill label="Material-UI"  icon="materialui/materialui-plain.svg" />
          <Skill label="GitHub"  icon="github/github-original.svg" />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} >
        <Paper elevation={2}style={{marginLeft:"-10px"}} sx={{ p: spacerValue }}>
          <Skill label="Team Management "  icon="safari/safari-line.svg" />
          <Skill label="Time Management "  icon="safari/safari-line.svg" />
          <Skill label="Agile Methodology "  icon="jira/jira-original.svg" />
          <Skill label="Communication"  icon="debian/debian-plain.svg" />
          <Skill label="Storybook"  icon="storybook/storybook-original.svg" />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Skills;

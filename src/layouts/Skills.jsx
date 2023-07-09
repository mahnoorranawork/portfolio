import React from 'react';
import Skill from '@components/SkillProgress';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import HardwareIcon from '@mui/icons-material/Hardware';
import Header from '@components/Header'
import { useTheme } from '@mui/material/styles';

const Skills = () => {
  const theme = useTheme();
  const spacerValue = theme.spacing(3);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} >
        <Header title={'Skills'} icon={HardwareIcon} />
      </Grid>
      <Grid item xs={12} sm={6} >
        <Paper elevation={2} sx={{ p: spacerValue }}>
          <Skill label="HTML" value={80} icon="html5/html5-original.svg" />
          <Skill label="CSS" value={80} icon="css3/css3-original.svg" />
          <Skill label="JavaScript/ES6" value={75} icon="javascript/javascript-original.svg" />
        </Paper>

      </Grid>
      <Grid item xs={12} sm={6} >
        <Paper elevation={2} sx={{ p: spacerValue }}>
          <Skill label="React" value={90} icon="react/react-original.svg" />
          <Skill label="Webpack" value={80} icon="webpack/webpack-original.svg" />
          <Skill label="Material-UI" value={75} icon="materialui/materialui-plain.svg" />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Skills;

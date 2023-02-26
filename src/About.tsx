import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to our site!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our site is designed to provide you with up-to-date information on the
        schedule for your college courses. We use the latest technology to ensure
        that our site is fast and efficient, and we gather all of our data from
        the official college website.
      </Typography>
      <Typography variant="body1" gutterBottom>
        In addition to the schedule, our site also includes ratings for college
        instructors and statistics about the lessons in the schedule. We also
        provide stats about the college itself, including data about its work
        schedule and other relevant information.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Fast and Efficient</Typography>
          <Typography variant="body2">
            Our site uses the latest technology to ensure that it loads quickly
            and efficiently. We know that your time is valuable, so we've made
            sure that our site is as fast as possible.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Accurate Data</Typography>
          <Typography variant="body2">
            We gather all of our data from the official college website, so you
            can be sure that the information we provide is up-to-date and
            accurate. We know that having accurate information is crucial, so
            we've made it our top priority.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Ratings and Statistics</Typography>
          <Typography variant="body2">
            In addition to the schedule, we also provide ratings for college
            instructors and statistics about the lessons in the schedule. We
            believe that this information is important for students to have, and
            we've made it easy for you to access.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">College Stats</Typography>
          <Typography variant="body2">
            We also provide information about the college itself, including data
            about its work schedule and other relevant information. We believe
            that this information is important for students to have, and we've
            made it easy for you to access.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Container id="about">
      <Stack
        direction={{ sm: "row-reverse", md: "row" }}
        spacing={{ md: 13 }}
        my={{ xs: 5, md: 28 }}>
        <Box
          component="img"
          src="/images/about-sushi.png"
          width={481}
          height={426}
          maxWidth={{ xs: "350px", lg: "481px" }}
          maxHeight={{ xs: "310px", lg: "426px" }}
        />
        <Stack>
          <Typography variant="textYellow">About Us</Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 2, md: 5 }}
            mt={5}>
            <Typography variant="titleH2">Sushi Food</Typography>
            <Box
              component="img"
              src="/images/about-sushi-title.png"
              alt="Rolls"
              width="80px"
              height="80px"
            />
          </Stack>
          <Typography variant="titleH2">Healthy Food</Typography>
          <Box mt={3}>
            <Typography variant="textContent">
              Food comes to us from our relatives whether they have wings or
              roots . This is how we consider food. It also has a culture. It
              has a history that passes from generation to generation.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutUs;

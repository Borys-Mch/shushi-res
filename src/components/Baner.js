import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Baner = () => {
  return (
    <Container>
      <Stack
        my={{ xs: 5, md: 18 }}
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="space-between"
        alignItems="center">
        <Stack justifyContent="center">
          <Typography
            fontFamily="Koh Santepheap"
            fontSize={{ xs: 45, md: 60 }}
            fontWeight={500}>
            Enjoy Delicious
          </Typography>
          <Stack direction="row" spacing={2} mt={5}>
            <Box
              component="img"
              src="/images/home-sushi-title.png"
              alt="Rolls"
              width="70px"
              height="70px"
            />
            <Typography
              fontFamily="Koh Santepheap"
              fontSize={{ xs: 40, md: 50 }}
              fontWeight={300}>
              Sushi Food
            </Typography>
          </Stack>
          <Typography
            fontFamily="Poppins"
            fontSize={25}
            fontWeight={500}
            my={5}
            maxWidth="458px">
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="warning"
              size="large"
              sx={{ p: "10px" }}>
              Order Now &rarr;
            </Button>
          </Box>
        </Stack>
        <Box
          component="img"
          src="/images/baner-sushi-rolls.png"
          alt="Rolls"
          width="653px"
          height="449px"
          maxHeight={{ xs: "241px", lg: "449px" }}
          maxWidth={{ xs: "350px", lg: "653px" }}
        />
      </Stack>
    </Container>
  );
};

export default Baner;

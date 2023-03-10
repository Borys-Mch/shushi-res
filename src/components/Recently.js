import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const Recently = () => {
  return (
    <Container id="recently">
      <Stack
        direction={{ sm: "row-reverse", md: "row" }}
        spacing={{ md: 13 }}
        my={{ xs: 5, md: 28 }}>
        <Stack>
          <Typography variant="textYellow">Recently Added</Typography>
          <Stack direction="row" alignItems="center" spacing={2} mt={5}>
            <Typography variant="titleH2">Sushi Samurai</Typography>
            <Box
              component="img"
              src="/images/spinach-leaf.png"
              alt="Rolls"
              width="77px"
              height="112px"
            />
          </Stack>
          <Typography mt="-20px" variant="titleH2">
            Salmon Cheese
          </Typography>
          <Box mt={3}>
            <Typography variant="textContent">
              Take a look at what’s new . And do not depreve yourself of a good
              meal, enjoy and be happy.
            </Typography>
          </Box>
          <Box mt={5}>
            <Button
              variant="contained"
              color="warning"
              size="large"
              sx={{ py: "17px", px: "20px", borderRadius: "32px" }}>
              Order Now <ArrowForwardIcon sx={{ ml: "10px" }} />
            </Button>
          </Box>
        </Stack>
        <Box
          component="img"
          src="/images/recently-salmon-sushi.png"
          width={634}
          height={466}
          maxWidth={{ xs: "350px", lg: "634px" }}
          maxHeight={{ xs: "257px", lg: "466px" }}
        />
      </Stack>
    </Container>
  );
};

export default Recently;

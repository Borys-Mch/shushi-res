import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CssTextField = styled(TextField)({
  fieldset: {
    borderRadius: "36px",
    borderStyle: "none",
  },
});

const Newsletter = () => {
  return (
    <Container>
      <Box
        p={1}
        borderRadius={{ xs: "50px", md: "100px" }}
        sx={{
          width: "100%",
          background: "#2F221C",
        }}>
        <Stack py={7} direction="row" alignItems="center">
          <Grid container spacing={2} alignItems="center">
            <Grid item sm={6}>
              <Stack alignItems="center">
                <Box
                  component="img"
                  src="/images/newsletter-sushi.png"
                  width={468}
                  height={389}
                  maxWidth={{ xs: "350px", lg: "468px" }}
                  maxHeight={{ xs: "257px", lg: "389px" }}
                />
              </Stack>
            </Grid>
            <Grid item sm={6}>
              <Stack>
                <Typography variant="textYellow">Newsletter</Typography>
                <Typography
                  my={5}
                  fontFamily="Koh Santepheap"
                  fontSize={{ xs: "40px", md: "50px" }}
                  fontWeight={700}
                  color="white"
                  maxWidth={394}>
                  Subscribe for latest update
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  p={1}
                  sx={{
                    background: "white",
                    borderRadius: "70px",
                    maxWidth: "max-content",
                  }}>
                  <CssTextField id="filled-basic" label="Enter Email" />
                  <Button
                    variant="contained"
                    color="warning"
                    size="large"
                    sx={{ py: "17px", px: "20px", borderRadius: "32px" }}>
                    Subscribe <SendIcon sx={{ ml: "10px" }} />
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
};

export default Newsletter;

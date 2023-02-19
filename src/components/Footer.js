import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

import Logo from "../../public/images/logo.svg";
import Leaf3 from "../../public/images/leaf3.png";
import { socialIcons, bankImg, mainMenu, info } from "@/constants";

const Footer = () => {
  return (
    <Container>
      <Stack mt={10}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item md={4} mt={3}>
            <Stack direction="row" spacing={2}>
              <Image src={Logo} alt="Logo" width={42} height={39} />
              <Typography
                fontSize={25}
                fontFamily="Poppins"
                fontWeight={600}
                color="#2A2521">
                Shushi
              </Typography>
            </Stack>
            <Typography
              mt={4}
              fontSize={25}
              fontFamily="Poppins"
              fontWeight={300}
              color="#2A2521"
              maxWidth="375px">
              Food for the body is not enough. There must be foods for the soul.
            </Typography>
            <Box ml={15}>
              <Image src={Leaf3} alt="Leaf" />
            </Box>
          </Grid>
          <Grid item md={2} mt={3}>
            <Typography
              fontSize={25}
              fontFamily="Poppins"
              fontWeight={600}
              color="#2A2521">
              Main Menu
            </Typography>
            {mainMenu.map((menu, index) => (
              <Typography
                key={index}
                mt={3}
                fontSize={25}
                fontFamily="Poppins"
                fontWeight={300}
                color="#2A2521"
                sx={{ cursor: "pointer" }}>
                {menu}
              </Typography>
            ))}
          </Grid>
          <Grid item md={3} mt={3}>
            <Typography
              fontSize={25}
              fontFamily="Poppins"
              fontWeight={600}
              color="#2A2521">
              Information
            </Typography>
            {info.map((info, index) => (
              <Typography
                key={index}
                mt={3}
                fontSize={25}
                fontFamily="Poppins"
                fontWeight={300}
                color="#2A2521"
                sx={{ cursor: "pointer" }}>
                {info}
              </Typography>
            ))}
          </Grid>
          <Grid item md={2} mt={3}>
            <Typography
              fontSize={25}
              fontFamily="Poppins"
              fontWeight={600}
              color="#2A2521">
              Address
            </Typography>
            <Typography
              mt={3}
              fontSize={25}
              fontFamily="Poppins"
              fontWeight={300}
              color="#2A2521">
              Greater Noida <br /> Sec-1, India
            </Typography>
          </Grid>
        </Grid>
        <Stack direction={{ md: "row" }} justifyContent="space-between" mb={10}>
          <Stack direction={{ md: "row" }} mt={5}>
            <Typography
              fontSize={18}
              fontFamily="Poppins"
              fontWeight={500}
              mr={5}>
              Connect with us
            </Typography>
            <Box mt={{ xs: 3, md: 0 }}>
              {socialIcons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener"
                  m={1}
                  color="#FF8F1E">
                  <icon.icon />
                </Link>
              ))}
            </Box>
          </Stack>
          <Box mt={5}>
            <Grid container spacing={1}>
              {bankImg.map((img, index) => (
                <Grid item xs={4} md={2} key={index}>
                  <Image src={img} alt={img} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;

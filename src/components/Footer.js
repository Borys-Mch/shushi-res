import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

import { socialIcons, bankImg, mainMenu, info } from "@/constants";

const Footer = () => {
  return (
    <Container>
      <Stack mt={10}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item md={4} mt={3}>
            <Stack direction="row" spacing={2}>
              <Box
                component="img"
                src="/images/logo.svg"
                alt="Logo"
                width={42}
                height={39}
              />
              <Typography variant="footerTitle">Shushi</Typography>
            </Stack>
            <Box mt={4} maxWidth="375px">
              <Typography variant="footerContent">
                Food for the body is not enough. There must be foods for the
                soul.
              </Typography>
            </Box>
            <Box
              ml={15}
              component="img"
              src="/images/leaf3.png"
              alt="Leaf"
              width={106}
              height={116}
            />
          </Grid>
          <Grid item md={2} mt={3}>
            <Typography variant="footerTitle">Main Menu</Typography>
            <Stack mt={3}>
              {mainMenu.map((menu, index) => (
                <Typography
                  key={index}
                  variant="footerContent"
                  sx={{ cursor: "pointer" }}>
                  {menu}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid item md={3} mt={3}>
            <Typography variant="footerTitle">Information</Typography>
            <Stack mt={3}>
              {info.map((info, index) => (
                <Typography
                  key={index}
                  variant="footerContent"
                  sx={{ cursor: "pointer" }}>
                  {info}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid item md={2} mt={3}>
            <Typography variant="footerTitle">Address</Typography>
            <Stack mt={3}>
              <Typography variant="footerContent">
                Greater Noida <br /> Sec-1, India
              </Typography>
            </Stack>
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

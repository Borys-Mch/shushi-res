import { Container, Stack, Link } from "@mui/material";
import Image from "next/image";
// import Link from "next/link";
import React from "react";
import Logo from "../../public/images/logo.svg";

const Navbar = () => {
  return (
    <Container>
      <Stack direction={"row"} justifyContent="space-between">
        <Stack direction={"row"} spacing={2} my={5} alignItems="center">
          <Image src={Logo} alt="Logo" width={42} height={39} />
          <Link href={"/"} color="#2A2521" underline="none">
            <h2>Shushi</h2>
          </Link>
        </Stack>
        <Stack direction={"row"} spacing={4} alignItems="center">
          <Link href={"/"} color="#2A2521" underline="none">
            <h2>Home</h2>
          </Link>
          <Link href={"/"} color="#2A2521" underline="none">
            <h2>About Us</h2>
          </Link>
          <Link href={"/"} color="#2A2521" underline="none">
            <h2>Popular</h2>
          </Link>
          <Link href={"/"} color="#2A2521" underline="none">
            <h2>Recently</h2>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;

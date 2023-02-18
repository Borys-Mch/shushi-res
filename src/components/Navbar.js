import React, { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { Container, Stack, Link, IconButton } from "@mui/material";
import Image from "next/image";

import Logo from "../../public/images/logo.svg";
import { navItems } from "@/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
        position="relative">
        <Stack direction={"row"} spacing={2} my={5} alignItems="center">
          <Image src={Logo} alt="Logo" width={42} height={39} />
          <Link href={"/"} color="#2A2521" underline="none">
            <h2>Shushi</h2>
          </Link>
        </Stack>
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={() => setToggle((prev) => !prev)}
          sx={{ mr: 2, display: { sm: "none" }, height: "45px" }}>
          {toggle ? (
            <Close sx={{ fontSize: "30px" }} />
          ) : (
            <Menu sx={{ fontSize: "30px" }} />
          )}
        </IconButton>
        <Stack
          direction={{ sm: "row" }}
          position={{ xs: "absolute", sm: "static" }}
          p={{ xs: "15px", sm: "0" }}
          borderRadius="15px"
          sx={{
            display: { xs: `${toggle ? "block" : "none"}`, sm: "flex" },
            background: { xs: "#FFF", sm: "transparent" },
            border: { xs: "1px solid #d9d9d9", sm: "none" },
            right: "20px",
            top: "90px",
          }}
          spacing={4}
          alignItems="center">
          {navItems.map((item) => (
            <Link href={"/"} color="#2A2521" underline="none" key={item}>
              <h2>{item}</h2>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;

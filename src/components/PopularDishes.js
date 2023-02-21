import React from "react";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import { dishes } from "@/constants";

const PopularDishes = () => {
  return (
    <Container>
      <Stack alignItems="center">
        <Typography variant="textYellow">The Best Food</Typography>
        <Typography variant="titleH2">Popular Dishes</Typography>
      </Stack>
      <Stack mt={25} direction="row" spacing={5}>
        {dishes.map((dish) => (
          <Card
            key={dish.id}
            variant="outlined"
            sx={{
              position: "relative",
              overflow: "visible",
              width: "420px",
              height: "405px",
            }}>
            <Box
              component="img"
              src={dish.img}
              alt="Product"
              sx={{ position: "absolute", top: "-120px", left: "15px" }}
            />
            <Stack mt={20} alignItems="center">
              <Typography
                fontFamily="Koh Santepheap"
                fontSize="50px"
                fontWeight={400}
                color="#2A2521">
                {dish.title}
              </Typography>
              <Typography
                fontFamily="Poppins"
                fontSize="25px"
                fontWeight={300}
                color="#2A2521">
                {dish.descr}
              </Typography>
              <Typography
                fontFamily="Koh Santepheap"
                fontSize="45px"
                fontWeight={700}
                color="#FF9800"
                mt={4}>
                {dish.price} $
              </Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default PopularDishes;

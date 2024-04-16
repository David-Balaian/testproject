import React, { useEffect } from "react";
import { useGetData } from "../hooks/useGetData";

import MUCard from "../components/card";
import { Box } from "@mui/material";

const Home = () => {
  const { fetchData, data: events, loading } = useGetData("posts");
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <Box>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {events?.posts?.map((item) => {
            return (
              <Box key={item.id}>
                <MUCard item={item} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Home;

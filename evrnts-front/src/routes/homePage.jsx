import React, { useEffect } from "react";
import { useGetData } from "../hooks/useGetData";

import MUCard from "../components/card";
import { Box } from "@mui/material";
import { getAllEvents } from "../GraphQL/events";
import MUModal from "../components/modal";
import { useSelector } from "react-redux";
import { getModal } from "../store/modal/selectors";

const Home = () => {
  const { fetchData, data: events, loading } = useGetData(getAllEvents);
  const modalData = useSelector(getModal)
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
          {events?.map((item) => {
            return (
              <Box key={item.id}>
                <MUCard item={item} />
              </Box>
            );
          })}
        </Box>
      </Box>
      <MUModal {...modalData} />
    </>
  );
};

export default Home;

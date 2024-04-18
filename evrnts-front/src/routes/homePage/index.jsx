import React, { useEffect } from "react";
import { useGetData } from "../../hooks/useGetData";

import MUCard from "../../components/card";
import { Box, Button } from "@mui/material";
import { getAllEvents } from "../../GraphQL/events";
import MUModal from "../../components/modal";
import { useSelector } from "react-redux";
import { getModal } from "../../store/modal/selectors";
import { Link } from "react-router-dom";

const Home = () => {
  const { fetchData, data: events, loading } = useGetData(getAllEvents);
  const modalData = useSelector(getModal);
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <Box>
        <Link to={"/create-event"}>
          <Button variant="contained">Add Event</Button>
        </Link>
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

import React from "react";
import { useParams } from "react-router-dom";
import MUCard from "../components/card";

const EventView = ({ item }) => {
  const { eventId } = useParams();
  // const { id } = useParams();

  console.log(
    "%cevrnts-frontsrc\routesEventView.jsx:10 rout",
    "color: #26bfa5;",
    eventId
  );

  return item ? <MUCard item={item} /> : <div>item chkaaa</div>;
};

export default EventView;

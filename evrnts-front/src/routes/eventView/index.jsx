import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MUCard from "../../components/card";
import { useGetData } from "../../hooks/useGetData";
import { getEvent } from "../../GraphQL/events";

const EventView = () => {
  const { eventId } = useParams();
  const { fetchData, data, loading } = useGetData(() => getEvent(eventId));

  useEffect(() => {
    fetchData();
  }, []);

  console.log(
    "%cevrnts-frontsrc\routesEventView.jsx:10 rout",
    "color: #26bfa5;",
    eventId
  );

  if (loading) {
    return <div> loading ... </div>;
  }
  return data ? <MUCard item={data} allView /> : <div>item chkaaa</div>;
};

export default EventView;

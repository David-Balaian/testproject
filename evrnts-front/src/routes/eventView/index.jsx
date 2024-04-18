import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MUCard from "../../components/card";
import { useGetData } from "../../hooks/useGetData";
import { getEvent } from "../../GraphQL/events";
import LoadingSpinner from "../../components/loading";
import NoData from "../../components/NoData";

const EventView = () => {
  const { eventId } = useParams();
  const { fetchData, data, loading } = useGetData(() => getEvent(eventId));

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return data ? <MUCard item={data} allView /> : <NoData />;
};

export default EventView;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import NewEventItem from "../components/newEventItem";
import { getEvent } from "../GraphQL/events";

const EditEvent = () => {
  let { eventId } = useParams();
  const { fetchData, data, loading } = useGetData(()=>getEvent(eventId));
  const [event, setEvent] = useState({ date: "", description: "", title: "" });
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // setEvent(data);
    console.log(data)
  }, [data]);

  if (loading || !data) {
    return <div>Loading...</div>;
  }
  const handleSubmit = () => {
    console.log(
      "%csrc\routeseditEvent.jsx:2",
      "color: white; background-color: #26bfa5;"
    );
  };

  const changeData = (value, key) => {
    setEvent((item) => {
      return { ...item, [key]: value };
    });
  };

  return (
    <div>
      <NewEventItem
        eventDate={event.date}
        eventDescription={event.description}
        eventTitle={event.title}
        handleSubmit={handleSubmit}
        changeData={changeData}
      />
    </div>
  );
};

export default EditEvent;

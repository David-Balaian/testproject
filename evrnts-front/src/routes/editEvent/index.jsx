import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import NewEventItem from "../../components/newEventItem";
import { getEvent, updateEvent } from "../../GraphQL/events";
import { useSelector } from "react-redux";
import { getActiveUser } from "../../store/user/selectors";

const EditEvent = () => {
  let { eventId } = useParams();
  const userData = useSelector(getActiveUser);
  const { fetchData, data, loading } = useGetData(() => getEvent(eventId));
  const [event, setEvent] = useState({
    eventDate: "",
    eventDescription: "",
    eventName: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  if (loading || !data) {
    return <div>Loading...</div>;
  }
  const handleSubmit = async () => {
    await updateEvent({
      ...event,
      id: eventId,
      authorEmail: userData.email,
    });
  };

  const changeData = (value, key) => {
    setEvent((item) => {
      return { ...item, [key]: value };
    });
  };

  return (
    <div>
      <NewEventItem
        eventDate={event?.eventDate || data.eventDate || "22/05/1996"}
        eventDescription={event?.eventDescription || data.eventDescription}
        eventTitle={event?.eventName || data.eventName}
        handleSubmit={handleSubmit}
        changeData={changeData}
      />
    </div>
  );
};

export default EditEvent;

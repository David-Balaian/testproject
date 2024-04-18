import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import NewEventItem from "../../components/newEventItem";
import { getEvent, updateEvent } from "../../GraphQL/events";
import { useSelector } from "react-redux";
import { getActiveUser } from "../../store/user/selectors";
import LoadingSpinner from "../../components/loading";
import Notification from "../../components/notificationAlert";

const EditEvent = () => {
  const navigate = useNavigate();
  let { eventId } = useParams();
  const userData = useSelector(getActiveUser);
  const { fetchData, data, loading } = useGetData(() => getEvent(eventId));

  const [event, setEvent] = useState({});

  const [notificationData, setNotificationData] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  if (loading || !data) {
    return <LoadingSpinner />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent({
        ...removeEmptyStringFields(event),
        id: eventId,
        authorEmail: userData.email,
      });
      setNotificationData({
        type: "success",
        message: "Event Edited successfully",
      });
    } catch (err) {
      setNotificationData({ type: "error", message: err.message });
    } finally {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  function removeEmptyStringFields(obj) {
    for (const key in obj) {
      if (obj[key] === "") {
        delete obj[key];
      }
    }
    return obj;
  }

  const changeData = (value, key) => {
    setEvent((item) => {
      return { ...item, [key]: value };
    });
  };

  return (
    <div style={{ marginTop: 24 }}>
      {<Notification alert={notificationData} />}
      <NewEventItem
        eventDate={event?.eventDate || data.eventDate || "22/05/1996"}
        eventDescription={event?.eventDescription || data.eventDescription}
        eventTitle={event?.eventName || data.eventName}
        handleSubmit={handleSubmit}
        changeData={changeData}
        isDisabled={!Object.keys(event).length}
      />
    </div>
  );
};

export default EditEvent;

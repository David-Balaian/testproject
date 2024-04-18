import React, { useState } from "react";
import NewEventItem from "../../components/newEventItem";
import { createNewEvent } from "../../GraphQL/events";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getActiveUser } from "../../store/user/selectors";
import Notification from "../../components/notificationAlert";

const CreateEvent = () => {
  const navigate = useNavigate();
  const userData = useSelector(getActiveUser);

  const [data, setData] = useState({
    eventDate: "",
    eventDescription: "",
    eventName: "",
  });

  const [notificationData, setNotificationData] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewEvent({ ...data, authorEmail: userData.email });
      setNotificationData({
        type: "success",
        message: "event added successfully",
      });
    } catch (err) {
      setNotificationData({ type: "error", message: err.message });
    } finally {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const changeData = (value, key) => {
    setData((item) => {
      return { ...item, [key]: value };
    });
  };

  return (
    <div style={{ marginTop: 24 }}>
      {<Notification alert={notificationData} />}
      <NewEventItem
        eventDate={data.eventDate}
        eventDescription={data.eventDescription}
        eventTitle={data.eventName}
        handleSubmit={handleSubmit}
        changeData={changeData}
      />
    </div>
  );
};

export default CreateEvent;

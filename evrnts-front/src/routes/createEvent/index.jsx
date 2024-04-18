import React, { useState } from "react";
import NewEventItem from "../../components/newEventItem";
import { createNewEvent } from "../../GraphQL/events";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getActiveUser } from "../../store/user/selectors";

const CreateEvent = () => {
  const navigate = useNavigate();
  const userData = useSelector(getActiveUser);

  const [data, setData] = useState({
    eventDate: "",
    eventDescription: "",
    eventName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewEvent({ ...data, authorEmail: userData.email });
    navigate("/");
  };

  const changeData = (value, key) => {
    setData((item) => {
      return { ...item, [key]: value };
    });
  };

  return (
    <div>
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

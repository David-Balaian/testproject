import React, { useState } from "react";
import NewEventItem from "../components/newEventItem";
import { createNewEvent } from "../GraphQL/events";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({ date: "", description: "", title: "" });

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createNewEvent({
      eventName: data.title,
      eventDescription: data.description,
      date: new Date(data.date)
    })
    navigate("/")
  };

  const changeData = (value, key) => {
    setData((item) => {
      return { ...item, [key]: value };
    });
  };

  return (
    <div>
      <NewEventItem
        eventDate={data.date}
        eventDescription={data.description}
        eventTitle={data.title}
        handleSubmit={handleSubmit}
        changeData={changeData}
      />
    </div>
  );
};

export default CreateEvent;

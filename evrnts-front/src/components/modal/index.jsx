import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import NewEventItem from "../newEventItem";
import { modalSlice } from "../../store/modal/slice";
import { getAllEvents, updateEvent } from "../../GraphQL/events";
import { useDispatch } from "react-redux";
import { useGetData } from "../../hooks/useGetData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
};
const MUModal = ({ open, item }) => {
  const dispatch = useDispatch()
  const [event, setEvent] = useState({ date: item?.date, description: item?.eventDescription, title: item?.eventName })


  useEffect(()=>{
    setEvent({ date: item?.date, description: item?.eventDescription, title: item?.eventName })
  }, [item])

  const changeData = (value, key) => {
    setEvent((item) => {
      return { ...item, [key]: value };
    });
  };

  const handleClose = () => {
    dispatch(modalSlice.actions.setModal({open: false}))
  }

  const saveAction = async (e) =>{
    e.preventDefault()
    await updateEvent({eventName: event.title, eventDescription: event.description, id: item.id, date: new Date(event.date)})
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      title="Edit Event"
    >
      <Box sx={style}>
        <NewEventItem
          eventDate={event.date}
          eventDescription={event.description}
          eventTitle={event.title}
          changeData={changeData}
          handleSubmit={saveAction}
        />
      {/* <Button variant="contained" onClick={handleClose} >Cancel</Button>
      <Button variant="contained" onClick={saveAction}>Save</Button> */}
      </Box>
    </Modal>
  );
};

export default MUModal;

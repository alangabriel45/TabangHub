"use client";

import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function ManageEvents() {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Example data for events
  const events = [
    {
      id: "1",
      title: "Tabang Build 2024",
      date: "2024-11-07", // Ensure date format is correct
      location: "Barangay Hall",
      description:
        "A community building event focused on constructing homes for those in need.",
    },
    {
      id: "2",
      title: "Community Kitchen",
      date: "2024-11-10",
      location: "City Plaza",
      description:
        "An initiative to provide free meals to the local community in need.",
    },
  ];

  // Handle when an event is clicked
  const handleEventClick = (info) => {
    const event = events.find((e) => e.title === info.event.title);
    if (event) {
      setSelectedEvent(event);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  // Render events in the calendar
  const renderEventContent = (eventInfo) => {
    return (
      <div className="bg-green-500 text-white text-sm rounded px-2 py-1">
        <strong>{eventInfo.timeText}</strong>
        <span> {eventInfo.event.title}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Typography
        variant="h4"
        component="h1"
        className="mb-6 text-center font-semibold text-gray-800"
      >
        Manage Events
      </Typography>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events} // Use event data
          eventClick={handleEventClick} // Handle event clicks
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
          eventContent={renderEventContent} // Render custom event content
          eventColor="#4caf50" // Set event color
          height="auto"
          dayMaxEventRows={3} // Limit the number of events shown per day
        />
      </div>

      {/* Modal for event details */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            borderRadius: "8px",
            boxShadow: 24,
            maxWidth: "500px",
            width: "90%",
          }}
          className="bg-white rounded-lg shadow-lg"
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            className="text-xl font-bold text-gray-800"
          >
            Event Details
          </Typography>
          {selectedEvent && (
            <>
              <Typography
                variant="subtitle1"
                className="mt-4 text-gray-700 text-base"
              >
                <strong>Event Name:</strong> {selectedEvent.title}
              </Typography>
              <Typography
                variant="subtitle1"
                className="mt-2 text-gray-700 text-base"
              >
                <strong>Date:</strong> {selectedEvent.date}
              </Typography>
              <Typography
                variant="subtitle1"
                className="mt-2 text-gray-700 text-base"
              >
                <strong>Location:</strong> {selectedEvent.location}
              </Typography>
              <Typography
                variant="subtitle1"
                className="mt-2 text-gray-700 text-base"
              >
                <strong>Description:</strong> {selectedEvent.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

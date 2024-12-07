"use client";

import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

export default function DonationHistory() {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const donations = [
    {
      reference: "REF12345",
      eventName: "Tabang Build 2024",
      donationCount: 3,
      details: [
        { date: "2024-11-01", amount: "₱500" },
        { date: "2024-11-05", amount: "₱300" },
        { date: "2024-11-10", amount: "₱700" },
      ],
    },
    {
      reference: "REF67890",
      eventName: "Community Kitchen",
      donationCount: 2,
      details: [
        { date: "2024-10-20", amount: "₱1,000" },
        { date: "2024-10-25", amount: "₱1,500" },
      ],
    },
  ];

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Typography variant="h4" component="h1" className="mb-6">
        Donation History
      </Typography>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2 border-b">Reference Number</th>
              <th className="text-left px-4 py-2 border-b">Event Name</th>
              <th className="text-left px-4 py-2 border-b">Donation Count</th>
              <th className="text-left px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{donation.reference}</td>
                <td className="px-4 py-2 border-b">{donation.eventName}</td>
                <td className="px-4 py-2 border-b">{donation.donationCount}</td>
                <td className="px-4 py-2 border-b">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpen(donation)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for donation details */}
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
            width: "100%",
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            className="mb-4"
          >
            Donation Details
          </Typography>
          {selectedEvent && (
            <>
              <Typography
                variant="subtitle1"
                className="mb-2 text-gray-700 font-semibold"
              >
                Event Name: {selectedEvent.eventName}
              </Typography>
              <table className="min-w-full bg-gray-100 border">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="px-4 py-2 border-b text-left">Date</th>
                    <th className="px-4 py-2 border-b text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedEvent.details.map((detail, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-2 border-b">{detail.date}</td>
                      <td className="px-4 py-2 border-b">{detail.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button
                variant="contained"
                color="primary"
                className="mt-4"
                onClick={handleClose}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

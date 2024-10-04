"use client";

import React, { useState } from "react";

export default function VolunteerManagementPage() {
  // Mock data for volunteers
  const initialVolunteers = [
    { id: 1, name: "John Doe", skills: ["Cooking", "Teaching"] },
    { id: 2, name: "Jane Smith", skills: ["Cleaning", "Carpentry"] },
    { id: 3, name: "Michael Johnson", skills: ["Painting", "Teaching"] },
  ];

  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [newVolunteer, setNewVolunteer] = useState({ name: "", skills: "" });
  const [editingVolunteer, setEditingVolunteer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add a new volunteer
  const handleAddVolunteer = () => {
    if (newVolunteer.name && newVolunteer.skills) {
      setVolunteers([
        ...volunteers,
        {
          id: volunteers.length + 1,
          name: newVolunteer.name,
          skills: newVolunteer.skills.split(",").map(skill => skill.trim()),
        },
      ]);
      setNewVolunteer({ name: "", skills: "" });
      setIsModalOpen(false); // Close modal after adding volunteer
    }
  };

  // Edit an existing volunteer
  const handleEditVolunteer = (volunteer) => {
    setEditingVolunteer(volunteer);
  };

  // Save changes to the volunteer
  const handleSaveEdit = () => {
    setVolunteers(
      volunteers.map((volunteer) =>
        volunteer.id === editingVolunteer.id ? editingVolunteer : volunteer
      )
    );
    setEditingVolunteer(null);
  };

  // Delete a volunteer
  const handleDeleteVolunteer = (id) => {
    setVolunteers(volunteers.filter((volunteer) => volunteer.id !== id));
  };

  // Filter volunteers by search query
  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Volunteer Management</h1>

      {/* Search bar */}
      <div className="mb-6 flex justify-between">
        <input
          type="text"
          placeholder="Search volunteers..."
          className="p-2 border border-gray-300 rounded-md max-w-xs" // Make it narrower with max-w-xs
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Add Volunteer button in the top right */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add Volunteer
        </button>
      </div>

      {/* Volunteer list */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Volunteer List</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Skills</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVolunteers.map((volunteer) => (
              <tr key={volunteer.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{volunteer.name}</td>
                <td className="p-4">{volunteer.skills.join(", ")}</td>
                <td className="p-4">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleEditVolunteer(volunteer)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDeleteVolunteer(volunteer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding Volunteer */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add Volunteer</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Volunteer name"
                className="p-2 border border-gray-300 rounded-md"
                value={newVolunteer.name}
                onChange={(e) => setNewVolunteer({ ...newVolunteer, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Skills (comma separated)"
                className="p-2 border border-gray-300 rounded-md"
                value={newVolunteer.skills}
                onChange={(e) => setNewVolunteer({ ...newVolunteer, skills: e.target.value })}
              />
              <div className="flex justify-end gap-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={handleAddVolunteer}
                >
                  Add
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit volunteer form */}
      {editingVolunteer && (
        <div className="mb-8 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Volunteer</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Volunteer name"
              className="p-2 border border-gray-300 rounded-md flex-1"
              value={editingVolunteer.name}
              onChange={(e) => setEditingVolunteer({ ...editingVolunteer, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Skills (comma separated)"
              className="p-2 border border-gray-300 rounded-md flex-1"
              value={editingVolunteer.skills.join(", ")}
              onChange={(e) =>
                setEditingVolunteer({
                  ...editingVolunteer,
                  skills: e.target.value.split(",").map(skill => skill.trim()),
                })
              }
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setEditingVolunteer(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState } from 'react';

export default function ManageEvent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>
      </header>

      {/* Search Bar and Create Event Button */}
      <div className="mb-6 flex items-center justify-between">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search events..."
          className="w-96 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ height: '2.75rem' }} // Adjust height to match button
        />
        
        {/* Create Event Button */}
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ height: '2.75rem' }} // Matches height of search bar
        >
          Create Event
        </button>
      </div>

      {/* Event Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="py-3 px-4 border-b">Event Name</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Location</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b">Community Clean-Up</td>
              <td className="py-3 px-4 border-b">September 10, 2024</td>
              <td className="py-3 px-4 border-b">City Park</td>
              <td className="py-3 px-4 border-b">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-4">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">Food Drive</td>
              <td className="py-3 px-4 border-b">September 5, 2024</td>
              <td className="py-3 px-4 border-b">Community Center</td>
              <td className="py-3 px-4 border-b">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-4">Delete</button>
              </td>
            </tr>
            {/* Add more event rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Create Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Create Event</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="eventName" className="block text-gray-700 mb-2">Event Name</label>
                <input
                  id="eventName"
                  type="text"
                  placeholder="Enter event name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="eventDate" className="block text-gray-700 mb-2">Date</label>
                <input
                  id="eventDate"
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="eventLocation" className="block text-gray-700 mb-2">Location</label>
                <input
                  id="eventLocation"
                  type="text"
                  placeholder="Enter event location"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

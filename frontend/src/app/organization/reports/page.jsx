"use client";

import * as React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

export default function ReportsPage() {

  // Mock data for the report
  const totalEvents = 10;
  const totalDonations = 5000;
  const totalVolunteers = 200;

  // Bar chart data for Event Summary
  const eventSummaryData = {
    labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
    datasets: [
      {
        label: 'Number of Participants',
        data: [50, 75, 100, 60, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data for Top Skills
  const topSkillsData = {
    labels: ['Cooking', 'Teaching', 'Cleaning', 'Carpentry', 'Painting'],
    datasets: [
      {
        label: 'Top Skills',
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Mock data for Recent Donators and Recent Events
  const recentDonators = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'David Brown'];
  const recentEvents = ['Event 1 - Community Cleanup', 'Event 2 - Food Drive', 'Event 3 - Educational Workshop'];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Reports Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Events */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Events</h2>
          <p className="text-4xl font-bold">{totalEvents}</p>
        </div>

        {/* Total Donations */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Donations</h2>
          <p className="text-4xl font-bold">₱{totalDonations}</p>
        </div>

        {/* Total Volunteers */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Volunteers</h2>
          <p className="text-4xl font-bold">{totalVolunteers}</p>
        </div>
      </div>

      {/* Event Summary & Top Skills Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Bar Graph for Event Summary */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Event Summary</h2>
          <Bar data={eventSummaryData} />
        </div>

        {/* Pie Chart for Top Skills */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Top Skills</h2>
          <Pie data={topSkillsData} />
        </div>
      </div>

      {/* Recent Donators and Recent Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Donators */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Donators</h2>
          <ul className="list-disc ml-4">
            {recentDonators.map((donator, index) => (
              <li key={index} className="text-lg">{donator}</li>
            ))}
          </ul>
        </div>

        {/* Recent Events */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          <ul className="list-disc ml-4">
            {recentEvents.map((event, index) => (
              <li key={index} className="text-lg">{event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

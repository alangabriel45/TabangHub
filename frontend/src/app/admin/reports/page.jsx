"use client";

import * as React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

export default function ReportsPage() {
  // Dropdown options for organizations including "All Reports"
  const organizations = ["All Reports", "Organization A", "Organization B", "Organization C"];
  const [selectedOrganization, setSelectedOrganization] = React.useState(organizations[0]);

  const handleOrganizationChange = (event) => {
    setSelectedOrganization(event.target.value);
  };

  // Data for each organization, including donations, volunteers, and recent events/donators
  const dataByOrganization = {
    "Organization A": {
      events: [50, 75, 100, 60, 80],
      skills: [30, 25, 20, 15, 10],
      totalDonations: 2000,
      totalVolunteers: 100,
      recentDonators: ["John Doe", "Alice Johnson", "Emily Clark"],
      recentEvents: ["Community Cleanup", "Food Drive"],
    },
    "Organization B": {
      events: [40, 65, 80, 70, 90],
      skills: [35, 30, 25, 20, 15],
      totalDonations: 1500,
      totalVolunteers: 120,
      recentDonators: ["David Brown", "Susan Taylor", "Michael Scott"],
      recentEvents: ["Educational Workshop", "Charity Run"],
    },
    "Organization C": {
      events: [60, 55, 85, 50, 70],
      skills: [20, 25, 30, 35, 40],
      totalDonations: 2500,
      totalVolunteers: 150,
      recentDonators: ["Jessica Wilson", "George Anderson", "Rachel Green"],
      recentEvents: ["Health Fair", "Toy Drive"],
    },
    "All Reports": {
      events: [150, 195, 265, 180, 240], // Combined events
      skills: [85, 80, 75, 70, 65],
      totalDonations: 6000, // Sum of donations
      totalVolunteers: 370, // Sum of volunteers
      recentDonators: ["John Doe", "Alice Johnson", "David Brown", "Susan Taylor", "Jessica Wilson"],
      recentEvents: ["Community Cleanup", "Food Drive", "Educational Workshop", "Charity Run", "Health Fair"],
    },
  };

  // Get data for the selected organization or for "All Reports"
  const selectedData = dataByOrganization[selectedOrganization];

  // Calculate total events (number of events)
  const totalEvents = selectedData.events.length;  // Number of events is based on the length of the events array

  // Generate dynamic labels based on the number of events
  const eventLabels = Array.from({ length: totalEvents }, (_, i) => `Event ${i + 1}`);

  // Bar chart data for Event Summary
  const eventSummaryData = {
    labels: eventLabels, // Use dynamic labels
    datasets: [
      {
        label: "Number of Participants",
        data: selectedData.events,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data for Top Skills
  const topSkillsData = {
    labels: ["Cooking", "Teaching", "Cleaning", "Carpentry", "Painting"],
    datasets: [
      {
        label: "Top Skills",
        data: selectedData.skills,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Reports Overview</h1>

      {/* Organization Dropdown */}
      <div className="mb-6">
        <label htmlFor="organization-select" className="block text-lg font-medium mb-2">
          Select Organization:
        </label>
        <select
          id="organization-select"
          value={selectedOrganization}
          onChange={handleOrganizationChange}
          className="block w-full max-w-xs p-2 border border-gray-300 rounded-md"
        >
          {organizations.map((organization, index) => (
            <option key={index} value={organization}>
              {organization}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Events */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Events</h2>
          <p className="text-4xl font-bold">{totalEvents}</p>
        </div>

        {/* Total Donations */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Donations</h2>
          <p className="text-4xl font-bold">₱{selectedData.totalDonations}</p>
        </div>

        {/* Total Volunteers */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Total Volunteers</h2>
          <p className="text-4xl font-bold">{selectedData.totalVolunteers}</p>
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
            {selectedData.recentDonators.map((donator, index) => (
              <li key={index} className="text-lg">
                {donator}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Events */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          <ul className="list-disc ml-4">
            {selectedData.recentEvents.map((event, index) => (
              <li key={index} className="text-lg">
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

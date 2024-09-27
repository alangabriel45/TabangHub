"use client";

import * as React from 'react';

export default function HistoryPage() {
  // Mock data for the history
  const historyData = [
    { id: 1, type: 'Event Participation', description: 'Participated in Community Cleanup', date: '2024-09-15' },
    { id: 2, type: 'Donation', description: 'Donated ₱500 to Food Drive', date: '2024-09-10' },
    { id: 3, type: 'Volunteer Activity', description: 'Volunteered as a Teacher for Educational Workshop', date: '2024-08-28' },
    { id: 4, type: 'Event Participation', description: 'Participated in Beach Cleanup', date: '2024-08-20' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Activity History</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        
        <ul className="divide-y divide-gray-200">
          {historyData.map((historyItem) => (
            <li key={historyItem.id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">{historyItem.description}</p>
                  <p className="text-sm text-gray-500">{historyItem.type}</p>
                </div>
                <p className="text-sm text-gray-400">{historyItem.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

export default function OrganizationManagementPage() {
  // Mock data for organizations
  const initialOrganizations = [
    { id: 1, name: "Helping Hands", description: "A charity focused on education." },
    { id: 2, name: "Community Builders", description: "Focused on building homes." },
    { id: 3, name: "Food For All", description: "Providing food to underserved communities." },
  ];

  const [organizations, setOrganizations] = useState(initialOrganizations);
  const [newOrganization, setNewOrganization] = useState({ name: "", description: "" });
  const [editingOrganization, setEditingOrganization] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add a new organization
  const handleAddOrganization = () => {
    if (newOrganization.name && newOrganization.description) {
      setOrganizations([
        ...organizations,
        {
          id: organizations.length + 1,
          name: newOrganization.name,
          description: newOrganization.description,
        },
      ]);
      setNewOrganization({ name: "", description: "" });
      setIsModalOpen(false); // Close modal after adding organization
    }
  };

  // Edit an existing organization
  const handleEditOrganization = (organization) => {
    setEditingOrganization(organization);
  };

  // Save changes to the organization
  const handleSaveEdit = () => {
    setOrganizations(
      organizations.map((organization) =>
        organization.id === editingOrganization.id ? editingOrganization : organization
      )
    );
    setEditingOrganization(null);
  };

  // Delete an organization
  const handleDeleteOrganization = (id) => {
    setOrganizations(organizations.filter((organization) => organization.id !== id));
  };

  // Filter organizations by search query
  const filteredOrganizations = organizations.filter((organization) =>
    organization.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Organization Management</h1>

      {/* Search bar and Add Organization button */}
      <div className="mb-6 flex justify-between">
        <input
          type="text"
          placeholder="Search organizations..."
          className="p-2 border border-gray-300 rounded-md max-w-xs" // Narrow search bar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add Organization
        </button>
      </div>

      {/* Organization list */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Organization List</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Description</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrganizations.map((organization) => (
              <tr key={organization.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{organization.name}</td>
                <td className="p-4">{organization.description}</td>
                <td className="p-4">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleEditOrganization(organization)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDeleteOrganization(organization.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding Organization */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add Organization</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Organization name"
                className="p-2 border border-gray-300 rounded-md"
                value={newOrganization.name}
                onChange={(e) => setNewOrganization({ ...newOrganization, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="p-2 border border-gray-300 rounded-md"
                value={newOrganization.description}
                onChange={(e) =>
                  setNewOrganization({ ...newOrganization, description: e.target.value })
                }
              />
              <div className="flex justify-end gap-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={handleAddOrganization}
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

      {/* Edit organization form */}
      {editingOrganization && (
        <div className="mb-8 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Organization</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Organization name"
              className="p-2 border border-gray-300 rounded-md"
              value={editingOrganization.name}
              onChange={(e) =>
                setEditingOrganization({ ...editingOrganization, name: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              className="p-2 border border-gray-300 rounded-md"
              value={editingOrganization.description}
              onChange={(e) =>
                setEditingOrganization({
                  ...editingOrganization,
                  description: e.target.value,
                })
              }
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleSaveEdit}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setEditingOrganization(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

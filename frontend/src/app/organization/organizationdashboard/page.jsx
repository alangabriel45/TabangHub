export default function OrganizationDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="flex-1 p-6">
        {/* Dashboard Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Volunteers</h3>
            <p className="text-2xl font-bold text-gray-700">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Donations</h3>
            <p className="text-2xl font-bold text-gray-700">$5,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Events</h3>
            <p className="text-2xl font-bold text-gray-700">20</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Events</h3>
            <p className="text-2xl font-bold text-gray-700">5</p>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <ul className="space-y-4">
            <li className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-800">Community Clean-Up</h4>
              <p className="text-gray-600">Volunteers participated in a community clean-up event on September 10, 2024.</p>
            </li>
            <li className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-800">Food Drive</h4>
              <p className="text-gray-600">A successful food drive held on September 5, 2024, collected donations for local shelters.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

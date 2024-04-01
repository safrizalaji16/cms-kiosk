import { useEffect, useState } from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 bg-white shadow sm:rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
            <p className="mt-1 text-sm text-gray-600">
              Welcome to your dashboard.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

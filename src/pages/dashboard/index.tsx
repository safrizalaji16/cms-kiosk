import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/header";

const Dashboard = () => {
  const [devices, setDevices] = useState([]);

  const fetchDevices = async () => {
    try {
      const { data } = await axios.get(`api/devices`);

      setDevices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((el) => {
                  const device = el.attributes;
                  return (
                    <tr key={el.id} className="bg-white">
                      <td className="border px-4 py-2">{device.name}</td>
                      <td className="border px-4 py-2">{device.location}</td>
                      <td className="border px-4 py-2">
                        {device.status ? "Online" : "Offline"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

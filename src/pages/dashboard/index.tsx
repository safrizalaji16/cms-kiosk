import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/header";
import { Devices } from "../../../types/entities/Device";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const [devices, setDevices] = useState<Devices>([]);

  const fetchDevices = async () => {
    try {
      const { data } = await axios.get(`api/devices`);
      setDevices(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddDevice = () => {
    router.push(`/dashboard/add`);
  };

  const handleEdit = (id: string) => {
    router.push(`/devices/${id}`);
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mb-4">
            <button
              onClick={handleAddDevice}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Tambah Device
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Last online</th>
                  <th className="px-4 py-2">Last offline</th>
                  <th className="px-4 py-2">Layout ID</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 text-center">
                {devices.map((el) => {
                  return (
                    <tr key={el.id} className="bg-white">
                      <td className="border px-4 py-2">{el.id}</td>
                      <td className="border px-4 py-2">{el.name}</td>
                      <td className="border px-4 py-2">{el.locationId}</td>
                      <td className="border px-4 py-2">
                        {el.status ? "Online" : "Offline"}
                      </td>
                      <td className="border px-4 py-2">
                        {el.lastOnline
                          ? el.lastOnline.toString()
                          : "belum pernah online"}
                      </td>
                      <td className="border px-4 py-2">
                        {el.lastOffline
                          ? el.lastOffline.toString()
                          : "belum pernah offline"}
                      </td>
                      <td className="border px-4 py-2">{el.usedLayout}</td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleEdit(el.id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Edit
                        </button>
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

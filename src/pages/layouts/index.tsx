import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { truncateString } from "@/helpers/truncateString";
import { Layout } from "../../../types/entities/Layout";

const Layouts = () => {
  const router = useRouter();
  const [layouts, setLayouts] = useState<Layout[]>([]);

  const fetchLayouts = async () => {
    try {
      const { data } = await axios.get(`api/layouts`);
      console.log(data);
      setLayouts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLayouts();
  }, []);

  const handleAddLayout = () => {
    router.push(`/layouts/add`);
  };

  const handleEditLayout = (id: number) => {
    router.push(`/layouts/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mb-4">
            <button
              onClick={handleAddLayout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Tambah Layout
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Code</th>
                  <th className="px-4 py-2">Actions</th>{" "}
                  {/* Added Actions column */}
                </tr>
              </thead>
              <tbody>
                {layouts.map((el) => {
                  return (
                    <tr key={el.id} className="bg-white">
                      <td className="border px-4 py-2">{el.id}</td>
                      <td className="border px-4 py-2">{el.name}</td>
                      <td className="border px-4 py-2">
                        {truncateString(el.htmlCode, 100)}
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleEditLayout(el.id)}
                          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
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

export default Layouts;

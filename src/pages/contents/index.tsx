import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/header";
import { Content } from "../../../types/entities/Content";
import { FaTrashCan } from "react-icons/fa6";
import { TfiPencilAlt } from "react-icons/tfi";

const Contents = () => {
  const [contents, setContents] = useState<Content[]>([]);

  const fetchContents = async () => {
    try {
      const { data } = await axios.get(`/api/contents`);
      setContents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContents();
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
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Asset</th>
                  <th className="px-4 py-2">Link</th>
                  <th className="px-4 py-2">Layout ID</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contents.map((el) => {
                  return (
                    <tr key={el.id} className="bg-white">
                      <td className="border px-4 py-2">{el.title}</td>
                      <td className="border px-4 py-2">
                          <iframe src={el.url} />
                      </td>
                      <td className="border px-4 py-2">
                        {el.url ? el.url : ""}
                      </td>
                      <td className="border px-4 py-2">{el.templateId}</td>
                      <td className="border px-4 py-16 flex justify-center items-center">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          // onClick={() => handleDelete(el.id)}
                        >
                          <FaTrashCan />
                        </button>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                          // onClick={() => handleEdit(el.id)}
                        >                                                                                        
                          <TfiPencilAlt />
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

export default Contents;

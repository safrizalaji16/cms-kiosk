import { useEffect, useState } from "react";
import axios from "axios";

const Contents = () => {
  const [contents, setContents] = useState([]);

  const fetchContents = async () => {
    try {
      const { data } = await axios.get(`/api/contents`, {
        params: {
          populate: ["asset", "layout"],
        },
      });

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
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Contents
          </h1>
        </div>
      </header>
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
                </tr>
              </thead>
              <tbody>
                {contents.map((el) => {
                  const content = el.attributes;
                  return (
                    <tr key={el.id} className="bg-white">
                      <td className="border px-4 py-2">{content.title}</td>
                      <td className="border px-4 py-2">
                        {content.asset.data
                          ? content.asset.data.attributes.url
                          : ""}
                      </td>
                      <td className="border px-4 py-2">
                        {content.link ? content.link : ""}
                      </td>
                      <td className="border px-4 py-2">
                        {content.layout.data ? content.layout.data.id : ""}
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

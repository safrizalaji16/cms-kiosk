import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { contentService } from "@/services/contentService";

const ContentForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState({});
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file, title);

    try {
      const { data: cookie }: any = await axios.options(
        "/api/auth/get-cookies"
      );
      if (Number(id)) {
        // const { data } = await contentService.editContent(
        //   id.toString(),
        //   {
        //     name: title,
        //     file,
        //   },
        //   cookie
        // );
        // if (data) {
        //   setTitle("");
        //   setFile(null);
        //   router.push(`/contents`);
        // }
      } else {
        const data = await contentService.createContent(
          { name: title, file },
          cookie
        );

        if (data) {
          setTitle("");
          setFile(null);
          router.push(`/contents`);
        }
      }
    } catch (error) {
      console.error("Error adding content:", error);
    }
  };

  const fetchContent = async (id: string | number) => {
    try {
      const { data } = await axios.get(`/api/contents/${id}`);

      setContent(data);
      setTitle(data.title);
      setFile(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setTitle("");
    setFile(null);
    router.push(`/contents`);
  };

  useEffect(() => {
    if (id && id !== "add") {
      fetchContent(id as string);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="m-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mr-4"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a short name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              File:
            </label>
            <input
              type="file"
              id="file"
              accept=".mp4"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFile(file);
                }
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              {Number(id) ? "Edit Content" : "Add Content"}
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContentForm;

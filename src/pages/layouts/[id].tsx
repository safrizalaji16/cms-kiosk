import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { addCSSRulesToHTML } from "@/helpers/addCSSRulesToHTML";
import WebBuilder from "@/components/grapejs/webBuilder";
import { extractHTML } from "@/helpers/extractHTML";

const LayoutForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [titleHTML, setTitleHTML] = useState("");
  const [code, setCode] = useState("");
  const [css, setCss] = useState("");
  const [htmlCode, setHtmlCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (Number(id)) {
        const { data } = await axios.put(`/api/layouts/${id}`, {
          name: title,
          htmlCode: addCSSRulesToHTML(titleHTML, code, css),
        });
        console.log(data);
        if (data) {
          setTitle("");
          setTitleHTML("");
          setCode("");
          setCss("");
          router.push(`/layouts`);
        }
      } else {
        const { data } = await axios.post("/api/layouts", {
          title,
          code: addCSSRulesToHTML(titleHTML, code, css),
        });
        console.log(data);
        if (data) {
          setTitle("");
          setTitleHTML("");
          setCode("");
          setCss("");
          router.push(`/layouts`);
        }
      }
    } catch (error) {
      console.error("Error adding layout:", error);
    }
  };

  const fetchLayout = async (id: string | number) => {
    try {
      const { data } = await axios.get(`/api/layouts/${id}`);
      const { title, body, style } = extractHTML(data.htmlCode);

      setHtmlCode(data.htmlCode);
      setTitle(data.name);
      setCode(body);
      setTitleHTML(title);
      setCss(style);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setTitle("");
    setCode("");
    router.push(`/layouts`);
  };

  useEffect(() => {
    if (id && id !== "add") {
      fetchLayout(id as string);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="m-4 flex">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mr-4"
        >
          <div>
            <iframe
              title="HTML Content"
              src={`data:text/html;charset=utf-8,${encodeURIComponent(
                htmlCode
              )}`}
              className=" h-[384px] w-[216px]"
            />
          </div>
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
              placeholder="Enter a short title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="titleHTML"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title HTML:
            </label>
            <input
              type="text"
              id="titleHTML"
              value={titleHTML}
              onChange={(e) => setTitleHTML(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a short title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Body HTML:
            </label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a long code"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="css"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Css HTML:
            </label>
            <textarea
              id="css"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a long code"
              rows={4}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              {Number(id) ? "Edit Layout" : "Add Layout"}
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="flex-1 mb-4">
          <WebBuilder code={htmlCode || ""} />
        </div>
      </main>
    </div>
  );
};

export default LayoutForm;

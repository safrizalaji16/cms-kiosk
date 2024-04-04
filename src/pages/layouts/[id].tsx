import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const LayoutForm = ({ onAdd }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id, "LALALAL");

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [deviceId, setDeviceId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your API to add the layout
      const response = await axios.post(`api/layouts`, {
        title,
        code,
        device_id: parseInt(deviceId),
      });

      // Call the onAdd function passed from the parent component
      onAdd(response.data);

      // Clear the form fields
      setTitle("");
      setCode("");
      setDeviceId("");
    } catch (error) {
      console.error("Error adding layout:", error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    // Clear the form fields
    setTitle("");
    setCode("");
    setDeviceId("");
    router.push(`/layouts`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
          placeholder="Enter a short title"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="code"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Code:
        </label>
        <textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter a long code"
          rows="4"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="deviceId"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Device ID:
        </label>
        <input
          type="number"
          id="deviceId"
          value={deviceId}
          onChange={(e) => setDeviceId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter device ID"
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
  );
};

export default LayoutForm;

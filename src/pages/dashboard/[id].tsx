import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { contentService } from "@/services/contentService";

const DeviceForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [locations, setLocations] = useState([]);
  const [locationId, setLocationId] = useState("");
  const [templates, setTemplates] = useState([]);
  const [templateId, setTemplateId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (Number(id)) {
        // const { data } = await axios.post(`/api/devices${id}`, {
        //   name: title,
        // });
        // if (data) {
        //   setTitle("");
        //   router.push(`/contents`);
        // }
      } else {
        const { data } = await axios.post("/api/devices", {
          id: deviceId,
          name,
          locationId: Number(locationId),
        });
        if (data) {
          setName("");
          setDeviceId("");
          setLocationId("");
          setTemplateId("");
          console.log(data, "ASFAS");

          router.push(`/addContent/${templateId}-${data.id}`);
        }
      }
    } catch (error) {
      console.error("Error adding content:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const { data } = await axios.get("/api/locations");

      setLocations(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTemplates = async () => {
    try {
      const { data } = await axios.get("/api/templates");

      setTemplates(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setName("");
    setDeviceId("");
    setLocationId("");
    setTemplateId("");
    router.push(`/devices`);
  };

  useEffect(() => {
    fetchLocations();
    fetchTemplates();
    // if (id && id !== "add") {
    //   fetchContent(id as string);
    // }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="m-4 flex flex-col items-center justify-center w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mr-4 w-full max-w-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="deviceId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Device ID:
            </label>
            <input
              type="text"
              id="deviceId"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a short name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a short name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Location:
            </label>
            <select
              id="location"
              value={locationId}
              onChange={(e) => setLocationId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">-- Pilih Location --</option>
              {locations.map((l: any) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="template"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Template:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {templates.map((t: any) => (
                <label
                  key={t.id}
                  className={`flex items-center cursor-pointer ml-4`}
                >
                  <input
                    type="radio"
                    name="templateId"
                    value={t.id}
                    className="form-radio"
                    onChange={(e) => setTemplateId(e.target.value)}
                  />
                  <img src={t.coverImage} alt={t.name} className="h-24" />
                </label>
              ))}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              {Number(id) ? "Edit Content" : "Next"}
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

export default DeviceForm;

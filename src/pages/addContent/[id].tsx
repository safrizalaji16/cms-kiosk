import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { contentService } from "@/services/contentService";

const ContentForm = () => {
  const router = useRouter();
  const { id } = router.query as any;
  const [templateId, deviceId] = id ? id.split("-") : [null, null];
  const [contents, setContents] = useState([]);
  const [device, setDevice] = useState(null);
  const [template, setTemplate] = useState(null);
  const [content1, setContent1] = useState({
    name: "",
    file: null,
    contentId: null,
    templateId,
  });
  const [content2, setContent2] = useState({
    name: "",
    file: null,
    contentId: null,
    templateId,
  });
  const [content3, setContent3] = useState({
    name: "",
    file: null,
    contentId: null,
    templateId,
  });
  const [content4, setContent4] = useState({
    name: "",
    file: null,
    contentId: null,
    templateId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: cookie }: any = await axios.options(
        "/api/auth/get-cookies"
      );

      let contentIds = [];

      if (!content1.contentId) {
        const { data: data1 } = await contentService.createContent(
          content1,
          cookie
        );
        if (data1) {
          contentIds.push(data1.id);
          setContent1({
            name: "",
            file: null,
            contentId: null,
            templateId,
          });
        }
      } else {
        contentIds.push(Number(content1.contentId));
      }

      if (!content2.contentId) {
        if (template && Number(template.totalContents) > 1) {
          const { data: data2 } = await contentService.createContent(
            content2,
            cookie
          );
          if (data2) {
            contentIds.push(data2.id);
            setContent2({
              name: "",
              file: null,
              contentId: null,
              templateId,
            });
          }
        }
      } else {
        contentIds.push(Number(content2.contentId));
      }

      if (!content3.contentId) {
        if (template && Number(template.totalContents) > 2) {
          const { data: data3 } = await contentService.createContent(
            content3,
            cookie
          );
          if (data3) {
            contentIds.push(data3.id);
            setContent3({
              name: "",
              file: null,
              contentId: null,
              templateId,
            });
          }
        }
      } else {
        contentIds.push(Number(content3.contentId));
      }

      if (!content4.contentId) {
        if (template && Number(template.totalContents) > 3) {
          const { data: data4 } = await contentService.createContent(
            content4,
            cookie
          );
          if (data4) {
            contentIds.push(data4.id);
            setContent4({
              name: "",
              file: null,
              contentId: null,
              templateId,
            });
          }
        }
      } else {
        contentIds.push(Number(content4.contentId));
      }

      const { data } = await axios.post(`/api/layouts`, {
        contentIds,
        templateId: Number(templateId),
        deviceId,
      });

      if (data) {
        router.push(`/contents`);
      }
    } catch (error) {
      console.error("Error adding content:", error);
    }
  };

  const fetchDevice = async (id: string) => {
    try {
      const { data } = await axios.get(`/api/devices/${id}`);
      console.log(data, "ASFASF");

      setDevice(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchContents = async () => {
    try {
      const { data } = await axios.get(`/api/contents`);

      setContents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setContent1({
      name: "",
      file: null,
      contentId: null,
      templateId,
    });
    setContent2({
      name: "",
      file: null,
      contentId: null,
      templateId,
    });
    setContent3({
      name: "",
      file: null,
      contentId: null,
      templateId,
    });
    setContent4({
      name: "",
      file: null,
      contentId: null,
      templateId,
    });
    router.push(`/contents`);
  };

  const fetchTemplate = async (id: string) => {
    try {
      const { data } = await axios.get(`/api/templates/${id}`);

      setTemplate(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContents();
    fetchDevice(deviceId as string);
    fetchTemplate(templateId as string);
  }, [id]);

  const icon = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

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
              htmlFor="content1"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Content-1:
            </label>
            <div className="flex">
              <select
                id="content1"
                value={content1.contentId || ""}
                onChange={(e) =>
                  setContent1({ ...content1, contentId: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                disabled={content1.name || content1.file ? true : false}
              >
                <option value="">-- Pilih Content --</option>
                {contents.map((t: any) => (
                  <option key={t.id} value={t.id}>
                    {t.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                id="name1"
                value={content1.name}
                onChange={(e) =>
                  setContent1({ ...content1, name: e.target.value })
                }
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                placeholder="Enter a short title"
                disabled={content1.contentId ? true : false}
                required={content1.file ? true : false}
              />
              <label
                htmlFor="file1"
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
              >
                <input
                  type="file"
                  name="file1"
                  id="file1"
                  accept=".mp4"
                  onChange={(e) => {
                    setContent1({
                      ...content1,
                      file: e.target.files[0],
                    });
                  }}
                  className="hidden"
                  disabled={content1.contentId ? true : false}
                  required={content1.name ? true : false}
                />
                {content1.file ? icon : "File"}
              </label>
              <button
                type="button"
                onClick={() =>
                  setContent1({
                    name: "",
                    file: null,
                    contentId: null,
                    templateId,
                  })
                }
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
              >
                Clear
              </button>
            </div>
          </div>
          {template && Number(template.totalContents) > 1 && (
            <div className="mb-4">
              <label
                htmlFor="content2"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Content-2:
              </label>
              <div className="flex">
                <select
                  id="content2"
                  value={content2.contentId || ""}
                  onChange={(e) =>
                    setContent2({ ...content2, contentId: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  disabled={content2.name || content2.file ? true : false}
                >
                  <option value="">-- Pilih Content --</option>
                  {contents.map((t: any) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="name2"
                  value={content2.name}
                  onChange={(e) =>
                    setContent2({ ...content2, name: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="Enter a short title"
                  disabled={content2.contentId ? true : false}
                  required={content2.file ? true : false}
                />
                <label
                  htmlFor="file2"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                >
                  <input
                    type="file"
                    name="file2"
                    id="file2"
                    accept=".mp4"
                    onChange={(e) => {
                      setContent2({
                        ...content2,
                        file: e.target.files[0],
                      });
                    }}
                    className="hidden"
                    disabled={content2.contentId ? true : false}
                    required={content2.name ? true : false}
                  />
                  {content2.file ? icon : "File"}
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setContent2({
                      name: "",
                      file: null,
                      contentId: null,
                      templateId,
                    })
                  }
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
          {template && Number(template.totalContents) > 2 && (
            <div className="mb-4">
              <label
                htmlFor="content3"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Content-3:
              </label>
              <div className="flex">
                <select
                  id="content3"
                  value={content3.contentId || ""}
                  onChange={(e) =>
                    setContent3({ ...content3, contentId: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  disabled={content3.name || content3.file ? true : false}
                >
                  <option value="">-- Pilih Content --</option>
                  {contents.map((t: any) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="name3"
                  value={content3.name}
                  onChange={(e) =>
                    setContent3({ ...content3, name: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="Enter a short title"
                  disabled={content3.contentId ? true : false}
                  required={content3.file ? true : false}
                />
                <label
                  htmlFor="file3"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                >
                  <input
                    type="file"
                    name="file3"
                    id="file3"
                    accept=".mp4"
                    onChange={(e) => {
                      setContent3({
                        ...content3,
                        file: e.target.files[0],
                      });
                    }}
                    className="hidden"
                    disabled={content3.contentId ? true : false}
                    required={content3.name ? true : false}
                  />
                  {content3.file ? icon : "File"}
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setContent3({
                      name: "",
                      file: null,
                      contentId: null,
                      templateId,
                    })
                  }
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
          {template && Number(template.totalContents) > 3 && (
            <div className="mb-4">
              <label
                htmlFor="content4"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Content-4:
              </label>
              <div className="flex">
                <select
                  id="content4"
                  value={content4.contentId || ""}
                  onChange={(e) =>
                    setContent4({ ...content4, contentId: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  disabled={content4.name || content4.file ? true : false}
                >
                  <option value="">-- Pilih Content --</option>
                  {contents.map((t: any) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="name4"
                  value={content4.name}
                  onChange={(e) =>
                    setContent4({ ...content4, name: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="Enter a short title"
                  disabled={content4.contentId ? true : false}
                  required={content4.file ? true : false}
                />
                <label
                  htmlFor="file4"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                >
                  <input
                    type="file"
                    name="file4"
                    id="file4"
                    accept=".mp4"
                    onChange={(e) => {
                      setContent4({
                        ...content4,
                        file: e.target.files[0],
                      });
                    }}
                    className="hidden"
                    disabled={content4.contentId ? true : false}
                    required={content4.name ? true : false}
                  />
                  {content4.file ? icon : "File"}
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setContent4({
                      name: "",
                      file: null,
                      contentId: null,
                      templateId,
                    })
                  }
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Add Content
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

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import axios from "axios";

const Header = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("devices");

  const handleLogout = async () => {
    // TODO: handle logout
    try {
      await axios.post("/api/auth/logout");
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Mengatur menu aktif berdasarkan path saat ini
    const path = router.pathname.split("/")[1];

    if (path === "devices") {
      setActiveMenu("devices");
    } else if (path === "contents") {
      setActiveMenu("contents");
    } else {
      setActiveMenu("layouts");
    }
  }, [router.pathname]);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    switch (menu) {
      case "devices":
        router.push("/devices");
        break;
      case "layouts":
        router.push("/layouts");
        break;
      case "contents":
        router.push("/contents");
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {capitalizeFirstLetter(activeMenu)}
          </h1>
          <nav className="space-x-4">
            <button
              className={`text-gray-900 hover:text-gray-700 focus:outline-none ${
                activeMenu === "devices" ? "font-bold" : ""
              }`}
              onClick={() => handleMenuClick("devices")}
            >
              Devices
            </button>
            <button
              className={`text-gray-900 hover:text-gray-700 focus:outline-none ${
                activeMenu === "layouts" ? "font-bold" : ""
              }`}
              onClick={() => handleMenuClick("layouts")}
            >
              Layouts
            </button>
            <button
              className={`text-gray-900 hover:text-gray-700 focus:outline-none ${
                activeMenu === "contents" ? "font-bold" : ""
              }`}
              onClick={() => handleMenuClick("contents")}
            >
              Contents
            </button>
            <button
              className="text-gray-900 hover:text-gray-700 focus:outline-none"
              onClick={handleLogout}
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

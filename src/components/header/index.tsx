import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";

const Header = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  useEffect(() => {
    // Mengatur menu aktif berdasarkan path saat ini
    const path = router.pathname;
    if (path === "/dashboard") {
      setActiveMenu("dashboard");
    } else if (path === "/contents") {
      setActiveMenu("contents");
    } else {
      setActiveMenu("layouts");
    }
  }, [router.pathname]);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    switch (menu) {
      case "dashboard":
        router.push("/dashboard");
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
                activeMenu === "dashboard" ? "font-bold" : ""
              }`}
              onClick={() => handleMenuClick("dashboard")}
            >
              Dashboard
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
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

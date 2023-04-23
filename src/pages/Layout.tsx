import React from "react";
import { useNavigate, Link } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-row h-screen">
      <aside className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="flex flex-col h-full justify-between">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <nav>
              <ul>
                <li className="my-2">
                  <Link
                    to="/dashboard"
                    className="block text-gray-400 hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/sessions"
                    className="block text-gray-400 hover:text-white"
                  >
                    Sessions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>
      <main className="flex-grow bg-gray-100 p-8">
        <div className="container mx-auto">{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;

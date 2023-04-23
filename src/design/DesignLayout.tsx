import React from "react";
import { useNavigate, Link } from "react-router-dom";
import line1 from "./../assets/icons/line1.svg";
import line2 from "./../assets/icons/line2.svg";

interface DesignLayoutProps {
  children?: React.ReactNode;
}

const DesignLayout: React.FC<DesignLayoutProps> = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-row h-screen">
      <aside className="text-white w-64 flex-shrink-0">
        <div className="flex flex-col h-full border-gray-300 border-r">
          <div className="text-primary font-bold text-lg px-4 py-6 border-gray-300 border-b h-16">
            Soft Skill Trainer
          </div>
          <div>
            {/* <h1 className="text-2xl font-bold mb-4">User Dashboard</h1> */}
            <nav>
              <ul>
              <li className="h-16 px-4 py-6">
                  <Link
                    to="/design-dashboard"
                    className="block text-dark font-semibold hover:text-primary"
                  >
                    Teacher
                  </Link>
                </li>

                <li className="h-16 px-4 py-6 font-semibold">
                  <Link
                    to="/interviewer"
                    className="block text-primary hover:text-primary"
                  >
                    Interviewer
                  </Link>
                </li>

                {/* <li className="my-2">
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
                </li> */}
              </ul>
            </nav>
          </div>
          {/* <div className="p-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </div> */}
        </div>
      </aside>
      <main className="flex-grow">
        <div className="h-16 px-4 py-6 text-lg border-gray-300 border-b font-semibold">Interviewer</div>
        {/* <div className="flex my-5 gap-6">
          <span className="font-semibold text-lg text-dark px-5">0/5</span>
          <img src={line1}></img>
          <img src={line2}></img>
          <img src={line2}></img>
          <img src={line2}></img>
          <img src={line2}></img>
          <button className="bg-gray-300 rounded px-2 py-3">Test ongoing ...</button>
        </div> */}
        <main className="bg-gray-300">
        <div className="container mx-auto">{props.children}</div>
        </main>
        
      </main>
    </div>
  );
};

export default DesignLayout;

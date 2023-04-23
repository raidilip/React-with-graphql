import React from "react";
import { MdMic, MdHeadphones } from "react-icons/md";

const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="flex justify-center p-8">
        <div className="bg-gray-300 rounded-full p-4">
          <svg
            className="w-12 h-12 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {icon}
          </svg>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {description && (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome back, User!</h2>

      <div className="flex flex-wrap justify-center">

        <Card
          icon={<MdMic width={24} height={24} className="w-24 h-24" />}
          title="Speech Refiner"
        />
        <Card
          icon={<MdHeadphones width={24} height={24} />}
          title="Interview Trainer"
        />
      </div>
    </div>
  );
};

export default Dashboard;

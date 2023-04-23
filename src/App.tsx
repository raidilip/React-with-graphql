import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Layout from "./pages/Layout";
import Sessions from "./pages/Sessions/index";
import DesignDashboard from './design/pages/DesignDashboard';
import DesignLayout from "./design/DesignLayout";
import DesignSession from "./design/DesignSession";
import Interviewer from "./design/pages/Interviewer";
import VoiceRecordingPage from "./pages/Record";
import GraphqlConsumeExample from "./pages/GraphqlConsumeExample";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GraphqlConsumeExample />} />
        <Route
          path="/design-dashboard"
          element={
            <DesignLayout>
              <DesignSession />
            </DesignLayout>
          }
        />
          <Route
          path="/interviewer"
          element={
            <DesignLayout>
              <Interviewer />
            </DesignLayout>
          }
        />
          </Routes>
    </BrowserRouter>
  );
};

export default App;

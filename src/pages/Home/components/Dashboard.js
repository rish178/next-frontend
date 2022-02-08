import React from "react";
import "./Dashboard.css";
import {
  FcComboChart,
  FcSearch,
  FcList,
  FcLeave,
  FcGenealogy,
  FcFlowChart,
  FcInspection,
  FcBarChart,
  FcNews,
  FcQuestions,
  FcTodoList,
  FcConferenceCall,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="inner-div"></div>
        <div className="dashboard-inner-div">
          <div className="row">
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcComboChart />
                  </h3>
                </div>
                <h5>Dashboard</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h2>
                    <FcSearch />
                  </h2>
                </div>
                <h5>Search/ Add Candidate</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <Link to="/mrf">
                    <h3>
                      <FcList />
                    </h3>
                  </Link>
                </div>

                <h5>MRF</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcLeave />
                  </h3>
                </div>
                <h5>Layoffs</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcGenealogy />
                  </h3>
                </div>
                <h5>Sourcing Channels</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h2>
                    <FcFlowChart />
                  </h2>
                </div>
                <h5>Vendors</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcInspection />
                  </h3>
                </div>
                <h5>Walk-Ins/Hiring Events</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcBarChart />
                  </h3>
                </div>
                <h5>ORG-Charts</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcNews />
                  </h3>
                </div>
                <h5>Parse Resume Through Excel</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h2>
                    <FcQuestions />
                  </h2>
                </div>
                <h5>Pending Joinings</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcTodoList />
                  </h3>
                </div>
                <h5>Batchwise Joining</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dashboad-icon-div">
                <div className="dashboard-first-row">
                  <h3>
                    <FcConferenceCall />
                  </h3>
                </div>
                <h5>Hiring SOP's SLA's</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

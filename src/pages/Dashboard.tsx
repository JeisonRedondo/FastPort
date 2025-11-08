import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import MainContent from "../components/Dashboard/MainContent";
import "./Dashboard.css";
import DashboardOverview from "../components/Dashboard/DashboardOverview";

function Dashboard() {
  return (
    <section className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <MainContent />
        <DashboardOverview />
      </div>
    </section>
  );
}

export default Dashboard;

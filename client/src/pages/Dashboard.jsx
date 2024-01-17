import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DashPosts, DashProfile, DashSidebar } from "../components";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className=" min-h-screen flex flex-col md:flex-row">
      <div className=" md:w-56">
        {/*Sidebar */}
        <DashSidebar />
      </div>
      {/* profile */}
      {tab === "profile" && <DashProfile />}
      {/* post */}
      {tab === "posts" && <DashPosts />}
    </div>
  );
}

// import React, { useState } from 'react'
// import "./Sidebar.css"
// import { FaHome, FaUser, FaCog, FaBell, FaFile, FaSubway } from "react-icons/fa";
// const Sidebar = () => {
//     const [flag, setFlag] = useState(false);
//   return (
//     <div>
//       <aside className='sidebar' onMouseOver={() => setFlag(true)}>
//       </aside>
//       <aside className='sidebar2' style={{visibility: flag ? "visible" : "hidden"}} onMouseLeave={() => setFlag(false)}>

//       </aside>
//     </div>
//   )
// }

// export default Sidebar

import React from "react";
import { Home, User, Settings, Bell, FileText } from "lucide-react";
import "./Sidebar.css"; // Import the CSS file

const sections = [
  { icon: <Home size={24} />, name: "Home" },
  { icon: <User size={24} />, name: "Profile" },
  { icon: <Settings size={24} />, name: "Settings" },
  { icon: <Bell size={24} />, name: "Notifications" },
  { icon: <FileText size={24} />, name: "Documents" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {sections.map((section, index) => (
          <li key={index} className="sidebar-item">
            <div className="icon">{section.icon}</div>
            <span className="text">{section.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

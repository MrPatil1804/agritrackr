import React from 'react';
import {
  FaBars,
  FaTh,
  FaRegChartBar,
} from "react-icons/fa";
import { MdDataThresholding } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";
import { SiWheniwork } from "react-icons/si";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import axios from 'axios';
import { useTranslation } from '../../hooks/useTranslation';

const Sidebar = ({ children, isOpen, toggle, isMobile = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItem = [
    { path: "miniDash", name: t('nav.miniDashboard'), icon: <DashboardIcon /> },
    { path: "dashboard", name: t('nav.dashboard'), icon: <FaTh /> },
    { path: "report", name: t('nav.tableView'), icon: <TbReportAnalytics /> },
    { path: "qualityc", name: t('nav.report'), icon: <SiWheniwork /> },
  ];

  const bItem = [
    { path: "settings", name: t('nav.settings'), icon: <IoSettingsOutline /> },
    { path: "/", name: t('nav.logout'), icon: <MdOutlineLogout />, isLogout: true },
  ];

  const handleLogout = async () => {
    try {
      // Call backend logout API
      await axios.post('/api/v1/auth/logout', {}, {
        withCredentials: true,
      });

      // Clear Redux state
      dispatch(logout());

      // Disable auto-login until a successful manual login
      localStorage.setItem('disableAutoLogin', '1');

      // Clear any stored cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Navigate to login page
      navigate('/');

    } catch (error) {
      console.error('Logout error:', error);
      // Even if API fails, clear local state and navigate
      dispatch(logout());
      localStorage.setItem('disableAutoLogin', '1');
      navigate('/');
    }
  };

  return (
    <div className="sidebar-container">
      {isMobile && isOpen && <div className="sidebar-backdrop" onClick={toggle} />}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top_section">
          <h1 className={`logo ${isOpen ? "show" : "hide"}`}>KrishiTrackr</h1>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="menu_section">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className="icon">{item.icon}</div>
              <div className={`link_text ${isOpen ? "show" : "hide"}`}>{item.name}</div>
            </NavLink>
          ))}
        </div>
        <footer className="footer_section">
          {bItem.map((item, index) => (
            item.isLogout ? (
              <div
                key={index}
                className="link logout-link"
                onClick={handleLogout}
                style={{ cursor: 'pointer' }}
              >
                <div className="icon">{item.icon}</div>
                <div className={`link_text ${isOpen ? "show" : "hide"}`}>{item.name}</div>
              </div>
            ) : (
              <NavLink to={item.path} key={index} className="link" activeclassname="active">
                <div className="icon">{item.icon}</div>
                <div className={`link_text ${isOpen ? "show" : "hide"}`}>{item.name}</div>
              </NavLink>
            )
          ))}
        </footer>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

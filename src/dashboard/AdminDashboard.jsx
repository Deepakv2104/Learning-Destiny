import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FaBook, FaPlus, FaUsers, FaChartBar, FaCog, FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons/fa

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    closeSidebar();
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar (Mobile) */}
      <div className={`md:hidden fixed top-0 left-0 h-screen w-64 bg-gray-950 z-50 ${showSidebar ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between p-4">
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            alt="Avatar"
            className="rounded-full w-16 h-16 mb-2"
          />
          <button
            onClick={closeSidebar}
            className="text-gray-400 focus:outline-none"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <nav>
          <button
            onClick={() => handleNavigate('/admin-dashboard/allCourses')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaBook className="mr-2" />
            All Courses
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/addCourses')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaPlus className="mr-2" />
            Add Courses
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/students')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaUsers className="mr-2" />
            Students
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/analytics')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaChartBar className="mr-2" />
            Analytics
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/settings')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaCog className="mr-2" />
            Settings
          </button>
          <button
            onClick={() => handleNavigate('/')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaCog className="mr-2" />
            Logout
          </button>
        </nav>
      </div>

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex md:flex-col md:w-64 p-4 bg-gray-950">
        <div className="flex items-center mb-8">
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            alt="Avatar"
            className="rounded-full w-16 h-16 mb-2"
          />
          <div className="text-xl font-bold ml-2">Username</div>
        </div>
        <nav>
          <button
            onClick={() => handleNavigate('/admin-dashboard/allCourses')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaBook className="mr-2" />
            All Courses
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/addCourses')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaPlus className="mr-2" />
            Add Courses
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/students')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaUsers className="mr-2" />
            Students
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/analytics')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaChartBar className="mr-2" />
            Analytics
          </button>
          <button
            onClick={() => handleNavigate('/admin-dashboard/settings')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaCog className="mr-2" />
            Settings
          </button>
          <button
            onClick={() => handleNavigate('/')}
            className="flex items-center block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            <FaCog className="mr-2" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
          <div className="text-2xl font-bold">Learning Destiny Courses Management</div>
        </nav>

        {/* Content Area */}
        <div className="mt-6 bg-gray-700 p-6 rounded-lg shadow-lg">
          {/* Outlet for rendering nested routes */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

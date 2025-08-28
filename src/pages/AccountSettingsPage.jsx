import React from 'react';
import { useUser } from '../context/UserContext.jsx';

const AccountSettingsPage = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-500">
        User data not found. Please create an account or log in.
      </div>
    );
  }
  
  // Format the date for better readability if it exists
  const formattedDate = user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : '';

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-6">Account Settings</h1>
      
      <div className="flex items-center space-x-4 mb-8">
        <div className="relative">
          <img
            src="https://via.placeholder.com/150/808080/FFFFFF?text=User"
            alt="User Profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
          />
          <span className="absolute bottom-0 right-0 p-2 bg-purple-600 text-white rounded-full border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
            </svg>
          </span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user.fullName}</h2>
          <p className="text-gray-500 text-sm">{user.emailAddress}</p>
        </div>
      </div>
      
  

      <p className="text-gray-600 leading-relaxed mb-6">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>
    </div>
  );
};

export default AccountSettingsPage;
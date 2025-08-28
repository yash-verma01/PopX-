import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext.jsx';

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [id || (type === 'radio' ? 'isAgency' : '')]: type === 'radio' ? (checked ? value : prevState.isAgency) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    navigate('/'); 
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create your PopX account</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName" className="block text-purple-600 text-sm font-semibold mb-1">
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-purple-600 text-sm font-semibold mb-1">
            Phone number*
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder=""
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="emailAddress" className="block text-purple-600 text-sm font-semibold mb-1">
            Email address*
          </label>
          <input
            type="email"
            id="emailAddress"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder=""
            value={formData.emailAddress}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-purple-600 text-sm font-semibold mb-1">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-purple-600 text-sm font-semibold mb-1">
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder=""
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

       
        
        <div>
          <label className="block text-sm font-semibold mb-2">
            Are you an Agency?*
          </label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                id="isAgency"
                value="yes"
                className="form-radio text-purple-600"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                id="isAgency"
                value="no"
                className="form-radio text-purple-600"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg mt-8 hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
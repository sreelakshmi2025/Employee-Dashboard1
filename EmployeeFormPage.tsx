
import React, { useState } from 'react';

const EmployeeFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // As per requirements, no need to post data.
    // We can show an alert for demonstration purposes.
    alert('Form submission is for demonstration only and does not save data.');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-8 text-center">Employee Details Form</h1>
        <form onSubmit={handleSubmit} className="bg-neutral p-8 rounded-lg shadow-2xl space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-accent focus:border-accent transition"
              placeholder="e.g., John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-300 mb-2">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-accent focus:border-accent transition"
              placeholder="e.g., Software Engineer"
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-accent focus:border-accent transition"
              placeholder="e.g., New York, NY"
              required
            />
          </div>

          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-300 mb-2">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-accent focus:border-accent transition"
              placeholder="e.g., 90000"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeFormPage;

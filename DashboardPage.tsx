
import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/employeeService';
import type { Employee } from '../types';
import EmployeeCard from '../components/EmployeeCard';
import Spinner from '../components/Spinner';

const DashboardPage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        setError('Failed to load employee data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white tracking-tight">Employee Dashboard</h1>
      
      {loading && <Spinner />}
      
      {error && <div className="bg-error/20 text-error p-4 rounded-md">{error}</div>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

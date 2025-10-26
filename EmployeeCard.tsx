
import React from 'react';
import type { Employee } from '../types';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="bg-neutral rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
            {employee.id}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{employee.name}</h3>
            <p className="text-sm text-gray-400">{employee.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

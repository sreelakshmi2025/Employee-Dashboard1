
import type { Employee } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    const data = await response.json();
    // We only need id, name, and email as per requirements
    return data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

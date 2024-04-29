import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

export const employees = [
  {
    id: "1",
    name: "John Doe",
    title: "Software Developer",
    department: "IT",
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Designer",
    department: "Design",
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: "3",
    name: "Bob Johnson",
    title: "Project Manager",
    department: "Management",
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employees = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filteredEmployees =
    selectedFilter === "all"
      ? employees
      : employees.filter((emp) => emp.department === selectedFilter);
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">List of Employees</h1>
        <div className="my-2">
          <label className="form-label" htmlFor="filterByDepartment">
            Filter by Department:
          </label>
          <select
            className="form-control"
            id="filterByDepartment"
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All Department</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <ul className="list-group my-3">
          {filteredEmployees.map((emp) => (
            <li key={emp.id} className="list-group-item">
              <h5>{emp.name}</h5>
              <p>{emp.title}</p>
              <Link to={`/employees/${emp.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Employees;

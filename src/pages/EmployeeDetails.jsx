  import { useParams } from "react-router-dom";
  import Footer from "../components/Footer";
  import Header from "../components/Header";
  import { employees } from "./Employees";
  
  const EmployeeDetails = () => {
    const { employeeId } = useParams();
    console.log(employeeId);
  
    const selectedEmployee = employees.find((emp) => emp.id == employeeId);
    console.log(selectedEmployee);
  
    return (
      <>
        <Header />
        <main className="container my-3">
          <h2>{selectedEmployee.name}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name: </strong>
              {selectedEmployee.name}
            </li>
            <li className="list-group-item">
              <strong>Designation: </strong>
              {selectedEmployee.title}
            </li>
            <li className="list-group-item">
              <strong>Department: </strong>
              {selectedEmployee.department}
            </li>
          </ul>
        </main>
        <Footer />
      </>
    );
  };
  
  export default EmployeeDetails;
  
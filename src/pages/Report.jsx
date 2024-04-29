import Header from "../components/Header"
import {employees} from "./Employees"

const Report = () => {

  const mostWorkedEmployee = employees.reduce((acc, curr) => acc.hoursWorked > curr.hoursWorked ? acc : curr);

  const highestRatedEmployee = employees.reduce((acc, curr) => acc.performanceRate > curr.performanceRate ? acc : curr);

  const totalOverTimeHours = employees.reduce((acc,curr) => acc + curr.overTimeHours ,0)
  
  return (
    <>
    <Header/>
  <main className="container my-3">
  <h1>HR Report</h1>
    <hr/>
      <div className="row">
      <div className="col-md-4">
        <h2>Most Worked Employee</h2>
      <p>Name: {mostWorkedEmployee.name}</p>
        <p>Hours Worked: {mostWorkedEmployee.hoursWorked}</p>

      </div>
        <div className="col-md-4">
          <h2>Highest Rated Employee</h2>
          <p>Name : {highestRatedEmployee.name}</p>
          <p>Performance Rate : {highestRatedEmployee.performanceRate}</p>
        </div>
        <div className="col-md-4">
          <h2>Total Overtime Hours</h2>
          <p>Total Overtime Hours: {totalOverTimeHours}</p>
        </div>
      </div>
  </main>
    </>
  )
}

export default Report
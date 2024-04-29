import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <img
          src="https://placehold.co/500x400?text=Employees Smiling"
          alt="company-logo image"
          className="img-fluid mt-5"
        />

        <section className="mt-5">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professionals who tirelessly work to
            achieve our company's goals.
          </p>
          <Link to="/employees" className="btn btn-primary">
            View Employees
          </Link>
        </section>

        <section className="my-5">
          <h2>Company Report</h2>
          <p>
            Explore our latest financial report to gain insights into our
            company's performance and growth.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <header>
        <div className="container">
          <Nav />
          <Header />
        </div>
      </header>

      <main className="container">
        <EmployeeList />
      </main>

      <Footer />
    </>
  );
}

import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="Company Logo" className="logo" />
      <ul>
        <li><a href="#">Employees</a></li>
        <li><a href="#">Organization</a></li>
      </ul>
    </nav>
  );
}

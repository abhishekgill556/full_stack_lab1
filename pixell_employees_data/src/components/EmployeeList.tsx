import employeesData from "../assets/employees.json";

type Employee = { name: string; department: string };
type DeptMap = Record<string, string[]>;

export default function EmployeeList() {
  const employees = employeesData as Employee[];

  const departments: DeptMap = {};
  employees.forEach((emp) => {
    if (!departments[emp.department]) departments[emp.department] = [];
    departments[emp.department].push(emp.name);
  });

  const sortedDepts = Object.keys(departments).sort();

  return (
    <section>
      <h2>Employee Directory</h2>
      <div id="employee-list">
        {sortedDepts.map((dept) => (
          <div key={dept}>
            <h4>{dept}</h4>
            <ul>
              {departments[dept].sort().map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

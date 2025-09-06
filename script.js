// Run code after page is fully loaded
window.onload = function () {
  const listContainer = document.getElementById("employee-list");

  // Get employee data
  fetch("./src/assets/employees.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const departments = {};

      // Group employees by department
      data.forEach(function (emp) {
        if (!departments[emp.department]) {
          departments[emp.department] = [];
        }
        departments[emp.department].push(emp.name);
      });

      // Create HTML for each department
      for (let dept in departments) {
        const section = document.createElement("div");

        const heading = document.createElement("h4");
        heading.textContent = dept;
        section.appendChild(heading);

        const ul = document.createElement("ul");

        departments[dept].forEach(function (name) {
          const li = document.createElement("li");
          li.textContent = name;
          ul.appendChild(li);
        });

        section.appendChild(ul);
        listContainer.appendChild(section);
      }
    });

  // Set footer year
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();
};

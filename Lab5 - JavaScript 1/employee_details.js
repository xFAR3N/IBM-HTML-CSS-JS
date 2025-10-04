const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    ];
    function displayEmployees(){
        const totalEmployees = employees
        .map(e => `<p>${e.id}: ${e.name} - ${e.age} - ${e.department} - $${e.salary}</p>`)
        .join('');
        document.getElementById("employeesDetails").innerHTML = totalEmployees;
    }

    function calculateTotalSalaries(){
        const totalSalary = employees
        .reduce((acc, e) => acc + e.salary, 0);
        alert(`Total Salary: $${totalSalary}`);
    }

    function displayHREmployees(){
        const HREmployees = employees
        .filter(e => e.department === "HR");
        const displayHREmployees = HREmployees
        .map(e => `<p>${e.id}: ${e.name} - ${e.age} - ${e.department} - $${e.salary}</p>`)
        .join('');
        document.getElementById("employeesDetails").innerHTML = displayHREmployees;
    }

    function findEmployeeById(employeeId){
        const result = employees
        .find(e => e.id === employeeId);
        if(result){
            document.getElementById("employeesDetails").innerHTML = `<p>${result.id}: ${result.name} - ${result.age} - ${result.department} - $${result.salary}</p>`;
        }
        else{
            document.getElementById("employeesDetails").innerHTML = "<p>Employee not found</p>";
        }
    }
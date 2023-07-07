import { Emp } from "./Emp";
export function Listemp() {
    const employeeList = [
        { Id: 101, Name: 'Abhinav', Location: 'Bangalore', Salary: 12345 },
        { Id: 102, Name: 'Abhishek', Location: 'Chennai', Salary: 23456 },
        { Id: 103, Name: 'Ajay', Location: 'Bangalore', Salary: 34567 }
    ];
    const list = employeeList;
    return list.map(
        (emp) => <Emp key={emp.Id} data={emp} />
    );
}
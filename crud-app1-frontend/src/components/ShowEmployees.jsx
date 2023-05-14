import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const ShowEmployees = () => {

    const navigate = useNavigate();
    const [employees, setEmployees] = useState(
        [
            {"id":1, "username":"vshekhaw091321", "email":"sikarvijendrasingh@gmail.com"},
            {"id":2, "username": "nshekhaw","email":"shekhawatBaisa@outlook.com"}
        ]);

        const getData = async () => {
            const { data } = await axios.get(`http://localhost:8081/api/v1/employees`);
            setEmployees(data);
            console.log(data);

          };

        const deleteHandler = async(id) => {
            console.log(id);
            await axios.delete(`http://localhost:8081/api/v1/employees/${id}`);
            getData();

        }

        const updateHandler = (employee) => {
             console.log(employee);
             navigate("/addEmployee", {
                state:employee
             });

        }
          
          useEffect(() => {
            getData();
          }, []);

  return (
    <>
    <h2 className="text-uppercase">Employees </h2>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#Id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Actions </th>
    </tr>
  </thead>
  <tbody>

    {
      employees.map((employee) => {
        return (
            <tr key={employee.id}>
            <th scope="row">{employee.id}</th>
            <td>{employee.username}</td>
            <td>{employee.email}</td>
            <td>
            <button type="button" className="btn btn-danger rightspace" onClick={()=> deleteHandler(employee.id)} >Delete</button>
            <button type="button" className="btn btn-secondary" onClick={()=> updateHandler(employee)}>Update</button>
            </td>
          </tr>
        )
      })
    }
  </tbody>
</table>
</>
  );
}

export default ShowEmployees;
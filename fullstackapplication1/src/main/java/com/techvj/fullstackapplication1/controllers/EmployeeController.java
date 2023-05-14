package com.techvj.fullstackapplication1.controllers;


import com.techvj.fullstackapplication1.entity.Employee;
import com.techvj.fullstackapplication1.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*")
public class EmployeeController {


    @Autowired
    EmployeeService employeeService;
    @RequestMapping(value="details", method = RequestMethod.GET)
    public String getDetails()
    {
        return employeeService.getDetails();
    }

    @GetMapping("/employees")
    public List<Employee> allEmployees()
    {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/employees/{id}")
    public Employee employeeById(@PathVariable Long id)
    {
        return employeeService.getEmployeeById(id);
    }

    @DeleteMapping("/employees/{id}")
    public void deleteEmployeeById(@PathVariable Long id)
    {
         employeeService.deleteEmployee(id);
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee emp)
    {
        return  employeeService.addEmployee(emp);
    }

    @PutMapping("/employees/{id}")
    public Employee addEmployee(@PathVariable Long id, @RequestBody Employee emp)
    {
        return  employeeService.updateEmployee(emp, id);
    }



}

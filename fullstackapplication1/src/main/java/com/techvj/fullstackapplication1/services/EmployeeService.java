package com.techvj.fullstackapplication1.services;

import com.techvj.fullstackapplication1.entity.Employee;
import com.techvj.fullstackapplication1.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;
    private final String myDetail = "This Application created by Vijendra Singh Shekhawat 8th May 2023 was the " +
            "day when we started working on this project.";
    public String getDetails() {
        return myDetail;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    public Employee addEmployee(Employee emp) {
        return employeeRepository.save(emp);
    }

    public Employee updateEmployee(Employee emp, Long id) {
        Employee empFromDb = this.getEmployeeById(id);
        emp.setId(id);
        return this.addEmployee(emp);
    }
}

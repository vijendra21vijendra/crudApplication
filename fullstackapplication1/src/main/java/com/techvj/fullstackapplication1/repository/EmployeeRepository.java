package com.techvj.fullstackapplication1.repository;

import com.techvj.fullstackapplication1.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}

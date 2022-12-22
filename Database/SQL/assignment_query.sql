SELECT * FROM employee_data.employee;


explain
SELECT payslip_id,salary_details.work_start_date,salary_details.work_end_date, employee.First_Name,employee.Last_Name,salary_details.salary_amount,employee.Birth_Date
FROM salary_details
INNER JOIN employee
ON salary_details.employee_id=employee.Employee_Id
where month(birth_date) = 8;
;

create index idx_employee_birth_date on employee(birth_date);

explain
SELECT salary_details.payslip_id,salary_details.work_start_date,salary_details.work_end_date, employee.First_Name,employee.Last_Name,salary_details.salary_amount
FROM salary_details
INNER JOIN employee
ON salary_details.employee_id=employee.Employee_Id
where salary_details.work_end_date LIKE '%-06-%';

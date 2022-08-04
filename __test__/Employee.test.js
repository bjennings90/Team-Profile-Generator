// can we set the name of the employee
// can we get the id
// can we get the email 
const Employee = require('../lib/Employee');

const employee = new Employee ('John', 1, 'john@example.com');

describe('Employee', () => {
 it('should set the name of the employee', () => {
    
    expect(employee.getName()).toEqual('John');
 })

 it('should set the id', () => {
    employee.id = 2
    expect(employee.id).toEqual(2);
 })

 it ('should set the email', () => {
    employee.email = 'abby@example.com';
    expect(employee.email).toEqual('abby@example.com');
})

it('should set the role', () => {
    employee.role = 'Employee'
    expect(employee.role).toEqual('Employee')
})

 it('should get the id', () => {
    expect(employee.getId()).toEqual(2);
 })

 it ('should get the email', () => {
    expect(employee.getEmail()).toEqual('abby@example.com');
 })

 it('should get the role', () => {
    expect(employee.getRole()).toEqual('Employee')
 })

 it('should get the name', () => {
    expect(employee.getName()).toEqual('John')
 })
})
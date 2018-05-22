import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';


describe('Employee Row Component: ', () => {

  it('should instantiate the Employee Table', () => {
    const employee = {
      username: 'fflintstone',
      email: 'fred.flintstone@slatequarry.com',
      firstName: 'Fred',
      lastName: 'Flintstone',
      admin: true,
    };
  
    const component = shallow(<EmployeeRow employee={employee} />);
  
    expect(component).toContainReact(<td>fred.flintstone@slatequarry.com</td>);
    expect(component).toContainReact(<td>Fred</td>);
    expect(component).toContainReact(<td>Flintstone</td>);
    expect(component).toContainReact(<td>fflintstone</td>);
    expect(component).toContainReact(<td>Yes</td>);
  });

  it('should instantiate the Employee Table with admin as yes', () => {
    const employee = {
      admin: true,
    };
  
    const component = shallow(<EmployeeRow employee={employee} />);
    expect(component).toContainReact(<td>Yes</td>);
  });
  
  it('should instantiate the Employee Table with admin as no', () => {
    const employee = {
      admin: false,
    };
  
    const component = shallow(<EmployeeRow employee={employee} />);
    expect(component).toContainReact(<td>No</td>);
  });

});

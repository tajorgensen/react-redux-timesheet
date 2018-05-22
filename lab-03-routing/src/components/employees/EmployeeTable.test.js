import React from 'react';
import EmployeeTable from './EmployeeTable';
import { mount } from 'enzyme';

describe('Employee Table Component: ', () => {

  it('should instantiate the Employee Table', () => {
    const employees = [
      {
        username: 'fflintstone',
        email: 'fred.flintstone@slatequarry.com',
        firstName: 'Fred',
        lastName: 'Flintstone',
        admin: true,
        _id: 1,
      },
    ];
  
    const component = mount(<EmployeeTable employees={employees} />);
  
    expect(component).toContainReact(<th>Last Name</th>);
    expect(component).toContainReact(<td>fred.flintstone@slatequarry.com</td>);
    expect(component).toContainReact(<td>Fred</td>);
    expect(component).toContainReact(<td>Flintstone</td>);
    expect(component).toContainReact(<td>fflintstone</td>);
    expect(component).toContainReact(<td>Yes</td>);
    expect(component).toIncludeText('Flintstone');
  
    expect(component.find('tbody tr')).toHaveLength(1);
  });

  it('should instantiate the Employee Table with two rows', () => {
    const employees = [
      {
        username: 'fflintstone',
        email: 'fred.flintstone@slatequarry.com',
        firstName: 'Fred',
        lastName: 'Flintstone',
        admin: true,
        _id: 1,
      },
      {
        username: 'wflintstone',
        email: 'wilma.flintstone@slatequarry.com',
        firstName: 'Wilma',
        lastName: 'Flintstone',
        admin: false,
        _id: 2,
      },
    ];
  
    const component = mount(<EmployeeTable employees={employees} />);
  
    expect(component).toContainReact(<th>Last Name</th>);
    expect(component).toContainReact(<td>fred.flintstone@slatequarry.com</td>);
    expect(component).toContainReact(<td>Fred</td>);
    expect(component).toContainReact(<td>Flintstone</td>);
    expect(component).toContainReact(<td>fflintstone</td>);
    expect(component).toContainReact(<td>Yes</td>);
    expect(component).toContainReact(<td>wilma.flintstone@slatequarry.com</td>);
    expect(component).toContainReact(<td>Wilma</td>);
    expect(component).toContainReact(<td>Flintstone</td>);
    expect(component).toContainReact(<td>wflintstone</td>);
    expect(component).toContainReact(<td>No</td>);

  
    expect(component.find('tbody tr')).toHaveLength(2);
  });

});

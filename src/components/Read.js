import React, { Component } from 'react'
import Delete from './Delete'
export default class Read extends Component {
    state = {
        isLoading: true,
        employees: [],
        items:[]
      };
    
      async componentDidMount() {
        let response = await fetch('/brian_api/v1/employees/');
        let itemres = await fetch('/brian_api/v1/item/');
        let body = await response.json();
        let bodyy = await itemres.json();
        this.setState({ employees: body, isLoading: false,items:bodyy });
      }

    
      render() {
          let a =0;
        const {employees, isLoading,items} = this.state;
         
        if (isLoading) {
          return <p>Loading...</p>;
        }
    
        return (
          <div className="App">
          
                <h2>Transactions</h2>
                {employees.map(employee =>
                  <div key={employee.id}>
                    
                    {employee.firstName}
                    
                    
                    {employee.lastName}
                    
                    {employee.email}
                    
                    <Delete item={employee.id}/>
                  </div>                 
                )}
               
                {items.map(item =>
                  <div key={item.id}>
                    {item.itemName}
                    {item.itemPrice}
                    <br></br>
                    
                    <Delete item={item.id}/>
                  </div>                 
                )}


              </div>
          
        );
      }
}

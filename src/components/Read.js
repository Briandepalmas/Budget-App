import React, { Component } from 'react'
import Delete from './Delete'
import axios from 'axios'
import '../App.css'
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
          let itemAmount =0;
          
          
        const {employees, isLoading,items} = this.state;
         
        {items.map(item =>
            <div key={item.id}>
    
                 {itemAmount+=item.itemPrice}
            </div>                   
          )}

          
        
          if (isLoading) {
          return <p>Loading...</p>;
        }
    
        return (
          <div className="App">
          
                <h1 className="list">Transactions</h1>
                {employees.map(employee =>
                  <div key={employee.id}>
                    
                    {employee.firstName}
                    {employee.lastName}                
                    {employee.email}
                    
                    <Delete item={employee.id}/>
                  </div>                 
                )}
               
                {items.map(item =>
                  <div  key={item.id}>
                    <div className="item-list">
                        <div className="item-name">✔️ {item.itemName}</div>
                        
                        <div className="item-price">${item.itemPrice}</div>
                        <Delete item={item.id}/>
                    </div>
       
                    <div id="space"></div>
         
                  </div>  
                              
                )}
                {/* {rates.map(rate =>
                     <div key={rate}>
    
                        <h1>{rate}</h1>
                     </div>                   
          )} */}
                <div className="item-amount">
                     Total amount spent: $
                    {itemAmount} 
                    
                </div>
                    
              </div>
          
        );
      }
}

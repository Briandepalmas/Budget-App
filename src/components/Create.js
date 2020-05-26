import React, { Component } from 'react'

export default class Create extends Component {
    
    state = {
        isLoading: true,
        firstName:"",
        lastName:"",
        itemName: "",
        itemPrice:null
      };
         add=()=> { 
              const addItem = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                itemName: this.state.itemName,
                itemPrice: this.state.itemPrice,
                day:"Monday"
                 })
             }
            //  const addEmployee = {
            //               method: 'POST',
            //               headers: { 'Content-Type': 'application/json' },
            //               body: JSON.stringify({ 
            //               firstName:this.state.firstName,
            //               lastName:this.state.lastName,
            //               email:"yeserot@hamil.com" })
            //       }
            //      fetch('/brian_api/v1/employees',addEmployee)
                 fetch('/brian_api/v1/item',addItem);
       } 

       onChange = (event) => (this.setState({[event.target.name]: event.target.value }));




      render() {

    
        return (
            <div>
             
              <h1 className="budget-logo">💸My Budget💸</h1>
              <h1 className="logo">Enter Items ↴</h1>
              <div>                  
                
                <input className="item-input" type="text" name="itemName" placeholder="Enter Item Purchased"
                value={this.state.itemName} onChange={this.onChange}/>

                <input className="price-input" 
                type="text" name="itemPrice" placeholder="Price"
                value={this.state.itemPrice} onChange={this.onChange}/>
                <button className="add-button" onClick={this.add}>ADD</button>
              
              </div> 
             
            </div>
           
        )
      }
}

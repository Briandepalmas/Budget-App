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
                <h2>Enter Items</h2>
              <div className="App">                  
                
                <input type="text" name="itemName" placeholder="enter item"
                value={this.state.itemName} onChange={this.onChange}/>

                <input  
                type="text" name="itemPrice" placeholder="enter item"
                value={this.state.itemPrice} onChange={this.onChange}/>
                <button onClick={this.add}>ADD</button>
              
              </div> 
             
            </div>
           
        )
      }
}

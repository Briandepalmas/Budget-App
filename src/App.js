// import React from 'react'
// import Read from './components/Read'
// import Create from './components/Create'
// import './App.css'


// export default function App() {



//   return (
//     <div className="background">
      
//      <Create className="cc"/>
//      <Read/>
//     </div>
//   )
// }
import React, { Component } from 'react'
import Read from './components/Read'
import Create from './components/Create'
import axios from 'axios'
import './App.css'

export default class App extends Component {

state={
  url:[]
}

componentDidMount(){
  axios.get("https://pixabay.com/api/?key=16743270-da0477b7dde1f01a339a7f61a&q=yellow+flowers&image_type=photo&category=backgrounds")
  .then(response => {this.setState({url:response.data.hits})
  console.log(this.state.url[0].pageURL)
   })
  .catch(error => {
    console.log(error)
  })
}

   theme(){

//     let x=Math.floor(Math.random() * (6 - 0) + 0) 
//  //let z =this.state.url[x].pageURL

//    let z =this.state.url[0].pageURL
//   return  {backgroundImage: "url("+z+")"}  

      
  }


  render() {


    return (
      <div >
        {/* <button onClick={this.theme}></button> */}
        <Create/>
        <Read/>
      </div>
    )
  }
}

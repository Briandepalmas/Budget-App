// import React from 'react'

// export default function Delete(props) {

//         //console.log('/brian_api/v1/item/' +props.item)
//         fetch('/brian_api/v1/item/' +props.item, 
//         { method: 'DELETE'})

        
    
//     return (
//         <div>
//             <button onClick={Delete}>DELETE</button>
//         </div>
//     )
// }
import React, { Component } from 'react'

export default class Delete extends Component {


    deleteitem = () => {
        console.log(this.props.item)
        fetch('/brian_api/v1/item/'+this.props.item, 
        { method: 'DELETE',
        })}

    render() {
        return (
            <div>
                <button id="delete-button" onClick={this.deleteitem}>DELETE</button>
            </div>
        )
    }
}

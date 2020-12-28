import React from 'react';
import { connect } from 'react-redux';

//import Data from '../../Extras/Products.json';
// const handleClick = (id)=>{
//     console.log('meee'+id);
//     this.addToCart(id);
//     //this.props.addToCart(id);
// }

class Cardlist extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick(id) {
        this.props.addToCart(id);
    }
    render(){
        const numbers = this.props.data;
        if(numbers){
            return <div className="container">
            {numbers.map((data)=>(
                <div className="card mycardwidth" >
                <div className="card-body">
                  <h5 className="card-title">{data.item}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{data.price}</h6>
                  <p className="card-text">{data.uom}</p>
                  <button className="card-link btn btn-primary" onClick={()=>{this.handleClick(data)}}>Add Me</button>
                  
                </div>
              </div>
            ))}
            </div>
        } else {
            return '';
        }            
    }
}  
const mapDispatchToProps= (dispatch)=>{
    return{ 
        addToCart: (id)=>{
            dispatch({type:'ADD_CART',id:id})
        }
    }
}
export default connect(null,mapDispatchToProps)(Cardlist);
  

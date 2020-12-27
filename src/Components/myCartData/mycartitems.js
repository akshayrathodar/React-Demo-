import React from 'react';

import Heading from '../Header/heading';
import Cardlist from '../Landing/itemContainer';
import { connect } from 'react-redux';


class MycartItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:props.items
        }
        console.log(props);
        
    }
    render(){
        
        return(
            <>
                <Heading text='My Cart Items'/>
                
                <Cardlist data={this.props.items}/>                
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        
        items: state.ids
    }
 }


export default connect(mapStateToProps)(MycartItems) ;
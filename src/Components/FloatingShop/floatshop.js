import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FloatShop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        console.log(props);
    }
    componentDidMount(){
        this.setState({counter:this.props.items});
    }
    
    render(){
        return(
            <>
                <a href="#" class="float">
                    <Link to='/cart'>
                    <i class="fa fa-shopping-cart my-float"></i>
                    <span class="badge badge-light">{this.state.counter}</span>
                    </Link>
                </a>    

            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.count
    }
 }


export default connect(mapStateToProps)(FloatShop);
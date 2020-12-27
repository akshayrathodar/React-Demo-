import React , { Component } from 'react';


import Data from '../../Extras/Products.json';
import Heading from '../Header/heading';
import CardList from './itemContainer';
import FloatingShop from "../FloatingShop/floatshop";
import './style.css';
class landingPage extends Component {

    constructor(props) {
        super();
        this.state = {
            myjson : []
        }
        // Data.map((ed)=>{
        //     console.log(ed);
        // })
    }
    componentDidMount(){
       this.setState({'myjson':Data}); 
       console.log(Data);
    }
    

    render(){
        return(
            <>
                <Heading text="Product Datas"/>
                <CardList data={this.state.myjson} />               
                <FloatingShop />
            </>
        );
    }
}

export default landingPage;
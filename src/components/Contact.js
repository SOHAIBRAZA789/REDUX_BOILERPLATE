import React from 'react';
import {connect} from 'react-redux';

const Contact = (props) => (
    <div>
        <h1>Contact</h1>
        <p>This is Contact Page</p>
        <h3>{props.userName}</h3>
    </div>
);

const mapStateToProps = (state) =>{
    return (
        {
           userName : state.userReducer.name
        })
   }
   const mapDispatchToProps = (dispatch)=>{
       return({
   
       })
   }
   export default connect(mapStateToProps,mapDispatchToProps)(Contact);
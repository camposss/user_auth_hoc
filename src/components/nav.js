import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {switchAuthentication} from "../actions/";

const Nav = props=>{

    function renderButton(){
        if (props.auth){
           return( <button onClick={()=>props.switchAuthentication(false)} className='btn orange accent-3'>Sign Out</button>)
        }
        return <button onClick={()=>props.switchAuthentication(true)} className='btn light-blue accent-3'>Sign In</button>

    }
    return(
        <nav>
            <div className="nav-wrapper grey darken-2">
                <Link to='/' className='brand-logo left'>The User App</Link>
                <ul className='right '>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/secret-list'>Secret List</Link>
                    </li>
                    <li>
                        <Link to='/protected-stuff'>Protected Stuff</Link>
                    </li>
                    <li>
                        {renderButton()}
                    </li>

                </ul>
            </div>
        </nav>
    )
};
function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}
export default connect(mapStateToProps, {switchAuthentication})(Nav);
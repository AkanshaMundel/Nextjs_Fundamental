import Link from 'next/link';
import { Component } from 'react';

function HomePage(){
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link  href="/portfolio">portfolio</Link>
                </li>
                <li>
                    <Link  href="/clients">clients</Link>
                </li>
            </ul>
        </div>
    )
}
export default HomePage;

//using the link in a href -> chnge the curr state and stop the prossces to mange the state 
//so here we using link in place of a  , so without loosing ap state or not to send again new http request we use link 
//aslo-> pre fetch the data on hovering 
//why next ? 
// file based routing folder structure and navigate with Link Component 
//in rect req switch router and wextra bolier plate code like hve to mention which route gones where 

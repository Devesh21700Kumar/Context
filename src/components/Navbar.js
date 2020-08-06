import React,{Component} from 'react';
import '../components/Navbar.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
              <h1>Context APP</h1>
              <ul class='hey'>
               <li>HOME</li>
               <li>About</li>
               <li>Contact</li>
              </ul>
            </nav>
         );
    }
}
 
export default Navbar;
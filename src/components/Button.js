import React,{Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';

/*class Button extends Component {
    static contextType=LanguageContext;
    render() { 
        const text=this.context==='english'?'Submit':'Vaarghoner';
        console.log(this.context);
        return ( <button className='ui button primary'>{text}</button> );
    }
}*/
class Button extends Component {
   
    render() { 

        return (
            <button className='ui button primary'>
              <LanguageContext.Consumer>
                  {(value)=>value==='english'?'Submit':'Voor'}
              </LanguageContext.Consumer>
            </button> );
    }  
}

 
export default  Button ;
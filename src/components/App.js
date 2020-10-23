import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import BookList from '../components/BookList';
import UserCreate from '../components/UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector'
import {LanguageStore} from '../contexts/LanguageContext';

/*function App() {
  return (
    <div className="App">
    <Navbar/>
    <BookList/>
    </div>
  );
}*/

class App extends Component {
  state = {language:'english'};


//onLanguageChange=language=>{
 // this.setState({language:language});
//}

  render() { 
    return (
       <div className='ui container'>
       
     
         <LanguageStore>
       <LanguageSelector ></LanguageSelector>
       
       
      <UserCreate/>
  
      </LanguageStore>
      </div> 
      );
  }
}
 
export default App;


import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import BookList from '../components/BookList';
import UserCreate from '../components/UserCreate';

/*function App() {
  return (
    <div className="App">
    <Navbar/>
    <BookList/>
    </div>
  );
}*/

class App extends Component {
  state = {language:'English'};


onLanguageChange=language=>{
  this.setState({language:language});
}

  render() { 
    return (
       <div className='ui container'>
       
       <div>
         Select A language
         <i className='flag us' onClick={()=>this.onLanguageChange('English')}/>
         <i className='flag nl' onClick={()=>this.onLanguageChange('Hindi')}/>
       </div>
      <UserCreate/>
      </div> );
  }
}
 
export default App;


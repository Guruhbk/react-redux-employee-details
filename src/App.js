// import logo from './logo.svg';
import './App.css';
import PersonalDetails from "./component/personalDetails";
import {Provider} from 'react-redux';
import store from './store/personalDetailsStore'
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <PersonalDetails/>
    </div>
    </Provider>
  );
}

export default App;

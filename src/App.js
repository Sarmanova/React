import './App.css';
import { Route } from "react-router-dom"
import AllMeetup from '../src/pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favorites from '../src/pages/Favorites';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
     
      
        <Route exact path='/' component={AllMeetup} />
        <Route exact path='/new-meetup' component={NewMeetup} />
        <Route exact path='/favorites' > <Favorites /></Route>
        
   
    </Layout>
  );
}

export default App;

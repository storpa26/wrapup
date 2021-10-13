import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Chemistry from './components/Chemistry/Chemistry';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ICT from './components/ICT/ICT';
import Instructors from './components/Instructors/Instructors';
import MainHead from './components/MainHead/MainHead';
import Math from './components/Math/Math';
import Physics from './components/Physics/Physics';

function App() {

  return (
    <div>
      <BrowserRouter>
        {/* <Header></Header> */}
        <Switch>
          <Route exact path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <MainHead></MainHead>
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/phy">
            <MainHead></MainHead>
            <Physics></Physics>
          </Route>
          <Route exact path="/chem">
            <MainHead></MainHead>
            <Chemistry></Chemistry>
          </Route>
          <Route exact path="/math">
            <MainHead></MainHead>
            <Math></Math>
          </Route>
          <Route exact path="/ict">
            <MainHead></MainHead>
            <ICT></ICT>
          </Route>
          <Route exact path="/instructors">
            <MainHead></MainHead>
            <Instructors></Instructors>
          </Route>
          <Route exact path="/about">
            <MainHead></MainHead>

            <About></About>
          </Route>
          <Route exact path="*">
            <MainHead></MainHead>

            <Error></Error>
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;

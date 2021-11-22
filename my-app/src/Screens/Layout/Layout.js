import React from "react";
import STHeader from "../Layout/Header/STHeader";
import MainSection from "./MainSection/MainSection";
import MainContent from "./MainSection/MainContent";
import LatestMovies from "./MainSection/LatestMovies";
import SectionHero from "./SectionHero";
import UpperFooter from "./Footer/UpperFooter";
import LowerFooter from "./Footer/LowerFooter";
import Following from "./Following/Following";
import MultitudeCarousel from "./Carousel.js/MultitudeCarousel";
import CreateChannel from "./Form/CreateChannel";

import New from "./New/New";
import Trending from "./Trending/Trending";
import HorrorSeasons from "./PopularHorrorSeasons/HorrorSeasons";
import Comedy from "./Comedy-section/Comedy";
// import Trending from "../../Trending/Trending";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function Layout() {
  const [toggleHeader, setToggleHeader] = React.useState(false);
  return (
    <div>
      <STHeader />
      

      

      {/* <HorrorSeasons/>

      <Comedy/>

      <CreateChannel />

      <Trending />

      <New/> 

     <Following/> */}

      {/* <MultitudeCarousel />

      <Following />
     */}

      {/* <LatestMovies/> */}

      {/* <BrowserRouter>
      <Route path="/trending">
        <Trending />
      </Route>
      </BrowserRouter> */}

      <Switch>

      <Route exact path="/new" component={New}>
       
      </Route>

      <Route exact path="/home"><SectionHero />
      <MainSection />
      <MainContent /> </Route>

      <Route path="/trending" exact>
        <Trending />
      </Route>

      
      <Route path="/comedy" exact>
        <Comedy />
      </Route>
       
      </Switch>
      <UpperFooter />

<LowerFooter />
     
    </div>
  );
}

export default Layout;

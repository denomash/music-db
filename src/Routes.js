import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./containers/Main";
import { SearchProvider } from "./hooks/SearchContext";
import ArtistResults from "./containers/Artist/Result";
import Header from "./components/Header";

const AppRoutes = () => {
  return (
    <SearchProvider>
      <Router>
        <Header />
        <div className="flex justify-center items-center h-full w-screen mt-12">
          <div className="w-10/12 lg:w-8/12">
            <Switch>
              <Route exact path="/artist">
                <ArtistResults />
              </Route>
              <Route exact path="/">
                <App />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </SearchProvider>
  );
};

export default AppRoutes;

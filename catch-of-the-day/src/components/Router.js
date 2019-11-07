import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

//stateless function component
const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* switch tries the first route and if it doesnt work tries the next and so on*/}
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} /> {/* catch all, leave of the path */}
    </Switch>
  </BrowserRouter>
);

export default Router;

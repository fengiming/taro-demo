import { Taro } from "@tarojs/taro";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/demo/home";
import Detail from "../pages/demo/detail";

// eslint-disable-next-line taro/no-stateless-component
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;

var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

// whenever we hit the root of the app, react renders the main component
module.exports = (
  <Route name='app' path='/' handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
);

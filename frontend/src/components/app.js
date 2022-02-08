import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Splash from './splash/splash'
import About from './about/about'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import UserProfileContainer from './user_profile/user_profile_container';
import DeckFormContainer from './deck/deck_form_container'
import CardFormContainer from './card/card_form_container'
import DeckContainer from './deck/deck_container'
import "./reset.css"

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
      <Route exact path="/" component={Splash} />
      <Route exact path="/about" component={About} />
      <ProtectedRoute exact path="/decks/new" component={DeckFormContainer} />
      <ProtectedRoute path="/decks/:id/study" component={DeckContainer} />
      <ProtectedRoute path="/decks/:id" component={DeckContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;

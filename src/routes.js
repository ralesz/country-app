import React from 'react';
import { Route, IndexRoute  } from 'react-router';
import Navigation from './presentional/navigation.component';
import Home from './presentional/home.component';
import Contact from './presentional/contact.component';
import NotFound from './presentional/not-found.component';

export default (
    <Route path='/' component={Navigation}>
      <IndexRoute component={Home}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
); 
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home';
import PostsList from './components/PostsList';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={PostsList} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
);

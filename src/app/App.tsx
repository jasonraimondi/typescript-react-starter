import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Routes } from '../routes';
import Sample from './Sample';
import { SamplePage } from './SamplePage';

class App extends React.Component {
   public render() {
      return (
         <main>
            <ul>
               <li>
                  <Link to={Routes.SAMPLE.create({})}>Home</Link>
               </li>
               <li>
                  <Link to={Routes.SAMPLE_SHOW.create({ id: 'foo-bar' })}>Page</Link>
               </li>
            </ul>
            <Switch>
               <Route exact path={Routes.SAMPLE.template()} component={Sample}/>
               <Route exact path={Routes.SAMPLE_SHOW.template()} component={SamplePage}/>
            </Switch>
         </main>
      );
   }
}

export default withRouter(App);

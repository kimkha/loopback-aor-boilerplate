import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';
import { Resource, Admin, sfSaga, apiClient } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import { Delete } from 'admin-on-rest/lib/mui';
import messages from '../messages';

import { UserList, UserShow, UserCreate, UserEdit } from './crud/user';
import { CandidateList, CandidateShow, CandidateCreate, CandidateEdit } from './crud/candidate';
// auto gen crud, please don't remove this comment


class App extends Component {
  render() {
    return (
      <Admin
        restClient={loopbackRestClient(__API_URL__)}
        title='Loopback AOR Boilerplate'
        messages={messages}
        logoutUrl="/logout"
      >
        <Resource name='candidates' list={CandidateList} show={CandidateShow} edit={CandidateEdit} create={CandidateCreate} remove={Delete} />
        <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
      </Admin>
    );
  }
}

export default App;

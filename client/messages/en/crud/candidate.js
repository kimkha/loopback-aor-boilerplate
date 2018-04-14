import BaseModelMessage from '../base-model';

export default {
  candidates: {
    name: 'Candidate |||| Candidates',
    fields: {
      ...BaseModelMessage,
      lastname: 'Lastname',
      firstname: 'Firstname',
      email: 'Email',
      birthday: 'Birthday',
      gender: 'Gender',
    },
  },
};

import BaseModelMessage from '../base-model';

export default {
  users: {
    name: 'User |||| Users',
    fields: {
      ...BaseModelMessage,
      realm: 'Realm',
      fullName: 'Full Name',
      username: 'Username',
      password: 'Password',
      email: 'Email',
      address1: 'Address 1',
      address2: 'Address 2',
      phone1: 'Phone 1',
      phone2: 'Phone 2',
      emailVerified: 'Email Verified',
      verificationToken: 'Verification Token',
    },
  },
};

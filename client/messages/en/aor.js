import aorMessage from 'admin-on-rest/lib/i18n/messages';
let aorNewMessage = {
  navigation: {
    no_results: 'No result',
  },
  page: {
    dashboard: 'Dashboard',
  },
  auth: {
    logout: 'Logout',
  },
}

export default {...aorMessage.aor, ...aorMessage};

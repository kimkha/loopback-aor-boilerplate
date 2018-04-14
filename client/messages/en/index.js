import GenericMessage from './generic';
import AorMessage from './aor';
import CandidateMessage from './crud/candidate';

const messages = {
  'aor': {...AorMessage},
  'generic': { ...GenericMessage },
  'resources': {
    ...CandidateMessage,
  }/* DONOT CHANGE THIS LINE*/,
};

export default messages;

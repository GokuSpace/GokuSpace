import account from './account';

const controller = {
  getAccounts(req, res) {
    return 'Accounts';
  },
  account,
  getUsers(req, res) {
    return 'Users';
  },
  getFriends(req, res) {
    return 'Friends';
  },
  getPosts(req, res) {
    return 'Posts';
  },
  getVotes(req, res) {
    return 'Votes';
  },
  getEvents(req, res) {
    return 'Events';
  },
  getChatrooms(req, res) {
    return 'Chatrooms';
  },
  getMessages(req, res) {
    return 'Messages';
  },
};

export default controller;

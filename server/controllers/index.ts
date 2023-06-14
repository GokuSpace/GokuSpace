import account from './account';
import anime from './anime';

const controller = {
  account,
  anime,
  getAccounts(req, res) {
    'return accounts'
  },
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
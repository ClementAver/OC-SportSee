export default class UserAverageSessions {
  constructor(res) {
    this.id = res.data.userId;
    this.sessions = res.data.sessions;
  }
}

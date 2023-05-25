export default class UserActivity {
  constructor(res) {
    this.id = res.data.userId;
    this.sessions = res.data.sessions;
  }
}

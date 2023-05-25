export default class UserPerformance {
  constructor(res) {
    this.id = res.data.userId;
    this.kind = res.data.kind;
    this.data = res.data.data;
  }
}

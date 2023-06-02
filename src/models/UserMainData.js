export default class UserMainData {
  constructor(res) {
    this.id = res.data.id;
    this.keyData = res.data.keyData;
    if (res.data.todayScore) {
      this.todayScore = res.data.todayScore;
    } else if (res.data.score) {
      this.todayScore = res.data.score;
    }
    this.userInfos = res.data.userInfos;
  }
}

export default class UserMainData {
  constructor(res) {
    this.id = res.data.id;
    this.keyData = res.data.keyData;
    this.todayScore = res.data.todayScore;
    this.userInfos = res.data.userInfos;
  }
}

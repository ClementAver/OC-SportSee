import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/data";

export default class Store {
  constructor(userId, mocked) {
    this.mocked = mocked;
    this.userId = userId;
  }

  getUserMainData() {
    if (this.mocked) {
      const user = USER_MAIN_DATA.filter((user) => user.id === this.userId)[0];
      if (user) {
        return new Promise((resolve) => resolve({ data: user }));
      } else {
        throw new Error("server response error");
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}`).then((res) => {
        if (res.ok) {
          const result = res.json();
          return result;
        }
        throw new Error("server response error");
      });
    }
  }

  getUserActivity() {
    if (this.mocked) {
      const user = USER_ACTIVITY.filter((user) => user.userId === this.userId)[0];
      if (user) {
        return new Promise((resolve) => resolve({ data: user }));
      } else {
        throw new Error("server response error");
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}/activity`).then((res) => {
        if (res.ok) {
          const result = res.json();
          return result;
        }
        throw new Error("server response error");
      });
    }
  }

  getUserAverageSessions() {
    if (this.mocked) {
      const user = USER_AVERAGE_SESSIONS.filter((user) => user.userId === this.userId)[0];
      if (user) {
        return new Promise((resolve) => resolve({ data: user }));
      } else {
        throw new Error("server response error");
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}/average-sessions`).then((res) => {
        if (res.ok) {
          const result = res.json();
          return result;
        }
        throw new Error("server response error");
      });
    }
  }

  getUserPerformance() {
    if (this.mocked) {
      const user = USER_PERFORMANCE.filter((user) => user.userId === this.userId)[0];
      if (user) {
        return new Promise((resolve) => resolve({ data: user }));
      } else {
        throw new Error("server response error");
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}/performance`).then((res) => {
        if (res.ok) {
          const result = res.json();
          return result;
        }
        throw new Error("server response error");
      });
    }
  }
}

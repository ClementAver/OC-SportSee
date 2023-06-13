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
        return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}`)
        .then((res) => {
          if (res.ok) {
            const result = res.json();
            return result;
          }
          return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
        })
        .catch((err) => new Promise((resolve) => resolve({ message: "Ce service est momentanément indisponible.", labor: "Veuillez réessayer plus tard." })));
    }
  }

  getUserActivity() {
    if (this.mocked) {
      const user = USER_ACTIVITY.filter((user) => user.userId === this.userId)[0];
      if (user) {
        return new Promise((resolve) => resolve({ data: user }));
      } else {
        return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}/activity`)
        .then((res) => {
          if (res.ok) {
            const result = res.json();
            return result;
          }
          return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
        })
        .catch((err) => new Promise((resolve) => resolve({ message: "Ce service est momentanément indisponible.", labor: "Veuillez réessayer plus tard." })));
    }
  }

  getUserAverageSessions() {
    if (this.mocked) {
      const user = USER_AVERAGE_SESSIONS.filter((user) => user.userId === this.userId)[0];
      if (user) {
        return new Promise((resolve) => resolve({ data: user }));
      } else {
        return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}/average-sessions`)
        .then((res) => {
          if (res.ok) {
            const result = res.json();
            return result;
          }
          return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
        })
        .catch((err) => new Promise((resolve) => resolve({ message: "Ce service est momentanément indisponible.", labor: "Veuillez réessayer plus tard." })));
    }
  }

  getUserPerformance() {
    if (this.mocked) {
      const user = USER_PERFORMANCE.filter((user) => user.userId === this.userId)[0];
      if (user) {
        return new Promise((resolve) => resolve({ data: user }));
      } else {
        return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
      }
    } else {
      return fetch(`http://localhost:3001/user/${this.userId}/performance`)
        .then((res) => {
          if (res.ok) {
            const result = res.json();
            return result;
          }
          return new Promise((resolve) => resolve({ message: "Cet utilisateur n'existe pas." }));
        })
        .catch((err) => new Promise((resolve) => resolve({ message: "Ce service est momentanément indisponible.", labor: "Veuillez réessayer plus tard." })));
    }
  }
}

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Store from "../../store/Store";
import UserMainData from "../../models/UserMainData";
import UserActivity from "../../models/UserActivity";
import UserAverageSessions from "../../models/UserAverageSessions";
import UserPerformance from "../../models/UserPerformance";

export default function Dashboard() {
  const { id } = useParams();
  const [userMainData, setUserMainData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const mocked = true;
    const store = new Store(parseInt(id), mocked);

    store.getUserMainData().then((res) => {
      const user = new UserMainData(res);
      setUserMainData(user);
    });
    store.getUserActivity().then((res) => {
      const user = new UserActivity(res);
      setUserActivity(user);
    });
    store.getUserAverageSessions().then((res) => {
      const user = new UserAverageSessions(res);
      setUserAverageSessions(user);
    });
    store.getUserPerformance().then((res) => {
      const user = new UserPerformance(res);
      setUserPerformance(user);
    });
  }, [id]);

  if (userMainData !== null && userActivity !== null && userAverageSessions !== null) {
    return (
      <>
        <h1>Dashboard</h1>
        <p>{userMainData.userInfos.firstName}</p>
        <p>{userActivity.sessions[0].day}</p>
        <p>{userAverageSessions.sessions[0].day}</p>
        <p>{userPerformance.data[0].value}</p>
      </>
    );
  }
}

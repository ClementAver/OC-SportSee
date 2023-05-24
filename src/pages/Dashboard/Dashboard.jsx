import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Store from "../../store/Store";

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
      setUserMainData(res.data);
    });
    store.getUserActivity().then((res) => {
      setUserActivity(res.data);
    });
    store.getUserAverageSessions().then((res) => {
      setUserAverageSessions(res.data);
    });
    store.getUserPerformance().then((res) => {
      setUserPerformance(res.data);
    });
  }, [id]);

  if (userMainData !== null && userActivity !== null && userAverageSessions !== null && userPerformance !== null) {
    return (
      <>
        <h1>Dashboard</h1>
        <p>{userMainData.userInfos.firstName}</p>
        <p>{userActivity.sessions[0].day}</p>
        <p>{userAverageSessions.sessions[0].sessionLength}</p>
        <p>{userPerformance.data[0].value}</p>
      </>
    );
  }
}

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Store from "../../store/Store";
import UserMainData from "../../models/UserMainData";
import UserActivity from "../../models/UserActivity";
import UserAverageSessions from "../../models/UserAverageSessions";
import UserPerformance from "../../models/UserPerformance";
import Daily from "../../components/Daily/Daily";
import Average from "../../components/Average/Average";
import Skills from "../../components/Skills/Skills";
import Score from "../../components/Score/Score";

export default function Dashboard() {
  const { id } = useParams();
  const [userMainData, setUserMainData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const mocked = true;
    const store = new Store(parseInt(id), mocked);

    store
      .getUserMainData()
      .then((res) => {
        const user = new UserMainData(res);
        setUserMainData(user);
      })
      .catch((err) => {
        setUserMainData("id not found.");
      });
    store
      .getUserActivity()
      .then((res) => {
        const user = new UserActivity(res);
        setUserActivity(user);
      })
      .catch((err) => {
        setUserActivity("id not found.");
      });
    store
      .getUserAverageSessions()
      .then((res) => {
        const user = new UserAverageSessions(res);
        setUserAverageSessions(user);
      })
      .catch((err) => {
        setUserAverageSessions("id not found.");
      });
    store
      .getUserPerformance()
      .then((res) => {
        const user = new UserPerformance(res);
        setUserPerformance(user);
      })
      .catch((err) => {
        setUserPerformance("id not found.");
      });
  }, [id]);

  if (userMainData !== null && userActivity !== null && userAverageSessions !== null && userPerformance !== null) {
    return (
      <main className="dashboard">
        <h1>
          Bonjour <span className="name">{userMainData.userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        <Daily userActivity={userActivity.sessions} />
        <Average userAverageSessions={userAverageSessions} />
        <Skills userPerformance={userPerformance} />
        <Score userMainData={userMainData} />
      </main>
    );
  } else if (userMainData === "id not found." || userActivity === "id not found." || userAverageSessions === "id not found." || userPerformance === "id not found.") {
    throw new Error(userMainData);
  }
}

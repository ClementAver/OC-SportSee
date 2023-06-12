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
import Count from "../../components/Count/Count";

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
    if (userMainData === "id not found." || userActivity === "id not found." || userAverageSessions === "id not found." || userPerformance === "id not found.") {
      throw new Error(userMainData);
    }
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
        <div className="count-container">
          <Count
            svg={
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 17 20"
              >
                <path
                  d="M10.9,7.9c0,0,0.9-5.5-2.9-7.9C7.9,1.9,7,3.7,5.5,4.9c-1.6,1.4-4.7,4.6-4.6,8.1c0,3,1.6,5.7,4.3,7.1
	c0.1-1.3,0.7-2.6,1.7-3.4c0.9-0.7,1.4-1.6,1.6-2.7c2.3,1.2,3.7,3.5,3.9,6.1v0c2.5-1.2,4.2-3.6,4.3-6.4c0.3-3.2-1.5-7.6-3.1-9
	C13,5.9,12.1,7,10.9,7.9z"
                />
              </svg>
            }
            h2={`${userMainData.keyData.calorieCount}kcal`}
            labor={"Calories"}
          />
          <Count
            svg={
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 19 19"
              >
                <path
                  d="M18.2,2.5c-0.4-0.4-0.8-0.6-1.2-0.6c-0.1-0.5-0.2-0.8-0.6-1.2c-0.8-0.8-2.2-0.8-3.1,0c-0.7,0.7-0.8,1.9-0.2,2.7
	l-2.6,2.5L9.3,4.6L6.7,7.2C6.5,7.1,6.1,7.1,5.9,7.1C2.6,7.1,0,9.6,0,12.9c0,3.3,2.6,5.9,5.9,5.9c3.3,0,5.9-2.6,5.9-5.9
	c0-0.2,0-0.6-0.1-0.8l2.6-2.6l-1.3-1.3l2.5-2.5c0.8,0.6,2,0.5,2.7-0.2C19.1,4.7,19.1,3.3,18.2,2.5z"
                />
              </svg>
            }
            h2={`${userMainData.keyData.proteinCount}g`}
            labor={"Proteines"}
          />
          <Count
            svg={
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 18 20"
              >
                <path
                  d="M1.8,15.1c0.4,1,0.6,1.4,1.2,2.2C3.8,18.5,4.9,20,6.3,20c1.2,0,1.5-0.8,3.2-0.8c1.6,0,2,0.8,3.2,0.8
	c1.4,0,2.4-1.3,3.2-2.5c2.2-3.3,2.4-7.2,1.1-9.2C16,6.8,14.5,6,13.1,6s-2.3,0.8-3.5,0.8S7.7,6,6.1,6C4.8,6,3.5,6.7,2.6,7.9
	C1.2,9.8,0.8,12.2,1.8,15.1z"
                />
                <path d="M12,3.4c0.7-0.9,1.2-2.1,1-3.4c-1.1,0.1-2.4,0.8-3.2,1.7C9.1,2.5,8.6,3.8,8.8,5C10,5,11.3,4.3,12,3.4z" />
              </svg>
            }
            h2={`${userMainData.keyData.carbohydrateCount}g`}
            labor={"Glucides"}
          />
          <Count
            svg={
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 20 19"
              >
                <path d="M1.3,15c0,2.1,1.6,3.7,3.8,3.7h10c2.1,0,3.8-1.6,3.8-3.7H1.3z" />
                <path d="M18.8,12.5H1.3C0.5,12.5,0,12,0,11.2S0.5,10,1.3,10h17.5c0.8,0,1.3,0.5,1.3,1.3S19.5,12.5,18.8,12.5z" />
                <path
                  d="M11.3,0H8.8C4.6,0,1.3,3.4,1.3,7.5h17.5C18.8,3.4,15.4,0,11.3,0z M7.5,5C6.8,5,6.3,4.5,6.3,3.7s0.5-1.3,1.3-1.3
	S8.8,3,8.8,3.7S8.3,5,7.5,5z M12.5,5c0,0.8,0.5,1.3,1.3,1.3S15,5.7,15,5s-0.5-1.3-1.3-1.3S12.5,4.2,12.5,5z"
                />
              </svg>
            }
            h2={`${userMainData.keyData.lipidCount}g`}
            labor={"Lipides"}
          />
        </div>
      </main>
    );
  }
}

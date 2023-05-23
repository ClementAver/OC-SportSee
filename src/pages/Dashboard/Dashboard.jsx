import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Store from "../../store/Store";

export default function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const mocked = false;
    const store = new Store(parseInt(id), mocked);

    if (mocked) {
      setUser(store.getUserMainData());
    } else {
      store.getUserMainData().then((res) => {
        setUser(res.data);
      });
    }
  }, [id]);

  if (user !== null) {
    return (
      <>
        <h1>Dashboard</h1>
        <p>{user.userInfos.firstName}</p>
      </>
    );
  }
}

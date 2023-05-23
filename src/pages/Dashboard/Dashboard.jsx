import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { id } = useParams();

  return (
    <>
      <h1>Dashboard</h1>
      <p>{id}</p>
    </>
  );
}

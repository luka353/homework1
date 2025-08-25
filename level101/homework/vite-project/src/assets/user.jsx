import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <p>მიმდინარე იუზერის ID: {id}</p>
    </div>
  );
}
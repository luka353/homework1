import { useNavigate } from "react-router-dom";
import CreateWrapper from "../components/CreateWrapper";

export default function HomeCreate() {
  const navigate = useNavigate();

  return (
    <CreateWrapper>
      <h2>Create Page</h2>
      <button onClick={() => navigate("/")}>დაბრუნდი მთავარ გვერდზე</button>
      <button onClick={() => navigate("/about")}>დაბრუნდი About-ზე</button>
    </CreateWrapper>
  );
}
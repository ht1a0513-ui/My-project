import { useNavigate } from "react-router-dom";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";
import { ActionButton } from "../assets/Components/Common/ActionButton";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title="404" description="The page you are looking for does not exist" />

      <SectionCard title="Page Not Found" subtitle="Please return home and try again">
        <p>We could not find the route you requested.</p>
        <ActionButton label="Return to Home" variant="primary" onClick={() => navigate("/")} />
      </SectionCard>
    </div>
  );
}

export default NotFound;

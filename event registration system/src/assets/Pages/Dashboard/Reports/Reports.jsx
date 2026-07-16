import "./Reports.css";
import { PageHeader } from "../../../Components/Common/PageHeader";
import { SectionCard } from "../../../Components/Common/SectionCard";
import { InfoRow } from "../../../Components/Common/InfoRow";

function Reports() {
  return (
    <div>
      <PageHeader title="Reports" description="Summary of event performance and registration activity" />

      <SectionCard title="System Summary" subtitle="Overall numbers at a glance">
        <InfoRow label="Total Events" value="3" />
        <InfoRow label="Total Participants" value="3" />
        <InfoRow label="Completed Events" value="1" />
        <InfoRow label="Upcoming Events" value="2" />
      </SectionCard>
    </div>
  );
}

export default Reports;
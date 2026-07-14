import { SectionCard } from "../assets/Components/Common/SectionCard";

function DashboardSettings() {
  return (
    <SectionCard title="Settings" subtitle="Manage dashboard preferences">
      <p>Notifications: Enabled</p>
      <p>Theme: Light</p>
      <p>Reminder Emails: On</p>
    </SectionCard>
  );
}

export default DashboardSettings;

import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";

function About() {
  return (
    <div>
      <PageHeader title="About" description="Learn more about the event platform" />

      <SectionCard title="About this project" subtitle="Built to showcase routing and React state management">
        <p>This application demonstrates event registration, participant tracking, login flow, and multi-page navigation using React Router DOM.</p>
      </SectionCard>
    </div>
  );
}

export default About;


import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const DevOps = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('DevOps Engineer', skillSets.devops)
  );

  return (
    <HirePageLayout
      pageTitle="Hire DevOps Engineers"
      pageDescription="Connect with DevOps experts who streamline development workflows and manage cloud infrastructure. Our engineers excel in CI/CD, automation, and scalability."
      developers={developers}
      category="DevOps"
    />
  );
};

export default DevOps;

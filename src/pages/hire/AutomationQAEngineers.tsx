
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const AutomationQAEngineers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Automation QA Engineer', skillSets.qa)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Automation QA Engineers"
      pageDescription="Find QA automation specialists who ensure software quality through comprehensive testing strategies and automated test frameworks."
      developers={developers}
      category="QA automation"
    />
  );
};

export default AutomationQAEngineers;

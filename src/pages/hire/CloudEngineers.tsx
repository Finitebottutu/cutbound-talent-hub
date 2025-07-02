
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const CloudEngineers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Cloud Engineer', skillSets.cloud)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Cloud Engineers"
      pageDescription="Hire cloud architecture specialists who design and manage scalable cloud solutions. Our engineers are certified in AWS, Azure, and Google Cloud."
      developers={developers}
      category="cloud engineering"
    />
  );
};

export default CloudEngineers;

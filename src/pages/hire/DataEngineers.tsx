
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const DataEngineers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Data Engineer', skillSets.dataEngineer)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Data Engineers"
      pageDescription="Find data engineers who build robust data pipelines and infrastructure. Our engineers specialize in ETL, big data processing, and data warehousing."
      developers={developers}
      category="data engineering"
    />
  );
};

export default DataEngineers;

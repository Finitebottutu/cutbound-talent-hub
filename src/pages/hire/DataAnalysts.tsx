
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const DataAnalysts = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Data Analyst', skillSets.dataAnalyst)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Data Analysts"
      pageDescription="Hire data analysts who turn raw data into actionable insights. Our analysts are skilled in statistical analysis, visualization, and business intelligence."
      developers={developers}
      category="data analysis"
    />
  );
};

export default DataAnalysts;

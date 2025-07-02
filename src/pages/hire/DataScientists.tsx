
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const DataScientists = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Data Scientist', skillSets.dataScientist)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Data Scientists"
      pageDescription="Connect with data scientists who solve complex business problems using advanced analytics and machine learning techniques."
      developers={developers}
      category="data science"
    />
  );
};

export default DataScientists;

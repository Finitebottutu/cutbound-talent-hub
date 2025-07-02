
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const AIEngineers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('AI Engineer', skillSets.ai)
  );

  return (
    <HirePageLayout
      pageTitle="Hire AI Engineers"
      pageDescription="Find AI specialists who develop intelligent systems and machine learning solutions. Our engineers excel in deep learning, NLP, and computer vision."
      developers={developers}
      category="AI"
    />
  );
};

export default AIEngineers;

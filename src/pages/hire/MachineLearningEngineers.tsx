
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const MachineLearningEngineers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Machine Learning Engineer', skillSets.ml)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Machine Learning Engineers"
      pageDescription="Connect with ML engineers who build and deploy machine learning models at scale. Our specialists excel in MLOps, model optimization, and production ML."
      developers={developers}
      category="machine learning"
    />
  );
};

export default MachineLearningEngineers;

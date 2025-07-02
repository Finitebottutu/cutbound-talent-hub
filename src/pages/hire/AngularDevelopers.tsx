
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const AngularDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Angular Developer', skillSets.angular)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Angular Developers"
      pageDescription="Find expert Angular developers who build robust, scalable web applications. Our developers excel in TypeScript, RxJS, and enterprise-grade Angular solutions."
      developers={developers}
      category="Angular"
    />
  );
};

export default AngularDevelopers;

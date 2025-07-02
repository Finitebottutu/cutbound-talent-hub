
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const AndroidDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Android Developer', skillSets.android)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Android Developers"
      pageDescription="Hire experienced Android developers who create powerful mobile applications. Our developers specialize in Kotlin, Java, and modern Android development practices."
      developers={developers}
      category="Android"
    />
  );
};

export default AndroidDevelopers;

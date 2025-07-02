
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const DjangoDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Django Developer', skillSets.django)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Django Developers"
      pageDescription="Find expert Django developers who build robust, scalable web applications. Our developers excel in Python web development, REST APIs, and database design."
      developers={developers}
      category="Django"
    />
  );
};

export default DjangoDevelopers;

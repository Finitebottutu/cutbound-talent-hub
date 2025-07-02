
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const JavaDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Java Developer', skillSets.java)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Java Developers"
      pageDescription="Hire experienced Java developers who build enterprise-grade applications. Our developers specialize in Spring Boot, microservices, and scalable backend systems."
      developers={developers}
      category="Java"
    />
  );
};

export default JavaDevelopers;

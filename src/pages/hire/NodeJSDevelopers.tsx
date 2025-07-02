
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const NodeJSDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Node.js Developer', skillSets.nodejs)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Node.js Developers"
      pageDescription="Connect with skilled Node.js developers who create fast, scalable server-side applications. Our developers specialize in API development and microservices."
      developers={developers}
      category="Node.js"
    />
  );
};

export default NodeJSDevelopers;

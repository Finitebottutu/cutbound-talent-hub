
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const JavaScriptDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('JavaScript Developer', skillSets.javascript)
  );

  return (
    <HirePageLayout
      pageTitle="Hire JavaScript Developers"
      pageDescription="Find versatile JavaScript developers who create dynamic web applications. Our developers are proficient in modern ES6+, frameworks, and full-stack development."
      developers={developers}
      category="JavaScript"
    />
  );
};

export default JavaScriptDevelopers;

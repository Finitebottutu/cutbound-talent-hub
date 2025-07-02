
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const PHPDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('PHP Developer', skillSets.php)
  );

  return (
    <HirePageLayout
      pageTitle="Hire PHP Developers"
      pageDescription="Find experienced PHP developers who create dynamic web applications and APIs. Our developers are skilled in modern PHP frameworks and best practices."
      developers={developers}
      category="PHP"
    />
  );
};

export default PHPDevelopers;


import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const RubyOnRailsDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Ruby on Rails Developer', skillSets.rails)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Ruby on Rails Developers"
      pageDescription="Connect with skilled Ruby on Rails developers who build rapid, maintainable web applications. Our developers excel in agile development and modern Rails practices."
      developers={developers}
      category="Ruby on Rails"
    />
  );
};

export default RubyOnRailsDevelopers;

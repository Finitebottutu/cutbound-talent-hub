
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const LaravelDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Laravel Developer', skillSets.laravel)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Laravel Developers"
      pageDescription="Hire expert Laravel developers who build elegant, feature-rich web applications. Our developers excel in PHP development, Eloquent ORM, and Laravel ecosystem."
      developers={developers}
      category="Laravel"
    />
  );
};

export default LaravelDevelopers;

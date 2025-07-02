
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const ASPNetDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('ASP.NET Developer', skillSets.aspnet)
  );

  return (
    <HirePageLayout
      pageTitle="Hire ASP.NET Developers"
      pageDescription="Find skilled ASP.NET developers who create powerful web applications and APIs. Our developers excel in MVC, Web API, and modern .NET development."
      developers={developers}
      category="ASP.NET"
    />
  );
};

export default ASPNetDevelopers;

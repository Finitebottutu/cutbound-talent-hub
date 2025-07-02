
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const DotNetDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('.NET Developer', skillSets.dotnet)
  );

  return (
    <HirePageLayout
      pageTitle="Hire .NET Developers"
      pageDescription="Connect with experienced .NET developers who build robust enterprise applications. Our developers specialize in C#, ASP.NET Core, and Microsoft technologies."
      developers={developers}
      category=".NET"
    />
  );
};

export default DotNetDevelopers;

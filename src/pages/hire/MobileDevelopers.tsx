
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const MobileDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Mobile Developer', skillSets.mobile)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Mobile Developers"
      pageDescription="Connect with skilled mobile developers who create exceptional iOS and Android applications. Our developers excel in cross-platform development and native app performance."
      developers={developers}
      category="mobile"
    />
  );
};

export default MobileDevelopers;

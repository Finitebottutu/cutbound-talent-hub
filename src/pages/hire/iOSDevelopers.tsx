
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const iOSDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('iOS Developer', skillSets.ios)
  );

  return (
    <HirePageLayout
      pageTitle="Hire iOS Developers"
      pageDescription="Hire expert iOS developers who create exceptional iPhone and iPad applications. Our developers specialize in Swift, SwiftUI, and App Store optimization."
      developers={developers}
      category="iOS"
    />
  );
};

export default iOSDevelopers;

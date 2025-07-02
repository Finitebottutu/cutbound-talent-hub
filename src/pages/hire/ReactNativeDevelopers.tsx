
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const ReactNativeDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('React Native Developer', skillSets.reactNative)
  );

  return (
    <HirePageLayout
      pageTitle="Hire React Native Developers"
      pageDescription="Find expert React Native developers who build native-quality mobile apps for iOS and Android. Our developers specialize in cross-platform development and performance optimization."
      developers={developers}
      category="React Native"
    />
  );
};

export default ReactNativeDevelopers;

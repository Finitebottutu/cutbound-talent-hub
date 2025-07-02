
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const FlutterDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Flutter Developer', skillSets.flutter)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Flutter Developers"
      pageDescription="Connect with skilled Flutter developers who create beautiful cross-platform mobile applications. Our developers excel in Dart, native performance, and UI design."
      developers={developers}
      category="Flutter"
    />
  );
};

export default FlutterDevelopers;

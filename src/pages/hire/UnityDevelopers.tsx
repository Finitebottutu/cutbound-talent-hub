
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const UnityDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Unity Developer', skillSets.unity)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Unity Developers"
      pageDescription="Connect with experienced Unity developers who create engaging games and interactive experiences. Our developers specialize in 2D/3D games, VR/AR, and mobile platforms."
      developers={developers}
      category="Unity"
    />
  );
};

export default UnityDevelopers;

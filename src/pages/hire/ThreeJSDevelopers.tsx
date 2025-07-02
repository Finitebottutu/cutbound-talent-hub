
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const ThreeJSDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Three.js Developer', skillSets.threejs)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Three.js Developers"
      pageDescription="Find expert Three.js developers who create stunning 3D web experiences. Our developers specialize in WebGL, 3D graphics, and interactive visualizations."
      developers={developers}
      category="Three.js"
    />
  );
};

export default ThreeJSDevelopers;

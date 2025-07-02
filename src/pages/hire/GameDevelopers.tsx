
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const GameDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Game Developer', skillSets.game)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Game Developers"
      pageDescription="Find talented game developers who create immersive gaming experiences. Our developers specialize in Unity, Unreal Engine, and custom game development."
      developers={developers}
      category="game development"
    />
  );
};

export default GameDevelopers;

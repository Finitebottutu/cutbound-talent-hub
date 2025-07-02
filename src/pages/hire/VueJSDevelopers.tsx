
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const VueJSDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Vue.js Developer', skillSets.vuejs)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Vue.js Developers"
      pageDescription="Connect with skilled Vue.js developers who create elegant, performant web applications. Our developers specialize in Vue 3, Composition API, and modern tooling."
      developers={developers}
      category="Vue.js"
    />
  );
};

export default VueJSDevelopers;

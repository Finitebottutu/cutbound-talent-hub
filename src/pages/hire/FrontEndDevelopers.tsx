
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const FrontEndDevelopers = () => {
  const developers = [
    generateDeveloper(
      'Senior React Developer',
      skillSets.react,
      'React specialist with 7+ years creating stunning user interfaces. Expert in modern React patterns, performance optimization, and component architecture.'
    ),
    generateDeveloper(
      'Frontend Developer',
      ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Vuex', 'Jest', 'Webpack', 'SASS'],
      'Vue.js enthusiast focused on creating intuitive and responsive web applications. Strong eye for design and user experience optimization.'
    ),
    generateDeveloper(
      'UI/UX Frontend Developer',
      ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Styled Components', 'Figma', 'SCSS', 'Jest'],
      'Frontend developer with design background, specializing in pixel-perfect implementations and smooth animations. Bridge between design and development.'
    ),
    generateDeveloper(
      'Senior Frontend Engineer',
      ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Jasmine', 'Webpack', 'SCSS'],
      'Angular expert with enterprise application experience. Skilled in complex state management and building scalable frontend architectures.'
    ),
    generateDeveloper(
      'React Native & Web Developer',
      ['React', 'React Native', 'TypeScript', 'Redux', 'Expo', 'Jest', 'Styled Components', 'GraphQL'],
      'Cross-platform specialist developing for both web and mobile. Expert in React ecosystem with focus on code reusability and performance.'
    )
  ];

  return (
    <HirePageLayout
      pageTitle="Hire Frontend Developers"
      pageDescription="Find skilled frontend developers who create beautiful, responsive, and performant user interfaces. Our developers excel in modern frameworks and user experience design."
      developers={developers}
      category="frontend"
    />
  );
};

export default FrontEndDevelopers;

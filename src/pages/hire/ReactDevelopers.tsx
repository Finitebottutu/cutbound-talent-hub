
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const ReactDevelopers = () => {
  const developers = [
    generateDeveloper(
      'Senior React Developer',
      skillSets.react,
      'React expert with 8+ years building modern web applications. Specialist in performance optimization, component architecture, and state management.'
    ),
    generateDeveloper(
      'React & TypeScript Developer',
      ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Jest', 'Cypress'],
      'Full-stack React developer with strong TypeScript skills. Builds type-safe, scalable applications with modern tooling and best practices.'
    ),
    generateDeveloper(
      'React Frontend Specialist',
      ['React', 'Redux', 'Styled Components', 'Framer Motion', 'React Testing Library', 'Webpack', 'SCSS', 'GraphQL'],
      'UI-focused React developer creating beautiful, interactive user experiences. Expert in animations, responsive design, and accessibility.'
    ),
    generateDeveloper(
      'React Native & Web Developer',
      ['React', 'React Native', 'Expo', 'Redux', 'TypeScript', 'Firebase', 'REST APIs', 'Jest'],
      'Cross-platform React specialist developing for both web and mobile. Maximizes code reuse while delivering native-quality experiences.'
    ),
    generateDeveloper(
      'Lead React Engineer',
      ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Apollo Client', 'Micro-frontends', 'Docker', 'AWS'],
      'Technical lead specializing in large-scale React applications. Expert in micro-frontend architecture and team leadership.'
    )
  ];

  return (
    <HirePageLayout
      pageTitle="Hire React Developers"
      pageDescription="Find expert React developers who create dynamic, high-performance web applications. Our React specialists excel in modern development practices and component-based architecture."
      developers={developers}
      category="React"
    />
  );
};

export default ReactDevelopers;

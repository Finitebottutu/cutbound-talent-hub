
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const FullStackDevelopers = () => {
  const developers = [
    generateDeveloper(
      'Senior Full-Stack Developer',
      skillSets.fullstack,
      'Full-stack architect with 8+ years building scalable web applications. Expert in React/Node.js ecosystem with experience in microservices architecture and cloud deployment.'
    ),
    generateDeveloper(
      'Full-Stack Developer',
      ['React', 'Python', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Redis'],
      'Versatile full-stack developer combining React frontend expertise with Python/Django backend skills. Passionate about clean code and modern development practices.'
    ),
    generateDeveloper(
      'Senior Full-Stack Engineer',
      ['Vue.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Nuxt.js', 'AWS', 'Jest'],
      'Senior engineer specializing in Vue.js and Node.js stack. Built complex enterprise applications serving millions of users with focus on performance and scalability.'
    ),
    generateDeveloper(
      'Full-Stack Developer',
      ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Kubernetes', 'Docker', 'REST APIs', 'Git'],
      'Enterprise-focused full-stack developer with strong Java backend and Angular frontend skills. Experience in large-scale applications and microservices architecture.'
    ),
    generateDeveloper(
      'Lead Full-Stack Developer',
      ['React', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      'Technical lead with expertise in modern JavaScript stack. Successfully delivered 50+ projects ranging from startups to Fortune 500 companies.'
    )
  ];

  return (
    <HirePageLayout
      pageTitle="Hire Full-Stack Developers"
      pageDescription="Connect with experienced full-stack developers who can handle both frontend and backend development. Our vetted professionals bring end-to-end expertise to your projects."
      developers={developers}
      category="full-stack"
    />
  );
};

export default FullStackDevelopers;

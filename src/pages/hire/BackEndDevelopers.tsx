
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const BackEndDevelopers = () => {
  const developers = [
    generateDeveloper(
      'Senior Backend Engineer',
      skillSets.backend,
      'Backend architect with 9+ years designing scalable server-side applications. Expert in microservices, API design, and database optimization.'
    ),
    generateDeveloper(
      'Python Backend Developer',
      ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'AWS'],
      'Python specialist focused on building robust backend systems. Experience with high-traffic applications and real-time data processing.'
    ),
    generateDeveloper(
      'Java Backend Developer',
      ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Apache Kafka', 'Redis', 'Docker', 'Kubernetes'],
      'Enterprise Java developer with expertise in Spring ecosystem. Built distributed systems handling millions of transactions daily.'
    ),
    generateDeveloper(
      'Node.js Backend Developer',
      ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Redis', 'GraphQL', 'Docker', 'AWS'],
      'JavaScript backend specialist creating fast and scalable server applications. Expert in async programming and API development.'
    ),
    generateDeveloper(
      'DevOps Backend Engineer',
      ['Python', 'Go', 'Kubernetes', 'Docker', 'AWS', 'Terraform', 'MongoDB', 'Redis'],
      'Backend engineer with strong DevOps skills. Focuses on infrastructure-as-code and building highly available, auto-scaling applications.'
    )
  ];

  return (
    <HirePageLayout
      pageTitle="Hire Backend Developers"
      pageDescription="Connect with expert backend developers who build robust, scalable server-side applications. Our developers excel in API design, database optimization, and system architecture."
      developers={developers}
      category="backend"
    />
  );
};

export default BackEndDevelopers;

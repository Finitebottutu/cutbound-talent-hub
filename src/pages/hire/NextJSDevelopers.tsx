
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const NextJSDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Next.js Developer', skillSets.nextjs)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Next.js Developers"
      pageDescription="Hire expert Next.js developers who build fast, SEO-optimized React applications. Our developers excel in SSR, static generation, and modern web performance."
      developers={developers}
      category="Next.js"
    />
  );
};

export default NextJSDevelopers;

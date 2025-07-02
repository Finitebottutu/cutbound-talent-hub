
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const PythonDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Python Developer', skillSets.python)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Python Developers"
      pageDescription="Hire versatile Python developers who excel in web development, data science, and automation. Our developers are skilled in Django, Flask, and modern Python frameworks."
      developers={developers}
      category="Python"
    />
  );
};

export default PythonDevelopers;

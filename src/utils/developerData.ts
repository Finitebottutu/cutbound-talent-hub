
const locations = [
  'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Los Angeles, CA',
  'Boston, MA', 'Chicago, IL', 'Denver, CO', 'Atlanta, GA', 'Miami, FL',
  'London, UK', 'Berlin, Germany', 'Toronto, Canada', 'Amsterdam, Netherlands',
  'Bangalore, India', 'Tel Aviv, Israel', 'Sydney, Australia', 'Singapore',
  'Dublin, Ireland', 'Barcelona, Spain', 'Stockholm, Sweden', 'Zurich, Switzerland'
];

const profileImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108755-2616b2e39c90?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
];

const firstNames = [
  'Alex', 'Sarah', 'Michael', 'Jessica', 'David', 'Emily', 'James', 'Lisa',
  'Robert', 'Maria', 'John', 'Anna', 'Daniel', 'Rachel', 'Chris', 'Amanda',
  'Matthew', 'Nicole', 'Andrew', 'Stephanie', 'Kevin', 'Laura', 'Ryan', 'Jennifer',
  'Brian', 'Michelle', 'Jason', 'Ashley', 'Justin', 'Hannah'
];

const lastNames = [
  'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez',
  'Martinez', 'Hernandez', 'Lopez', 'Gonzales', 'Wilson', 'Anderson', 'Thomas',
  'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White',
  'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker'
];

const experienceLevels = ['2+ years', '3+ years', '4+ years', '5+ years', '6+ years', '7+ years', '8+ years', '9+ years', '10+ years'];

const getRandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomRating = (): number => Math.round((Math.random() * 1 + 4) * 10) / 10;

const getHourlyRate = (experience: string): string => {
  const years = parseInt(experience);
  if (years <= 3) return `$${getRandomNumber(25, 50)}`;
  if (years <= 6) return `$${getRandomNumber(50, 100)}`;
  return `$${getRandomNumber(100, 150)}`;
};

export const generateDeveloper = (title: string, skills: string[], customBio?: string) => {
  const name = `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
  const experience = getRandomElement(experienceLevels);
  const rating = getRandomRating();
  const projects = getRandomNumber(15, 300);
  const reviews = getRandomNumber(10, 200);
  
  const bio = customBio || `Experienced ${title.toLowerCase()} specializing in ${skills.slice(0, 3).join(', ')} with a passion for building scalable applications and delivering high-quality solutions.`;
  
  return {
    name,
    title,
    location: getRandomElement(locations),
    rating,
    reviews,
    experience,
    hourlyRate: getHourlyRate(experience),
    projects,
    bio,
    skills,
    imageUrl: getRandomElement(profileImages)
  };
};

export const skillSets = {
  fullstack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'GraphQL', 'AWS', 'Docker'],
  frontend: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Webpack', 'Sass', 'Jest'],
  backend: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Microservices'],
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'REST APIs', 'Git'],
  game: ['Unity', 'C#', 'Unreal Engine', 'C++', 'Blender', '3D Modeling', 'Game Physics', 'Shader Programming'],
  devops: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux', 'CI/CD', 'Monitoring'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Lambda', 'CloudFormation'],
  ai: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Pandas'],
  ml: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Jupyter', 'Statistics'],
  dataAnalyst: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'R', 'Statistics', 'Data Visualization'],
  dataEngineer: ['Python', 'Apache Spark', 'Kafka', 'Airflow', 'SQL', 'ETL', 'Big Data', 'Data Warehousing'],
  dataScientist: ['Python', 'R', 'Machine Learning', 'Statistics', 'Pandas', 'Scikit-learn', 'Jupyter', 'SQL'],
  blockchain: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DApps', 'Blockchain', 'Cryptography', 'Node.js'],
  qa: ['Selenium', 'Cypress', 'Jest', 'TestNG', 'Automation Testing', 'API Testing', 'Python', 'JavaScript'],
  react: ['React', 'Redux', 'TypeScript', 'Next.js', 'React Testing Library', 'Styled Components', 'GraphQL', 'Webpack'],
  angular: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Jasmine', 'Karma', 'REST APIs'],
  nodejs: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'TypeScript', 'Jest'],
  javascript: ['JavaScript', 'ES6+', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git'],
  nextjs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'API Routes', 'SSR', 'Static Generation'],
  vuejs: ['Vue.js', 'Vuex', 'Nuxt.js', 'TypeScript', 'Vue Router', 'Vuetify', 'Jest', 'Webpack'],
  threejs: ['Three.js', 'WebGL', 'JavaScript', 'GLSL', '3D Graphics', 'Blender', 'Animation', 'TypeScript'],
  python: ['Python', 'Django', 'Flask', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'pytest'],
  unity: ['Unity', 'C#', 'Game Development', '3D Graphics', 'Physics', 'Animation', 'Mobile Games', 'VR/AR'],
  django: ['Django', 'Python', 'PostgreSQL', 'Redis', 'REST APIs', 'Celery', 'Docker', 'pytest'],
  java: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Maven', 'JUnit', 'REST APIs', 'Microservices'],
  rails: ['Ruby on Rails', 'Ruby', 'PostgreSQL', 'Redis', 'Sidekiq', 'RSpec', 'Heroku', 'REST APIs'],
  php: ['PHP', 'Laravel', 'MySQL', 'Composer', 'PHPUnit', 'Redis', 'Apache', 'REST APIs'],
  laravel: ['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Blade', 'Artisan', 'PHPUnit', 'Redis'],
  dotnet: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Azure', 'REST APIs', 'xUnit'],
  aspnet: ['ASP.NET', 'C#', 'MVC', 'Entity Framework', 'SQL Server', 'Azure', 'REST APIs', 'SignalR'],
  ios: ['iOS', 'Swift', 'UIKit', 'SwiftUI', 'Core Data', 'Xcode', 'App Store', 'REST APIs'],
  flutter: ['Flutter', 'Dart', 'Firebase', 'Provider', 'REST APIs', 'SQLite', 'Git', 'Material Design'],
  reactNative: ['React Native', 'JavaScript', 'Redux', 'Firebase', 'Expo', 'TypeScript', 'REST APIs', 'Git'],
  android: ['Android', 'Kotlin', 'Java', 'Android Studio', 'Firebase', 'Room Database', 'REST APIs', 'Git']
};

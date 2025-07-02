
import { Button } from '@/components/ui/button';
import { MapPin, Star, Briefcase, DollarSign, Award } from 'lucide-react';

interface DeveloperProfileProps {
  name: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  experience: string;
  hourlyRate: string;
  projects: number;
  bio: string;
  skills: string[];
  imageUrl: string;
}

const DeveloperProfile = ({
  name,
  title,
  location,
  rating,
  reviews,
  experience,
  hourlyRate,
  projects,
  bio,
  skills,
  imageUrl
}: DeveloperProfileProps) => {
  return (
    <div className="premium-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
            <p className="text-gray-300 font-medium">{title}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white">{rating}</span>
              <span>({reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>{experience} experience</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-white font-semibold">{hourlyRate}/hour</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>{projects} projects completed</span>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed">{bio}</p>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="premium-button-outline flex-1">
              View Profile
            </Button>
            <Button className="premium-button flex-1">
              Hire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;

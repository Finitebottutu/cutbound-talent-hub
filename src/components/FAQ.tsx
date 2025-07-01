
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: 'What services does Cutbound offer?',
    answer: 'Cutbound offers three main services: hiring individual freelancers, hiring full-time remote employees, and complete project execution by our managed teams. We cover 200+ specialized fields including development, design, marketing, data science, and more.'
  },
  {
    question: 'How does Cutbound maintain and ensure high-quality freelancers on this platform?',
    answer: 'We maintain quality through a rigorous vetting process that includes technical assessments, portfolio reviews, client feedback analysis, and interview processes. Only the top 1% of applicants make it through our screening process.'
  },
  {
    question: 'Will the freelancer be committed to my business\'s NDA?',
    answer: 'Yes, all freelancers and team members are required to sign NDAs and confidentiality agreements. We take data security and intellectual property protection very seriously.'
  },
  {
    question: 'Who owns the project work delivered by freelancers?',
    answer: 'You retain complete ownership of all work delivered. All intellectual property, code, designs, and deliverables belong to you upon project completion and payment.'
  },
  {
    question: 'What should I do if something goes wrong with my order or if I have inquiries?',
    answer: 'We provide 24/7 support through multiple channels. Each project has a dedicated project manager, and you can reach our support team via chat, email, or phone for immediate assistance.'
  },
  {
    question: 'How are payments handled on Cutbound?',
    answer: 'Payments are processed securely through our platform. We offer milestone-based payments for projects and various payment methods including bank transfers, credit cards, and digital wallets.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 lg:px-8 section-gradient relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our platform and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="card-premium slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-300"
                >
                  <span className="text-lg font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`text-gray-400 transition-all duration-500 hover:text-white ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 fade-in">
                    <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

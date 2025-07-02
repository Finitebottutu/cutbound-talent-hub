
export const generateServiceContent = (serviceType: string, category: string) => {
  const serviceContentMap: Record<string, any> = {
    // UI/UX Design Services
    'UI/UX for Web Application': {
      heroTitle: 'Professional Web UI/UX Design Services',
      heroDescription: 'Create engaging and intuitive web experiences that convert visitors into customers with our expert UI/UX design services.',
      serviceOverview: [
        'User-centered design approach that prioritizes usability and accessibility',
        'Comprehensive user research and persona development for targeted design',
        'Responsive design that works seamlessly across all devices and browsers',
        'Modern design trends and best practices implementation',
        'Wireframing and prototyping for better visualization',
        'Usability testing and optimization for improved conversion rates'
      ],
      process: [
        { step: 1, title: 'Discovery & Research', description: 'Understanding your business goals, target audience, and competitive landscape' },
        { step: 2, title: 'Wireframing & Prototyping', description: 'Creating detailed wireframes and interactive prototypes for validation' },
        { step: 3, title: 'Visual Design', description: 'Developing stunning visual designs that align with your brand identity' },
        { step: 4, title: 'Testing & Refinement', description: 'Conducting usability tests and refining designs based on feedback' }
      ],
      portfolio: [
        {
          title: 'E-commerce Platform Redesign',
          description: 'Complete redesign of an online marketplace focusing on user experience and conversion optimization.',
          technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
          results: '40% increase in conversion rate, 25% reduction in bounce rate'
        },
        {
          title: 'SaaS Dashboard Design',
          description: 'Intuitive dashboard design for a project management SaaS platform with complex data visualization.',
          technologies: ['Sketch', 'Figma', 'Framer', 'Zeplin'],
          results: '60% improvement in user task completion rate'
        },
        {
          title: 'Corporate Website Redesign',
          description: 'Modern and professional website design for a Fortune 500 company with focus on brand representation.',
          technologies: ['Adobe XD', 'Figma', 'Photoshop', 'Illustrator'],
          results: '50% increase in lead generation, 35% longer session duration'
        }
      ],
      pricing: [
        {
          name: 'Basic',
          price: '$2,500',
          features: [
            'Up to 5 page designs',
            'Mobile responsive design',
            'Basic wireframing',
            '2 revision rounds',
            'Design files delivery'
          ]
        },
        {
          name: 'Professional',
          price: '$4,500',
          popular: true,
          features: [
            'Up to 15 page designs',
            'Mobile & tablet responsive',
            'Detailed wireframing & prototyping',
            'User journey mapping',
            '4 revision rounds',
            'Design system creation',
            'Developer handoff support'
          ]
        },
        {
          name: 'Enterprise',
          price: '$8,500',
          features: [
            'Unlimited page designs',
            'Complete responsive design',
            'Advanced prototyping',
            'User research & testing',
            'Unlimited revisions',
            'Comprehensive design system',
            'Ongoing design support',
            'Training & consultation'
          ]
        }
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'CEO, TechStart Inc.',
          content: 'The UI/UX design transformed our web application completely. User engagement increased by 40% and our conversion rates improved significantly.',
          rating: 5
        },
        {
          name: 'Michael Chen',
          role: 'Product Manager, Digital Solutions',
          content: 'Outstanding attention to detail and user experience. The team delivered exactly what we envisioned and more.',
          rating: 5
        },
        {
          name: 'Emily Rodriguez',
          role: 'Marketing Director, InnovateCorp',
          content: 'Professional service with great communication throughout the project. The final designs exceeded our expectations.',
          rating: 5
        }
      ],
      faqs: [
        {
          question: 'How long does a typical web UI/UX design project take?',
          answer: 'Project timeline varies based on complexity, but most web design projects take 4-8 weeks from initial consultation to final delivery.'
        },
        {
          question: 'Do you provide mobile-responsive designs?',
          answer: 'Yes, all our web designs are fully responsive and optimized for desktop, tablet, and mobile devices.'
        },
        {
          question: 'Can you work with our existing brand guidelines?',
          answer: 'Absolutely! We can work within your existing brand guidelines or help develop new ones if needed.'
        },
        {
          question: 'Do you provide design files and assets?',
          answer: 'Yes, we provide all design files in industry-standard formats along with exported assets ready for development.'
        },
        {
          question: 'What if we need revisions after the project is completed?',
          answer: 'We offer post-project support and can discuss ongoing design services or one-time revision packages based on your needs.'
        }
      ]
    },

    // Website Development Services
    'Ecommerce Store Development': {
      heroTitle: 'Professional Ecommerce Store Development',
      heroDescription: 'Build powerful, scalable online stores that drive sales and provide exceptional shopping experiences for your customers.',
      serviceOverview: [
        'Custom ecommerce solutions tailored to your business needs',
        'Secure payment gateway integration with multiple payment options',
        'Mobile-responsive design for optimal shopping experience',
        'SEO-optimized structure for better search engine visibility',
        'Inventory management and order tracking systems',
        'Performance optimization for fast loading speeds'
      ],
      process: [
        { step: 1, title: 'Requirements Analysis', description: 'Understanding your business model, target audience, and specific ecommerce needs' },
        { step: 2, title: 'Platform Selection', description: 'Choosing the right ecommerce platform based on your requirements and scalability needs' },
        { step: 3, title: 'Development & Integration', description: 'Building your store with all necessary features and third-party integrations' },
        { step: 4, title: 'Testing & Launch', description: 'Comprehensive testing, performance optimization, and successful store launch' }
      ],
      portfolio: [
        {
          title: 'Fashion Retail Store',
          description: 'Complete ecommerce solution for a fashion brand with advanced filtering, wishlist, and social shopping features.',
          technologies: ['Shopify Plus', 'React', 'Node.js', 'Stripe', 'Klaviyo'],
          results: '300% increase in online sales within 6 months'
        },
        {
          title: 'Electronics Marketplace',
          description: 'Multi-vendor marketplace with complex product configurations and bulk ordering capabilities.',
          technologies: ['WooCommerce', 'WordPress', 'PHP', 'MySQL', 'PayPal'],
          results: '150% growth in vendor registrations, 40% higher average order value'
        }
      ],
      pricing: [
        {
          name: 'Starter Store',
          price: '$3,500',
          features: [
            'Up to 100 products',
            'Basic payment integration',
            'Mobile responsive design',
            'Basic SEO setup',
            'Contact form integration'
          ]
        },
        {
          name: 'Professional Store',
          price: '$7,500',
          popular: true,
          features: [
            'Unlimited products',
            'Multiple payment gateways',
            'Advanced product filtering',
            'Inventory management',
            'Email marketing integration',
            'Analytics integration',
            'Customer review system'
          ]
        },
        {
          name: 'Enterprise Store',
          price: '$15,000',
          features: [
            'Custom functionality',
            'Multi-vendor capabilities',
            'Advanced reporting',
            'API integrations',
            'Performance optimization',
            'Security enhancements',
            'Ongoing maintenance'
          ]
        }
      ],
      testimonials: [
        {
          name: 'David Thompson',
          role: 'Founder, StyleHub Fashion',
          content: 'Our ecommerce store has been a game-changer for our business. Sales have tripled since the launch, and customers love the user experience.',
          rating: 5
        },
        {
          name: 'Lisa Wang',
          role: 'CEO, TechGadgets Pro',
          content: 'The team delivered an exceptional ecommerce platform that handles our complex product catalog perfectly. Highly recommended!',
          rating: 5
        }
      ],
      faqs: [
        {
          question: 'Which ecommerce platform do you recommend?',
          answer: 'We recommend platforms based on your specific needs. Shopify for ease of use, WooCommerce for WordPress integration, or custom solutions for unique requirements.'
        },
        {
          question: 'How long does ecommerce development take?',
          answer: 'Development time varies by complexity, typically ranging from 6-12 weeks for standard stores and 12-20 weeks for complex custom solutions.'
        },
        {
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, and technical support.'
        },
        {
          question: 'Can you integrate with our existing inventory system?',
          answer: 'Absolutely! We can integrate with most inventory management systems and ERPs to synchronize product data and stock levels.'
        }
      ]
    },

    // Digital Marketing Services
    'SEO Services': {
      heroTitle: 'Professional SEO Services That Drive Results',
      heroDescription: 'Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies and proven optimization techniques.',
      serviceOverview: [
        'Comprehensive SEO audit and competitive analysis',
        'Keyword research and optimization strategy development',
        'On-page and technical SEO optimization',
        'High-quality link building and content marketing',
        'Local SEO for location-based businesses',
        'Regular reporting and performance tracking'
      ],
      process: [
        { step: 1, title: 'SEO Audit', description: 'Comprehensive analysis of your current SEO performance and identification of opportunities' },
        { step: 2, title: 'Strategy Development', description: 'Creating a customized SEO strategy based on your goals and target audience' },
        { step: 3, title: 'Implementation', description: 'Executing on-page, technical, and off-page SEO optimizations' },
        { step: 4, title: 'Monitoring & Reporting', description: 'Continuous monitoring, analysis, and reporting of SEO performance metrics' }
      ],
      portfolio: [
        {
          title: 'Local Service Business',
          description: 'Comprehensive local SEO campaign for a home services company covering multiple service areas.',
          technologies: ['Google My Business', 'Local Citations', 'Schema Markup', 'Google Analytics'],
          results: '250% increase in local search visibility, 180% more qualified leads'
        },
        {
          title: 'E-commerce SEO Campaign',
          description: 'Full-scale SEO optimization for an online retailer with thousands of product pages.',
          technologies: ['Technical SEO', 'Content Optimization', 'Link Building', 'Site Speed Optimization'],
          results: '150% increase in organic traffic, 200% growth in online sales'
        }
      ],
      pricing: [
        {
          name: 'Local SEO',
          price: '$1,200/month',
          features: [
            'Local keyword optimization',
            'Google My Business optimization',
            'Local citation building',
            'Monthly reporting',
            'Basic competitor analysis'
          ]
        },
        {
          name: 'National SEO',
          price: '$2,500/month',
          popular: true,
          features: [
            'Comprehensive keyword strategy',
            'Technical SEO optimization',
            'Content creation & optimization',
            'Link building campaign',
            'Advanced analytics & reporting',
            'Competitor monitoring'
          ]
        },
        {
          name: 'Enterprise SEO',
          price: '$5,000/month',
          features: [
            'Large-scale SEO strategy',
            'Advanced technical SEO',
            'Dedicated account manager',
            'Custom reporting dashboard',
            'Priority support',
            'Quarterly strategy reviews'
          ]
        }
      ],
      testimonials: [
        {
          name: 'Robert Martinez',
          role: 'Marketing Manager, GrowthCorp',
          content: 'Our organic traffic has increased by 300% in just 6 months. The SEO strategy has been incredibly effective for our business growth.',
          rating: 5
        },
        {
          name: 'Jennifer Lee',
          role: 'Owner, Local Home Services',
          content: 'We now rank #1 for most of our target keywords in our service area. The local SEO results have been outstanding.',
          rating: 5
        }
      ],
      faqs: [
        {
          question: 'How long does it take to see SEO results?',
          answer: 'SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results typically occurring after 6-12 months of consistent effort.'
        },
        {
          question: 'Do you guarantee first page rankings?',
          answer: 'While we cannot guarantee specific rankings due to search engine algorithm changes, we focus on proven strategies that consistently improve search visibility and organic traffic.'
        },
        {
          question: 'What makes your SEO services different?',
          answer: 'We focus on white-hat, sustainable SEO practices, provide transparent reporting, and tailor our strategies to your specific business goals and industry.'
        },
        {
          question: 'Do you work with businesses in all industries?',
          answer: 'Yes, we have experience across various industries and adapt our SEO strategies to meet the unique challenges and opportunities of each sector.'
        }
      ]
    }
  };

  // Return default content if specific service not found
  return serviceContentMap[serviceType] || {
    heroTitle: `Professional ${serviceType}`,
    heroDescription: `Expert ${serviceType.toLowerCase()} services to help your business grow and succeed in today's competitive market.`,
    serviceOverview: [
      `Comprehensive ${serviceType.toLowerCase()} solutions tailored to your needs`,
      'Industry best practices and proven methodologies',
      'Experienced team of certified professionals',
      'Quality assurance and timely delivery',
      'Ongoing support and maintenance',
      'Competitive pricing and flexible packages'
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understanding your requirements and project scope' },
      { step: 2, title: 'Planning', description: 'Developing comprehensive project plan and strategy' },
      { step: 3, title: 'Execution', description: 'Implementing solutions with quality focus' },
      { step: 4, title: 'Delivery', description: 'Final testing, optimization, and project handover' }
    ],
    portfolio: [
      {
        title: 'Client Success Story 1',
        description: `Successful ${serviceType.toLowerCase()} project that delivered exceptional results for our client.`,
        technologies: ['Modern Tools', 'Best Practices', 'Quality Assurance'],
        results: 'Significant improvement in business metrics and client satisfaction'
      },
      {
        title: 'Client Success Story 2',
        description: `Another successful ${serviceType.toLowerCase()} implementation with measurable business impact.`,
        technologies: ['Industry Standards', 'Proven Methods', 'Expert Implementation'],
        results: 'Enhanced performance and competitive advantage'
      }
    ],
    pricing: [
      {
        name: 'Basic',
        price: '$2,500',
        features: [
          'Essential features',
          'Standard implementation',
          'Basic support',
          'Documentation',
          'Quality assurance'
        ]
      },
      {
        name: 'Professional',
        price: '$4,500',
        popular: true,
        features: [
          'Advanced features',
          'Custom implementation',
          'Priority support',
          'Detailed documentation',
          'Extended warranty',
          'Training included'
        ]
      },
      {
        name: 'Enterprise',
        price: '$8,500',
        features: [
          'Premium features',
          'Fully customized solution',
          '24/7 dedicated support',
          'Comprehensive documentation',
          'Lifetime updates',
          'Advanced training',
          'Consultation services'
        ]
      }
    ],
    testimonials: [
      {
        name: 'John Smith',
        role: 'CEO, Business Solutions Inc.',
        content: `The ${serviceType.toLowerCase()} service exceeded our expectations. Professional team, quality delivery, and excellent results.`,
        rating: 5
      },
      {
        name: 'Maria Garcia',
        role: 'Project Manager, TechCorp',
        content: 'Outstanding service quality and attention to detail. Would definitely recommend to other businesses.',
        rating: 5
      },
      {
        name: 'Alex Johnson',
        role: 'Founder, StartupXYZ',
        content: 'Great value for money and professional execution. The team was responsive and delivered on time.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: `How long does a typical ${serviceType.toLowerCase()} project take?`,
        answer: 'Project timeline varies based on scope and complexity, typically ranging from 4-12 weeks depending on requirements.'
      },
      {
        question: 'What is included in your service packages?',
        answer: 'Our packages include comprehensive solutions, documentation, testing, support, and training as specified in each tier.'
      },
      {
        question: 'Do you provide ongoing support and maintenance?',
        answer: 'Yes, we offer various support packages to ensure your solution continues to perform optimally after delivery.'
      },
      {
        question: 'Can you customize the service to our specific needs?',
        answer: 'Absolutely! We specialize in tailoring our services to meet your unique business requirements and objectives.'
      },
      {
        question: 'What makes your team qualified for this service?',
        answer: 'Our team consists of certified professionals with extensive experience and a proven track record of successful project deliveries.'
      }
    ]
  };
};

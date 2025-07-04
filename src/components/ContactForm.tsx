
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-white/20 text-white p-0 overflow-hidden">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 px-8 py-8 text-center">
            <h2 className="text-2xl font-bold gradient-text mb-2">
              Let's turn your idea into profit
            </h2>
            <p className="text-gray-300 text-sm">
              Reach out to us and start your digital transformation journey today.
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200"
                />
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Please Share Your Business Requirements *"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full premium-button py-3 text-lg font-semibold mt-6"
              >
                Submit
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-400">
              You can also drop your requirements at{' '}
              <a href="mailto:sales@cutbound.com" className="text-blue-400 hover:text-blue-300">
                sales@cutbound.com
              </a>
              {' '}and our team will get right on it!
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;

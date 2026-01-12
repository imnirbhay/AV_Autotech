import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';
import { CircleCheck, CircleAlert } from 'lucide-react';
import imgFrame77 from '../../assets/3a9a692779ab823691c63ab78cdd908355c688dc.png';
import { useServices } from '../../services/queries';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export function ContactCTA() {
  const { ref, isInView } = useInView();
  const { data: servicesResponse, isLoading: servicesLoading } = useServices();
  
  // Extract services array from response
  const services = Array.isArray(servicesResponse) 
    ? servicesResponse 
    : (servicesResponse as any)?.data || [];
  
  console.log('Services data:', services);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};


    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://pwud2mn8yk.execute-api.us-east-1.amazonaws.com/Prod/Contact/AddContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" ref={ref} className="py-12 flex justify-center">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="bg-[#171717] rounded-[40px] relative overflow-hidden">
          {/* Background Image */}
          <img 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-20" 
            src={imgFrame77} 
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 py-8 px-12 flex flex-col items-center gap-6"
          >
            {/* Header */}
            <motion.div 
              variants={itemVariants}
              className="text-center"
            >
              <div className="font-['Urbanist',sans-serif] text-[64px] leading-none tracking-[-1.28px] text-white mb-4">
                <span className="font-semibold">Have an Awesome Project</span>
                <br />
                <span className="font-semibold">Idea? </span>
                <span className="font-bold text-[#3b82e6]">Let's Discuss</span>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="w-full max-w-[800px] flex flex-col gap-6"
            >

              {/* Name Input */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full bg-white/10 backdrop-blur-sm border-2 ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    } rounded-[16px] px-8 py-3.5 text-white text-[20px] placeholder:text-white/50 focus:outline-none focus:border-[#3b82e6] transition-all`}
                  />
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CircleAlert className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-[14px] mt-2 ml-2"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email & Phone Row */}
              <div className="flex gap-[6px]">
                {/* Email Input */}
                <div className="relative w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full bg-white/10 backdrop-blur-sm border-2 ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    } rounded-[16px] px-8 py-3.5 text-white text-[20px] placeholder:text-white/50 focus:outline-none focus:border-[#3b82e6] transition-all`}
                  />
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CircleAlert className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-[14px] mt-2 ml-2"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
                {/* Phone Input */}
                <div className="relative w-1/2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full bg-white/10 backdrop-blur-sm border-2 ${
                      errors.phone ? 'border-red-500' : 'border-white/20'
                    } rounded-[16px] px-8 py-3.5 text-white text-[20px] placeholder:text-white/50 focus:outline-none focus:border-[#3b82e6] transition-all`}
                  />
                  {errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CircleAlert className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-[14px] mt-2 ml-2"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Services Dropdown */}
              <div>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={servicesLoading}
                    className={`w-full bg-white/10 backdrop-blur-sm border-2 ${
                      errors.service ? 'border-red-500' : 'border-white/20'
                    } rounded-[16px] px-8 py-3.5 text-white/50 text-[20px] placeholder:text-white/50 focus:outline-none focus:border-[#3b82e6] transition-all appearance-none`}
                  >
                    <option value="" disabled className="bg-[#23272f] text-white/50">
                      {servicesLoading ? 'Loading services...' : 'Select a Service'}
                    </option>
                    {!servicesLoading && services && services.length > 0 ? (
                      services.map((service: any) => (
                        <option key={service.id || service.title} value={service.title} className="bg-[#23272f] text-white">
                          {service.title}
                        </option>
                      ))
                    ) : !servicesLoading && (
                      <option value="" disabled className="bg-[#23272f] text-white/50">
                        No services available
                      </option>
                    )}
                  </select>
                  {errors.service && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CircleAlert className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </div>
                {errors.service && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-[14px] mt-2 ml-2"
                  >
                    {errors.service}
                  </motion.p>
                )}
              </div>



              
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={3}
                    className={`w-full bg-white/10 backdrop-blur-sm border-2 ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    } rounded-[16px] px-8 py-2 text-white text-[18px] placeholder:text-white/50 focus:outline-none focus:border-[#3b82e6] transition-all resize-none`}
                  />
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-4 top-6"
                    >
                      <CircleAlert className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-[14px] mt-2 ml-2"
                  >
                    {errors.message}
                  </motion.p>
                )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-6 rounded-[16px] font-['Urbanist',sans-serif] font-semibold text-[24px] tracking-[-0.48px] transition-all ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-[#3b82e6] text-white'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    <CircleCheck className="w-6 h-6" />
                    Message Sent Successfully!
                  </span>
                ) : (
                  'Contact Us'
                )}
              </motion.button>
            </motion.form>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="font-['Montserrat',sans-serif] text-green-400 text-[18px]">
                  Thank you for reaching out! We'll get back to you soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'mixing',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = t.formValidationName;
    }
    
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = t.formValidationEmail;
    }
    
    if (!formData.message.trim()) {
      errors.message = t.formValidationMessage;
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('loading');
    
    // Simulate form submission (replace with actual API call)
    try {
      // Replace with your actual form submission logic
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: 'mixing',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };
  
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-primary/10 to-base-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-primary">{t.contactTitle}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 font-inter">
            {t.contactSubtitle}
          </p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card bg-base-200 shadow-xl font-inter">
                <div className="card-body">
                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <div className="alert alert-success mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{t.messageSent}</span>
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="alert alert-error mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{t.messageError}</span>
                    </div>
                  )}
                  
                  {/* Form Fields */}
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-accent">{t.formName} *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input input-bordered w-full ${formErrors.name ? 'input-error' : ''}`}
                      />
                      {formErrors.name && (
                        <label className="label">
                          <span className="label-text-alt text-error">{formErrors.name}</span>
                        </label>
                      )}
                    </div>
                    
                    <div className="form-control w-full">
                      <label className="label text-accent ">
                        <span className="label-text">{t.formEmail} *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input input-bordered w-full ${formErrors.email ? 'input-error' : ''}`}
                      />
                      {formErrors.email && (
                        <label className="label">
                          <span className="label-text-alt text-error">{formErrors.email}</span>
                        </label>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="form-control w-full">
                      <label className="label text-accent">
                        <span className="label-text">{t.formSubject}</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                      />
                    </div>
                    
                    <div className="form-control w-full">
                      <label className="label text-accent">
                        <span className="label-text">{t.formProject}</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                      >
                        <option value="mixing">{t.formMixing}</option>
                        <option value="mastering">{t.formMastering}</option>
                        <option value="production">{t.formProduction}</option>
                        <option value="liveMixing">{t.formLiveMixing}</option>
                        <option value="session">{t.formSession}</option>
                        <option value="other">{t.formOther}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-control w-full">
                    <label className="label text-accent">
                      <span className="label-text">{t.formMessage} *</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`textarea textarea-bordered h-32 w-full ${formErrors.message ? 'textarea-error' : ''}`}
                    ></textarea>
                    {formErrors.message && (
                      <label className="label">
                        <span className="label-text-alt text-error">{formErrors.message}</span>
                      </label>
                    )}
                  </div>
                  
                  <div className="form-control mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        t.formSubmit
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="card bg-base-200 shadow-xl mb-8">
                <div className="card-body">
                  <h2 className="card-title text-xl mb-4 font-heading text-secondary">{t.contactInfo}</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold font-heading">{t.contactEmail}</h3>
                        <a href="mailto:hannsal@outlook.com" className="text-primary hover:underline font-inter">
                          hannsal@outlook.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold font-heading">{t.studioLocation}</h3>
                        <p className='font-inter'>Turku, Finland</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Availability */}
              <div className="card bg-base-200 shadow-xl mb-8">
                <div className="card-body">
                  <h2 className="card-title text-xl mb-2 font-heading text-secondary">{t.availability}</h2>
                  <p className='font-inter'>{t.availabilityText}</p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl mb-4 font-heading text-secondary">{t.followMe}</h2>
                  
                  <div className="flex flex-wrap gap-3">
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    
                    <a href="https://youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                    
                    
                    <a href="https://spotify.com/artist/yourid" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </a>
                    
                    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
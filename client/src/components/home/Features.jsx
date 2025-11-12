import React from 'react'
import { Zap } from 'lucide-react';
import Title from './Title';


const Features = () => {
    const [isHover, setIsHover] = React.useState(false);
  return (
    <div id='features' className='py-16 sm:py-20 bg-white scroll-mt-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center text-center mb-12'>
         <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 rounded-full px-5 py-2 mb-4">
         <Zap width={16}/>
            <span className='font-medium'>Simple Process</span>
        </div>
        <Title title='Build Your Resume' description='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.' />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 group-hover:text-white transition-colors duration-200">
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Content</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Generate professional content with intelligent AI suggestions tailored to your experience.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 group-hover:text-white transition-colors duration-200">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Customization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Customize every section with our intuitive editor. Make your resume truly yours.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
              <svg className="text-green-600 group-hover:text-white transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Download</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Export your resume as PDF instantly. Professional formatting guaranteed.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 group-hover:text-white transition-colors duration-200">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">ATS-Friendly</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Optimized for Applicant Tracking Systems to increase your chances of getting noticed.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 group-hover:text-white transition-colors duration-200">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Templates</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Choose from professionally designed templates that suit your industry and style.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 group-hover:text-white transition-colors duration-200">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Your data is encrypted and secure. We never share your information with third parties.</p>
          </div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Features

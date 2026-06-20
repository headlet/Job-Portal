import React, { useState } from 'react';
import { 
  FaBriefcase, 
  FaPlay, 
  FaPlus, 
  FaMinus, 
  FaRegUser, 
  FaRegFileAlt, 
  FaSearch, 
  FaRegCheckCircle,
  FaAward,
  FaRegBuilding,
  FaUserTie,
  FaArrowRight
} from "react-icons/fa";

function About() {
  const [activeFaq, setActiveFaq] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "Can I upload a CV?",
      answer: "Aenean in magna id nisl venenatis elementum eget quis nunc. Praesent hendrerit id nisi eu commodo. Donec ullamcorper imperdiet vulputate. Quisque ut mi vel lorem viverra ullamcorper et nec diam."
    },
    { id: 2, question: "How long will the recruitment process take?", answer: "The process usually takes between 1-2 weeks depending on the company." },
    { id: 3, question: "Do you recruit for Graduates, Apprentices and Students?", answer: "Yes, we have dedicated programs for entry-level professionals." },
    { id: 4, question: "What does the recruitment and selection process involve?", answer: "It involves profile screening, technical assessments, and final interviews." },
    { id: 5, question: "Can I receive notifications for any future jobs that may interest me?", answer: "Absolutely. You can set up custom job alerts in your profile dashboard." }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-neutral-800 font-sans">
      
      {/* 1. BLACK HEADER SECTION */}
      <div className="w-full bg-[#0a0a0a] text-white py-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 2. INTRO TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Et nunc ut tempus duis nisl sed massa
          </h2>
          <p className="text-neutral-500 leading-relaxed text-sm md:text-base">
            Morbi in magna eget id nec nunc porttitor elementum. Duis id mauris dui eu. Pellentesque nec id eu et nec diam ac sed sed. Fringilla scelerisque sed egestas morbi urna ipsum id. Vestibulum tristique interdum scelerisque et nulla etiam in imperdiet curabitur. Sed gravida donec rhoncus cras elementum.
          </p>
        </div>

        {/* 3. HERO IMAGE PLACEHOLDER */}
        <div className="w-full h-[400px] md:h-[500px] bg-neutral-200 rounded-3xl overflow-hidden mb-24">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4. HOW IT WORKS */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm">
            Quis felis pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris diam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: <FaRegUser />, title: "Create Account", desc: "Nunc adipiscing eu id in id hac nam porttitor elementum." },
            { icon: <FaRegFileAlt />, title: "Upload Resume", desc: "Duis sed nulla in pellentesque nec nec id eu id amet nec." },
            { icon: <FaSearch />, title: "Find Jobs", desc: "Fringilla scelerisque sed egestas morbi lectus ipsum id." },
            { icon: <FaRegCheckCircle />, title: "Apply Job", desc: "Curabitur scelerisque nec nulla rhoncus cras imperdiet." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-neutral-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#eaf4f3] text-[#309689] rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 5. VIDEO BANNER */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-neutral-900 text-white mb-24">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Office background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center">
            <button className="w-16 h-16 bg-[#309689] rounded-full flex items-center justify-center text-white text-xl mb-8 hover:scale-110 transition-transform">
              <FaPlay className="ml-1" />
            </button>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
              Good Life Begins With A Good Company
            </h2>
          </div>
          {/* Bottom Banner Stats */}
          <div className="relative z-10 bg-[#0d1312]/90 backdrop-blur-md border-t border-white/10 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { no: "1", title: "Elit gravida donec ascd peirta rhoncd abcat", link: "Learn more" },
                { no: "2", title: "Vestibulum et scere risdia cras stiein", link: "Learn more" },
                { no: "3", title: "Elementum lorem ased as egestab morbi", link: "Learn more" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-[#309689] rounded text-white flex items-center justify-center font-bold shrink-0">
                    {item.no}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 leading-snug">{item.title}</h4>
                    <a href="#" className="text-[#309689] text-sm hover:underline">{item.link}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. FAQ SECTION */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-500 text-sm">
              Quis felis pellentesque viverra tellus eget malesuada facilisis.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-2xl p-6 cursor-pointer transition-colors ${isOpen ? 'bg-[#eaf4f3] border-[#309689]' : 'border-neutral-200 hover:border-neutral-300'}`}
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className={`font-semibold ${isOpen ? 'text-[#309689]' : 'text-neutral-800'}`}>
                      <span className="mr-3 opacity-60 text-sm">0{index + 1}</span> 
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#309689] border-[#309689] text-white' : 'border-neutral-300 text-neutral-400'}`}>
                      {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="mt-4 text-sm text-neutral-600 leading-relaxed pl-7">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* 7. WE ARE ONLY WORKING WITH THE BEST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Images Collage */}
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 lg:h-[500px]">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office 1" className="w-full h-full object-cover rounded-2xl" />
            <div className="grid grid-rows-2 gap-4 h-full">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office 2" className="w-full h-full object-cover rounded-2xl" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office 3" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              We're Only Working With The Best
            </h2>
            <p className="text-neutral-500 mb-10 text-sm leading-relaxed max-w-md">
              Quis felis pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris diam.
            </p>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {[
                { icon: <FaAward />, text: "Quality Job" },
                { icon: <FaUserTie />, text: "Top Invidual" },
                { icon: <FaRegBuilding />, text: "Top Companies" },
                { icon: <FaRegUser />, text: "Top Talents" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#eaf4f3] text-[#309689] flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-neutral-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8. NEWS AND BLOG */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">News and Blog</h2>
            <p className="text-neutral-500 text-sm">
              Quis felis pellentesque viverra tellus eget malesuada facilisis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { tag: "News", date: "11 March 2024", title: "Revitalizing Workplace Mosaic: Innovative Tactics For Boosting Employee Engagement in 2024" },
              { tag: "Blog", date: "11 March 2024", title: "How To Avoid The Top Six Most Common Job Interview Mistakes" }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="w-full h-64 bg-neutral-200 rounded-3xl overflow-hidden mb-6 relative">
                  <img src={`https://images.unsplash.com/photo-${idx === 0 ? '1600880292203-757bb62b4baf' : '1573496359142-b8d87734a5a2'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[#309689] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    {post.tag}
                  </div>
                </div>
                <div className="text-neutral-500 text-sm mb-3">{post.date}</div>
                <h3 className="text-xl font-bold leading-snug mb-4 group-hover:text-[#309689] transition-colors">{post.title}</h3>
                <span className="text-[#309689] font-medium flex items-center gap-2">
                  Read more <FaArrowRight className="text-sm" />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
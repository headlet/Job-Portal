import React from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaRegClock, 
  FaMapMarkerAlt,
  FaBriefcase
} from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full min-h-screen bg-white text-neutral-800 font-sans flex flex-col">
      
      {/* 1. DARK PAGE HEADER */}
      <div className="w-full bg-[#0a0a0a] text-white py-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
      </div>

      {/* 2. MAIN CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text & Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              You Will Grow, You Will Succeed. We Promise That
            </h2>
            <p className="text-neutral-500 mb-12 leading-relaxed">
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Info Item 1 */}
              <div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#309689] bg-[#eaf4f3] mb-4">
                  <FaPhoneAlt />
                </div>
                <h4 className="font-bold text-lg mb-2">Call for inquiry</h4>
                <p className="text-neutral-600">+257 388-6895</p>
              </div>

              {/* Info Item 2 */}
              <div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#309689] bg-[#eaf4f3] mb-4">
                  <FaEnvelope />
                </div>
                <h4 className="font-bold text-lg mb-2">Send us email</h4>
                <p className="text-neutral-600">kramulous@sbcglobal.net</p>
              </div>

              {/* Info Item 3 */}
              <div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#309689] bg-[#eaf4f3] mb-4">
                  <FaRegClock />
                </div>
                <h4 className="font-bold text-lg mb-2">Opening hours</h4>
                <p className="text-neutral-600">Mon - Fri: 10AM - 10PM</p>
              </div>

              {/* Info Item 4 */}
              <div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#309689] bg-[#eaf4f3] mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="font-bold text-lg mb-2">Office</h4>
                <p className="text-neutral-600">19 North Road Piscataway, NY 08854</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#f4f8f7] rounded-3xl p-8 md:p-10 border border-neutral-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
              <p className="text-neutral-500 text-sm">Nibh duis faucibus proin lacus tristique</p>
            </div>

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-700">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#309689] focus:ring-1 focus:ring-[#309689] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-700">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Your last name" 
                    className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#309689] focus:ring-1 focus:ring-[#309689] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-neutral-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Your E-mail address" 
                  className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#309689] focus:ring-1 focus:ring-[#309689] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-neutral-700">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Your message..." 
                  className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#309689] focus:ring-1 focus:ring-[#309689] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto self-start bg-[#309689] hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 3. MAP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="w-full h-[400px] rounded-3xl overflow-hidden bg-neutral-200 relative border border-neutral-200">
          {/* Using an actual embed map as a placeholder to match the design's map feel. 
              You can replace this iframe with your own Google Maps embed link or a static image. */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="absolute inset-0 grayscale contrast-125 opacity-80"
          ></iframe>
          
          {/* Decorative Custom Marker to match design */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center drop-shadow-xl">
             <div className="bg-[#309689] text-white p-3 rounded-full shadow-lg">
                <FaMapMarkerAlt className="text-2xl" />
             </div>
             <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[#309689] -mt-1"></div>
          </div>
        </div>
      </div>

      {/* 4. LOGOS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full border-b border-neutral-100">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Using text/font styling to mimic logos, ideally replace with actual SVG/PNG logos */}
           <h3 className="text-3xl font-bold tracking-tighter">zoom</h3>
           <div className="flex items-center gap-1"><span className="text-3xl font-bold tracking-tight">tinder</span></div>
           <h3 className="text-3xl font-bold tracking-wide italic">dribbble</h3>
           <div className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-current block"></span><span className="text-3xl font-bold tracking-tight">asana</span></div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
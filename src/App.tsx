import React, { useState } from 'react';

// Navigation Component
const Navigation = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'news', label: 'NEWS' },
    { id: 'events', label: 'EVENTS' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  return (
    <nav className="bg-[#0066cc] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-6 py-4 text-white font-semibold transition-colors hover:bg-[#0052a3] ${
                currentPage === item.id ? 'bg-[#0052a3]' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Header Component
const Header = () => (
  <header className="bg-gradient-to-r from-[#0052a3] to-[#0066cc] py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold text-white mb-2">
        Society for Health Systems
      </h1>
      <p className="text-xl text-white/90">University of Florida Chapter</p>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <a 
        href="https://www.ise.ufl.edu" 
        className="text-blue-400 hover:text-blue-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        UF Department of Industrial and Systems Engineering
      </a>
      <p className="mt-2 text-gray-400">UF 2024</p>
    </div>
  </footer>
);

// Home Page Component
const HomePage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to the Society for Health Systems
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          The Society for Health Systems, the preeminent organization for healthcare engineers, 
          is the meeting of minds for health systems professionals and leaders like you. 
          SHS offers a wide network of colleagues, experts and resources outside your organization, 
          along with the latest and best process analytics, tools, techniques and methodologies for 
          performance improvement and opportunities for professional development.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Main Chapter</h2>
        <a 
          href="https://www.iise.org/SHS/" 
          className="text-blue-600 hover:text-blue-700 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover the national organization!
        </a>
      </div>
    </div>
  </div>
);

// About Page Component
const AboutPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
      What is Society For Health Systems?
    </h1>
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <p className="text-lg text-gray-700 leading-relaxed">
        The Society for Health Systems (SHS), part of the Institute of Industrial and Systems 
        Engineers (IISE), is dedicated to improving healthcare delivery through systems 
        engineering and process improvement. SHS's mission is to enhance lives by advancing 
        health and care systems globally, with a vision to foster continuous improvement, 
        innovation, and strategic thinking in healthcare. Its strategic priorities—Include, 
        Connect, Transform—emphasize member engagement, professional development through 
        education and networking, and establishing a recognized identity for healthcare 
        improvement professionals. Founded in 1948, IISE supports industrial engineers worldwide, 
        and SHS focuses on meeting the needs of healthcare management engineers.
      </p>
    </div>

    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mission Statement</h2>
    <div className="bg-blue-50 rounded-lg shadow-md p-8">
      <p className="text-lg text-gray-700 leading-relaxed">
        The purpose of the Society for Health Systems is to promote the use and awareness of systems
        engineering, analysis, and process improvement in the healthcare field by providing appropriate
        education and career opportunities to University of Florida students.
      </p>
    </div>
  </div>
);

// News Page Component
const NewsPage = () => {
  const newsItems = [
    {
      title: 'SHS Wins IISE Student Chapter Award',
      date: 'April 5, 2025',
      content: `The UF SHS chapter was honored with the 2025 IISE Student Chapter Award for its outstanding 
                contributions to healthcare systems engineering. Recognized for community outreach and innovative 
                workshops, the chapter was celebrated at the IISE Annual Conference. President Jack Dodd credited 
                the team's dedication to fostering collaboration among UF students.`
    },
    {
      title: 'Student Project Improves ER Wait Times',
      date: 'April 18, 2025',
      content: `A team of SHS students developed a simulation model that reduced emergency room wait times by 20% 
                at a local Gainesville hospital. Their project, presented at the UF ISE Symposium, used data 
                analytics to optimize patient flow. The hospital plans to implement the model in fall 2025, 
                showcasing SHS's impact on real-world healthcare challenges.`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Latest News</h1>
      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-blue-600 font-semibold mb-4">{item.date}</p>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Events Page Component
const EventsPage = () => {
  const events = [
    {
      title: 'Healthcare Optimization Workshop',
      date: 'May 15, 2025',
      description: `Join SHS for a hands-on workshop on process improvement techniques for hospital operations. 
                    Led by SHS advisors, this event will teach you how to streamline workflows using Lean and 
                    Six Sigma methodologies. Open to all UF students. Register via the SHS member portal!`
    },
    {
      title: 'Guest Speaker: Dr. Emily Tran',
      date: 'June 10, 2025',
      description: `Hear from Dr. Emily Tran, a UF alum and expert in healthcare logistics, as she discusses the 
                    role of AI in optimizing hospital supply chains. This virtual event includes a Q&A session. 
                    Free for SHS members; non-members can purchase tickets for $5.`
    },
    {
      title: 'SHS Networking Night',
      date: 'July 20, 2025',
      description: `Connect with local healthcare engineers and SHS alumni at our annual Networking Night. 
                    Enjoy refreshments, share ideas, and build your professional network. Held at the UF Reitz 
                    Union, this event is exclusive to SHS members. RSVP by July 10!`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h1>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
            <p className="text-blue-600 font-semibold mb-4">Date: {event.date}</p>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const board = [
    { name: 'Jack Dodd', position: 'President', email: 'jack.dodd@ufl.edu' },
    { name: 'Allen Kurian', position: 'Internal Vice President', email: 'allen.kurian@ufl.edu' },
    { name: 'Manuela Martinez', position: 'External Vice President', email: 'manuela.martinez@ufl.edu' },
    { name: 'Wesley Gelinas', position: 'Treasurer', email: 'wesley.gelinas@ufl.edu' },
    { name: 'Alejandra Hernandez', position: 'Director of Communications', email: 'alejandra.hernandez@ufl.edu' },
    { name: 'Sabrina Rule', position: 'Director of Fundraising', email: 's.rule@ufl.edu' },
    { name: 'Dakota Leonard', position: 'Chapter Development Chair', email: 'dakota.leonard@ufl.edu' },
    { name: 'Claire Burnsides', position: 'Outreach Chair', email: 'claire.burnsides@ufl.edu' },
    { name: 'Geovanny Ortiz', position: 'Webmaster', email: 'gortiz2@ufl.edu' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Current Executive Board
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {board.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-white font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-3">{member.position}</p>
            <a 
              href={`mailto:${member.email}`} 
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'news':
        return <NewsPage />;
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
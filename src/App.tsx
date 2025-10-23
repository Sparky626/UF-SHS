import React, { useState } from 'react';
import logo from './assets/Logo-White.png';
import GeovannyOrtiz from './assets/GeovannyOrtiz.jpeg';
import JackDodd from './assets/JackDodd.jpg';
import AllenKurian from './assets/AllenKurian.jpg';
import ManuelaMartinez from './assets/ManuelaMartinez.jpg';
import WesleyGelinas from './assets/WesleyGelinas.png';
import AlejandraHernandez from './assets/AlejandraHernandez.jpg';
import SabrinaRule from './assets/SabrinaRule.jpg';
import DakotaLeonard from './assets/DakotaLeonard.png';
import ClaireBurnsides from './assets/ClaireBurnsides.jpg';
// Navigation Component
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'news', label: 'NEWS' },
    { id: 'events', label: 'EVENTS' },
    { id: 'contact', label: 'CONTACT US' }
  ];
        return (
          <nav className="nav">
            <div className="nav__container container">
              <div className="nav__list">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`nav__item ${currentPage === item.id ? 'nav__item--active' : ''}`}
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
  <header className="header">
    <div className="container">
      <img src={logo} alt="SHS Logo" className="logo" />
      <h1 className="header__title">Society for Health Systems</h1>
      <p className="header__subtitle">UF Student Chapter</p>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="container text-center">
      <a
        href="https://www.ise.ufl.edu"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        UF Department of Industrial and Systems Engineering
      </a>
      <p className="muted--light mt-2">UF 2024</p>
    </div>
  </footer>
);

// Home Page Component
const HomePage = () => (
  <div className="container page">
    <div className="grid grid--home gap-8">
      <div className="card card--padded text-center">
        <h3 className="title">Get Involved</h3>
        <p className="lead">Join meetings, workshops and connect with local healthcare engineers.</p>
      </div>

      <div className="card card--padded text-center">
        <h2 className="title title--h2 mb-4">Welcome to the Society for Health Systems</h2>
        <p className="lead">
          The Society for Health Systems is the meeting of minds for health systems professionals and leaders. SHS provides a network of colleagues, the latest process analytics and tools, and opportunities for professional development at UF.
        </p>
      </div>

      <div className="card card--padded text-center">
        <h3 className="title">Events & News</h3>
        <p className="lead">Check upcoming workshops, speaker events and recent project highlights from our members.</p>
      </div>
    </div>
  </div>
);
 

// About Page Component
const AboutPage = () => (
  <div className="container page">
    <h1 className="title title--h1 text-center mb-6">What is Society For Health Systems?</h1>
    <div className="card card--padded mb-8">
      <p className="lead">
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

    <h2 className="title title--h2 text-center mb-6">Mission Statement</h2>
    <div className="card card--accent">
      <p className="lead">
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
    <div className="container page">
      <h1 className="title title--h1 text-center mb-8">Latest News</h1>
      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <div key={index} className="card">
            <h2 className="title mb-2">{item.title}</h2>
            <p className="muted mb-4">{item.date}</p>
            <p className="lead">{item.content}</p>
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
    <div className="container page">
      <h1 className="title title--h1 text-center mb-8">Upcoming Events</h1>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="card">
            <h2 className="title mb-2">{event.title}</h2>
            <p className="muted mb-4">Date: {event.date}</p>
            <p className="lead">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const board = [
    { name: 'Jack Dodd', position: 'President', email: 'jack.dodd@ufl.edu', img: JackDodd },
    { name: 'Allen Kurian', position: 'Internal Vice President', email: 'allen.kurian@ufl.edu', img: AllenKurian },
    { name: 'Manuela Martinez', position: 'External Vice President', email: 'manuela.martinez@ufl.edu', img: ManuelaMartinez },
    { name: 'Wesley Gelinas', position: 'Treasurer', email: 'wesley.gelinas@ufl.edu', img: WesleyGelinas },
    { name: 'Alejandra Hernandez', position: 'Director of Communications', email: 'alejandra.hernandez@ufl.edu', img: AlejandraHernandez },
    { name: 'Sabrina Rule', position: 'Director of Fundraising', email: 's.rule@ufl.edu', img: SabrinaRule },
    { name: 'Dakota Leonard', position: 'Chapter Development Chair', email: 'dakota.leonard@ufl.edu', img: DakotaLeonard },
    { name: 'Claire Burnsides', position: 'Outreach Chair', email: 'claire.burnsides@ufl.edu', img: ClaireBurnsides },
    { name: 'Geovanny Ortiz', position: 'Webmaster', email: 'gortiz2@ufl.edu', img: GeovannyOrtiz }
  ];

  return (
    <div className="container page">
      <h1 className="title title--h1 text-center mb-8">Current Executive Board</h1>
      <div className="grid grid--cols-3 gap-6">
        {board.map((member, index) => (
          <div key={index} className="card text-center">
            <div className="board-avatar">
              {member.img ? (
                <img src={member.img} alt={member.name} className="avatar-img" />
              ) : (
                <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="muted mb-3">{member.position}</p>
            <a href={`mailto:${member.email}`} className="footer__link text-sm">{member.email}</a>
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
    <div className="min-h-screen flex flex-col">
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
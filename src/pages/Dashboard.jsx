import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

// Image imports (example paths)
import patientIcon from '../assets/patient-icon.png';
import appointmentIcon from '../assets/appointment-icon.png';
import doctorIcon from '../assets/doctor-icon.png';
import dashboardImage from '../assets/dashboard-image.jpg'; // Import your image here

const Dashboard = () => {
  const { patients, appointments, doctors } = useAppContext();
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const patientsCount = patients ? patients.length : 0;
  const appointmentsCount = appointments ? appointments.length : 0;
  const doctorsCount = doctors ? doctors.length : 0;

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide a comprehensive range of healthcare services including general consultations, specialized care, and preventive screenings. Our goal is to ensure that all patients receive tailored care that meets their individual health needs and concerns. Additionally, we place a strong emphasis on patient education to help you make informed health decisions."
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can easily schedule an appointment through our user-friendly website or by calling our clinic directly. We strive to offer flexible timings that accommodate your busy schedule. Once your appointment is successfully booked, you will receive a confirmation email detailing all necessary information."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept a variety of major insurance plans, including both PPO and HMO networks. For specific inquiries regarding your plan, please feel free to contact us directly. Our knowledgeable staff is always ready to assist you in understanding your benefits and coverage options."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "When visiting our clinic for your appointment, please bring a valid government-issued ID, your insurance card, and any relevant medical records. Additionally, if you have a list of medications you are currently taking or any previous test results, bringing these documents can help our doctors provide you with the best possible care."
    },
    {
      question: "What are your office hours?",
      answer: "Our clinic operates Monday through Friday from 8 AM to 6 PM, and we are open on Saturdays from 9 AM to 2 PM. We remain closed on Sundays and major holidays. For any updates on holiday hours or special announcements, please check our website regularly."
    },
    {
      question: "How do you ensure patient confidentiality?",
      answer: "We prioritize patient confidentiality above all else. All patient records are stored securely, and we adhere strictly to HIPAA regulations to protect your personal information. Our staff members are trained in privacy practices to ensure the integrity of your health information is maintained at all times."
    },
    {
      question: "Do you offer telehealth services?",
      answer: "Yes, we do provide telehealth services for select appointments. This allows you to consult with our healthcare providers from the comfort of your home, which is especially useful for follow-up visits and managing minor health concerns. Please inquire about telehealth options when scheduling your appointment."
    },
    {
      question: "What happens if I need to cancel my appointment?",
      answer: "If you need to cancel your appointment, we kindly ask that you notify us at least 24 hours in advance. This allows us to offer your time slot to another patient in need. We understand that emergencies can occur, and we strive to accommodate your needs as best we can."
    },
    {
      question: "How can I access my medical records?",
      answer: "To access your medical records, you can request them by filling out a release form available at our front desk or online. We aim to provide you with copies of your records promptly, and our staff will be happy to assist you if you have any questions about the process."
    },
    {
      question: "What should I do in case of a medical emergency?",
      answer: "In the event of a medical emergency, please call 911 immediately or proceed to your nearest emergency room. Our clinic is not equipped to handle emergencies; however, we are here to provide follow-up care once you have received immediate medical attention."
    },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome to Your Health Dashboard</h2>
      <p className="headline">Keep track of your clinic's activities at a glance.</p>
      
      {/* Image Display */}
      <img src={dashboardImage} alt="Healthcare Dashboard" className="dashboard-image" />

      <div className="stats">
        <div className="stat">
          <img src={patientIcon} alt="Patients" className="stat-icon" />
          <h3>Total Patients</h3>
          <p>{patientsCount}</p>
        </div>
        <div className="stat">
          <img src={appointmentIcon} alt="Appointments" className="stat-icon" />
          <h3>Upcoming Appointments</h3>
          <p>{appointmentsCount}</p>
        </div>
        <div className="stat">
          <img src={doctorIcon} alt="Doctors" className="stat-icon" />
          <h3>Our Dedicated Doctors</h3>
          <p>{doctorsCount}</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
  <h2>Frequently Asked Questions</h2>
  {faqs.map((faq, index) => (
    <div key={index} className={`faq-item ${faqOpen === index ? 'active' : ''}`}>
      <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
        {faq.question}
        <span className="toggle-icon">{faqOpen === index ? '-' : '+'}</span>
      </h3>
      <p className="faq-answer">{faqOpen === index && faq.answer}</p>
    </div>
  ))}
</div>


      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DoctorPortal. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;

'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiSettings, FiTool, FiBriefcase, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
    {/* Hero Section */}
<section
  className="relative bg-blue-900 text-white pt-44 py-28 bg-cover bg-center"
  style={{ backgroundImage: "url('https://wallpapers.com/images/featured/technology-w65hwkhmusntb0j9.jpg')" }} // Replace with your image path
>
  <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div> {/* Overlay */}
  <div className="relative container mx-auto text-center px-4" data-aos="fade-up">
    <h1 className="text-5xl font-bold mb-4">Walrus Technical Services</h1>
    <p className="text-lg max-w-2xl mx-auto mb-6">
      Strong technical solutions tailored to meet your unique needs. We focus on{" "}
      <span className="font-semibold">customer satisfaction</span>, professionalism, and delivering value.
    </p>
    <button className="bg-[#ddb264] text-blue-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
      Get Started
    </button>
  </div>
</section>


      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12" data-aos="fade-up">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer Satisfaction */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
              <FiCheckCircle className="text-blue-900 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-700">
                We anticipate customer needs and resolve them with sustainable solutions to ensure satisfaction every time.
              </p>
            </div>

            {/* Professionalism */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
              <FiBriefcase className="text-blue-900 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Professionalism</h3>
              <p className="text-gray-700">
                Our courteous and highly skilled team ensures reliable service and technical expertise at all times.
              </p>
            </div>

            {/* Fair Deal */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
              <FiTrendingUp className="text-blue-900 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Fair Deal</h3>
              <p className="text-gray-700">
                Transparent pricing with a focus on value. We treat all clients fairly and build trust through honesty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12" data-aos="zoom-in">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up">
              <FiSettings className="text-blue-900 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Customized Solutions</h4>
              <p className="text-gray-700">
                Tailored services designed to meet your unique business challenges and requirements.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up">
              <FiTool className="text-blue-900 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Reliable Maintenance</h4>
              <p className="text-gray-700">
                We ensure uninterrupted operations with efficient and proactive maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* Services Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <h2
      className="text-3xl font-bold text-center text-blue-900 mb-12"
      data-aos="zoom-in"
    >
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Service 1 */}
      <div
        className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://www.samsic.uk/wp-content/uploads/2023/06/Technical_Maintenance_Service_05_Samsic_UK-1600x720.jpg" // Replace with your image path
          alt="Technical Maintenance"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 text-center">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            Technical Maintenance
          </h4>
          <p className="text-gray-700">
            Comprehensive maintenance services to ensure your systems operate
            efficiently and effectively.
          </p>
        </div>
      </div>

      {/* Service 2 */}
      <div
        className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://content.presspage.com/uploads/2580/1920_134870516-mcropped.jpg?10000" // Replace with your image path
          alt="Sustainable Solutions"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 text-center">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            Sustainable Solutions
          </h4>
          <p className="text-gray-700">
            Eco-friendly, cost-effective solutions designed for long-term success
            and minimal impact.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div
        className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="data:image/jpeg;base64,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" // Replace with your image path
          alt="Professional Consulting"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 text-center">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            Professional Consulting
          </h4>
          <p className="text-gray-700">
            Expertise you can rely on. We help you tackle technical and
            operational challenges with confidence.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



     

      {/* Contact Section */}
      <section className="py-16 bg-blue-100 text-blue-900">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Let’s Get Started</h2>
          <p className="text-lg mb-6">
            Reach out to us today to discover how Warlus Technical Services can help your business thrive.
          </p>
          <a
            href="mailto:info@warlusservices.com"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

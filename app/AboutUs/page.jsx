import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white mt-20 text-[#001F54] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>Walrus Technical Services</strong> is a Dubai-based company
            specializing in Swimming Pool related Mechanical, Electrical &
            Plumbing (MEP) works, Wellness Project (Sauna, Steam & Jacuzzi),
            Control Panel & DB (Distribution Board), Lights (Swimming Pool U/W
            lights, Building lights, Landscaping Lights), Aluminium, Steel &
            Glass Fabrication work, Pool Fencing, CCTV Management, A/C ducting
            Work, etc., with over 20 years of combined experience.
          </p>

          <p className="text-lg leading-relaxed">
            We position ourselves in the industry by providing cost-effective
            long-term solutions to meet clients' requirements. Our target is to
            be the most efficient, reliable, and trusted company delivering
            services in a cost-effective way and to be one of the best in our
            field. By achieving efficient and reliable results, we aim to add
            value for our customers, understand their expectations, and fulfill
            our commitments. Our experienced and dedicated service team not only
            meets customers' needs but also looks beyond their expectations.
          </p>

          <p className="text-lg leading-relaxed">
            Walrus serves both residential and commercial properties by
            providing specialized services such as Swimming Pool MEP works,
            Heating & Cooling solutions for Swimming Pools and Domestic water
            tanks, Control panel supply & installation, Swimming Pool tiling &
            civil works, Pool safety fencing, Sauna room, Steam room & Spa
            installation, Aluminium & Glass door works, A/C Ducting works,
            Building painting works, and Swimming Pool MEP Consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-[#F0F4FF] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center md:text-left  mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-center md:text-left  leading-relaxed">
              To become the leading Technical Service company in the Middle East
              by executing projects in a safe, timely, and quality-oriented
              manner, thus emerging as the most preferred solutions provider for
              our clients.
            </p>
          </div>

          <div className="bg-[#F0F4FF] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-center md:text-left">
              To deliver excellence in the service sector by focusing on
              sustainable best practices, driven by a team of highly experienced
              and professional individuals, and maintain high-quality services
              that satisfy the needs and exceed the customers' expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

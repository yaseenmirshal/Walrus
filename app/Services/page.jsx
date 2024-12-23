import React from "react";

const ServiceCard = ({ title, image, description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4 text-[#001F54]">{title}</h3>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Swimming Pool MEP Works & Rectification",
      image: "https://5.imimg.com/data5/GC/QB/MY-46720054/img-20180325-wa0002.jpg", // Replace with your image URL
      description:
        "Walrus specializes in all kinds of MEP works related to swimming pools and water features, providing supply, installation, and rectification services with expertise in major brands like Astral, Aqua, Pentair, and Hayward.",
    },
    {
      title: "Swimming Pool Tiling & Civil Works",
      image: "https://www.waterzonepools.com/service_images/pool_construction_1688378592.jpg", // Replace with your image URL
      description:
        "Walrus offers expert swimming pool tiling and repair services under the supervision of skilled professionals, ensuring flawless execution and client satisfaction.",
    },
    {
      title: "Heating & Cooling System Installation & Repair",
      image: "https://www.coynecollege.edu/wp-content/uploads/2020/08/hvac-installation-guide-coynecollege-scaled.jpeg", // Replace with your image URL
      description:
        "Walrus provides efficient heating and cooling solutions for swimming pools and domestic water tanks, ensuring cost savings with advanced systems and skilled troubleshooting.",
    },
    {
      title: "Wellness Projects (Sauna, Steam Room, SPA)",
      image: "https://imaginox.com/wp-content/themes/imaginox.com/assets/img/products/saunas/customized-home-sauna-by-tao-with-premium-materials.jpg", // Replace with your image URL
      description:
        "We deliver customized sauna, steam room, and spa installations for residential and commercial projects, focusing on quality and customer requirements.",
    },
    {
      title: "Control Panel Supply & Installation",
      image: "https://www.unicornglobalautomations.com/wp-content/uploads/2023/08/Control-Panel-Integration.jpg", // Replace with your image URL
      description:
        "Walrus designs and supplies control panels for industrial and commercial applications, adhering to high safety and quality standards with reputed brands.",
    },
    {
      title: "Lighting Solutions",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQF2GWDkrZkVog/feedshare-shrink_800/feedshare-shrink_800/0/1730880346611?e=2147483647&v=beta&t=eBfVswsrw4GORwJZ9-eUx4HD-ar7J64LOAjALls01a0", // Replace with your image URL
      description:
        "We offer reliable and durable lighting fixtures for swimming pools, landscapes, residential, and commercial applications with leading brands.",
    },
    {
      title: "Aluminium, Glass & Steel Works",
      image: "https://cdn.store-assets.com/s/159491/i/2190929.jpeg", // Replace with your image URL
      description:
        "We specialize in high-quality aluminium, glass, and steel fabrication for luxury villas, high-rise buildings, and commercial spaces.",
    },
    {
      title: "Pool Safety Fencing",
      image: "https://www.poolfencediy.com/cdn/shop/files/GAH_9583_4d06abcc-51b4-4987-a75f-691602c08916.jpg", // Replace with your image URL
      description:
        "Secure and stylish pool fencing solutions, including glass, aluminium, and mesh options to ensure safety and aesthetic appeal.",
    },
    {
      title: "Pergola & Car Parking Shed",
      image: "https://www.shadesgalaxy.com/wp-content/uploads/2021/02/per.png", // Replace with your image URL
      description:
        "Walrus offers a range of outdoor solutions like canopies, pergolas, and car parking sheds with innovative hardware and precision design.",
    },
  ];

  return (
    <section className="bg-[#F0F4FF] py-16 mt-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#001F54] mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

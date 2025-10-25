import React from "react";
import { ExternalLink } from "lucide-react";


const websites = [
  {
    name: "PadelStoreID (Itemku)",
    logo: "/images/itemku.png",
    link: "https://itemku.com/toko/padelstoreid/12026056",
    desc: "Toko game digital yang menjual item langka, dan gamepass untuk berbagai game populer.",
    period: "21 Maret 2024 - Sekarang",
    skills: [
     "Digital Marketing",
  "Customer Support",
  "Online Sales Strategy",
  "Payment & Transaction Handling",
  "Inventory Management",
  "Business Analytics",
  "Product Sourcing",
  "Profit & Cost Calculation",
  "Excel / Data Analysis",
  "Time Management",
  "Customer Negotiation",
  "Online Listing Optimization",
  "Social Media Marketing",
  "Sales Strategy Planning",
  "Problem Solving / Adaptability",
    ],
    revenue: "$2,000",
  },
  {
    name: "PadelStoreID (ZeusX)",
    logo: "/images/zeusx.png",
    link: "https://zeusx.com/seller/padelstoreid-572107",
    desc: "Platform internasional untuk menjual dan membeli akun atau item game dengan aman dan terpercaya.",
    period: "08 November 2024 - Sekarang",
    skills: [
    "Digital Marketing",
  "Customer Support",
  "Online Sales Strategy",
  "Payment & Transaction Handling",
  "Inventory Management",
  "Business Analytics",
  "Product Sourcing",
  "Profit & Cost Calculation",
  "Excel / Data Analysis",
  "Time Management",
  "Customer Negotiation",
  "Online Listing Optimization",
  "Sales Strategy Planning",
  "Problem Solving / Adaptability",
    ],
    revenue: "$10,000",
  },
];

const Websites = () => {
  return (
    <section
      id="websites"
      className="py-20 bg-[#0a0f1a] text-white px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-12 text-green-400">
        Entrepreneur Experience
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {websites.map((site, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-gray-800/40 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-green-500/20 transition-all"
          >
           
            <img
              src={site.logo}
              alt={site.name}
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg shadow-md"
            />

           
            <div className="text-left flex-1">
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                {site.name}
              </h3>
              <p className="text-gray-300 mb-1">{site.desc}</p>
              <p className="text-gray-400 text-sm mb-1">
                <span className="font-medium">Periode:</span> {site.period}
              </p>
              <p className="text-gray-400 text-sm mb-3">
                <span className="font-medium">Pendapatan:</span> {site.revenue}
              </p>

             
              <div className="flex flex-wrap gap-2 mb-4">
                {site.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-green-500/10 text-green-400 border border-green-400/30 px-3 py-1 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                <ExternalLink size={18} />
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Websites;

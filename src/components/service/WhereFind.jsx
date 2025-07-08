import React from "react";

import { MapPin, PhoneCall, Clock } from "lucide-react";

import { locations } from "../../constants/locations";

const LocationCard = ({ title, address, phone, hours }) => (
  <div className="w-full max-w-md p-6 rounded-xl space-y-2 shadow-md transition-all hover:transform hover:scale-105 hover:shadow-xl">
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

    <div className="flex items-center gap-2">
      <MapPin size={15} />
      <p className="text-gray-600 whitespace-pre-line">{address}</p>
    </div>

    <div className="flex items-center gap-2">
      <PhoneCall size={15} />
      <p className="text-gray-700 mt-1 font-medium">{phone}</p>
    </div>

    <div className="flex items-center gap-2">
      <Clock size={15} />
      <p className="text-sm text-gray-500">{hours}</p>
    </div>
  </div>
);

const WhereFind = () => {
  return (
    <section id="where-to-find" className="container mx-auto py-10 space-y-5">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Onde encontrar?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {locations.map((location, idx) => (
          <LocationCard key={idx} {...location} />
        ))}
      </div>
    </section>
  );
};

export default WhereFind;

import React from "react";

import { FAQ_DATA, MITOS_DATA } from "../../constants/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const renderContent = (content) => {
    if (content == "") return <br />;

    if (content.href) {
      return <a href={content.href}>{content.label}</a>;
    }

    return <p className="text-gray-700">{content}</p>;
  };

  return (
    <section id="customer" className="py-10 bg-white">
      <div className="container mx-auto min-h-screen px-6 md:py-5 md:px-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          FAQ
        </h2>

        <div className="mt-5 md:space-x-10">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="border-b">
              <button
                className="w-full text-left py-3 font-medium focus:outline-none"
                onClick={() => toggle(i)}
              >
                {item.title}
              </button>

              {openIndex === i && (
                <div key={"content_" + i}>
                  {item.content.map(renderContent)}
                </div>
              )}
            </div>
          ))}
        </div>

        <span>Possui outras dúvidas? sac@convencaorj.ind.br</span>
      </div>

      <div className="container mx-auto min-h-screen px-6 md:py-5 md:px-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Mitos e Verdades
        </h2>

        <div className="mt-5 md:space-x-10">
          {MITOS_DATA.map((item, i) => (
            <div key={i} className="border-b">
              <button
                className="w-full text-left py-3 font-medium focus:outline-none"
                onClick={() => toggle(i)}
              >
                {item.title}
              </button>

              {openIndex === i && (
                <div key={"content_" + i}>
                  {item.content.map(renderContent)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

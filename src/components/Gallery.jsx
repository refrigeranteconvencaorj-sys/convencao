import { images } from "../constants/gallery";

const Gallery = () => {
  return (
    <section id="gallery" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Conheça nossa fábrica
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagem ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow border transition-all hover:transform hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import "../assets/styles/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  // Variable to set/update the gallery images
  const [galleryImages, setGalleryImages] = useState<any[]>([]);

  useEffect(() => {
    // Fetch gallery images from the server when the component mounts
    const fetchGalleryImages = async () => {
      try {
        const response = await axios.get("/api/recipes");
        setGalleryImages(response.data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };
    fetchGalleryImages();
  }, []);
  return (
    <div>
      <div className="heading">
        <h1 className="text-4xl font-bold text-center">Gallery</h1>
      </div>
      <div className="gallery">
        {galleryImages.length > 0 ? (
          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image: any) =>
              image.image ? (
                <div className="flip-box" key={image.id}>
                  <div className="gallery-item flip-box-inner">
                    <div className="flip-box-front">
                      <img src={image.image} alt={image.name} />
                    </div>
                    <div className="flip-box-back">
                      <h2>{image.name}</h2>
                    </div>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        ) : (
          <p className="text-center">No images found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;

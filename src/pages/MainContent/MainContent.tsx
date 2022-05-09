import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

interface TImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const MainContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<TImage[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setImages(response.data);
      });
  }, []);

  const renderGalleryItems = () => {
    if (images.length > 0) {
      return images.map((image) => (
        <div className="gallery-item">
          <img src={image.thumbnailUrl} />
        </div>
      ));
    } else {
      return <p>No images to display</p>;
    }
  };

  return (
    <div className="container main-content-container">
      <div className="main-content">
        <div
          className="icon"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className="icon-image-container">
            <FontAwesomeIcon icon={faImage} />
          </div>
          <p>Gallery</p>
        </div>
      </div>
      <aside className="side-content"></aside>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className="gallery-container">{renderGalleryItems()}</div>
      </Modal>
    </div>
  );
};

export default MainContent;

import { useState, type FC } from "react";
import DownloadButton from "../DownloadButton/DownloadButton";
import Modal from "../Modal/Modal";
import "./Preview.css";

interface PreviewProps {
  onClose: () => void;
  imageUrl: string;
  width: number;
  height: number;
}

const Preview: FC<PreviewProps> = ({
  onClose,
  imageUrl,
  width,
  height
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onLoad = () => {
    setIsImageLoaded(true);
  }

  return (
    <Modal
      onClose={onClose}
      imageUrl={imageUrl}
      width={width}
      height={height}
      actionButton={<DownloadButton src={imageUrl} fileName="image.jpg" height={height} width={width} />}
    >
      <div className="preview-image-container">
        {
          !isImageLoaded ? (
            <div className="preview-loading">
              <div>Loading...</div>
            </div>
          ) : null
        }
        <img
          src={imageUrl}
          alt="Preview"
          width={width}
          height={height}
          onLoad={onLoad}
        />
      </div>
    </Modal>

  );
};

export default Preview;

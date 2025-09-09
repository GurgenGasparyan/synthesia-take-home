import { type FC } from "react";
import Button from "../Button";

type DownloadButtonProps = {
  src: string;
  fileName?: string;
  height: number;
  width: number;
};

const DownloadButton: FC<DownloadButtonProps> = ({
  src,
  fileName = "image.jpg",
  height,
  width,
}) => {
  const handleDownload = async () => {
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (!blob) return;
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = fileName;
          a.click();
          URL.revokeObjectURL(a.href);
        }, "image/jpeg");
      };

      img.onerror = (err) => {
        console.error("Image load failed", err);
      };
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return <Button label="Download" onClick={handleDownload} />;
};

export default DownloadButton;

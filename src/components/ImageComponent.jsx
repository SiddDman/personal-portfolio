import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, hash }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageSize, setImageSize] = useState({ width: 300, height: 200 });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };

    setImageLoading(false);
    img.src = src;
  }, [src]);
  return (
    <>
      <div style={{ display: imageLoading ? "inline" : "none" }}>
        <Blurhash
          hash={hash}
          width={imageSize.width}
          height={imageSize.height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img src={src} style={{ display: !imageLoading ? "inline" : "none" }} />
    </>
  );
};

export default ImageComponent;

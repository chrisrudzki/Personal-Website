const artPhotos = [
  "Art1.png",
  "Art2.png",
  "Art3.png",
  "Art4.png",
  "Art5.png",
  "Art6.png",
];

export default function ArtContent({ onDisplay }) {
  return (
    <>
      <div class="content-container ">
        <div class="gallery-col">
          {artPhotos.slice(0, 2).map((imgName, i) => (
            <div class="gallery-image">
              <img
                className="zoom-image"
                onClick={() => onDisplay(imgName)}
                key={i}
                src={`/ArtPhotos/${imgName}`}
                alt={`Image ${i}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>

        <div class="gallery-col">
          {artPhotos.slice(2, 4).map((imgName, i) => (
            <div class="gallery-image">
              <img
                className="zoom-image"
                onClick={() => onDisplay(imgName)}
                key={i}
                src={`/ArtPhotos/${imgName}`}
                alt={`Image ${i}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>

        <div class="gallery-col">
          {artPhotos.slice(4, 6).map((imgName, i) => (
            <div class="gallery-image">
              <img
                className="zoom-image"
                onClick={() => onDisplay(imgName)}
                key={i}
                src={`/ArtPhotos/${imgName}`}
                alt={`Image ${i}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

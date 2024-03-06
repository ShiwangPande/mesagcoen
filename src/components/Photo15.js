const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const InterPrep = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const InterprepPhoto = [


  { id: "RVzNQ9CR/whatsapp-image-2024-03-07-at-005547-7971c389-65e8c386a1ad4.webp", width: 1080, height: 780 },
  { id: "3R4d9xDL/img-20240220-wa0003-65e8c37fb0934.webp", width: 1080, height: 780 },
  { id: "SQ9nMj4R/img-20240220-wa0004-65e8c38264551.webp", width: 1080, height: 780 },
  { id: "7hSb8t90/img-20240220-wa0005-65e8c382f3998.webp", width: 1080, height: 780 },
  { id: "cHp6zGRd/img-20240220-wa0006-65e8c37eeed55.webp", width: 1080, height: 780 },
  { id: "jdQCM9Lr/whatsapp-image-2024-03-07-at-005547-af03b028-65e8c3860c921.webp", width: 1080, height: 780 },


];




const photos = InterprepPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: InterPrep(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: InterPrep(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
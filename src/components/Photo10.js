const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Steam = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const SteamPhoto = [
    
    { id: "R0G507Jy/steamboiler1.webp", width: 1080, height: 780 },
    { id: "0Ntk4Rnz/steamboiler10.webp", width: 1080, height: 780 },
    { id: "tTYqQSv2/steamboiler11.webp", width: 780, height: 1080 },
    { id: "qRSkks90/steamboiler12.webp", width: 1080, height: 780 },
    { id: "gk9YQKVH/steamboiler13.webp", width: 1080, height: 780 },
    { id: "CLjFgfJT/steamboiler14.webp", width: 1080, height: 780 },
    { id: "JzxMyV9p/steamboiler15.webp", width: 1080, height: 780 },
    { id: "JzMR44dy/steamboiler16.webp", width: 1080, height: 780 },
    { id: "SKt4rLQ8/steamboiler17.webp", width: 1080, height: 780 },
    { id: "nzyJ8HDh/steamboiler18.webp", width: 1080, height: 780 },
    { id: "26bDXq3t/steamboiler19.webp", width: 1080, height: 780 },
    { id: "x8JWgBpV/steamboiler2.webp", width: 1080, height: 780 },
    { id: "s2ffKDYF/steamboiler3.webp", width: 1080, height: 780 },
    { id: "SQnswswk/steamboiler4.webp", width: 1080, height: 780 },
    { id: "ZYXRZmS3/steamboiler5.webp", width: 1080, height: 780 },
    { id: "0y02pJJd/steamboiler6.webp", width: 1080, height: 780 },
    { id: "x121JPq1/steamboiler7.webp", width: 1080, height: 780 },
    { id: "RVf0ZYSY/steamboiler8.webp", width: 1080, height: 780 },
    { id: "2ysgtTgb/steamboiler9.webp", width: 780, height: 1080 },


];




const photos = SteamPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: Steam(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: Steam(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
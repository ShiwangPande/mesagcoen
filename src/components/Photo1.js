const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const techquizLink = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const techquizPhotos = [

    { id: "x1d7g6YT/mesa-206.webp", width: 1080, height: 780 },
    { id: "CL7XjW3Q/mesa-208.webp", width: 1080, height: 780 },
    { id: "BnrtqNTZ/mesa-194.webp", width: 1080, height: 780 },
    { id: "43pyntP6/mesa-195.webp", width: 1080, height: 780 },
    { id: "4dZdcd2r/mesa-197.webp", width: 1080, height: 780 },
    { id: "cHmJBSV6/mesa-200.webp", width: 1080, height: 780 },
    { id: "Y0CCXPHR/mesa-202.webp", width: 1080, height: 780 },
    // { id: "", width: 1080, height: 780 },
];




const photos = techquizPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: techquizLink(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: techquizLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
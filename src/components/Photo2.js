const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const industrialVisit = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const industrialPhoto = [
    { id: "xT2tptGV/mesa-221.webp", width: 1080, height: 780 },
    { id: "rwygMsYh/mesa-222.webp", width: 1080, height: 780 },
    { id: "Yqz85Y8G/mesa-223.webp", width: 1080, height: 780 },
    { id: "x85QNqGs/mesa-161.webp", width: 1080, height: 780 },
    { id: "JnJ401dg/mesa-162.webp", width: 1080, height: 780 },
    { id: "264rm01N/mesa-164.webp", width: 1080, height: 780 },
    { id: "mkBRr79z/mesa-165.webp", width: 1080, height: 780 },
    { id: "ZRk41GKL/mesa-167.webp", width: 1080, height: 780 },
    { id: "259Bh8GS/mesa-168.webp", width: 1080, height: 780 },
    { id: "gj8wCyWx/mesa-170.webp", width: 1080, height: 780 },
    { id: "6pY7x5Df/mesa-172.webp", width: 1080, height: 780 },
    { id: "dQjwxSM8/mesa-174.webp", width: 1080, height: 780 },
];




const photos = industrialPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: industrialVisit(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: industrialVisit(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
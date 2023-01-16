const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];


const techquizLink = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.webp`;
const techquizPhotos = [
    { id: "NMCv9Hqy/mesa-224", width: 1080, height: 780 },
    { id: "PxQNBKwg/mesa-200", width: 1080, height: 780 },
    { id: "fb4Ly1j4/mesa-202", width: 1080, height: 780 },
    { id: "7hXGTXP3/mesa-190", width: 1080, height: 780 },
    { id: "L504pW6b/mesa-204", width: 1080, height: 780 },
    // { id: "59P2LXqS/mesa-205", width: 1080, height: 780 },
    { id: "Gp1LdGdd/mesa-206", width: 1080, height: 780 },
   
    { id: "28Mj9gtq/mesa-208", width: 1080, height: 780 },
    { id: "Wzptjrmh/mesa-197", width: 1080, height: 780 },
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
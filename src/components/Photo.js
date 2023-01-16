const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// 193 196 198 201 203 205 207 209 210 211 212 213 214 215 216 217 218 219 220 28 3 30 

const unsplashLink = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.webp`;
const unsplashPhotos = [
    { id: "BnjLXxrF/mesa-193", width: 1080, height: 780 },
    { id: "wvp7fn75/mesa-196", width: 1080, height: 780 },
    { id: "MHsHGTtt/mesa-198", width: 1080, height: 780 },
    { id: "RCGNds9f/mesa-201", width: 1080, height: 780 },
    { id: "mkrZK4R9/mesa-203", width: 1080, height: 780 },
    { id: "59P2LXqS/mesa-205", width: 1080, height: 780 },
    { id: "ncCckn3b/mesa-207", width: 1080, height: 780 },
    { id: "52z4hncs/mesa-209", width: 1080, height: 780 },
    { id: "xC6nvZH1/mesa-210", width: 1080, height: 780 },
    { id: "brd83RHH/mesa-211", width: 1080, height: 780 },
    { id: "NMsQrtKn/mesa-212", width: 1080, height: 780 },
    { id: "brMPM2mX/mesa-213", width: 1080, height: 780 },
    { id: "bYFqdKp6/mesa-214", width: 1080, height: 780 },
    { id: "Gh8dDqpb/mesa-215", width: 1080, height: 780 },
    { id: "yYMBycJc/mesa-216", width: 1080, height: 780 },
    { id: "bw1PCrbM/mesa-217", width: 1080, height: 780 },
    { id: "mrws4nmy/mesa-219", width: 1080, height: 780 },
    { id: "C1xVx4tT/mesa-220", width: 1080, height: 780 },
    { id: "g0yV4VN7/mesa-28", width: 1080, height: 780 },
    { id: "KY3VYHcM/mesa-3", width: 1080, height: 780 },
];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
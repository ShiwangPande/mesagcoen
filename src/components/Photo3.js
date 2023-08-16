const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const industrialVisit3rd = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const industrialPhoto2 = [

    { id: "9F1F6Jkq/mesa-153.webp", width: 1080, height: 780 },
    { id: "259Bh8GS/mesa-168.webp", width: 1080, height: 780 },
    { id: "4xS4dnsf/mesa-156.webp", width: 1080, height: 780 },
    { id: "BvPS1snx/mesa-157.webp", width: 1080, height: 780 },
    { id: "d3jttBtp/mesa-158.webp", width: 1080, height: 780 },
    { id: "zGBX8Tm2/mesa-159.webp", width: 1080, height: 780 },
    { id: "GhbmgZXC/mesa-160.webp", width: 1080, height: 780 },

];



const photos = industrialPhoto2.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: industrialVisit3rd(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: industrialVisit3rd(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
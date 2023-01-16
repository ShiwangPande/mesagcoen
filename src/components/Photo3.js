const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// 47 48 43 45 44 40 41 42

const industrialVisit3rd = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.webp`;
const industrialPhoto2 = [
    { id: "xqr8W7d3/mesa-47", width: 1080, height: 780 },
    { id: "2jgxkSb2/mesa-48", width: 1080, height: 780 },
    { id: "50R6mjdG/mesa-45", width: 1080, height: 780 },
    { id: "8557WM3M/mesa-44", width: 1080, height: 780 },
    { id: "90wzgVcf/mesa-43", width: 1080, height: 780 },
    { id: "PqdpXBQ6/mesa-42", width: 1080, height: 780 },
    { id: "3x506y4Q/mesa-41", width: 1080, height: 780 },
    { id: "zGCH1JKb/mesa-40", width: 1080, height: 780 },

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
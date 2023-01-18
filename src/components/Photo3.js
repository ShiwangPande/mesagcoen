const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const industrialVisit3rd = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/3rd-year-${id}`;
const industrialPhoto2 = [
    { id: "1_2.jpg", width: 1080, height: 780 },
    { id: "2_2.jpg", width: 1080, height: 780 },
    { id: "3_2.jpg", width: 1080, height: 780 },
    { id: "5_2.jpg", width: 1080, height: 780 },
    { id: "6_2.jpg", width: 1080, height: 780 },
    { id: "7_2.jpg", width: 1080, height: 780 },
    { id: "8_2.jpg", width: 1080, height: 780 },
    { id: "9_2.jpg", width: 1080, height: 780 },

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
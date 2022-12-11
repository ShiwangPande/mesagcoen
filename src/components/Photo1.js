const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const techquizLink = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/${id}`;
const techquizPhotos = [
    { id: "main_4.jpg", width: 1080, height: 780 },
    { id: "1_921.jpg", width: 1080, height: 780 },
    { id: "2_467.jpg", width: 1080, height: 780 },
    { id: "3_1345.jpg", width: 1080, height: 780 },
    { id: "4_271.jpg", width: 1080, height: 780 },
    { id: "5_920.jpg", width: 1080, height: 780 },
    { id: "6_771.jpg", width: 1080, height: 780 },
    { id: "7_663.jpg", width: 1080, height: 780 },
    { id: "8_453.jpg", width: 1080, height: 780 },
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
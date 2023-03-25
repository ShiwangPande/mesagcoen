const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Bis = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/catia${id}.jpg`;
const BisPhoto = [
    { id: "lecture", width: 1080, height: 780 },
    { id: "1", width: 780, height: 1080 },
    { id: "3", width: 780, height: 1080 },
    { id: "4", width: 780, height: 1080 },
    { id: "5", width: 780, height: 1080 },
    { id: "6", width: 780, height: 1080 },
    { id: "7", width: 780, height: 1080 },
    { id: "8", width: 780, height: 1080 },
    { id: "12", width: 780, height: 1080 },
    { id: "13", width: 780, height: 1080 },
    { id: "15", width: 1080, height: 780 },
    { id: "16", width: 1080, height: 780 },
    { id: "21", width: 1080, height: 780 },
    // { id: "22", width: 1080, height: 780 },
    { id: "23", width: 1080, height: 780 },
    { id: "24", width: 1080, height: 780 },
    { id: "25", width: 1080, height: 780 },
    { id: "26", width: 1080, height: 780 },
    { id: "27", width: 780, height: 1080 },
    // { id: "28", width: 780, height: 1080 },
    { id: "29", width: 780, height: 1080 },
    // { id: "30", width: 780, height: 1080 },
    { id: "31", width: 780, height: 1080 },
    { id: "32", width: 780, height: 1080 },
    // { id: "33", width: 780, height: 1080 },
    // { id: "34", width: 780, height: 1080 },
    // { id: "35", width: 780, height: 1080 },
    { id: "36", width: 780, height: 1080 },
    // { id: "37", width: 780, height: 1080 },
    { id: "38", width: 780, height: 1080 },
    // { id: "39", width: 780, height: 1080 },
    { id: "40", width: 780, height: 1080 },
];

const photos = BisPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: Bis(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: Bis(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
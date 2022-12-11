const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const industrialVisit = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/${id}`;
const industrialPhoto = [
    { id: "46_7.jpg", width: 1080, height: 780 },
    { id: "45_18.jpg", width: 1080, height: 780 },
    { id: "44_25.jpg", width: 1080, height: 780 },
    { id: "43_35.jpg", width: 1080, height: 780 },
    { id: "37_38.jpg", width: 1080, height: 780 },
    { id: "31_48.jpg", width: 1080, height: 780 },
    { id: "30_25.jpg", width: 1080, height: 780 },
    { id: "29_73.jpg", width: 1080, height: 780 },
    { id: "28_101.jpg", width: 1080, height: 780 },
    { id: "27_102.jpg", width: 1080, height: 780 },
    { id: "26_64.jpg", width: 1080, height: 780 },
    { id: "25_37.jpg", width: 1080, height: 780 },
    { id: "24_83.jpg", width: 1080, height: 780 },
    { id: "23_82.jpg", width: 1080, height: 780 },
    { id: "22_108.jpg", width: 1080, height: 780 },
    { id: "21_112.jpg", width: 1080, height: 780 },
    { id: "2_1590.jpg", width: 1080, height: 780 },
    { id: "1_941.jpg", width: 1080, height: 780 },
    { id: "3_1351.jpg", width: 1080, height: 780 },
    { id: "4_1104.jpg", width: 1080, height: 780 },
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
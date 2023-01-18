const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/${id}`;
const unsplashPhotos = [
    { id: "1-3_46.jpg", width: 1080, height: 780 },
    { id: "2_466.jpg", width: 1080, height: 780 },
    { id: "3_1344.jpg", width: 1080, height: 780 },
    { id: "4_270.jpg", width: 1080, height: 780 },
    { id: "5_286.jpg", width: 1080, height: 780 },
    { id: "6_770.jpg", width: 1080, height: 780 },
    { id: "7_662.jpg", width: 1080, height: 780 },
    { id: "8_177.jpg", width: 1080, height: 780 },
    { id: "9_131.jpg", width: 1080, height: 780 },
    { id: "10_130.jpg", width: 1080, height: 780 },
    { id: "11_154.jpg", width: 1080, height: 780 },
    { id: "12_140.jpg", width: 1080, height: 780 },
    { id: "13_285.jpg", width: 1080, height: 780 },
    { id: "14_249.jpg", width: 1080, height: 780 },
    { id: "15_244.jpg", width: 1080, height: 780 },
    { id: "16_74.jpg", width: 1080, height: 780 },
    { id: "18_182.jpg", width: 1080, height: 780 },
    { id: "19_153.jpg", width: 1080, height: 780 },
    { id: "20_153.jpg", width: 1080, height: 780 },
    { id: "21_107.jpg", width: 1080, height: 780 },
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
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const previousyear = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const industrialPhoto2 = [
    // { id: "sfT0hWGR/mesa-100.webp",  width: 1080, height: 780},
    { id: "HsKZSCtZ/mesa-101.webp",  width: 1080, height: 780},
    { id: "g0bMWqQ3/mesa-102.webp",  width: 1080, height: 780},
    { id: "ZqPwKvz2/mesa-103.webp",  width: 1080, height: 780},
    { id: "BQt7cv2P/mesa-89.webp",  width: 1080, height: 780},
    { id: "dVyWpSHq/mesa-90.webp",  width: 1080, height: 780},
    { id: "tTX21RXT/mesa-91.webp",  width: 1080, height: 780},
    { id: "0QcZ7gQC/mesa-92.webp",  width: 1080, height: 780},
    // { id: "L55DTygF/mesa-93.webp",  width: 1080, height: 780},
    { id: "dQN41Kgs/mesa-94.webp",  width: 1080, height: 780},
    { id: "yxGPrF0g/mesa-95.webp",  width: 1080, height: 780},
    { id: "VLS40Vcj/mesa-96.webp",  width: 1080, height: 780},
    { id: "0QxHpdC9/mesa-97.webp",  width: 1080, height: 780},
    { id: "qqvbFJYY/mesa-98.webp",  width: 1080, height: 780},
    { id: "yxpQCqCN/mesa-99.webp",  width: 1080, height: 780},
];

const photos = industrialPhoto2.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: previousyear(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: previousyear(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
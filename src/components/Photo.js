const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const unsplashPhotos = [
    { id: "0NFCYf53/mesa-209.webp", width: 1080, height: 780 },
    { id: "2j4xWhsc/mesa-210.webp", width: 1080, height: 780 },
    { id: "QCkkrZgG/mesa-211.webp", width: 1080, height: 780 },
    { id: "sxR98gh4/mesa-212.webp", width: 1080, height: 780 },
    { id: "yYsyyWBV/mesa-213.webp", width: 1080, height: 780 },
    { id: "rwpG7bK3/mesa-214.webp", width: 1080, height: 780 },
    { id: "SNd7TqNc/mesa-215.webp", width: 1080, height: 780 },
    { id: "7hvmkNp7/mesa-216.webp", width: 1080, height: 780 },
    { id: "44tW1r91/mesa-217.webp", width: 1080, height: 780 },
    { id: "Z5fHRmGJ/mesa-218.webp", width: 1080, height: 780 },
    { id: "YSh3LV7Y/mesa-219.webp", width: 1080, height: 780 },
    { id: "0QS0cwbN/mesa-220.webp", width: 1080, height: 780 },
    { id: "xT2tptGV/mesa-221.webp", width: 1080, height: 780 },
    { id: "rwygMsYh/mesa-222.webp", width: 1080, height: 780 },
    { id: "Yqz85Y8G/mesa-223.webp", width: 1080, height: 780 },
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
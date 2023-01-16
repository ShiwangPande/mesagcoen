const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// 10 100 101 102 103 104 105 106 107 109 110 111 112 99 98 97 96 95 94 92 91 90 89 88 

const previousyear = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.webp`;
const industrialPhoto2 = [
    { id: "wj74WGmG/mesa-10", width: 1080, height: 780 },
    { id: "9Qs21Try/mesa-100", width: 1080, height: 780 },
    // { id: "9MYjWn1B/mesa-101", width: 1080, height: 780 },
    { id: "D0CkG49J/mesa-102", width: 1080, height: 780 },
    { id: "xjgShBXf/mesa-103", width: 1080, height: 780 },
    { id: "Yq9wH8F1/mesa-104", width: 1080, height: 780 },
    { id: "pX6MX8Q3/mesa-105", width: 1080, height: 780 },
    { id: "cLtyKHXC/mesa-106", width: 1080, height: 780 },
    { id: "PqGG1jR4/mesa-107", width: 1080, height: 780 },
    { id: "85DqnbDf/mesa-109", width: 1080, height: 780 },
    { id: "mDw0xF2X/mesa-110", width: 1080, height: 780 },
    { id: "RhZ2vVWM/mesa-111", width: 1080, height: 780 },
    { id: "BnKkSzn1/mesa-112", width: 1080, height: 780 },
    { id: "x8QT5mp6/mesa-81", width: 1080, height: 780 },
    { id: "76mQt8mj/mesa-119", width: 1080, height: 780 },
    { id: "TYCYjpVc/mesa-88", width: 1080, height: 780 },
    { id: "pLSW741h/mesa-84", width: 1080, height: 780 },
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
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 83 85 87

const Bis = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.webp`;
const BisPhoto = [
    { id: "zvTHX56c/mesa-64", width: 1080, height: 780 },
    { id: "wxNmkcMQ/mesa-65", width: 1080, height: 780 },
    { id: "TYXWNLWM/mesa-66", width: 1080, height: 780 },
    { id: "3wWy02zp/mesa-67", width: 1080, height: 780 },
    { id: "mrqPYtGn/mesa-68", width: 1080, height: 780 },
    { id: "8zpfD2HZ/mesa-69", width: 1080, height: 780 },
    { id: "CLHn3hjZ/mesa-70", width: 1080, height: 780 },
    { id: "ydZkvs18/mesa-71", width: 1080, height: 780 },
    { id: "hvRhY6vb/mesa-72", width: 1080, height: 780 },
    { id: "2yd3NGBp/mesa-73", width: 1080, height: 780 },
    { id: "CMbR8hrv/mesa-74", width: 1080, height: 780 },
    { id: "SNrjZZhC/mesa-75", width: 1080, height: 780 },
    { id: "HsHV4qfT/mesa-76", width: 1080, height: 780 },
    { id: "q7tRv4Cx/mesa-77", width: 1080, height: 780 },
    { id: "vZ2TycDm/mesa-78", width: 1080, height: 780 },
    { id: "vZZTCWYj/mesa-79", width: 1080, height: 780 },
    { id: "q797tSsV/mesa-80", width: 1080, height: 780 },
    { id: "x8QT5mp6/mesa-81", width: 1080, height: 780 },
    { id: "fLmRYCC3/mesa-83", width: 1080, height: 780 },
    { id: "KvZ8gnMz/mesa-85", width: 1080, height: 780 },
    { id: "SRGQvKwk/mesa-87", width: 1080, height: 780 },

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
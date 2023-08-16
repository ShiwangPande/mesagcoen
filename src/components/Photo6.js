const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Bis = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const BisPhoto = [

    { id: "j5ZnMtyL/mesa-66.webp", width: 1080, height: 780 },
    { id: "brrDMWRL/mesa-67.webp", width: 1080, height: 780 },
    { id: "90kRjb82/mesa-68.webp", width: 1080, height: 780 },
    { id: "xTWJxsNy/mesa-69.webp", width: 1080, height: 780 },
    { id: "ydVShkgM/mesa-70.webp", width: 1080, height: 780 },
    { id: "Yq4Lxc0C/mesa-71.webp", width: 1080, height: 780 },
    { id: "RCpnfCMY/mesa-72.webp", width: 1080, height: 780 },
    { id: "d0F7vLBh/mesa-73.webp", width: 1080, height: 780 },
    { id: "TwYpLFBG/mesa-74.webp", width: 1080, height: 780 },
    { id: "T1K1QmR4/mesa-75.webp", width: 1080, height: 780 },
    { id: "431Y3sLB/mesa-76.webp", width: 1080, height: 780 },
    { id: "7YTb2gtC/mesa-77.webp", width: 1080, height: 780 },
    { id: "FzwR6Rzs/mesa-78.webp", width: 1080, height: 780 },
    { id: "j5gCzvrf/mesa-79.webp", width: 1080, height: 780 },
    { id: "kMHBGjs3/mesa-80.webp", width: 1080, height: 780 },
    { id: "MK4Vk6NB/mesa-85.webp", width: 1080, height: 780 },
    { id: "pdMjT02X/mesa-87.webp", width: 1080, height: 780 },
    { id: "fTD1Swrd/mesa-185.webp", width: 1080, height: 780 },



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
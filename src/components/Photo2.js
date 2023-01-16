const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// 174 172 173 165 164 163 162 151 27 28 36 37 49 35 34 33 31 30 26 170  

const industrialVisit = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.webp`;
const industrialPhoto = [
    { id: "pTzKyDnC/mesa-174", width: 1080, height: 780 },
    { id: "rFcN0Yjr/mesa-172", width: 1080, height: 780 },
    // { id: "ZKcFrFsD/mesa-173", width: 1080, height: 780 },
    // { id: "KzMDL6Cn/mesa-165", width: 1080, height: 780 },
    // { id: "cLFhNMQ8/mesa-164", width: 1080, height: 780 },
    // { id: "zf3jDbj2/mesa-163", width: 1080, height: 780 },
    // { id: "Qd8mPnW3/mesa-162", width: 1080, height: 780 },
    { id: "zXn24gtn/mesa-151", width: 1080, height: 780 },
    // { id: "0j4Drcyz/mesa-27", width: 1080, height: 780 },
    // { id: "g0yV4VN7/mesa-28", width: 1080, height: 780 },
    { id: "RFsnbXfg/mesa-36", width: 1080, height: 780 },
    { id: "25jQcqM8/mesa-50", width: 1080, height: 780 },
    { id: "2ygLCy0v/mesa-37", width: 1080, height: 780 },
    { id: "FH4gSCxS/mesa-49", width: 1080, height: 780 },
    { id: "wjLLT58B/mesa-35", width: 1080, height: 780 },
    { id: "Jn4kq9yy/mesa-34", width: 1080, height: 780 },
    { id: "yNTR0VN4/mesa-33", width: 1080, height: 780 },
    { id: "dtzGYHfX/mesa-31", width: 1080, height: 780 },
    { id: "pX9K3bsz/mesa-30", width: 1080, height: 780 },
    { id: "Hnv4XTBs/mesa-26", width: 1080, height: 780 },
    // { id: "0jGGXpkj/mesa-170", width: 1080, height: 780 },
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
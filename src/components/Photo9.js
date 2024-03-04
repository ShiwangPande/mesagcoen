const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Semi = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const IRONPhoto = [


    { id: "GmhmhPLy/semiconductor1.webp", width: 780, height: 1080 },
    { id: "ZKYSrTGk/semiconductor10.webp", width: 1080, height: 780 },
    { id: "t4YGMBR2/semiconductor11.webp", width: 780, height: 1080 },
    { id: "6qYFHvDk/semiconductor12.webp", width: 1080, height: 780 },
    { id: "T2082zpt/semiconductor13.webp", width: 1080, height: 780 },
    { id: "YqC5vdFM/semiconductor14.webp", width: 1080, height: 780 },
    { id: "qMD9y2cn/semiconductor15.webp", width: 1080, height: 780 },
    { id: "P5L04NK7/semiconductor16.webp", width: 1080, height: 780 },
    { id: "rmGBrbgF/semiconductor17.webp", width: 1080, height: 780 },
    { id: "yN3Bkvwk/semiconductor2.webp", width: 1080, height: 780 },
    { id: "GhzbNBFh/semiconductor3.webp", width: 1080, height: 780 },
    { id: "sgNsjtHk/semiconductor4.webp", width: 1080, height: 780 },
    { id: "ryNT0dYC/semiconductor5.webp", width: 1080, height: 780 },
    { id: "2yrf9m3Z/semiconductor6.webp", width: 1080, height: 780 },
    { id: "NFDvWVrP/semiconductor7.webp", width: 1080, height: 780 },
    { id: "nz8x7qJT/semiconductor8.webp", width: 1080, height: 780 },
    { id: "7Z6qyx91/semiconductor9.webp", width: 1080, height: 780 },

];




const photos = IRONPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: Semi(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: Semi(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
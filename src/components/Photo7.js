const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Bis = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.jpg`;
const BisPhoto = [


   { id: "WbYNXStp/IMG-20230221-WA0005.jpg", width: 1080, height: 780 },
//    { id: "3Rjr1T0z/IMG-20230221-WA0006.jpg", width: 1080, height: 780 },
   { id: "0Q918JrH/IMG-20230221-WA0009.jpg", width: 1080, height: 780 },
   { id: "mk8Lxyww/IMG-20230221-WA0011.jpg", width: 780, height: 1080 },
   { id: "KvWbnzsR/IMG-20230221-WA0015.jpg",width: 780, height: 1080 },
   { id: "C1pLb15j/IMG-20230221-WA0016.jpg",width: 780, height: 1080 },
   { id: "sDgfYbj0/IMG-20230221-WA0033.jpg",width: 780, height: 1080 },
   { id: "g2wY5R6V/IMG-20230221-WA0034.jpg",width: 780, height: 1080 },
   { id: "kgtmwmkw/IMG-20230221-WA0036.jpg",width: 780, height: 1080 },
   { id: "mg0bGDQ0/IMG-20230221-WA0040.jpg",width: 780, height: 1080 },
   { id: "R0KvCBdq/IMG-20230221-WA0052.jpg",width: 780, height: 1080 },
   { id: "bJPpsBVg/IMG-20230221-WA0064.jpg",width: 780, height: 1080 },
   { id: "BvTG9CZK/IMG-20230221-WA0065.jpg",width: 780, height: 1080 },
   { id: "jj0rF1TT/IMG-20230221-WA0067.jpg",width: 780, height: 1080 },
   { id: "SNgsHk1h/IMG-20230221-WA0075.jpg",width: 780, height: 1080 },
   { id: "76ND7npk/IMG-20230221-WA0084.jpg", width: 780, height: 1080 },
   { id: "QMTdB588/IMG-20230221-WA0086.jpg", width: 780, height: 1080 },
   { id: "ZnKmLySy/IMG-20230221-WA0087.jpg", width: 1080, height: 780 },
   { id: "d3HYNtsN/IMG-20230221-WA0088.jpg", width: 1080, height: 780 },
   { id: "Y2bMC86N/IMG-20230221-WA0090.jpg", width: 1080, height: 780 },
   { id: "BbqSwVxb/IMG-20230221-WA0094.jpg", width: 1080, height: 780 },
   { id: "ZYcKyJSd/IMG-20230221-WA0095.jpg", width: 1080, height: 780 },
    



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
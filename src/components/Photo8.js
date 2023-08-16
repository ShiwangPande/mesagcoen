const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Bis = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.jpg`;
const IRONPhoto = [


    { id: "hPP8V3WC/iron1.jpg",  width: 1080, height: 780},
    { id: "k4mKGTvv/iron2.jpg",  width: 1080, height: 780},
    { id: "YSgQt5YS/iron2sad.jpg",  width: 1080, height: 780},
    { id: "sD6Ym933/iron2sdfa.jpg",  width: 1080, height: 780},
    { id: "tTNPxFrQ/iron2w.jpg",  width: 1080, height: 780},
    { id: "NFNHNBqd/iron3.jpg",  width: 1080, height: 780},
    { id: "j2RHgMWS/iron4.jpg",  width: 1080, height: 780},
    { id: "6p8dm2Qn/iron5.jpg",  width: 1080, height: 780},
    { id: "VsFBrPTr/iron6.jpg",  width: 1080, height: 780},
    { id: "d3n8zGdm/iron7.jpg",  width: 1080, height: 780},
    { id: "nhNvbFs5/iron8.jpg",  width: 1080, height: 780},

];




const photos = IRONPhoto.map((photo) => {
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
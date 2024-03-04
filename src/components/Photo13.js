const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Drishti = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const DrishtiPhoto = [

   
    { id: "Z5zrcRTK/drishti1.webp", width: 1080, height: 780 },
    { id: "25m7z5JX/drishti2.webp", width: 1080, height: 780 },
    { id: "wBVc3pYx/drishti3.webp", width: 1080, height: 780 },
    { id: "PfcbCy9D/drishti4.webp", width: 1080, height: 780 },
    { id: "qRvc35ps/drishti5.webp", width: 1080, height: 780 },
    { id: "PxVWzQqB/drishti6.webp", width: 1080, height: 780 },
    { id: "4N96VtRS/drishti7.webp", width: 1080, height: 780 },
    { id: "FzfjPkd1/drishti8.webp", width: 1080, height: 780 },
    { id: "GtZv63GK/drishti9.webp", width: 1080, height: 780 },
    { id: "Hk0bPgx0/drishti10.webp", width: 1080, height: 780 },


];




const photos = DrishtiPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: Drishti(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: Drishti(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
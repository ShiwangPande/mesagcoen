const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Fst = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const FstPhoto = [

    { id: "zGDqdQY4/fst10.webp", width: 1080, height: 780 },
    { id: "PxvXW8nx/fst1.webp", width: 1080, height: 780 },
    { id: "59w1fJxZ/fst11.webp", width: 1080, height: 780 },
    { id: "QMHhDWtb/fst12.webp", width: 1080, height: 780 },
    { id: "bvW8wNSj/fst13.webp", width: 1080, height: 780 },
    { id: "JnX8DVjH/fst14.webp", width: 1080, height: 780 },
    { id: "cCNSf9c9/fst15.webp", width: 1080, height: 780 },
    { id: "KjryfPqZ/fst16.webp", width: 1080, height: 780 },
    { id: "DwzKQbqT/fst17.webp", width: 1080, height: 780 },
    { id: "LXjd4kMz/fst18.webp", width: 1080, height: 780 },
    { id: "R065y5sp/fst19.webp", width: 1080, height: 780 },
    { id: "28rY6ty3/fst2.webp", width: 1080, height: 780 },
    { id: "43DkTLjf/fst20.webp", width: 1080, height: 780 },
    { id: "3NZPmKNN/fst21.webp", width: 1080, height: 780 },
    { id: "Bb3rj8qR/fst22.webp", width: 1080, height: 780 },
    { id: "T3HvtY9W/fst23.webp", width: 1080, height: 780 },
    { id: "903WJFcB/fst3.webp", width: 1080, height: 780 },
    { id: "L6DpZVgD/fst4.webp", width: 1080, height: 780 },
    { id: "mZMZhMSp/fst5.webp", width: 1080, height: 780 },
    { id: "mgdBKSbk/fst6.webp", width: 1080, height: 780 },
    { id: "5NSxSVTw/fst7.webp", width: 1080, height: 780 },
    { id: "X7bj5JHj/fst8.webp", width: 1080, height: 780 },
    { id: "hv9KwWjR/fst9.webp", width: 1080, height: 780 },


];




const photos = FstPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: Fst(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: Fst(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
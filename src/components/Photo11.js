const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Innovative = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const InnovativePhoto = [


    { id: "2SmtM00v/innovative1.webp", width: 780, height: 1080 },
    { id: "6p9HYyQf/innovative10.webp", width: 1080, height: 780 },
    { id: "3xnt6Y45/innovative11.webp", width: 1080, height: 780 },
    { id: "Z5cQS6QQ/innovative2.webp", width: 1080, height: 780 },
    { id: "7h0BQz7m/innovative3.webp", width: 1080, height: 780 },
    { id: "Kv7qPnmY/innovative4.webp", width: 1080, height: 780 },
    { id: "cHV9mhKv/innovative5.webp", width: 1080, height: 780 },
    { id: "4dK2Vq3C/innovative6.webp", width: 1080, height: 780 },
    { id: "yYCp3f45/innovative7.webp", width: 1080, height: 780 },
    { id: "zDgPfsMK/innovative8.webp", width: 1080, height: 780 },
    { id: "N0CPyBB7/innovative9.webp", width: 1080, height: 780 },

];




const photos = InnovativePhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: Innovative(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: Innovative(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const robotics = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const roboticsPhoto = [
{ id: "8c239QSV/mesa-52.webp", width: 1080, height: 780 },
{ id: "QtnvgKYC/mesa-53.webp", width: 1080, height: 780 },
{ id: "7P5ZF3kB/mesa-54.webp", width: 1080, height: 780 },
{ id: "J7SzMs7R/mesa-55.webp", width: 1080, height: 780 },
{ id: "1zBktjpp/mesa-56.webp", width: 1080, height: 780 },
{ id: "BbLkmZRg/mesa-57.webp", width: 1080, height: 780 },
{ id: "SsKwzfrH/mesa-58.webp", width: 1080, height: 780 },
{ id: "J4J4nRtZ/mesa-59.webp", width: 1080, height: 780 },
{ id: "L6ZFTvpp/mesa-60.webp", width: 1080, height: 780 },
{ id: "W1LLfrNJ/mesa-61.webp", width: 1080, height: 780 },


];

const photos = roboticsPhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: robotics(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: robotics(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const robotics = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/${id}`;
const roboticsPhoto = [
    { id: "robotics1.jpg", width: 1080, height: 780 },
    { id: "robotics2.jpg", width: 1080, height: 780 },
    { id: "robotics10.jpg", width: 1080, height: 780 },
    { id: "robotics13.jpg", width: 1080, height: 780 },
    { id: "robotics11.jpg", width: 1080, height: 780 },
    { id: "robotics12.jpg", width: 1080, height: 780 },
    { id: "robotics9.jpg", width: 1080, height: 780 },
    { id: "robotics8.jpg", width: 1080, height: 780 },
    { id: "robotics7.jpg", width: 1080, height: 780 },
    { id: "robotics6.jpg", width: 1080, height: 780 },
    { id: "robotics3.jpg", width: 1080, height: 780 },
    { id: "robotics4.jpg", width: 1080, height: 780 },
    { id: "robotics5.jpg", width: 1080, height: 780 },
    { id: "robotics30.jpg", width: 1080, height: 780 },
    { id: "robotics28.jpg", width: 1080, height: 780 },
    { id: "robotics27.jpg", width: 1080, height: 780 },
    { id: "robotics23.jpg", width: 1080, height: 780 },
    { id: "robotics25.jpg", width: 1080, height: 780 },
    { id: "robotics26.jpg", width: 1080, height: 780 },
    { id: "robotics24.jpg", width: 1080, height: 780 },
    { id: "robotics22.jpg", width: 1080, height: 780 },
    { id: "robotics21.jpg", width: 1080, height: 780 },
    { id: "robotics19.jpg", width: 1080, height: 780 },
    { id: "robotics20.jpg", width: 1080, height: 780 },
    { id: "robotics18.jpg", width: 1080, height: 780 },
    { id: "robotics17.jpg", width: 1080, height: 780 },
    { id: "robotics14.jpg", width: 1080, height: 780 },
    { id: "robotics15.jpg", width: 1080, height: 780 },
    { id: "robotics16.jpg", width: 1080, height: 780 },

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
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const previousyear = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/${id}`;
const industrialPhoto2 = [
    { id: "Higher-studies-in-Foreign-Mr-Bond-Krishna-Consultant-1.jpg", width: 1080, height: 780 },
    { id: "GMR-Visit-1.jpg", width: 1080, height: 780 },
    { id: "GMR-Power-plant-Bhandara-16-Feb-2018-1.jpg", width: 1080, height: 780 },
    { id: "Expert-lecture-Ali-Jeevaji-JSW-steels-1.jpg", width: 1080, height: 780 },
    { id: "Exper-Lecture-1.jpg", width: 1080, height: 780 },
    { id: "EDP-camp-1_1.jpg", width: 1080, height: 780 },
    { id: "MCED-workshop-8-10-Aug-2018.jpg", width: 1080, height: 780 },
    { id: "Lecture-on-Industrial-Project-Internship-importance-1.jpg", width: 1080, height: 780 },
    { id: "Kinetic-Gears-Project-meeting-2.jpg", width: 1080, height: 780 },
    { id: "Kinetic-Gears-Project-meeting-1-1.jpg", width: 1080, height: 780 },
    { id: "JSW-Plant-15-sept-2018.jpg", width: 1080, height: 780 },
    { id: "TCS-expert-talk-1.jpg", width: 1080, height: 780 },
    { id: "Shaurya-NCC-defence.jpg", width: 1080, height: 780 },
    { id: "Road-safety-awareness.jpg", width: 1080, height: 780 },
    { id: "PTM-meet-2018.jpg", width: 1080, height: 780 },
    { id: "PTM-2018-1.jpg", width: 1080, height: 780 },
    { id: "Presentation-in-Samantrana-International-paper.jpg", width: 1080, height: 780 },
];

const photos = industrialPhoto2.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: previousyear(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: previousyear(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
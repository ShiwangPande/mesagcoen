const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Bis = (id: string, width: number, height: number) =>
    `https://www.linkpicture.com/q/${id}`;
const BisPhoto = [
    { id: "7ROWEUwRudcRrC8dFfV9XHbf2qGDNHRAupTOEUCkvEU-_plaintext_638075789302445617.jpg", width: 1080, height: 780 },
    { id: "62OgPQowfZ5GzzGsUH_gbITGPqgBpTuUfTkqBa0AAb4-_plaintext_638075789303098243.jpg", width: 1080, height: 780 },
    { id: "GGVPkhAgCeVMWd5_XI7fZgnviVvHHQwwVCqI9GWvUyA-_plaintext_638075789304280307.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0008.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0009.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0010.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0011_1.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0012.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0013.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0014.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0015.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0016.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0017.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0018.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0019.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0020.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0021.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0022.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0023.jpg", width: 1080, height: 780 },
    { id: "IMG-20221225-WA0024.jpg", width: 1080, height: 780 },

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
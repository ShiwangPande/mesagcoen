const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const Degree = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;
const DegreePhoto = [

    { id: "t4yttT5t/degree1.webp", width: 1080, height: 780 },
    { id: "Dw2L4Nvx/degree10.webp", width: 1080, height: 780 },
    { id: "6pYRrhTt/degree11.webp", width: 1080, height: 780 },
    { id: "8CcvtrrW/degree12.webp", width: 1080, height: 780 },
    { id: "QMzTPxpz/degree13.webp", width: 1080, height: 780 },
    { id: "85r6VQ4z/degree14.webp", width: 1080, height: 780 },
    { id: "Zntyb7sF/degree15.webp", width: 1080, height: 780 },
    { id: "G3Gy7R9M/degree16.webp", width: 1080, height: 780 },
    { id: "1XGVfGLx/degree17.webp", width: 1080, height: 780 },
    { id: "Hsm7FNyT/degree18.webp", width: 1080, height: 780 },
    { id: "bNR2PRxk/degree19.webp", width: 1080, height: 780 },
    { id: "FRfjsJrm/degree2.webp", width: 1080, height: 780 },
    { id: "T37LLYHP/degree20.webp", width: 1080, height: 780 },
    { id: "LsJqzKr3/degree21.webp", width: 1080, height: 780 },
    { id: "W3rhHmpD/degree22.webp", width: 1080, height: 780},
    { id: "cCSryK6F/degree23.webp", width: 1080, height: 780},
    { id: "sx41VVhs/degree24.webp", width: 1080, height: 780},
    { id: "8kR7dbn9/degree25.webp", width: 1080, height: 780},
    { id: "qMpz1CPR/degree26.webp", width: 1080, height: 780 },
    { id: "WbStC1V7/degree27.webp", width: 1080, height: 780},
    { id: "htjhBRPR/degree28.webp",width: 1080, height: 780 },
    { id: "sgNxfHvQ/degree29.webp",width: 780, height: 1080 },
    { id: "R0Z7yD2W/degree3.webp", width: 1080, height: 780 },
    { id: "8Cf57d6y/degree30.webp", width: 780, height: 1080 },
    { id: "XqLNRQRv/degree31.webp", width: 780, height: 1080 },
    { id: "1txzwg0y/degree32.webp", width: 1080, height: 780  },
    { id: "cHQLmsTw/degree33.webp", width: 780, height: 1080 },
    { id: "FzNsC2nq/degree34.webp", width: 780, height: 1080 },
    { id: "66fQ4p8N/degree35.webp", width: 780, height: 1080 },
    { id: "xTj1vVmN/degree36.webp", width: 780, height: 1080 },
    { id: "02t2ZXGW/degree37.webp", width: 780, height: 1080 },
    { id: "t4YRcd2X/degree38.webp", width: 780, height: 1080 },
    { id: "7ZdPrCWS/degree39.webp", width: 780, height: 1080 },
    { id: "k4kWVXGS/degree4.webp", width: 1080, height: 780 },
    { id: "mr9LLbvJ/degree40.webp", width: 780, height: 1080 },
    { id: "PxktNghx/degree41.webp", width: 780, height: 1080 },
    { id: "W36sZ5b7/degree42.webp", width: 780, height: 1080 },
    { id: "cCx0BfvG/degree43.webp", width: 780, height: 1080 },
    { id: "Xqs3HX5G/degree44.webp", width: 780, height: 1080 },
    { id: "Y2RpqDPr/degree45.webp", width: 780, height: 1080 },
    { id: "fTbM3j4x/degree46.webp", width: 780, height: 1080 },
    { id: "sgQymjgx/degree47.webp", width: 780, height: 1080 },
    { id: "FHMvnMYZ/degree48.webp", width: 780, height: 1080 },
    { id: "bJ8hq1HS/degree49.webp", width: 780, height: 1080 },
    { id: "66vdkRbf/degree5.webp", width: 1080, height: 780 },
    { id: "Zq6mkw3h/degree50.webp", width: 780, height: 1080 },
    { id: "qRLdqgjb/degree51.webp", width: 780, height: 1080 },
    { id: "59sVMYHj/degree52.webp", width: 780, height: 1080 },
    { id: "fyqn7p4Y/degree53.webp", width: 780, height: 1080 },
    { id: "x81VzYZ0/degree54.webp", width: 780, height: 1080 },
    { id: "GpFWgHwL/degree55.webp", width: 1080, height: 780 },
    { id: "jd9YLp4b/degree56.webp", width: 780, height: 1080 },
    { id: "QtSRswdv/degree57.webp", width: 1080, height: 780 },
    { id: "kG4L5sVG/degree58.webp", width: 1080, height: 780 },
    { id: "VNZq8FcD/degree6.webp", width: 1080, height: 780 },
    { id: "1XwwDhVj/degree7.webp", width: 1080, height: 780 },
    { id: "CLpjS1WT/degree8.webp", width: 1080, height: 780 },
    { id: "CLCb10gZ/degree9.webp", width: 1080, height: 780 },


];




const photos = DegreePhoto.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: Degree(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: Degree(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
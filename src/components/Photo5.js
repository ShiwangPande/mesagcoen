const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// 12 146 145 144 143 142 141 140 139 138 137 149 15 150 179 18 180 181 182 184 185 186 187 188 189 19 190 


const robotics = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}.webp`;
const roboticsPhoto = [
    { id: "RZ4Kh6MQ/mesa-58", width: 1080, height: 780 },
    { id: "7Z972Hhv/mesa-59", width: 1080, height: 780 },
    { id: "3wwGjs0k/mesa-60", width: 1080, height: 780 },
    { id: "HLPy66bB/mesa-61", width: 1080, height: 780 },
    { id: "mDzFJ7wR/mesa-62", width: 1080, height: 780 },
    { id: "mDNmzxvt/mesa-12", width: 1080, height: 780 },
    // { id: "0QbH4XFQ/mesa-146", width: 1080, height: 780 },
    { id: "WtRmX5LQ/mesa-137", width: 1080, height: 780 },
    { id: "9MnYqWxX/mesa-138", width: 1080, height: 780 },
    // { id: "266x6q7X/mesa-139", width: 1080, height: 780 },
    // { id: "T2BBzGRX/mesa-140", width: 1080, height: 780 },
    // { id: "65RFwS34/mesa-141", width: 1080, height: 780 },
    // { id: "Vk8pNRrG/mesa-142", width: 1080, height: 780 },
    // { id: "sg48Gh5V/mesa-143", width: 1080, height: 780 },
    { id: "mrZnYgS7/mesa-144", width: 1080, height: 780 },
    { id: "MGsFdJsN/mesa-145", width: 1080, height: 780 },
    { id: "T254qSnN/mesa-149", width: 1080, height: 780 },
    // { id: "mZjdTs3n/mesa-15", width: 1080, height: 780 },
    // { id: "7YvQBVVH/mesa-150", width: 1080, height: 780 },
    { id: "2yxv7rGB/mesa-179", width: 1080, height: 780 },
    { id: "qMgG0Cvt/mesa-18", width: 1080, height: 780 },
    { id: "vm1rwRYp/mesa-180", width: 1080, height: 780 },
    { id: "sDV5DGfP/mesa-181", width: 1080, height: 780 },
    { id: "gcyvWHpk/mesa-182", width: 1080, height: 780 },
    { id: "cLz3mDRT/mesa-184", width: 1080, height: 780 },
    { id: "s2Zh0pKz/mesa-185", width: 1080, height: 780 },
    { id: "d1PyMLSy/mesa-186", width: 1080, height: 780 },
    { id: "KzPgmxds/mesa-187", width: 1080, height: 780 },
    { id: "cCdtHPW1/mesa-188", width: 1080, height: 780 },
    { id: "nV1Q5VKX/mesa-189", width: 1080, height: 780 },
    { id: "k5Wcz3Xf/mesa-19", width: 1080, height: 780 },
    { id: "7hXGTXP3/mesa-190", width: 1080, height: 780 },
    // 23 24 25 51 52 53 54 55 56 57 58 59 60 61 62 63
    { id: "kGgv22Np/mesa-23", width: 1080, height: 780 },
    { id: "X7hkv7rs/mesa-24", width: 1080, height: 780 },
    { id: "0Q8p4z4y/mesa-25", width: 1080, height: 780 },
    { id: "JhTb9rC3/mesa-51", width: 1080, height: 780 },
    { id: "1tfpSkyk/mesa-52", width: 1080, height: 780 },
    { id: "cC3wgfgT/mesa-53", width: 1080, height: 780 },
    { id: "RCJcDxsf/mesa-54", width: 1080, height: 780 },
    { id: "Kzwt80zR/mesa-55", width: 1080, height: 780 },
    { id: "sDFpFHqL/mesa-56", width: 1080, height: 780 },
    { id: "HsQbT4Ck/mesa-57", width: 1080, height: 780 },
   
    { id: "G2WsC97D/mesa-63", width: 1080, height: 780 },

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
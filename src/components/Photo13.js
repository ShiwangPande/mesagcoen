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
    { id: "rFj7nFJN/img-20231026-wa0077-65e8c0906c0fc.webp", width: 1080, height: 780 },
    { id: "YCSZJKDK/img-20231026-wa0078-65e8c08d5c472.webp", width: 1080, height: 780 },
    { id: "KY6WkKGx/img-20231026-wa0079-65e8c08e55f0b.webp", width: 1080, height: 780 },
    { id: "9fRSQPjL/img-20231026-wa0080-65e8c08a87734.webp", width: 1080, height: 780 },
    { id: "GmSVR76B/img-20231026-wa0081-65e8c08fc6790.webp", width: 1080, height: 780 },
    { id: "KcrWjvdh/img-20240301-wa0003-65e8c08188526.webp", width: 1080, height: 780 },
    { id: "zBTcnJvW/img-20240301-wa0004-65e8c07535fa6.webp", width: 1080, height: 780 },
    { id: "sxcHNwpg/img-20240301-wa0005-65e8c080ccc77.webp", width: 1080, height: 780 },
    { id: "hPD5dRBz/img-20240301-wa0006-65e8c0683fd13.webp", width: 1080, height: 780 },
    { id: "TYtHjNdk/img-20240301-wa0007-65e8c0737e33b.webp", width: 1080, height: 780 },
    { id: "9f78hWGS/img-20240301-wa0008-65e8c06825f22.webp", width: 1080, height: 780 },
    { id: "wjPfZtsL/img-20240301-wa0009-65e8c05250625.webp", width: 1080, height: 780 },
    { id: "QtZ6NRmM/img-20240301-wa0010-65e8c05beaa4c.webp", width: 1080, height: 780 },
    { id: "V69KJDZW/img-20240301-wa0011-65e8c0454c78c.webp", width: 1080, height: 780 },
    { id: "660Hwbv9/img-20240301-wa0012-65e8c04fbfb77.webp", width: 1080, height: 780 },
    { id: "J0PKqtLy/img-20240301-wa0013-65e8c05d23d23.webp", width: 1080, height: 780 },
    { id: "qMv17cs2/img-20240301-wa0014-65e8c0394b377.webp", width: 1080, height: 780 },
    { id: "kXYfRVsz/img-20240301-wa0015-65e8c04353ebf.webp", width: 1080, height: 780 },
    { id: "cLVhTVVc/img-20240301-wa0016-65e8c02c0372e.webp", width: 1080, height: 780 },
    { id: "qvtQskZR/img-20240301-wa0017-65e8c01f54caf.webp", width: 1080, height: 780 },
    { id: "PqY47SHn/img-20240301-wa0018-65e8c02948b2d.webp", width: 1080, height: 780 },
    { id: "Ss4rbcQ2/img-20240301-wa0019-65e8c035b9c31.webp", width: 1080, height: 780 },
    { id: "D0yP8FX7/img-20240301-wa0020-65e8c0128a410.webp", width: 1080, height: 780 },
    { id: "sXJJj11n/img-20240301-wa0021-65e8c01cd5be7.webp", width: 1080, height: 780 },
    { id: "vTqLnjrf/img-20240301-wa0022-65e8bffd5871b.webp", width: 1080, height: 780 },
    { id: "qBjGWtPq/img-20240301-wa0023-65e8c0066205c.webp", width: 1080, height: 780 },
    { id: "5NrSNhNM/img-20240301-wa0024-65e8c01180b43.webp", width: 1080, height: 780 },
    { id: "X7qgWjW8/img-20240301-wa0025-65e8c0089dd42.webp", width: 1080, height: 780 },
    { id: "ht7bJ2fQ/img-20240301-wa0026-65e8bffb6d2b2.webp", width: 1080, height: 780 },
    { id: "KYS7ttMq/img-20240301-wa0027-65e8bfe85505a.webp", width: 1080, height: 780 },
    { id: "8CRR4sd1/img-20240301-wa0028-65e8bfde2c3b6.webp", width: 1080, height: 780 },
    { id: "RFvcD9Gw/img-20240301-wa0029-65e8bff0b237f.webp", width: 1080, height: 780 },
    { id: "V64jyTHp/img-20240301-wa0030-65e8bfdb72e53.webp", width: 1080, height: 780 },
    { id: "d3xr3CF9/img-20240301-wa0031-65e8bfe580042.webp", width: 1080, height: 780 },
    { id: "RVWw8g1p/img-20240301-wa0032-65e8bff1dfded.webp", width: 1080, height: 780 },
    { id: "66jdYkZG/img-20240301-wa0033-65e8bfd178352.webp", width: 1080, height: 780 },
    { id: "N0cTKY3Z/img-20240301-wa0034-65e8bfd2b5942.webp", width: 1080, height: 780 },
    { id: "02h7q7ck/img-20240301-wa0035-65e8bfbc64d47.webp", width: 1080, height: 780 },
    { id: "NjTmGLz1/img-20240301-wa0036-65e8bfc73fefd.webp", width: 1080, height: 780 },
    { id: "W4wZrCjz/img-20240301-wa0037-65e8bfb1a9640.webp", width: 1080, height: 780 },
    { id: "sXfhJmDc/img-20240301-wa0038-65e8bfaf954e7.webp", width: 1080, height: 780 },
    { id: "sfNhppFY/img-20240301-wa0039-65e8bfa3dedc4.webp", width: 1080, height: 780 },
    { id: "Qt6WY7Fr/img-20240301-wa0040-65e8bfbb590c1.webp", width: 1080, height: 780 },
    { id: "HnV8qLM8/img-20240301-wa0041-65e8bfc781e5b.webp", width: 1080, height: 780 },
    { id: "rs3RMLGn/img-20240301-wa0042-65e8bfa608270.webp", width: 1080, height: 780 },
    { id: "yY3SnkBw/img-20240301-wa0043-65e8bf8e2acf8.webp", width: 1080, height: 780 },
    { id: "52wQdTXg/img-20240301-wa0044-65e8bf9a8c446.webp", width: 1080, height: 780 },
    { id: "L8dgW28h/img-20240301-wa0045-65e8bf998d7d4.webp", width: 1080, height: 780 },
    { id: "g0mXYsRW/img-20240301-wa0046-65e8bf82c20d5.webp", width: 1080, height: 780 },
    { id: "nL2sMmYQ/img-20240301-wa0047-65e8bf76633c2.webp", width: 1080, height: 780 },
    { id: "Y9yhzwPr/img-20240301-wa0048-65e8bf6014bc1.webp", width: 1080, height: 780 },
    { id: "G2p4Dpqg/img-20240301-wa0049-65e8bf828d98a.webp", width: 1080, height: 780 },
    { id: "QC9V6yLp/img-20240301-wa0050-65e8bf6b94dc0.webp", width: 1080, height: 780 },
    { id: "0jTjh0xh/img-20240301-wa0051-65e8bf90511da.webp", width: 1080, height: 780 },
    { id: "L6PnLw3S/img-20240301-wa0052-65e8bf3a311f8.webp", width: 1080, height: 780 },
    { id: "g2qjBh7B/img-20240301-wa0053-65e8bf52c1dc2.webp", width: 1080, height: 780 },
    { id: "Vkc5RgKC/img-20240301-wa0054-65e8bf464d661.webp", width: 1080, height: 780 },
    { id: "wxZVQ1nm/img-20240301-wa0055-65e8bf2c7cb63.webp", width: 1080, height: 780 },
    { id: "q7JqfRVB/img-20240301-wa0056-65e8bf6c11e89.webp", width: 1080, height: 780 },
    { id: "Kz4YzH8d/img-20240301-wa0057-65e8bf46a9d14.webp", width: 1080, height: 780 },
    { id: "pT7LnJ9y/img-20240301-wa0058-65e8bf533755a.webp", width: 1080, height: 780 },
    { id: "T1DYj5m0/img-20240301-wa0059-65e8bf5fc6444.webp", width: 1080, height: 780 },
    { id: "ZqwRJS48/img-20240301-wa0060-65e8bf77669c8.webp", width: 1080, height: 780 },
    { id: "vDw808ts/img-20240301-wa0061-65e8bf2d422f9.webp", width: 1080, height: 780 },
    { id: "gcnshVtp/img-20240301-wa0062-65e8bf3971b25.webp", width: 1080, height: 780 },


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
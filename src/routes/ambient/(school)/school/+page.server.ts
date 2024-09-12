export const ssr = true;

export type VideoData = {
    path: string;
    title: string;
};

const videoList: VideoData[] = [
    {
        path: "/video01.mp4",
        title: "Alfabeto em libras"
    },
    {
        path: "/video02.mp4",
        title: "Cumprimentos em libras"
    },
    {
        path: "/video03.mp4",
        title: "Números em libras"
    },
    {
        path: "/video04.mp4",
        title: "Diálogo em libras"
    },
];

export const load = () => {
    return {
        videoList
    };
};
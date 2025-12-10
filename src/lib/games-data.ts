export interface Game {
    id: string;
    title: string;
    description: string;
    buildPath: string;
    year: string;
    genre: string;
}

export const GAMES: Game[] = [
    {
        id: "project-alpha",
        title: "Project Alpha",
        description: "This is a placeholder for your game. Upload your build to public/games/project-alpha/ and update the paths.",
        buildPath: "project-alpha",
        year: "2022",
        genre: "Action",
    },
    {
        id: "space-explorer",
        title: "Space Explorer",
        description: "Another placeholder. Create a build folder in public/games/ for each game.",
        buildPath: "space-explorer",
        year: "2021",
        genre: "Arcade",
    },
];

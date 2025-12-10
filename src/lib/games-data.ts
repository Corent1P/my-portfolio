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
        id: "memory",
        title: "Memory Game",
        description: "Test your memory skills in this classic matching game.",
        buildPath: "memory",
        year: "2025",
        genre: "Puzzle",
    },
    {
        id: "props-mania",
        title: "Props Mania",
        description: "People have lost their belongings! Help them find their lost props in this fun minigame.",
        buildPath: "props-mania",
        year: "2025",
        genre: "Puzzle",
    },
    {
        id: "project-beta",
        title: "Project Beta",
        description: "This is a placeholder for your game. Upload your build to public/games/project-beta/ and update the paths.",
        buildPath: "project-beta",
        year: "2025",
        genre: "Action",
    },

];

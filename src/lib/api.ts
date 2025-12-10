// Use relative path to leverage Netlify proxy (defined in netlify.toml)
const API_URL = import.meta.env.VITE_BACKEND_URL || "/api";

export async function submitScore(
    gameId: string,
    score: number,
    token: string,
    email: string,
    playerName: string
) {
    try {
        const response = await fetch(`${API_URL}/scores`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                game: gameId,
                score: score,
                email: email,
                playerName: playerName,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to submit score");
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting score:", error);
        throw error;
    }
}

export async function getTopScores(gameId: string) {
    try {
        const response = await fetch(`${API_URL}/scores/${gameId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch top scores");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching top scores:", error);
        throw error;
    }
}

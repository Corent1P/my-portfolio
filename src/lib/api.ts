const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

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

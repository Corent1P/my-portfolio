"use client";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { GAMES } from "@/lib/games-data";
import { UnityView } from "@/components/ui/unity-view";
import { Badge } from "@/components/ui/badge";
import { Leaderboard } from "@/components/leaderboard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { submitScore } from "@/lib/api";
import { supabase } from "@/lib/supabase";

export default function GameDetail() {
    const { gameId } = useParams();
    const game = GAMES.find((g) => g.id === gameId);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setRefreshLeaderboard] = useState(0);

    const handleGameOver = async (score: number) => {
        if (!game) return;
        try {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                console.warn("User not logged in, score not submitted.");
                return;
            }

            const token = session.access_token;
            const email = session.user.email || "";
            const playerName = session.user.user_metadata.full_name || email.split('@')[0] || "Anonymous";

            // Round score to 2 decimal places if it's a float
            const formattedScore = parseFloat(score.toFixed(2));
            console.log("Submitting score:", { gameId: game.id, score: formattedScore, playerName });
            await submitScore(game.id, formattedScore, token, email, playerName);

            setRefreshLeaderboard(prev => prev + 1);

        } catch (error) {
            console.error("Failed to submit score:", error);
        }
    };

    if (!game) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <h1 className="text-4xl font-bold">Game not found</h1>
                <Link to="/games">
                    <Button variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Games
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full min-h-screen pt-24 px-4 md:px-6 space-y-8 pb-20">
            <div className="max-w-5xl mx-auto w-full space-y-6">
                <Link to="/games">
                    <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Games
                    </Button>
                </Link>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold">{game.title}</h1>
                        <div className="flex gap-2">
                            <Badge>{game.year}</Badge>
                            <Badge variant="outline">{game.genre}</Badge>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-lg">{game.description}</p>
                </div>

                <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden p-1">
                    <UnityView
                        loaderUrl={`/games/${game.buildPath}/Build/Build.loader.js`}
                        dataUrl={`/games/${game.buildPath}/Build/Build.data`}
                        frameworkUrl={`/games/${game.buildPath}/Build/Build.framework.js`}
                        codeUrl={`/games/${game.buildPath}/Build/Build.wasm`}
                        onGameOver={handleGameOver}
                    />
                </div>

                <Leaderboard gameId={game.id} />
            </div>
        </div>
    );
}

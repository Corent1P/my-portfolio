import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface ScoreEntry {
    playerName: string;
    score: number;
    timestamp: string;
}

export function Leaderboard({ gameId }: { gameId?: string }) {
    const [scores, setScores] = useState<ScoreEntry[]>([]);
    const [loading, setLoading] = useState(true);

    // Default to 'memory' if no prop provided, but 'memory' is the main one now.
    const activeGameId = gameId || 'memory';

    useEffect(() => {
        setLoading(true);
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4242';
        fetch(`${backendUrl}/api/scores/${activeGameId}`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => {
                setScores(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching leaderboard:", err);
                setLoading(false);
            });
    }, [activeGameId]);

    return (
        <Card className="w-full max-w-2xl mx-auto mt-12">
            <CardHeader>
                <CardTitle className="text-center">🏆 Leaderboard - {activeGameId.toUpperCase()}</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Rank</TableHead>
                            <TableHead>Player</TableHead>
                            <TableHead className="text-right">Score</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center">Loading...</TableCell>
                            </TableRow>
                        ) : scores.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center">No scores yet. Be the first!</TableCell>
                            </TableRow>
                        ) : (
                            scores.map((entry, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">#{index + 1}</TableCell>
                                    <TableCell>{entry.playerName}</TableCell>
                                    <TableCell className="text-right">{entry.score}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

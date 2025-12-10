import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for now
const TOP_SCORES = [
    { rank: 1, name: "PlayerOne", score: 5000 },
    { rank: 2, name: "GamerGirl", score: 4500 },
    { rank: 3, name: "ProGamer", score: 4200 },
    { rank: 4, name: "NoobMaster", score: 3800 },
    { rank: 5, name: "SpeedRunner", score: 3500 },
];

export function Leaderboard() {
    return (
        <Card className="w-full max-w-2xl mx-auto mt-12">
            <CardHeader>
                <CardTitle className="text-center">🏆 Leaderboard</CardTitle>
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
                        {TOP_SCORES.map((entry) => (
                            <TableRow key={entry.rank}>
                                <TableCell className="font-medium">#{entry.rank}</TableCell>
                                <TableCell>{entry.name}</TableCell>
                                <TableCell className="text-right">{entry.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import type { Game } from "@/lib/games-data";
import { motion } from "motion/react";

interface GameCardProps {
    game: Game;
}

export function GameCard({ game }: GameCardProps) {
    return (
        <Link to={`/games/${game.id}`}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col gap-4 p-6 rounded-xl border bg-card text-card-foreground shadow-sm cursor-pointer transition-colors hover:bg-accent/10"
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">{game.title}</h2>
                    <div className="flex gap-2">
                        <Badge>{game.year}</Badge>
                        <Badge variant="outline">{game.genre}</Badge>
                    </div>
                </div>
                <p className="text-muted-foreground">{game.description}</p>
            </motion.div>
        </Link>
    );
}

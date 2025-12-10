"use client";
import { motion } from "motion/react";
import { useAuth } from "@/components/auth-provider";
import { LoginPrompt } from "@/components/login-prompt";
import { GameCard } from "@/components/game-card";
import { GAMES } from "@/lib/games-data";

export default function Games() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col w-full min-h-screen pt-20 px-4 md:px-6 space-y-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          My <span className="text-primary">Unity Games</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Play my Unity WebGL builds directly in your browser.
        </p>
      </motion.div>

      {!user && <LoginPrompt />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full"
      >
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </motion.div>
    </div>
  );
}

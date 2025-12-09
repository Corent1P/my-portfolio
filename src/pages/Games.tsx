"use client";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { UnityView } from "@/components/ui/unity-view";
import { useAuth } from "@/components/auth-provider";
import { LoginPrompt } from "@/components/login-prompt";

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
        className="grid grid-cols-1 gap-12 max-w-5xl mx-auto w-full"
      >
        {/* Project Alpha - Example usage */}
        <div className="flex flex-col gap-6 p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Project Alpha</h2>
              <Badge>Unity 2022</Badge>
              <Badge variant="outline">Action</Badge>
            </div>
            <p className="text-muted-foreground">
              This is a placeholder for your game. Upload your build to{" "}
              <code>public/games/project-alpha/</code> and update the paths
              below.
            </p>
          </div>

          {/* Unity View Component */}
          {/* Note: These paths are examples. You must replace them with your actual build files. */}
          <UnityView
            loaderUrl="/games/project-alpha/Build/game.loader.js"
            dataUrl="/games/project-alpha/Build/game.data"
            frameworkUrl="/games/project-alpha/Build/game.framework.js"
            codeUrl="/games/project-alpha/Build/game.wasm"
          />
        </div>

        {/* Space Explorer - Example usage */}
        <div className="flex flex-col gap-6 p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Space Explorer</h2>
              <Badge>Unity 2021</Badge>
              <Badge variant="outline">Arcade</Badge>
            </div>
            <p className="text-muted-foreground">
              Another placeholder. Create a build folder in{" "}
              <code>public/games/</code> for each game.
            </p>
          </div>
          {/* Placeholder Unity View */}
          <UnityView
            loaderUrl="/games/space-explorer/Build/build.loader.js"
            dataUrl="/games/space-explorer/Build/build.data"
            frameworkUrl="/games/space-explorer/Build/build.framework.js"
            codeUrl="/games/space-explorer/Build/build.wasm"
          />
        </div>
      </motion.div>
    </div>
  );
}

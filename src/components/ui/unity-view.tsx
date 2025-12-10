import { useEffect, useState, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Progress } from "@/components/ui/progress";

interface UnityViewProps {
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  // Ajout de la prop optionnelle pour remonter le score
  onGameOver?: (score: number) => void;
}

export function UnityView({
  loaderUrl,
  dataUrl,
  frameworkUrl,
  codeUrl,
  onGameOver, // On le récupère ici
}: UnityViewProps) {
  const { 
    unityProvider, 
    isLoaded, 
    loadingProgression,
    // On extrait les fonctions d'écoute
    addEventListener,
    removeEventListener
  } = useUnityContext({
    loaderUrl: loaderUrl,
    dataUrl: dataUrl,
    frameworkUrl: frameworkUrl,
    codeUrl: codeUrl,
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Math.round(loadingProgression * 100));
  }, [loadingProgression]);

  // --- C'est ici que l'écoute se fait ---
  useEffect(() => {
    // Si le parent n'a pas donné de fonction onGameOver, on n'écoute rien
    if (!onGameOver) return;

    // Cette fonction fait le pont entre l'event Unity et ta prop React
    const handleGameOver = (score: number) => {
      onGameOver(score);
    };

    // On s'abonne à l'événement "OnGameOver" (le même nom que dans le .jslib)
    addEventListener("OnGameOver", handleGameOver);

    // Important : on se désabonne quand le composant est détruit pour éviter les fuites de mémoire
    return () => {
      removeEventListener("OnGameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, onGameOver]);

  return (
    <div className="relative w-full aspect-video bg-black/5 rounded-xl overflow-hidden shadow-xl border">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20 gap-4">
          <p className="text-white text-lg font-medium">
            Loading Game... {progress}%
          </p>
          <Progress value={progress} className="w-[60%] h-2" />
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        className="w-full h-full"
        devicePixelRatio={window.devicePixelRatio}
      />
    </div>
  );
}
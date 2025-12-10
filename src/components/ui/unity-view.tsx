import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Progress } from "@/components/ui/progress";

interface UnityViewProps {
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  onGameOver?: (score: number) => void;
}

export function UnityView({
  loaderUrl,
  dataUrl,
  frameworkUrl,
  codeUrl,
  onGameOver,
}: UnityViewProps) {
  const { unityProvider, isLoaded, loadingProgression, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: loaderUrl,
    dataUrl: dataUrl,
    frameworkUrl: frameworkUrl,
    codeUrl: codeUrl,
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Math.round(loadingProgression * 100));
  }, [loadingProgression]);

  useEffect(() => {
    if (onGameOver) {
      addEventListener("OnGameOver", onGameOver);
      return () => {
        removeEventListener("OnGameOver", onGameOver);
      };
    }
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

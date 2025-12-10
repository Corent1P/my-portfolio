import { motion } from "motion/react";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

export function AboutSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      id="about"
      className="flex flex-col gap-12 min-h-screen items-center justify-center p-8"
    >
      {/* TOP: Title */}
      <motion.div
        className="flex flex-col w-full font-bold items-center text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-0">
          <h1 className="text-6xl md:text-9xl text-shadow-lg/30">About</h1>
          <div className="flex items-center justify-center gap-4">
            <h1 className="inline-block text-6xl md:text-9xl text-primary align-middle text-shadow-lg/30 text-shadow-indigo-500">
              Me
            </h1>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM: Carousel */}
      <motion.div
        className="flex flex-col w-full h-full items-center justify-center max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className="border bg-card text-card-foreground h-[500px] flex flex-col justify-between hover:border-primary/50 transition-colors shadow-none">
                    <CardHeader className="flex flex-col items-center gap-4 pt-10">
                      {/* Wrapper for Icon/Image */}
                      <div className="w-40 h-40 flex items-center justify-center">
                        {feature.Icon}
                      </div>
                      <CardTitle className="text-3xl font-bold">
                        {feature.name}
                      </CardTitle>
                    </CardHeader>
                    {/* Removed Separator for cleaner look */}
                    <CardContent className="flex flex-col items-center justify-start h-full gap-6 p-6 px-10 text-center">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Dots Pagination */}
        <div className="py-8 text-center text-sm text-muted-foreground">
          <div className="flex gap-2 justify-center mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                type="button"
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  current === index + 1
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Content for the Carousel
const features = [
  {
    Icon: (
      <img
        src="/assets/minecraft.svg"
        alt="Minecraft Icon"
        className="w-full h-full object-contain"
      />
    ),
    name: "The Beginning",
    description:
      "It started with Minecraft. I was 13 and wanted to understand how it worked. That curiosity sparked everything.",
  },
  {
    Icon: (
      <img
        src="/assets/java.png"
        alt="Java Icon"
        className="w-full h-full object-contain"
      />
    ),
    name: "First Steps",
    description:
      "Created my first mod in Java. I loved creating rather than just playing. It wasn't just a game anymore.",
  },
  {
    Icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"
        alt="Code Icon"
        className="w-full h-full object-contain"
      />
    ),
    name: "Coding Journey",
    description:
      "From simple mods to complex algorithms. Always wanting to create more and learn new technologies.",
  },
  {
    Icon: (
      <img
        src="https://avatars.githubusercontent.com/u/7068904?s=200&v=4"
        alt="Epitech Icon"
        className="w-full h-full object-contain"
      />
    ),
    name: "Current Status",
    description:
      "Proud 4th-year student at Epitech. Feeding my curiosity by exploring different fields of computer science.",
  },
  {
    Icon: (
      <img
        src="/assets/waving-hand.png"
        alt="Future Icon"
        className="w-full h-full object-contain"
      />
    ),
    name: "The Future",
    description:
      "Looking forward to new challenges, building impactful projects, and continuing to learn every day.",
  },
];

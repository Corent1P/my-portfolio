import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <div id="about" className="flex gap-20 min-h-screen">
      <motion.div
        className="flex flex-col w-1/2 font-bold"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sticky top-60 mb-80">
          <h1 className="text-9xl text-shadow-lg/30">About</h1>
          <h1 className="inline-block text-9xl text-primary align-middle text-shadow-lg/30 text-shadow-indigo-500">
            Me
          </h1>
          <img
            src={"/assets/waving-hand.png"}
            alt="Waving Hand"
            className="inline-block rotate-340 w-60 h-60 align-end animate-wiggle"
          />
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-8 w-1/2 mr-10"
        initial={{ x: 60 }}
        whileInView={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Card className="shadow-indigo-200 shadow-2xl w-full mr-10 h-80 bg-white">
          <CardHeader className="flex gap-4 items-center">
            <CardTitle className="text-5xl">What about me ?</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent>
            <div className="flex gap-7 font-medium h-full items-start">
              <img
                src={"/assets/minecraft.svg"}
                alt="Minecraft"
                className="w-40 h-40 rounded-2xl shadow-md/30"
              />
              <div className="flex flex-col text-3xl gap-3 text-left justify-between h-full">
                <p>
                  It started here:{" "}
                  <span className="text-primary font-bold">Minecraft</span>
                </p>
                <p>
                  First game and first love,{" "}
                  <span className="text-primary font-bold">I was 13</span> and I
                  already wanted to understand{" "}
                  <span className="text-primary font-bold">how it works.</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex gap-4 w-full mr-10">
          <Card className="shadow-indigo-200 shadow-2xl w-1/2 h-80 bg-white">
            <CardHeader className="flex gap-4 items-center">
              <CardTitle className="text-5xl">What Next ?</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="flex gap-7 font-medium h-full items-start">
                <img
                  src={"/assets/java.png"}
                  alt="Java"
                  className="w-40 h-40 rounded-2xl shadow-md/30 border-2"
                />
                <div className="flex flex-col text-3xl gap-3 text-left justify-between h-full">
                  <p>
                    I created my first mod in{" "}
                    <span className="text-primary font-bold">Java</span>
                  </p>
                  <p>
                    I <span className="text-primary font-bold">loved it</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-indigo-200 shadow-2xl w-1/2 h-80 bg-white">
            <CardHeader className="flex gap-4 items-center">
              <CardTitle className="text-5xl">After That ?</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="flex gap-7 font-medium h-full items-start">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"
                  alt="Java"
                  className="w-40 h-40 rounded-2xl shadow-md/30 border-2"
                />
                <div className="flex flex-col text-3xl gap-3 text-left justify-between h-full">
                  <p>
                    I still wanted to learn{" "}
                    <span className="text-primary font-bold">Coding</span>
                  </p>
                  <p>
                    Create <span className="text-primary font-bold">More</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="shadow-indigo-200 shadow-2xl w-full mr-10 h-80 bg-white">
          <CardHeader className="flex gap-4 items-center">
            <CardTitle className="text-5xl">And Now ?</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent>
            <div className="flex gap-7 font-medium h-full items-start">
              <img
                src="https://epitech.bj/wp-content/uploads/2020/03/EPI-LOGO-SIGNATURE-2018.png"
                alt="Epitech"
                className="w-40 h-40 rounded-2xl shadow-md/30 border-2"
              />
              <div className="flex flex-col text-3xl gap-3 text-left justify-between h-full">
                <p>
                  Now i'm a proud fourth-year student at{" "}
                  <span className="text-primary font-bold">Epitech</span>
                </p>
                <p>
                  I’m feeding my{" "}
                  <span className="text-primary font-bold">curiosity</span> by{" "}
                  <span className="text-primary font-bold">exploring</span>{" "}
                  different fields of{" "}
                  <span className="text-primary font-bold">
                    computer science
                  </span>
                  .
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <p className="text-5xl mx-5 text-center">
          <span className="text-primary font-bold">Hi! </span>My name is <span className="text-primary font-bold">Corentin Piquet.</span><br/> A young boy who first fell in love with the game Minecraft and who wanted very quickly to understand how the game actually worked.
          And by digging deeper, the kid discovered programming. Fast forward to today: I’m 21 years old, a fourth-year student at Epitech,
          and more recently studying at Tecsup in Peru, where I’m feeding my curiosity and eagerness to learn by exploring different fields of computer science.
          My goal isn’t to become the best developer in the world, but rather to find my own place in this vast world of technology and, above all, to keep enjoying coding by always discovering new things.
        </p> */}
      </motion.div>
    </div>
  );
}

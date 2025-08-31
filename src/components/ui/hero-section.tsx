import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardHeader, CardTitle } from "./card";
import { GraduationCap, ArrowDown, ListChecks, Brain } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {

  return (
    <div className="flex flex-col gap-20 min-h-screen pt-20">
      <div>
        <div className="flex justify-center pb-5">
          <motion.div className="p-2 rounded-full animate-(--animate-float)" style={{ background: 'var(--gradient-brand)' }}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Avatar className="w-32 h-32 md:w-60 md:h-60 shadow-2xl">
              <AvatarImage src="https://github.com/Corent1P.png" alt="Profile Picture" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
        <motion.h1 className="text-8xl font-bold"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Corentin <span className="text-primary">Piquet</span>
        </motion.h1>
        <motion.p className="mt-4 text-4xl"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          21 years old French developer.
        </motion.p>
      </div>
      <div className="flex gap-14 justify-center px-10 pb-15">
        <motion.div
          className="w-full max-w-md"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.30, duration: 0.5 }}
        >
          <Card className="bg-white shadow-indigo-200 shadow-2xl hover:animate-(--animate-wiggle)">
            <CardHeader className="flex gap-4 items-center">
              <div className="p-2 rounded-full" style={{ background: 'var(--gradient-brand)' }}>
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">French Student 🇫🇷</CardTitle>
            </CardHeader>
          </Card>
        </motion.div>
        <motion.div
          className="w-full max-w-md"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="bg-white shadow-indigo-200 shadow-2xl hover:animate-(--animate-wiggle)">
            <CardHeader className="flex gap-4 items-center">
              <div className="p-2 rounded-full" style={{ background: 'var(--gradient-brand)' }}>
                <ListChecks className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Multi Skills 💪</CardTitle>
            </CardHeader>
          </Card>
        </motion.div>
        <motion.div
          className="w-full max-w-md"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Card className="bg-white shadow-indigo-200 shadow-2xl hover:animate-(--animate-wiggle)">
            <CardHeader className="flex gap-4 items-center">
              <div className="p-2 rounded-full" style={{ background: 'var(--gradient-brand)' }}>
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Continuously Learning 📚</CardTitle>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
      <ArrowDown className="w-10 h-10 animate-bounce self-center" />
    </div>
  )
}

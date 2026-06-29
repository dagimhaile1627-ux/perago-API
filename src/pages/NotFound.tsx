import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-screen flex-col bg-background"
    >
      {/* Subtle background gradient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/5 via-accent/5 to-transparent blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center border-b border-border/40 px-6 py-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-foreground">Modern Stack</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-md"
        >
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-primary/10">
            <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              404
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">
            Page not found
          </h1>
          <p className="mb-8 text-base text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="h-12 min-w-[200px] rounded-xl text-base shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

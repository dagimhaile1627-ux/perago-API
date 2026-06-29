import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  BarChart3,
  Brain,
  Layers,
  CheckCircle2,
  Star,
  Palette,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on modern architecture for instant response times and seamless real-time updates.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption with industry-leading authentication and authorization protocols.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Comprehensive dashboards and actionable insights to drive data-informed decisions.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Leverage cutting-edge artificial intelligence to automate workflows and boost productivity.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Flexible, composable building blocks that scale effortlessly with your growing needs.",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Pixel-perfect interfaces with thoughtful micro-interactions and a refined visual language.",
    gradient: "from-pink-500 to-rose-400",
  },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "CTO at TechFlow",
    content: "The platform transformed how our team collaborates. The AI features alone saved us countless hours.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Product Lead at Nexus",
    content: "Incredible attention to detail. The modular architecture let us customize everything to our exact needs.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Founder of ScaleUp",
    content: "We evaluated dozens of solutions. Nothing comes close to the performance and polish this delivers.",
    rating: 5,
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:from-primary/15 group-hover:to-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </motion.div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle background gradient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/5 via-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Modern Stack
              </span>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Testimonials
              </a>
              <a
                href="#cta"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Get Started
              </a>
            </nav>
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <Button
                  onClick={() => navigate("/")}
                  className="group"
                >
                  Dashboard
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/auth")}
                    className="hidden sm:inline-flex"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => navigate("/auth")}
                    className="group shadow-md shadow-primary/20"
                  >
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28 lg:pt-36">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-6xl text-center"
          >
            <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center gap-2">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium">
                <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                Now in Public Beta
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Build the{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Modern Stack
              </span>
              <br />
              Your Users Deserve
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              A beautifully crafted platform with enterprise-grade performance, 
              AI-powered workflows, and pixel-perfect design — everything you need 
              to ship faster and delight your users.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                onClick={() => navigate("/auth")}
                className="h-12 min-w-[180px] rounded-xl text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/auth")}
                className="h-12 min-w-[180px] rounded-xl text-base"
              >
                <Shield className="mr-2 h-4 w-4" />
                See How It Works
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Free tier included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                14-day trial
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="scroll-mt-20 relative border-t border-border/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="mb-16 text-center"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium">
                  <Zap className="mr-1.5 h-3 w-3 text-primary" />
                  Features
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Everything you need to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ship faster
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
              >
                A complete toolkit designed for modern development teams who care 
                about quality, performance, and user experience.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="scroll-mt-20 border-t border-border/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="mb-16 text-center"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium">
                  <Star className="mr-1.5 h-3 w-3 text-amber-400" />
                  Testimonials
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Loved by{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  builders worldwide
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-3"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={scaleIn}
                  className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
                >
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-border/40 pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="scroll-mt-20 border-t border-border/40 px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mx-auto max-w-4xl"
          >
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-12 text-center shadow-xl sm:p-16"
            >
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

              <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-xs font-medium">
                <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                Get Started Today
              </Badge>

              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to build something{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  extraordinary
                </span>
                ?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Join thousands of teams already building with the modern stack. 
                Start for free — no credit card required.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => navigate("/auth")}
                  className="h-12 min-w-[200px] rounded-xl text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/auth")}
                  className="h-12 min-w-[200px] rounded-xl text-base"
                >
                  Talk to Sales
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Modern Stack
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Modern Stack. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

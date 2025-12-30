import { onBoardUser } from "@/actions/auth.action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Code2,
  Play,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export default async function Home() {
  await onBoardUser();

  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Interactive Coding",
      description:
        "Practice with real-world coding challenges and get instant feedback on your solutions.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Track Progress",
      description:
        "Monitor your improvement with detailed analytics and achievement systems.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Global Community",
      description:
        "Learn from thousands of developers worldwide and share your knowledge.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Feedback",
      description:
        "Get instant feedback on your solutions with detailed explanations.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Problems Solved" },
    { number: "10K+", label: "Active Developers" },
    { number: "25+", label: "Programming Languages" },
    { number: "98%", label: "Success Rate" },
  ];

  const problemCategories = [
    {
      level: "Beginner",
      title: "Easy Problems",
      description:
        "Perfect for getting started with basic programming concepts and syntax.",
      count: "500+ Problems",
      color: "amber",
    },
    {
      level: "Intermediate",
      title: "Medium Problems",
      description:
        "Challenge yourself with data structures and algorithm problems.",
      count: "800+ Problems",
      color: "indigo",
    },
    {
      level: "Advanced",
      title: "Hard Problems",
      description:
        "Master complex algorithms and compete in programming contests.",
      count: "300+ Problems",
      color: "amber",
    },
  ];

  return (
    <div className="mt-24 min-h-screen transition-colors">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-16">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-8 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900"
          >
            <Star className="mr-2 h-4 w-4" />
            Join 10,000+ developers already coding
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-8 text-2xl leading-tight font-black text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Master{" "}
            <span className="relative inline-block">
              <span className="inline-block -rotate-1 transform rounded-2xl bg-amber-500 px-6 py-3 text-white shadow-lg dark:bg-amber-400 dark:text-gray-900">
                Problem
              </span>
            </span>{" "}
            Solving
            <br />
            with{" "}
            <span className="relative inline-block">
              <span className="inline-block rotate-1 transform rounded-2xl bg-indigo-600 px-6 py-3 text-white shadow-lg dark:bg-indigo-500">
                Code
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl dark:text-gray-300">
            Challenge yourself with thousands of coding problems, compete with
            developers worldwide, and accelerate your programming journey with
            real-time feedback and expert solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="transform bg-amber-500 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl dark:bg-amber-400 dark:text-gray-900 dark:hover:bg-amber-500"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Coding Now
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-950"
            >
              Browse Problems
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-gray-50 py-24 dark:bg-neutral-900/50"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Everything you need to{" "}
              <span className="text-amber-600 dark:text-amber-400">excel</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Our platform provides comprehensive tools and resources to help
              you become a better programmer
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-gray-200 transition-shadow duration-200 hover:shadow-lg dark:border-gray-700"
              >
                <CardHeader>
                  <div
                    className={`h-12 w-12 ${
                      index % 2 === 0
                        ? "bg-amber-100 dark:bg-amber-900"
                        : "bg-indigo-100 dark:bg-indigo-900"
                    } flex items-center justify-center rounded-xl ${
                      index % 2 === 0
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-indigo-600 dark:text-indigo-400"
                    } mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section id="problems" className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Choose your{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                challenge
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              From beginner-friendly puzzles to advanced algorithmic challenges
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {problemCategories.map((category, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-200 hover:shadow-lg ${
                  category.color === "amber"
                    ? "border-amber-200 bg-amber-50 hover:border-amber-300 dark:border-amber-800 dark:bg-amber-950/30 dark:hover:border-amber-700"
                    : "border-indigo-200 bg-indigo-50 hover:border-indigo-300 dark:border-indigo-800 dark:bg-indigo-950/30 dark:hover:border-indigo-700"
                }`}
              >
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className={`w-fit ${
                      category.color === "amber"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                        : "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                    }`}
                  >
                    {category.level}
                  </Badge>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </CardDescription>
                  <div
                    className={`font-semibold ${
                      category.color === "amber"
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    {category.count}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-md bg-linear-to-r from-amber-600 to-amber-300 py-24 dark:from-amber-600 dark:to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to start your coding journey?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Join thousands of developers who are improving their skills every
            day
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 shadow-lg hover:bg-gray-100"
          >
            Get Started for Free
          </Button>
        </div>
      </section>
    </div>
  );
}

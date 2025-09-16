"use client";
import { Navbar } from "@/components/Navbar";
import { useMemo } from "react";
import SplitText from "@/components/ui-block/SplitText";
import DarkVeil from "@/components/ui-block/DarkVeil";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Heart,
  Lightbulb,
  GraduationCap,
  Sparkles,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleAnimationComplete = () => {
    console.log("animation completed ");
  };

  const particles = [
    { id: 1, left: 20, top: 30, delay: 0, duration: 10 },
    { id: 2, left: 60, top: 80, delay: 2, duration: 12 },
    { id: 3, left: 80, top: 20, delay: 4, duration: 14 },
    { id: 4, left: 30, top: 70, delay: 6, duration: 11 },
    { id: 5, left: 90, top: 50, delay: 8, duration: 13 },
  ];

  const statsData = [
    { number: "500+", label: "Institutions", icon: BookOpen },
    { number: "100K+", label: "Students Tracked", icon: Users },
    { number: "60%", label: "Time Saved", icon: TrendingUp },
    { number: "98%", label: "Accuracy Rate", icon: Award },
  ];

  const teamMembers = [
    {
      name: "Alex Smith",
      role: "CEO & Founder",
      initials: "AS",
      description:
        "Former school administrator with 15 years of experience in educational technology and institutional management systems.",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Maria Johnson",
      role: "Head of Product",
      initials: "MJ",
      description:
        "Curriculum specialist and former teacher who understands the daily challenges of educational administration and student tracking.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "David Lee",
      role: "CTO",
      initials: "DL",
      description:
        "Technology leader specializing in educational software architecture and scalable institutional management platforms.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <>
      {/* Background with stable elements */}
      <div className="fixed inset-0 -z-10">
        <DarkVeil />

        {/* Slower, more subtle gradient orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 1.2s ease-out",
          }}
        />

        {/* Reduced and slower floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="min-h-screen relative z-50">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Slower background grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative">
            {/* Product Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">
                Introducing Learnova 2.0
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center mb-8 text-center gap-x-6 gap-y-4">
              <SplitText
                text="Transform"
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-balance"
                delay={0.05}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 100, rotateX: -90 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <SplitText
                text="Education"
                className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-clip-text text-transparent text-balance"
                delay={0.05}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 100, rotateX: -90 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                The most advanced platform for{" "}
                <span className="text-accent font-semibold">
                  curriculum planning
                </span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">
                  attendance management
                </span>
                . Trusted by 500+ educational institutions worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-purple-300 font-medium">
                    Our Mission
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-accent bg-clip-text text-transparent">
                  Empowering Educational Excellence
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At Learnova, we believe that{" "}
                    <span className="text-accent font-semibold">
                      effective educational administration
                    </span>{" "}
                    is the foundation of student success. Our platform
                    streamlines curriculum planning and attendance tracking,
                    giving educators more time to focus on what truly matters.
                  </p>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    We're committed to providing educational institutions with
                    intelligent tools that enable{" "}
                    <span className="text-purple-400 font-semibold">
                      data-driven decisions
                    </span>{" "}
                    and create better learning outcomes for all students.
                  </p>
                </div>

                <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-purple-500 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-accent/25 transition-all duration-500 hover:scale-[1.02]">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/10 via-accent/10 to-pink-500/10 rounded-3xl h-96 flex items-center justify-center border border-purple-500/20 backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-all duration-700">
                  {/* Stable animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Fixed floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-accent/60 rounded-full animate-pulse" />
                  <div
                    className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />

                  <div className="text-center z-10">
                    <div className="relative mb-6">
                      <GraduationCap className="h-24 w-24 text-white mx-auto group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700" />
                    </div>
                    <p className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-500">
                      Transforming Education
                    </p>
                    <p className="text-gray-400 mt-2">
                      One Institution at a Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          {/* Stable section background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/5 to-black/40 backdrop-blur-3xl" />

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full border border-accent/30 backdrop-blur-sm mb-6">
                <Heart className="w-5 h-5 text-accent mr-2" />
                <span className="text-accent font-medium">Our Values</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Principles That Drive Us
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These values shape every decision we make and every solution we
                create for educational institutions worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Efficiency",
                  description:
                    "Streamlining administrative processes to reduce workload and eliminate redundancy, allowing educators to focus on teaching excellence.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Heart,
                  title: "Student-Centered",
                  description:
                    "Every feature designed with student success in mind, providing insights that help institutions support their learners better.",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "Leveraging cutting-edge AI and technology to create intelligent solutions that adapt to modern education needs.",
                  gradient: "from-purple-500 to-violet-500",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="group bg-black/40 border-white/10 backdrop-blur-xl hover:border-accent/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/25"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}
                    >
                      <value.icon className="h-10 w-10 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <CardTitle className="text-white text-xl group-hover:text-accent transition-colors duration-500">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30 backdrop-blur-sm mb-6">
                <Users className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-400 font-medium">Our Team</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet the Visionaries
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The passionate educators and technologists driving Learnova's
                innovation and success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group bg-black/40 border-white/10 backdrop-blur-xl hover:border-accent/50 transition-all duration-700 hover:scale-[1.02]"
                >
                  <CardContent className="pt-8 text-center">
                    <div className="relative mb-6">
                      <div
                        className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}
                      >
                        <span className="text-3xl font-bold text-white relative z-10">
                          {member.initials}
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Stable floating badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-500">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Stable animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-purple-500/10 to-pink-500/10 backdrop-blur-3xl">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 70%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)`,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-6">
                <TrendingUp className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-medium">Our Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforming Education Globally
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Measurable results that demonstrate our commitment to
                educational excellence and institutional success.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="mb-6">
                      <stat.icon className="w-12 h-12 text-white mx-auto group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-500">
                      {stat.number}
                    </div>

                    <p className="text-white/90 font-medium text-lg group-hover:text-white transition-colors duration-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-black/50 to-purple-900/30 rounded-3xl p-12 border border-accent/30 backdrop-blur-xl hover:border-accent/50 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join hundreds of educational institutions that trust Learnova to
                streamline their administrative processes and improve student
                outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-purple-500 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-accent/25 transition-all duration-500 hover:scale-[1.02]">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="inline-flex items-center px-8 py-4 bg-white/10 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-[1.02]">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) rotate(90deg);
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

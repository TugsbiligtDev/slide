"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  BookOpen,
  Calendar,
  Star,
  DollarSign,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  MessageCircle,
  Video,
  BarChart3,
  Settings,
  Heart,
  Rocket,
  QrCode,
} from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Pineder Mentorship Platform",
    subtitle: "Connecting Students with Expert Mentors",
    type: "title",
    content: null,
  },
  {
    id: 2,
    title: "Meet Our Team",
    type: "team",
    content: [
      {
        id: 1,
        name: "Zaya",
        role: "Frontend Developer",
        description: "React, Next.js, TypeScript мэргэжилтэн",
        avatar: "Z",
      },
      {
        id: 2,
        name: "Tugsu",
        role: "Backend Developer",
        description: "Node.js, Express, MongoDB мэргэжилтэн",
        avatar: "T",
      },
      {
        id: 3,
        name: "Mio",
        role: "Frontend Developer",
        description: "React, Next.js, TypeScript мэргэжилтэн",
        avatar: "M",
      },
    ],
  },
  {
    id: 3,
    title: "Pineder гэж юу вэ?",
    type: "content",
    content: [
      "Next.js, TypeScript, Tailwind CSS дээр бүтээгдсэн иж бүрэн менторшип платформ",
      "Сурагчдыг  менторуудтай холбож, ганцаарчилсан болон бүлгийн уулзалт хийх боломжтой",
      "Pinecone academy-д зориулагдсан бөгөөд (@nest.edu.mn) имэйл домэйныг дэмждэг",
    ],
    icon: <Users className="w-16 h-16 text-pineder-teal" />,
  },
  {
    id: 4,
    title: "Үндсэн боломжууд - Оюутнуудад",
    type: "content",
    content: [
      "Session Booking - Хичээл захиалах: Оюутнууд ментортой 1:1 хичээл захиалж болно",
      "Payment Options - Төлбөрийн сонголт: Гурван төрөлтэй — Үнэгүй, Кофе, эсвэл Зайрмаг",
      "Topic Selection - Сэдэв сонголт: Янз бүрийн хичээл, сэдвээс сонгох боломжтой",
    ],
    icon: <BookOpen className="w-16 h-16 text-pineder-blue" />,
  },
  {
    id: 5,
    title: "Үндсэн боломжууд - Менторуудын хувьд",
    type: "content",
    content: [
      "Dashboard Overview - Хяналтын самбар: Нийт хичээл, идэвхтэй сурагч, үнэлгээ, орлогоо хянах",
      "Session Requests - Хичээлийн хүсэлтүүд: Оюутны хичээл захиалгыг шалгаж, зөвшөөрөх эсвэл татгалзах",
      "Availability Management - Цагийн менежмент: Чөлөөтэй цагийн хуваариа тохируулах, удирдах",
      "Student Management - Оюутны менежмент: Бүх сурагч болон хичээлийн түүхээ харах",
      "Profile Management - Профайл менежмент: Мэргэшил, товч танилцуулга, туршлага шинэчлэх",
      "Group Sessions - Бүлгийн хичээл: Бүлгээр хичээл үүсгэж, удирдах",
    ],
    icon: <Target className="w-16 h-16 text-pineder-purple" />,
  },
  {
    id: 6,
    title: "Техникийн бүтэц",
    type: "content",
    content: [
      "Frontend - Фронтенд: Next.js 14 + TypeScript + Tailwind CSS",
      "Backend - Бэкенд: Node.js + Express + MongoDB",
      "Authentication - Нэвтрэлт: Clerk нэвтрэх систем",
      "Video Integration - Видео холболт: Онлайн хичээлд Zoom ашиглах",
      "Real-time Features - Бодит цагийн боломжууд: Амьд хичээл удирдлага, мэдэгдэл",
      "Responsive Design - Дасан зохицох дизайн: Гар утас төвтэй, бүх дэлгэцэд тохирох байдал",
    ],
    icon: <Settings className="w-16 h-16 text-pineder-teal" />,
  },

  {
    id: 7,
    title: "Session Flow",
    type: "flow",
    content: [
      "Сурагч боломжтой менторуудыг харна",
      "Сурагч хүссэн сэдэв, төлбөрийн сонголттойгоор хичээл захиална",
      "Менторт хичээл захиалгын мэдэгдэл ирнэ",
      "Ментор хүсэлтийг зөвшөөрөх эсвэл татгалзана",
      "Хичээл Zoom-тэй холбогдож товлогдоно",
      "Хичээл бодит цагийн боломжуудтай явагдана",
    ],
  },
  {
    id: 8,
    title: "Our Project Management",
    type: "github",
    content: null,
  },
  {
    id: 9,
    title: "Дэвшилтэт боломжууд",
    type: "content",
    content: [
      "Бүлгийн хичээл: Олон сурагчтай хамтарсан суралцалт",
      "Сэдвийн санал асуулга: Бүлгийн хичээлд сурагчнууд сэдвийг санал болгох, санал өгөх боломжтой",
      "Аналитик самбар: Менторуудын иж бүрэн статистик мэдээлэл",
    ],
    icon: <Zap className="w-16 h-16 text-pineder-purple" />,
  },

  {
    id: 10,
    title: "Өргөн ач холбогдол, давуу талууд",
    type: "benefits",
    content: {
      Students: [
        "Хувийн суралцалт",
        "Уян хатан цагийн зохицуулалт",
        "Хямд боломжууд",
      ],
      Mentors: [
        "Нэмэлт орлого",
        "Мэргэжлийн хөгжүүлэлт",
        "Сурагчдад үзүүлэх нөлөө",
      ],
      Institutions: [
        "Суралцах үр дүн дээшлүүлэх",
        "Сурагчдын идэвх оролцоо нэмэгдэх",
        "Орчин үеийн платформ",
      ],
      Education: ["Мэргэжлийн мэдлэг, менторшипэд хүртээмжтэй хандах боломж"],
    },
  },

  {
    id: 11,
    title: "Ready to transform mentorship?",
    subtitle: "Join Pineder today!",
    type: "cta",
    content: null,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-pineder-blue scale-125"
                  : "bg-gray-300 hover:bg-pineder-teal"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-pineder-blue" />
      </button>

      <button
        onClick={nextSlide}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-pineder-blue" />
      </button>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen flex items-center justify-center p-8"
        >
          <div className="max-w-6xl w-full">
            {currentSlideData.type === "title" && (
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="glass rounded-3xl p-16 shadow-2xl"
                >
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pineder-teal via-pineder-blue to-pineder-purple bg-clip-text text-transparent mb-6">
                    {currentSlideData.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
                    {currentSlideData.subtitle}
                  </p>
                </motion.div>
              </div>
            )}

            {currentSlideData.type === "content" && (
              <div className="glass rounded-3xl p-12 shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  {currentSlideData.icon}
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                    {currentSlideData.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {currentSlideData.content?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle className="w-6 h-6 text-pineder-teal mt-1 flex-shrink-0" />
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {currentSlideData.type === "flow" && (
              <div className="glass rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                  {currentSlideData.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentSlideData.content?.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-pineder-teal to-pineder-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                        {index + 1}
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {currentSlideData.type === "benefits" && (
              <div className="glass rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                  {currentSlideData.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(currentSlideData.content || {}).map(
                    ([key, benefits], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6"
                      >
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 capitalize">
                          For {key}
                        </h3>
                        <ul className="space-y-2">
                          {benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-center gap-3"
                            >
                              <ArrowRight className="w-5 h-5 text-pineder-blue" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            )}

            {currentSlideData.type === "team" && (
              <div className="glass rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-12 text-center">
                  {currentSlideData.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {currentSlideData.content?.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: index * 0.3,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-center group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative mb-6 mx-auto"
                      >
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pineder-teal via-pineder-blue to-pineder-purple rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:shadow-2xl transition-all duration-300">
                          {member.avatar}
                        </div>
                        <motion.div
                          className="absolute -inset-2 bg-gradient-to-r from-pineder-teal to-pineder-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.3 + 0.3, duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-lg font-medium text-pineder-blue mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {currentSlideData.type === "github" && (
              <div className="glass rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                  {currentSlideData.title}
                </h2>

                {/* GitHub Screenshot - Single Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg p-4 border max-w-5xl mx-auto"
                >
                  <img
                    src="/Screenshot 2025-08-28 at 14.24.18.png"
                    alt="GitHub Project Board Overview"
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-center mt-8"
                >
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    📊 Real project tracking using GitHub Projects
                  </p>
                </motion.div>
              </div>
            )}

            {currentSlideData.type === "cta" && (
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="glass rounded-3xl p-16 shadow-2xl"
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {currentSlideData.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-8">
                    {currentSlideData.subtitle}
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6">
                      <QrCode className="w-32 h-32 text-pineder-blue mx-auto mb-4" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Scan to access platform
                      </p>
                    </div>
                    <div className="space-y-4">
                      <button className="bg-gradient-to-r from-pineder-teal to-pineder-blue text-white px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                        Get Started Today
                      </button>
                      <p className="text-gray-600 dark:text-gray-400">
                        Contact us for demo access
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Counter */}
      <div className="fixed bottom-4 right-4 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}

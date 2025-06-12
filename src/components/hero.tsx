import Link from "next/link";
import { Search, BookOpen, Users, Lightbulb } from "lucide-react";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Jelajahi Dunia Filsafat
          </h1>
          <p className="text-xl mb-8 text-base-content/80 max-w-2xl mx-auto">
            Temukan pemikiran para filosof, era bersejarah, dan teori-teori yang
            membentuk peradaban manusia melalui konten yang dikategorikan dengan
            rapi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/silabus" className="btn btn-primary btn-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Mulai Belajar
            </Link>
            <Link href="/tentang" className="btn btn-outline btn-lg">
              Tentang Kami
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Tokoh Filosofi</h3>
                <p className="text-base-content/70">
                  Pelajari pemikiran para filosof terkenal dari berbagai era
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Era Bersejarah</h3>
                <p className="text-base-content/70">
                  Jelajahi perkembangan filsafat dari masa ke masa
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Teori & Konsep</h3>
                <p className="text-base-content/70">
                  Pahami teori-teori fundamental dalam filsafat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

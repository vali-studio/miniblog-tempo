import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Calendar, Tag, User, TrendingUp } from "lucide-react";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Pemikiran Socrates tentang Kebijaksanaan",
      excerpt:
        "Menyelami konsep 'Aku tahu bahwa aku tidak tahu' dan bagaimana hal ini membentuk fondasi filsafat Barat.",
      category: "Tokoh",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
      tags: ["Socrates", "Kebijaksanaan", "Filsafat Yunani"],
    },
    {
      id: 2,
      title: "Era Pencerahan dan Revolusi Pemikiran",
      excerpt:
        "Bagaimana Era Pencerahan mengubah cara manusia memandang akal, sains, dan masyarakat.",
      category: "Era",
      date: "2024-01-12",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      tags: ["Pencerahan", "Voltaire", "Kant"],
    },
    {
      id: 3,
      title: "Eksistensialisme: Kebebasan dan Tanggung Jawab",
      excerpt:
        "Memahami aliran eksistensialisme dan bagaimana ia mempengaruhi pemikiran modern tentang kebebasan.",
      category: "Aliran",
      date: "2024-01-10",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&q=80",
      tags: ["Eksistensialisme", "Sartre", "Kebebasan"],
    },
    {
      id: 4,
      title: "Teori Keadilan John Rawls",
      excerpt:
        "Analisis mendalam tentang 'Teori Keadilan' dan konsep 'veil of ignorance' dalam filsafat politik.",
      category: "Teori",
      date: "2024-01-08",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
      tags: ["Keadilan", "Rawls", "Politik"],
    },
    {
      id: 5,
      title: "Glosarium: Memahami Istilah Filsafat",
      excerpt:
        "Kumpulan istilah-istilah penting dalam filsafat yang perlu dipahami oleh setiap pembelajar.",
      category: "Glosarium",
      date: "2024-01-05",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
      tags: ["Terminologi", "Konsep", "Definisi"],
    },
    {
      id: 6,
      title: "Aristoteles dan Etika Nikomakea",
      excerpt:
        "Menjelajahi konsep kebahagiaan dan kebajikan dalam karya masterpiece Aristoteles.",
      category: "Tokoh",
      date: "2024-01-03",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
      tags: ["Aristoteles", "Etika", "Kebajikan"],
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Hero />

      {/* Blog Posts Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Artikel Terbaru</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Jelajahi pemikiran filosofis melalui artikel-artikel yang dikurasi
              khusus untuk memperdalam pemahaman Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <figure>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="badge badge-primary badge-sm">
                      {post.category}
                    </div>
                    <div className="flex items-center text-sm text-base-content/60">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>

                  <h3 className="card-title text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-base-content/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <div key={index} className="badge badge-outline badge-xs">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn btn-outline btn-lg">
              Lihat Semua Artikel
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Jelajahi Berdasarkan Kategori
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Temukan konten yang sesuai dengan minat filosofis Anda melalui
              kategorisasi yang terstruktur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Tokoh",
                count: "25+",
                icon: <User className="w-8 h-8" />,
                description: "Biografi dan pemikiran para filosof",
              },
              {
                name: "Era",
                count: "8",
                icon: <Calendar className="w-8 h-8" />,
                description: "Periode perkembangan filsafat",
              },
              {
                name: "Tags",
                count: "50+",
                icon: <Tag className="w-8 h-8" />,
                description: "Label topik dan tema",
              },
              {
                name: "Aliran",
                count: "15+",
                icon: <TrendingUp className="w-8 h-8" />,
                description: "Mazhab dan aliran pemikiran",
              },
              {
                name: "Glosarium",
                count: "100+",
                icon: <User className="w-8 h-8" />,
                description: "Definisi istilah filsafat",
              },
              {
                name: "Teori",
                count: "30+",
                icon: <User className="w-8 h-8" />,
                description: "Konsep dan teori fundamental",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="card-body items-center text-center">
                  <div className="text-primary mb-4">{category.icon}</div>
                  <h3 className="card-title text-xl mb-2">{category.name}</h3>
                  <p className="text-base-content/70 text-sm mb-2">
                    {category.description}
                  </p>
                  <div className="badge badge-secondary">
                    {category.count} konten
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Mulai Perjalanan Filosofis Anda
          </h2>
          <p className="text-primary-content/80 mb-8 max-w-2xl mx-auto text-lg">
            Bergabunglah dengan komunitas pembelajar filsafat dan dapatkan akses
            ke konten eksklusif serta diskusi mendalam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-secondary btn-lg">
              Daftar Sekarang
            </button>
            <button className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

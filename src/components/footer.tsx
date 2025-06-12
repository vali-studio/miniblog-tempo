import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-2xl mb-4 text-primary">FilsafatKu</h3>
            <p className="text-base-content/70 text-sm">
              Platform pembelajaran filsafat yang menyajikan pemikiran para
              filosof, era bersejarah, dan teori-teori fundamental dengan cara
              yang mudah dipahami.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="link link-hover">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/silabus" className="link link-hover">
                  Silabus
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="link link-hover">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="link link-hover">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tokoh" className="link link-hover">
                  Tokoh
                </Link>
              </li>
              <li>
                <Link href="/era" className="link link-hover">
                  Era
                </Link>
              </li>
              <li>
                <Link href="/aliran" className="link link-hover">
                  Aliran
                </Link>
              </li>
              <li>
                <Link href="/teori" className="link link-hover">
                  Teori
                </Link>
              </li>
              <li>
                <Link href="/glosarium" className="link link-hover">
                  Glosarium
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@filsafatku.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="btn btn-circle btn-outline btn-sm">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" className="btn btn-circle btn-outline btn-sm">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" className="btn btn-circle btn-outline btn-sm">
            <Github className="h-4 w-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-base-content/60 text-sm mb-4 md:mb-0">
              © {currentYear} FilsafatKu. Semua hak dilindungi.
            </div>

            <div className="flex space-x-4 text-sm">
              <Link
                href="/privacy"
                className="link link-hover text-base-content/60"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="link link-hover text-base-content/60"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/cookies"
                className="link link-hover text-base-content/60"
              >
                Kebijakan Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => (
  <footer className="mt-16 border-t border-white/10 bg-slate-950/80 text-slate-300">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
      <div>
        <Link to="/" className="text-lg font-semibold text-white">Sheeter Alo (শীতের আলো)</Link>
        <p className="text-sm leading-relaxed mt-2">
          একসাথে উষ্ণতা ভাগ করে নেই — Share warmth across Bangladesh.
        </p>
      </div>
      <div className="space-y-3">
        <p className="font-semibold text-white">Contact</p>
        <div className="space-y-1">
          <p>+880 1700-123456</p>
          <p>info@sheeteralo.org</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="font-semibold text-white">Social</p>
        <div className="flex gap-4 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} Sheeter Alo — Crafted with empathy during
      winter nights.
    </div>
  </footer>
);

export default Footer;

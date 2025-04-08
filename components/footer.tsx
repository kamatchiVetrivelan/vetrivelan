// components/Footer.jsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-white/30 bg-gradient-to-r bg-rose-950">
      <div className="container mx-auto px-10  py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Links appear first on mobile but second on desktop */}
          <div className="flex gap-6 md:order-2 text-sm">
            <Link 
              href="@/components/terms" 
              className="text-white hover:underline"
            >
              Terms and Conditions
            </Link>
            <Link 
              href="/components/privacy" 
              className="text-white hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
          
          {/* Copyright appears second on mobile but first on desktop */}
          <div className="text-white md:order-1 text-sm">
            © 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
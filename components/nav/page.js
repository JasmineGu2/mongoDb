'use client';
import Link from 'next/link';
import './index.css';
export default function Header() {
  return (
    <div className="w-full justify-between flex ">
      <div className="nav-container">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="nav-item"
        >
          {' '}
          <img src="logo.png" className="icon-interactive"></img>{' '}
        </Link>
        <Link
          href="/Jasmine_Resume.pdf"
          download="Jasmine_Gu_Resume.pdf"
          className="nav-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        <Link href="mailto:jgu.hba2026@ivey.ca" className="nav-item">
          {' '}
          Email{' '}
        </Link>
      </div>
    </div>
  );
}

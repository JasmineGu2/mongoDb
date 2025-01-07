import Section from '@/components/section/page';
import Landing from '@/components/landing/page';
import Footer from '@/components/footer/page';
import Header from '@/components/header/page';

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <Landing />
      <Section />
      <Footer />
    </div>
  );
}

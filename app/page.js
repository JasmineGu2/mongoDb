import Section from '@/components/section/page';
import Landing from '@/components/landing/page';
import Footer from '@/components/footer/page';
import Nav from '@/components/nav/page'
import Modal from '@/components/modal/page';
export default function Home() {
  return (
    <div className="flex">
      <Nav/>
      <div className="modal-container">
      <Modal isErrorModal={true} />
      <Modal/>
      </div>
      <Landing />
      <Section />
      <Footer />
    </div>
  );
}

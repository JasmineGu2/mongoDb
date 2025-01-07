
import ProfilePage from "@/components/profile/page";
import Nav from "@/components/nav/page";
import Header from "@/components/header/page";
import Modal from "@/components/modal/page";

export default function Home() {
  return (
    <div className="flex">
      <Nav/>
      <div className="modal-container">
      <Modal isErrorModal={true} />
      <Modal/>
      </div>
      <Header/>
      <ProfilePage/>
      <div className="footer-end">
            Dev & Design by Jasmine
            <img className="img" src="star.png"/>
      </div>
    </div>
  );
}

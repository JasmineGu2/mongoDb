import Modal from "@/components/modal/page";
import Nav from "@/components/nav/page";

export default function Header(){
    return (
        <div className="header-container">
        <Nav/>
        <div className="modal-buttons-container">
        <Modal isErrorModal={true} />
        <Modal/>
        </div>
        </div>
    )
}
"use client"
import Link from "next/link";
export default function Header () {

    // have Projects - Technical and Product
    // Community - Compass Food Bank, EFA, London Boys and Girls Club, Social Justice CLub President, MYAC President
            // Western AI - Internals, Residence Soph - 

    const items = ["Work Experiences", "Projects", "Commmunity", "About Me"]
    return (
      <div className="w-full justify-between flex ">
      <div className="nav-container">
      <Link href="#landing" className="nav-item"> <img src="logo.png" className="img"></img> </Link>
      <Link
href="/Jasmine_Resume.pdf"
download="Jasmine_Gu_Resume.pdf"
className="nav-item"
>
Resume
</Link>
      <Link href="mailto:jgu.hba2026@ivey.ca" className="nav-item"> Email </Link>
      </div>
      </div>

    )
}

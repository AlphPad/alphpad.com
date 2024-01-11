import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from 'next/router'
import Image from 'next/image';

function Header() {
  const [menu, setMenu] = useState(false);

  const router = useRouter()




  // ........header Sticky..................
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
  });

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('headerFixed') : header.classList.remove('headerFixed');
  };

  function closeAllMenus() {
    let elements = document.querySelectorAll(".menu-item-has-children.open");
    elements.forEach((item) => {
      item.classList.remove('open')
      item.querySelector('.submenu').style.display = 'none'
    })
  }

  // ...........main menu...............
  const toggleMenu = () => {
    setMenu(!menu);
    closeAllMenus()

  }

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="header-holder">
            <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
              <div className="brand-logo d-none d-lg-inline-block">
                <div className="logo">
                  <Link href="/">
                    <Image src="/images/logo/logo.png" width={150} height={55} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="header-wrapper justify-content-lg-end">
                <div className="mobile-logo d-lg-none"> <Link href="/">
                  <Image src="/images/logo/logo.png" width={150} height={55} alt="logo" />
                </Link>
                </div>
                <div className="menu-area">
                  <ul id="menu" className={menu ? 'menu active' : 'menu'}>
                    <li>
                      <Link href="/#body" scroll={false}>Home</Link>
                    </li>
                    <li>
                      <Link href="/#benefits" scroll={false}>Benefits</Link>
                    </li>
                    <li>
                      <Link href="/#tokenomics" scroll={false}>Tokenomics</Link>
                    </li>
                    <li>
                      <Link href="/#roadmap" scroll={false}>Roadmap</Link>
                    </li>
                    <li>
                      <Link href="/#team" scroll={false}>Team</Link>
                    </li>
                    <li>
                      <Link href="https://docs.alphpad.com" target="_blank">Docs</Link>
                    </li>
                  </ul>
                  <div id="icon" onClick={() => toggleMenu()} className={menu ? 'header-bar d-lg-none active' : 'header-bar d-lg-none'}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
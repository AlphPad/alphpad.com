import {
  faDiscord,
  faTelegram,
  faMedium,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import Image from 'next/image';


function Footer() {
  return (
    <div>
      <footer
        className="footer"
        style={{ backgroundImage: "url(images/footer/bg.png)" }}
      >
        <div className="footer__wrapper padding-top padding-bottom">
          <div className="container">
            <div className="footer__content text-center">
              <Link className="mb-4 d-inline-block" href="/">
                <Image src="/images/logo/logo.png"
                  width={150}
                  height={55}
                  alt="Logo"
                />
              </Link>
              <ul className="social justify-content-center">
                <li className="social__item">
                  <Link href="https://twitter.com/alphpad" target="_blank" className="social__link">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li className="social__item">
                  <Link href="https://discord.gg/yYbBUvS2" target="_blank" className="social__link">
                    <FontAwesomeIcon icon={faDiscord} />
                  </Link>
                </li>
                <li className="social__item">
                  <Link href="https://t.me/alphpad" target="_blank" className="social__link">
                    <FontAwesomeIcon icon={faTelegram} />
                  </Link>
                </li>
                <li className="social__item">
                  <Link href="https://medium.com/@AlphPad" target="_blank" className="social__link">
                    <FontAwesomeIcon icon={faMedium} />
                  </Link>
                </li>
                <li className="social__item">
                  <Link href="https://github.com/AlphPad" target="_blank" className="social__link">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </li>
                <li className="social__item">
                  <Link href="mailto:admin@alphpad.com" target="_blank" className="social__link">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="container">
            <div className="text-center py-4">
              <p className="mb-0">AlphPad © {new Date().getFullYear()} | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

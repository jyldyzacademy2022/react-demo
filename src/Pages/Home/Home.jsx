import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { init } from "ityped";

import Photo from "../../images/men.jpg";

import "./home.scss";

function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title">Hero Coder</h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit
            omnis at ipsa, sed reiciendis explicabo doloremque, error aliquam
            earum laborum libero soluta architecto recusandae unde in, labore
            delectus rerum.
          </p>
          <ul className="home__links">
            <li>
              <a
                href="https://fb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="home__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="home__cta">
            Hire Me
          </Link>
        </div>
        <div className="home__right">
          <img src={Photo} alt="Hero Coder" />
        </div>
      </div>
    </section>
  );
}

export default Home;

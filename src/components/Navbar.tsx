import  { useEffect } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Break from "./Break";
import thunder from "../assets/thunder.png";

export default function Navbar() {
  const lenis = useLenis();
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");

      sections.forEach((sec: HTMLElement) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link: Element) => {
            link.classList.remove("active");
            const navId = id ? id : "";
            document
              .querySelector(`nav a[id*='${navId}']`)
              ?.classList.add("active");
          });

          document.body.className = `color-${sec.dataset.color}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ReactLenis root>
      <div>
        <div
          className="soft cursor-pointer !z-50"
          onClick={() => {
            lenis?.scrollTo(`#home`);
          }}
        >
          <div className="soft-txt">RIRITA</div>
          <div></div>
          <div></div>
          <div className="c"></div>
          <img
            src={thunder}
            className="thunder absolute w-[70px] z-20 bottom-[-80px] left-14"
          />
        </div>

        <nav className="w-fit !z-50">
          {["Home", "About", "Works", "Contact"].map((item, index) => (
            <a
              key={item}
              onClick={() => {
                lenis?.scrollTo(`#${item.toLowerCase()}`);
              }}
              id={`#${item.toLowerCase()}`}
              className={`nav-link ${index === 0 ? "active" : ""}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <section id="home">
          <Home />
        </section>
        <Break />
        <section id="about">
          <About />
        </section>

        <section id="works">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </ReactLenis>
  );
}

{
  /* <ul>
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Works</a>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
        </ul> */
}

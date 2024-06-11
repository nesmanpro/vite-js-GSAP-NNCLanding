import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {

        const scroller = document.querySelector('.scroller');

        document.body.style.height = `${scroller.scrollHeight}px`;

        gsap.to(scroller, {
            y: () => -(scroller.scrollHeight - document.documentElement.clientHeight),
            ease: 0.3,
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 2,
                invalidateOnRefresh: true,
                onUpdate: self => {
                    gsap.set(scroller, {
                        y: -self.scroll()
                    });
                }
            }
        });

        ScrollTrigger.defaults({
            scroller: ".scroller"
        });

        ScrollTrigger.scrollerProxy(".scroller", {
            scrollTop(value) {
                return arguments.length ? (scroller.scrollTop = value) : scroller.scrollTop;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            }
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.scrollTop = 0);
        ScrollTrigger.refresh();
    }
}

export default SmoothScroll;

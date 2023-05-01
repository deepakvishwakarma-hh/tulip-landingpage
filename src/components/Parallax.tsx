import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring,
    useReducedMotion,
    useScroll,
} from "framer-motion";

type ParallaxProps = {
    children: ReactNode;
    offset?: number;
    clampInitial?: boolean;
    clampFinal?: boolean;
    className?: string
};

const Parallax = ({
    children,
    offset = 50,
    clampInitial,
    clampFinal,
    className
}: ParallaxProps): JSX.Element => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef(null);

    const { scrollY } = useScroll();

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    const yRange = useTransform(
        scrollY,
        [initial, final],
        [clampInitial ? 0 : offset, clampFinal ? 0 : -offset]
    );
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useLayoutEffect(() => {
        const element = ref.current;
        const onResize = () => {
            setElementTop(
                /* @ts-ignore-next */
                element.getBoundingClientRect().top + window.scrollY ||
                window.pageYOffset
            );
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref]);

    // Don't parallax if the user has "reduced motion" enabled
    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div className={className} ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

export default Parallax;
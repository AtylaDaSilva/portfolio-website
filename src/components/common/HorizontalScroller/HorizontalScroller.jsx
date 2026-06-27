import { useEffect, useRef } from "react";
import "./HorizontalScroller.css";

export default function HorizontalScroller({
    children,
    edgeSize = 120,
    maxScrollSpeed = 10,
    className = "",
}) {
    const EDGE_SIZE = edgeSize;        // Área sensível nas laterais
    const MAX_SPEED = maxScrollSpeed;  // Pixels por frame

    const containerRef = useRef(null);
    const animationFrame = useRef(null);
    const scrollVelocity = useRef(0);

    useEffect(() => {
        const container = containerRef.current;

        const animate = () => {
            if (scrollVelocity.current !== 0) {
                container.scrollLeft += scrollVelocity.current;
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame.current);
        };
    }, []);

    function handleMouseMove(e) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const width = rect.width;

        let velocity = 0;

        // Esquerda
        if (x < EDGE_SIZE) {
            const factor = 1 - x / EDGE_SIZE;
            velocity = -factor * MAX_SPEED;
        }

        // Direita
        else if (x > width - EDGE_SIZE) {
            const factor = (x - (width - EDGE_SIZE)) / EDGE_SIZE;
            velocity = factor * MAX_SPEED;
        }

        scrollVelocity.current = velocity;
    }

    function handleMouseLeave() {
        scrollVelocity.current = 0;
    }

    return (
        <div
            ref={containerRef}
            className={`horizontal-scroller ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}
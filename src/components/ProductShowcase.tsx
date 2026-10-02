"use client";
import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Compass,
  Sparkles,
  Users,
  Maximize2,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
const screens = [
  {
    id: "discover",
    label: "Discover events",
    icon: Compass,
    image: "/images/serotix-desktop.png",
    mobile: "/images/serotix-discover-mobile.png",
    title: "Find your kind of out.",
    description:
      "Explore the SeroTix homepage, then search for an experience by category, place or date.",
    alt: "SeroTix homepage showing the event discovery experience.",
  },
  {
    id: "vibe",
    label: "Find My Vibe",
    icon: Sparkles,
    image: "/images/serotix-vibe.png",
    mobile: "/images/serotix-vibe-mobile.png",
    title: "Start with how you feel.",
    description:
      "A quick quiz that helps turn your mood into ideas for your next experience.",
    alt: "The real Find My Vibe quiz with Turn it up, Keep it easy, Make me laugh and Surprise me choices.",
  },
  {
    id: "squad",
    label: "Squad shortlist",
    icon: Users,
    image: "/images/serotix-squad.png",
    mobile: "/images/serotix-squad-mobile.png",
    title: "Good plans are a group thing.",
    description:
      "A place to collect event ideas. This is the starting screen before any experiences are saved.",
    alt: "The SeroTix squad shortlist starting screen, before saving events.",
  },
];
export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [expanded]);
  function expand() {
    dialog.current?.showModal();
    setExpanded(true);
  }
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const screen = screens[active];
  const { props: desktop } = getImageProps({
    src: screen.image,
    alt: screen.alt,
    width: 1440,
    height: 1000,
    sizes: "85vw",
  });
  const { props: mobile } = getImageProps({
    src: screen.mobile,
    alt: screen.alt,
    width: 390,
    height: 844,
    sizes: "(max-width: 600px) 92vw, 85vw",
  });
  function change(index: number) {
    setActive(index);
    buttons.current[index]?.focus();
  }
  return (
    <div className="product-demo" id="product">
      <div
        className="product-tabs"
        role="tablist"
        aria-label="Explore SeroTix product screens"
      >
        {screens.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={active === i}
            aria-controls={`screen-${s.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                change(
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? screens.length - 1
                      : (active +
                          (e.key === "ArrowRight" ? 1 : -1) +
                          screens.length) %
                        screens.length,
                );
              }
            }}
          >
            <s.icon aria-hidden="true" size={16} />
            {s.label}
          </button>
        ))}
      </div>
      <div className="product-tools">
        <span className="micro">
          0{active + 1} / 03 · THE PRODUCT, UP CLOSE
        </span>
        <button onClick={expand} className="text-link">
          View larger <Maximize2 size={15} aria-hidden="true" />
        </button>
      </div>
      <div
        role="tabpanel"
        id={`screen-${screen.id}`}
        aria-labelledby={`tab-${screen.id}`}
        tabIndex={0}
      >
        <button
          type="button"
          className="product-showcase preview-enlarge"
          onClick={expand}
          aria-label={`Enlarge ${screen.label} preview`}
        >
          <span className="browser-bar">
            <span>● ● ●</span>
            <span>serotix.co.ke</span>
            <span>PRODUCT PREVIEW</span>
          </span>
          <picture key={screen.image}>
            <source
              media="(min-width: 601px)"
              srcSet={desktop.srcSet}
              sizes={desktop.sizes}
              width={1440}
              height={1000}
            />
            <img {...mobile} alt={screen.alt} />
          </picture>
          <span className="preview-zoom-hint">
            <Maximize2 aria-hidden="true" size={16} /> Explore the details
          </span>
        </button>
        <div className="product-caption">
          <div>
            <h3>{screen.title}</h3>
            <p>{screen.description}</p>
          </div>
          <a
            href="https://serotix.co.ke"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try SeroTix <ArrowUpRight aria-hidden="true" size={17} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="product-lightbox"
        aria-labelledby="lightbox-title"
        onClose={() => setExpanded(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        {expanded && (
          <div className="lightbox-content">
            <div className="lightbox-header">
              <div>
                <span className="eyebrow">SEROTIX / PRODUCT PREVIEW</span>
                <h2 id="lightbox-title">{screen.label}</h2>
              </div>
              <button
                className="lightbox-close"
                aria-label="Close product preview"
                onClick={() => dialog.current?.close()}
              >
                <X size={23} aria-hidden="true" />
              </button>
            </div>
            <div className="lightbox-image">
              <picture key={screen.image}>
                <source
                  media="(min-width: 601px)"
                  srcSet={desktop.srcSet}
                  sizes="90vw"
                  width={1440}
                  height={1000}
                />
                <img {...mobile} loading="eager" alt={screen.alt} />
              </picture>
            </div>
            <div className="lightbox-footer">
              <div className="lightbox-paging">
                <button
                  aria-label="Previous product screen"
                  onClick={() =>
                    setActive((active + screens.length - 1) % screens.length)
                  }
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
                <span className="micro">0{active + 1} / 03</span>
                <button
                  aria-label="Next product screen"
                  onClick={() => setActive((active + 1) % screens.length)}
                >
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
              <a
                href="https://serotix.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Try the real product{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

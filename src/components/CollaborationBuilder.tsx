"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { collaborations } from "@/lib/collaborations";
export default function CollaborationBuilder() {
  const [selected, setSelected] = useState(0);
  const choice = collaborations[selected];
  return (
    <section className="collaboration-section shell" id="build-together">
      <div className="section-heading">
        <div>
          <span className="eyebrow">04 / BUILD WITH MANUU</span>
          <h2>
            Your idea.
            <br />
            <em>Our starting point.</em>
          </h2>
        </div>
        <p>
          Choose the conversation you want to start. We’ll take it from there.
        </p>
      </div>
      <div className="collaboration-layout">
        <div
          className="collaboration-options"
          role="group"
          aria-label="Choose a collaboration type"
        >
          {collaborations.map((option, i) => (
            <button
              key={option.id}
              aria-pressed={selected === i}
              aria-controls="collaboration-detail"
              onClick={() => setSelected(i)}
            >
              <span className="micro">0{i + 1}</span>
              <span>{option.label}</span>
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          ))}
          <div className="collaboration-note">
            <span className="status-dot" />
            <p>
              Start with a conversation.
              <br />
              Find the right fit together.
            </p>
          </div>
        </div>
        <div
          className="collaboration-detail"
          id="collaboration-detail"
          aria-live="polite"
          aria-atomic="true"
        >
          <div key={choice.id} className="collaboration-content">
            <span
              className={`collaboration-mark ink-${choice.color}`}
              aria-hidden="true"
            >
              {choice.mark}
            </span>
            <span className="eyebrow">{choice.label}</span>
            <h3>{choice.title}</h3>
            <p>{choice.description}</p>
            <ul>
              {choice.items.map((item) => (
                <li key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/contact?intent=${choice.id}`} className="button">
              {choice.cta}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

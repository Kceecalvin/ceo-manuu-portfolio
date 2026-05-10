"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[var(--text-secondary)] font-medium uppercase tracking-[0.3em] mb-4 text-sm"
            >
              Strategic Architecture
            </motion.h2>
            <h1 className="text-white leading-[1.1] tracking-tighter" style={{ fontSize: 'var(--font-h2)' }}>
              The Blueprint of an <br />
              <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-pink)] bg-clip-text text-transparent italic" style={{ fontSize: 'var(--font-h1)' }}>
                Integrated Empire
              </span>
            </h1>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
          alt="Manuu Spaces Empire Blueprint"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}

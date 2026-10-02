"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { type Business, businessInquiryHref } from "@/lib/businesses";

export default function BusinessServices({ business }: { business: Business }) {
  const [active, setActive] = useState<number | null>(0);
  return <div className="biz-services">
    {business.services.map((service, i) => <div className="biz-service" key={service.name}>
      <h3><button type="button" aria-expanded={active === i} aria-controls={`service-${i}`} onClick={() => setActive(active === i ? null : i)}>
        <span className="biz-kicker">0{i + 1}</span><span>{service.name}</span>{active === i ? <Minus aria-hidden="true" size={20} /> : <Plus aria-hidden="true" size={20} />}
      </button></h3>
      <div id={`service-${i}`} hidden={active !== i} className="biz-service-body">
        <p>{service.text}</p><Link className="biz-text-link" href={businessInquiryHref(business, service.name)}>Enquire about this <ArrowUpRight aria-hidden="true" size={17} /></Link>
      </div>
    </div>)}
  </div>;
}

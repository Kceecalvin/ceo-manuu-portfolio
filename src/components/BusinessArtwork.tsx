import type { Business } from "@/lib/businesses";

// Original vector artwork: no stock photos or implied photographs of real premises.
export default function BusinessArtwork({ business }: { business: Business }) {
  const { art, slug } = business;
  const gradient = `metal-${slug}`;
  return (
    <svg className={`business-art art-${art}`} viewBox="0 0 640 540" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x1="120" y1="60" x2="520" y2="490" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--biz-accent)" />
          <stop offset=".48" stopColor="var(--biz-highlight)" />
          <stop offset="1" stopColor="var(--biz-deep)" />
        </linearGradient>
      </defs>
      <g className="art-grid" stroke="currentColor" opacity=".09">
        {[100, 200, 300, 400, 500].map((x) => <path key={x} d={`M${x} 30V510M30 ${x}H610`} />)}
        <circle cx="320" cy="270" r="215" /><circle cx="320" cy="270" r="150" />
      </g>
      <g className="art-object" fill={`url(#${gradient})`} stroke="var(--biz-highlight)" strokeWidth="1.5">
        {art === "car" && <>
          <ellipse cx="325" cy="388" rx="254" ry="24" fill="var(--biz-deep)" stroke="none" opacity=".6" />
          <path d="M64 323 100 280 218 258 290 180 425 193 500 264 553 293 582 343 561 366H82Z" />
          <path d="m234 257 66-62 55 6 10 65ZM378 267l-8-64 48 6 58 59Z" fill="var(--biz-deep)" />
          <path d="m82 302 124 1-29 20H72m407-28 49 15 8 17-51-7" fill="var(--biz-highlight)" />
          <path d="m216 287 246 5m-226 42 213 7m-155-56 9 49" fill="none" />
          {[174, 477].map((x) => <g key={x}><circle cx={x} cy="353" r="45" fill="var(--biz-deep)" strokeWidth="9" /><circle cx={x} cy="353" r="27" fill="none" /><path d={`M${x} 328v50m-25-25h50m-43-18 36 36m0-36-36 36`} /></g>)}
          <path d="M86 431h165m-138 12h94m229-9h127" stroke="var(--biz-accent)" strokeWidth="3" />
        </>}
        {art === "stage" && <>
          <path d="m320 75 37 127 116-62-63 115 127 35-127 37 63 116-116-64-37 128-36-128-116 64 63-116-128-37 128-35-63-115 116 62Z" />
          <circle cx="320" cy="290" r="79" fill="var(--biz-deep)" />
          <circle cx="320" cy="290" r="51" fill="none" /><circle cx="320" cy="290" r="10" />
          <path d="M100 470V357m18 113v-69m404 69V122m18 348V222" stroke="var(--biz-accent)" strokeWidth="4" />
        </>}
        {art === "care" && <>
          <path d="M261 100h118v125h125v118H379v125H261V343H136V225h125Z" strokeLinejoin="round" strokeWidth="12" />
          <path d="M176 286h77l29-47 48 107 30-60h101" stroke="var(--biz-deep)" strokeWidth="8" fill="none" strokeLinejoin="round" />
          <circle cx="468" cy="143" r="40" fill="var(--biz-deep)" /><path d="m451 143 12 12 24-27" fill="none" strokeWidth="4" />
        </>}
        {art === "bottle" && <>
          <ellipse cx="324" cy="464" rx="183" ry="25" fill="var(--biz-deep)" stroke="none" opacity=".5" />
          <path d="M218 96h72v101c0 22 45 39 45 78v157c0 20-160 20-160 0V275c0-39 43-56 43-78Z" />
          <path d="M212 80h84v37h-84Z" fill="var(--biz-accent)" />
          <path d="M191 291h128v99H191Z" fill="var(--biz-deep)" /><path d="M218 310h73m-73 16h47m-47 42h73" />
          <path d="M386 220h132l-28 126c-7 28-68 28-75 0Z" fill="none" strokeWidth="3" />
          <path d="M398 276h108l-16 70c-7 28-68 28-75 0Z" /><path d="M452 367v86m-51 0h102" strokeWidth="3" />
        </>}
        {art === "building" && <>
          <path d="m115 231 188-96 213 93-183 98Z" /><path d="M115 231v205l218 65V326Z" fill="var(--biz-deep)" /><path d="M333 326v175l183-87V228Z" />
          <path d="m172 202 131-67V61l-131 72Z" /><path d="m303 61 134 57v76l-134-59Z" />
          {[0, 1, 2, 3].map((i) => <path key={i} d={`m${353 + i * 39} ${331 - i * 19}v120m-197-174v118`} stroke="var(--biz-deep)" strokeWidth="8" />)}
          <path d="m144 339 154 49m-154-17 154 49" stroke="var(--biz-highlight)" strokeWidth="5" />
        </>}
        {(art === "trade" || art === "logistics") && <>
          <path d="m109 273 195-94 226 94-200 103Z" /><path d="M109 273v112l221 98V376Z" fill="var(--biz-deep)" /><path d="M330 376v107l200-98V273Z" />
          {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`m${353 + i * 35} ${382 - i * 18}v77m${-65 - i * 70} ${-18 + i * 2}v-78`} strokeWidth="4" />)}
          <path d="M103 197C122 59 458 35 542 186" fill="none" strokeDasharray="7 9" strokeWidth="3" />
          <path d="m508 177 34 9 10-35" fill="none" strokeWidth="5" />
          {art === "logistics" ? <><circle cx="165" cy="423" r="26" fill="var(--biz-deep)" /><circle cx="445" cy="457" r="26" fill="var(--biz-deep)" /></> : <circle cx="315" cy="103" r="27" />}
        </>}
        {art === "grooming" && <>
          <rect x="180" y="71" width="282" height="394" rx="135" strokeWidth="8" fill="var(--biz-deep)" />
          <rect x="198" y="89" width="246" height="358" rx="118" fill="none" />
          <path d="m229 273-15-103 61 49 46-85 47 85 60-49-15 103Z" /><path d="M230 291h182v23H230Z" />
          <path d="M275 357h94m-79 17h64m-47 17h29" strokeWidth="3" /><circle cx="321" cy="245" r="15" fill="var(--biz-deep)" />
        </>}
        {art === "digital" && <>
          <rect x="103" y="119" width="446" height="307" rx="22" />
          <rect x="120" y="160" width="412" height="247" rx="8" fill="var(--biz-deep)" /><path d="m150 140 3 0m15 0h3m15 0h3" strokeWidth="7" strokeLinecap="round" />
          <path d="m238 232-51 46 51 46m176-92 51 46-51 46m-62-106-42 135" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="370" y="361" width="193" height="93" rx="17" fill="var(--biz-accent)" /><path d="m411 407 18 18 40-40m27 21h38" stroke="var(--biz-deep)" strokeWidth="5" fill="none" />
        </>}
      </g>
    </svg>
  );
}

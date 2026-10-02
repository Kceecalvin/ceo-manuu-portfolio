import Link from "next/link";
export default function NotFound() {
  return (
    <section className="shell page-section page-heading">
      <span className="eyebrow">404 / A DIFFERENT DIRECTION</span>
      <h1>
        Let’s find
        <br />
        <em>your way.</em>
      </h1>
      <p>
        This page doesn’t exist. The full portfolio is a good place to start.
      </p>
      <Link href="/ventures" className="button">
        Explore the ventures
      </Link>
    </section>
  );
}

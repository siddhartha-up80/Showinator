import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://source.unsplash.com/random/900×700/?cinema=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Get the summary of shows...</p>
            <Link href="/showinator">
              <div className="btn btn-primary">Get Started</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

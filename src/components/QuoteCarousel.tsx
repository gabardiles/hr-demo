"use client";

import { useState } from "react";

interface Quote {
  text: string;
  name: string;
  title: string;
}

export default function QuoteCarousel({
  quotes,
  showArrows = false,
}: {
  quotes: Quote[];
  showArrows?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const q = quotes[current];

  function prev() {
    setCurrent((i) => (i === 0 ? quotes.length - 1 : i - 1));
  }
  function next() {
    setCurrent((i) => (i === quotes.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="py-8">
      <blockquote className="max-w-3xl">
        <p className="font-serif text-2xl lg:text-3xl text-navy italic leading-relaxed mb-8">
          &ldquo;{q.text}&rdquo;
        </p>
        <footer>
          <p className="font-semibold text-navy text-sm">{q.name}</p>
          <p className="text-muted text-sm">{q.title}</p>
        </footer>
      </blockquote>

      <div className="flex items-center gap-4 mt-10">
        {showArrows && (
          <button
            onClick={prev}
            className="text-navy/50 hover:text-navy transition-colors text-lg"
            aria-label="Previous"
          >
            ←
          </button>
        )}
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-8 text-sm font-medium transition-colors ${
              i === current
                ? "text-navy border-b-2 border-navy"
                : "text-muted hover:text-navy"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {showArrows && (
          <button
            onClick={next}
            className="text-navy/50 hover:text-navy transition-colors text-lg"
            aria-label="Next"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}

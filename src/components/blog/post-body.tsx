import type { ReactNode } from "react";

/** Minimal markdown-ish body — headings, lists, paragraphs, links */
export function PostBody({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);
  const nodes: ReactNode[] = [];

  blocks.forEach((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("## ")) {
      nodes.push(
        <h2 key={i} className="mt-8 text-xl font-semibold first:mt-0">
          {trimmed.slice(3)}
        </h2>,
      );
      return;
    }

    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^- /, ""));
      nodes.push(
        <ul key={i} className="mt-4 list-disc space-y-1 pl-5">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      return;
    }

    nodes.push(
      <p key={i} className="mt-4 leading-relaxed opacity-90">
        {renderInline(trimmed)}
      </p>,
    );
  });

  return <div className="prose-oowit">{nodes}</div>;
}

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const internal = href.startsWith("/");
      return (
        <a
          key={i}
          href={href}
          className="font-semibold underline-offset-4 hover:underline"
          {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

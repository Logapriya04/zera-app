//app/global-error.tsx
"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: String };
}) {
  return (
    <html>
      <body>
        <h2>Global Error</h2>
      </body>
    </html>
  );
}

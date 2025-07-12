//app/global-error.tsx
"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h2>Global Error</h2>
        <p>{error.message}</p>
      </body>
    </html>
  );
}

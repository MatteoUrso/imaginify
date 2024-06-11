import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

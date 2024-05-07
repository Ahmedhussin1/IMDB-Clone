"use client";
import React, { Children } from "react";
import { ThemeProvider } from 'next-themes';

function Providers({children}) {
  return (
    <ThemeProvider defaultTheme = 'system' attribute="class">
      <div className="">{children}</div>
    </ThemeProvider>
  );
}

export default Providers;

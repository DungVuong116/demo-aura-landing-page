"use client";

import { Typography } from "@poweredbygen/gen-ui";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-4 md:gap-[60px] bg-white! px-8 py-10 md:py-[100px]">
      <Typography variant="h3" className="text-(--text-muted-dark)">
        AURA
      </Typography>
      <Typography variant="body" className="text-(--text-muted-dark)">
        ©2025 AURA. All Rights Reserved.
      </Typography>
    </footer>
  );
};

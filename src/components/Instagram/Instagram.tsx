"use client";

import { Box } from "@mui/material";
import { useEffect } from "react";

export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Box
      sx={{
        width: 325,
        height: 500, 
        overflow: "hidden",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: "100%", height: "100%" }}
      ></blockquote>
    </Box>
  );
}
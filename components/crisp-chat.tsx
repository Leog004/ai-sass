"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d85d281d-9664-4eed-9f3e-04b4a4b43036");
  }, []);

  return null;
};
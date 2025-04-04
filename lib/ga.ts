"use client";

import ReactGA from "react-ga4";

import { useEffect } from "react";

export default function GoogleAnalyticsInit() {
  useEffect(() => {
    ReactGA.initialize("G-WWTQ6N622Q");
    ReactGA.send("pageview");
  });

  return null;
}

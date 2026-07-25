"use client";

import { useEffect, useState } from "react";
import launchStyles from "./prelaunch.module.css";

const LAUNCH_AT = new Date("2026-08-01T00:00:00+12:00").getTime();

type Countdown = { days: number; hours: number; minutes: number; seconds: number; launched: boolean };

function getCountdown(): Countdown {
  const remaining = Math.max(0, LAUNCH_AT - Date.now());
  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining % 86_400_000) / 3_600_000),
    minutes: Math.floor((remaining % 3_600_000) / 60_000),
    seconds: Math.floor((remaining % 60_000) / 1_000),
    launched: remaining === 0,
  };
}

export function LaunchCountdown({ locale }: { locale: "en" | "zh" }) {
  const [time, setTime] = useState<Countdown>(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getCountdown()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  if (time.launched) {
    return <div className={launchStyles.launched}>{locale === "zh" ? "SciNest Free 已开放" : "SciNest Free is now available"}</div>;
  }

  const labels = locale === "zh" ? ["天", "小时", "分钟", "秒"] : ["days", "hours", "min", "sec"];
  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <div className={launchStyles.countdown} aria-label={locale === "zh" ? "距离开放下载的倒计时" : "Countdown to download availability"}>
      {values.map((value, index) => (
        <div key={labels[index]}><strong>{String(value).padStart(2, "0")}</strong><span>{labels[index]}</span></div>
      ))}
    </div>
  );
}

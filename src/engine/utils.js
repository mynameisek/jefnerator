import { VIP_NAMES } from '../data/vips';

export function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomVIPs(count = 2) {
  const shuffled = [...VIP_NAMES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function vipRef(vip) {
  const styles = [
    () => vip.name,
    () => vip.first || vip.name,
    () => `${vip.first} ${vip.name}`.trim(),
    () => vip.name.toLowerCase(),
    () => (vip.title ? `${vip.title} ${vip.name}` : vip.name),
    () => vip.name.charAt(0) + ".",
  ];
  return randomChoice(styles)();
}

export function randomDate() {
  const year = 2008 + Math.floor(Math.random() * 16);
  const month = Math.floor(Math.random() * 12);
  const day = 1 + Math.floor(Math.random() * 28);
  const hour = Math.floor(Math.random() * 24);
  const min = Math.floor(Math.random() * 60);
  const sec = Math.floor(Math.random() * 60);
  const d = new Date(year, month, day, hour, min, sec);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayName = days[d.getDay()];
  const monthName = months[d.getMonth()];
  const h12 = hour > 12 ? hour - 12 : hour || 12;
  const ampm = hour >= 12 ? "PM" : "AM";
  const pad = (n) => String(n).padStart(2, "0");

  return randomChoice([
    `${dayName}, ${day} ${monthName} ${year} ${pad(hour)}:${pad(min)}:${pad(sec)} +0000`,
    `${monthName} ${day}, ${year} at ${h12}:${pad(min)} ${ampm}`,
    `${dayName}, ${monthName} ${day}, ${year} ${h12}:${pad(min)}:${pad(sec)} ${ampm}`,
    `${month + 1}/${day}/${year} ${h12}:${pad(min)}:${pad(sec)} ${ampm}`,
    `${dayName.toLowerCase()} ${day} ${monthName.toLowerCase()} ${year} ${pad(hour)}:${pad(min)}`,
  ]);
}

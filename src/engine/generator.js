import { DEVICES, EMAIL_DOMAINS, TROLLOZOR_ALIASES, SUBJECTS } from '../data/locations';
import { MESSAGE_PATTERNS, TOPIC_WEIGHTS } from '../data/patterns';
import { randomChoice, randomDate } from './utils';

export { randomChoice, randomVIPs, vipRef, randomDate } from './utils';

const ALL_STYLES = [
  "formal", "outlook", "reply_chain", "gmail",
  "truncated", "encoding", "caution", "political",
];

const GREETINGS = [
  n => `hi ${n},\n`,
  n => `${n} —\n`,
  n => `${n},\n`,
  n => `dear ${n},\n`,
  n => `hey ${n}\n`,
  n => `${n} !\n`,
];

const SIGN_OFFS = [
  n => `\n— talk soon ${n}`,
  n => `\nlet me know ${n}`,
  n => `\n${n}, thoughts?`,
  n => `\ndon't share this ${n}.`,
  n => `\ncall me ${n}`,
  n => `\nsee you ${n}`,
];

function noisyName(name) {
  const first = name.split(" ")[0];
  const n = randomChoice([
    () => first,                                      // David
    () => first.toLowerCase(),                        // david
    () => first.toUpperCase(),                        // DAVID
    () => first.slice(0, 3).toLowerCase(),            // dav
    () => first.slice(0, 3),                          // Dav
    () => first.charAt(0).toUpperCase() + ".",        // D.
    () => first.length > 3 ? first.slice(0, -1) + first.slice(-1).repeat(2) : first, // Davidd
    () => first + "y",                                // Davidy
    () => first.charAt(0).toLowerCase() + first.slice(1), // david (force lower first)
    () => name,                                       // David M. (full as-is)
  ]);
  return n();
}

function sprinkleName(text, name) {
  if (!name || Math.random() > 0.3) return text;
  const n = noisyName(name);
  if (Math.random() < 0.5) return randomChoice(GREETINGS)(n) + text;
  return text + randomChoice(SIGN_OFFS)(n);
}

function generateMessages(topic, count, name) {
  const pool = TOPIC_WEIGHTS[topic] || Object.keys(MESSAGE_PATTERNS);
  const messages = [];

  for (let i = 0; i < count; i++) {
    const patternKey = randomChoice(pool);
    const pattern = MESSAGE_PATTERNS[patternKey];
    if (!pattern) continue;
    messages.push({
      from: i % 2 === 0 ? "trollozor" : "user",
      text: sprinkleName(pattern(), name),
      date: randomDate(),
    });
  }
  return messages;
}

export function generateConversation(name, email, topic) {
  const trollEmail = "jeevacation@gmail.com";
  const alias = randomChoice(TROLLOZOR_ALIASES);

  const trollAliases = [
    `Jeffrey Epstein <${trollEmail}>`,
    `JE <${trollEmail}>`,
    `Jeffrey E. <${trollEmail}>`,
    `"Jeffrey Epstein - ${alias}" <${trollEmail}>`,
    `Jeffrey E. [mailto:${trollEmail}]`,
    `J <${trollEmail}>`,
  ];

  const numMessages = 1 + Math.floor(Math.random() * 4);
  const messages = generateMessages(topic, numMessages, name || "John D.");

  return {
    style: randomChoice(ALL_STYLES),
    subject: randomChoice(SUBJECTS),
    date: randomDate(),
    device: randomChoice(DEVICES),
    messages,
    trollAlias: randomChoice(trollAliases),
    trollEmail,
    name: name || "John D.",
    email: email || "john.d@email.com",
  };
}

export function generateBatch(name, email, topic, count) {
  const topics = ["island", "geopolitics", "science", "coconuts", "deals", "extortion", "french", "davos", "aquarium", "entremetteur", "blackmail", "generic"];
  const convos = [];

  for (let i = 0; i < count; i++) {
    const t = topic === "random" ? randomChoice(topics) : topic;
    convos.push(generateConversation(name, email, t));
  }

  return convos;
}

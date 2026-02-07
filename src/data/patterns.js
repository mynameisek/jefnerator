import { VIP_NAMES } from './vips';
import { LOCATIONS, COMPANIES_CAUTION } from './locations';
import { randomChoice, randomVIPs, vipRef } from '../engine/utils';

function loc() { return randomChoice(LOCATIONS.cities); }
function island() { return randomChoice(LOCATIONS.islands); }
function coded() { return randomChoice(LOCATIONS.coded); }

export const MESSAGE_PATTERNS = {
  // === ISLAND / TRAVEL INVITATIONS ===
  island_invite: () => {
    const vips = randomVIPs(2);
    const d1 = 5 + Math.floor(Math.random() * 20);
    const d2 = d1 + 3 + Math.floor(Math.random() * 7);
    return randomChoice([
      `come to ${island()} with us ${d1}-${d2}. we will chill with ${vipRef(vips[0])}, ${vipRef(vips[1])} and some young coconuts :)`,
      `heading to ${island()} next week. ${vipRef(vips[0])} confirmed. you should come. the girls will be there.`,
      `${island()} is ready. ${d1}-${d2} works? ${vipRef(vips[0])} is bringing friends. should be fun.`,
      `ill be at ${island()} again ${d1}-${d2}. then ${loc().toLowerCase()}. so if you want to come...`,
      `we have ${island()} booked ${d1}-${d2}. ${vipRef(vips[0])} and ${vipRef(vips[1])} are in. young crowd. you?`,
      `back from ${island()}. incredible time with ${vipRef(vips[0])}. you missed out. next time bring the coconuts.`,
      `the boat is leaving ${loc()} on the ${d1}th. ${vipRef(vips[0])} and I will be on board. join us? casual. young crowd.`,
      `${vipRef(vips[0])} wants to do ${island()} again before summer. he's bringing ${vipRef(vips[1])} and a few interesting people.`,
      `just got back from ${island()}. absolutely incredible. ${vipRef(vips[0])} was there. we talked about you.`,
    ]);
  },

  // === GEOPOLITICAL / POWER BROKER ===
  geopolitical: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `${vipRef(vip)} is going to announce a reshuffle of the government soon.`,
      `sources tell me 500 b euro bailout, almost complete`,
      `i think ${randomChoice(["qatar", "saudi", "the emirates", "israel", "turkey"])} should stop arguing. let the heat come down a bit. it will never be the same again.`,
      `the current team is very weak. FM is not experienced and it shows.`,
      `${randomChoice(["davos", "the trilateral", "bilderberg", "the council"])} can really replace the UN. cyber, crypto, genetics... intl coordination.`,
      `we need a new global architecture. ${randomChoice(["Davos", "The Forum", "The Foundation"])} is uniquely positioned - public private.`,
      `just finished a dinner with the heads of major insurance cos in ${loc()} to prepare future investments.`,
      `i should see ${vipRef(vip)} in coming weeks. i have lunch tom with ${vipRef(randomChoice(VIP_NAMES))}, then ${loc()}`,
      `if the people would allow your country to recognize ${randomChoice(["israel", "taiwan", "kosovo", "palestine"])} , could be interesting to discuss.`,
      `the smell of terrorism financing will be around for years.`,
      `global architects first`,
      `exactly - we need a new global architecture. ${randomChoice(["Davos", "WEF", "CFR"])} is uniquely positioned.`,
      `like my stint at the trilateral. issues now need to deal with distributed trust and internet fallout.`,
      `I think early next year they will attack the world cup venue.`,
      `the Indian PM took advice and danced and sang for the benefit of the US president. they had met a few weeks ago. IT WORKED.`,
      `we are against terrorism we have always been, and to illustrate it we are setting up a victim fund`,
      `we call on the other members to match our funding, not with pledges but with cash. :)/`,
      `Really impressive. Brilliant guy. — re: the meeting I arranged between ${vipRef(vip)} and ${vipRef(randomChoice(VIP_NAMES))}`,
      `${vipRef(vip)} has spent time with the Chinese president. I can arrange similar meetings.`,
      `Don't deal with the Chinese dissident. He's connected to dangerous networks.`,
      `${vipRef(vip)} will be on the island for the entire next week. He awards the Nobel Peace Prize.`,
    ]);
  },

  // === YOUNG COCONUTS / CODED LANGUAGE ===
  coded_language: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `I ordered sweet young coconuts from Thailand for you and they just arrived. Very yummy.`,
      `I was going to ship them to you in ${loc()} but I hear you are coming back so I will send them to ${coded()} with Sarah.`,
      `...just so you don't have to drink juices from old hairy things`,
      `the massage therapist from ${randomChoice(["sweden", "russia", "brazil", "thailand"])} is incredible. you should try.`,
      `philippe will send you the information in the next 2 days.`,
      `my parents are going with the girls to ${loc()} between the 25th and the 3rd.`,
      `she is working seriously! she hopes to be able to transfer next year!`,
      `the special project is coming along nicely. ${vipRef(vip)} is very pleased.`,
      `2 biscuits for breakfast`,
      `10 young coconuts for the weekend. fresh from the source.`,
      `the new ones from ${randomChoice(["eastern europe", "scandinavia", "south america", "southeast asia"])} arrived yesterday. very fresh.`,
      `nadia says the coconuts from last time were perfect. ordering more.`,
      `old hairy coconuts`,
      `just so you don't have to drink juices from old hairy things`,
      `${vipRef(vip)} loved the Thai coconuts. wants more for the weekend.`,
      `I ordered sweet young coconuts from Thailand for you. Very yummy. I was going to ship them to ${loc()} but I hear you're coming back, so I'll send them to ${coded()} with Sarah.`,
      `…just so you don't have to drink juices from old hairy things.`,
      `the coconuts from ${randomChoice(["Thailand", "Brazil", "Eastern Europe"])} — very fresh. Not a single old hairy one.`,
      `${vipRef(vip)} loved the young coconuts. Wants double the order for ${island()}.`,
    ]);
  },

  // === MEETING COORDINATION ===
  meeting_coord: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `is ${vipRef(vip)} in town?`,
      `met him on monday and he left yesterday. don't know exactly when he is back but told me he is out for 10 days.`,
      `are you going to be in ${loc()} on thursday?`,
      `they will call you tomorrow night after 7 and give you venue for thurs`,
      `hooe to see you during your stay ;)`,
      `for unclear reasons I still don't have a hint about the venue and hour for the meeting on Thursday.`,
      `in 15 hrs I'll take off towards Europe. And early afternoon to ${loc()}.`,
      `can we set up a call for later this week?`,
      `just leaving ${coded()}.. will call`,
      `are you home`,
      `tomorrow early?`,
      `${vipRef(vip)} would like to know when you believe you will be in town to organize a meeting.`,
      `he is asking whether you would be interested or not to meet ${vipRef(randomChoice(VIP_NAMES))}?`,
      `yes to ${vipRef(vip)}`,
      `my father is in ${loc()} for the next 2 days. i will ask him when he will be back`,
      `and ${vipRef(vip)}?`,
    ]);
  },

  // === SPY / MOSSAD HUMOR ===
  spy_humor: () => {
    return randomChoice([
      `unfortunately, not. you should make clear that i dont work for mossad. :)`,
      `You or I?`,
      `that I dont :)`,
      `as you probably know I represent the ${randomChoice(["Rothschilds", "foundation", "council", "committee", "family"])}.`,
      `you should make clear that I dont work for ${randomChoice(["mossad", "the cia", "mi6", "dgse", "fsb"])}. :)`,
      `I was hoping mgmt can do something in tech. best client list in the world.`,
      `if you would like to meet in ${randomChoice(["saudi", "dubai", "doha", "abu dhabi"])} at the end of month?`,
      `tell me exactly what you would like from ${randomChoice(["starbucks", "the palace", "the ministry", "the agency", "langley"])} and I can try to make it happen.`,
      `as you probably know I represent the Rothschilds. I was hoping mgmt can do something in tech. best client list in the world.`,
      `the intelligence on this is solid. my sources in ${randomChoice(["tel aviv", "london", "langley", "paris"])} confirm.`,
    ]);
  },

  // === FINANCIAL / DEALS ===
  financial: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `i have asked philippe for bank details for friends of ${vipRef(vip)} project.`,
      `have we been able to put ${vipRef(vip)} in touch with govt directly?`,
      `maybe consider putting 1 billion into a fund to benefit the victims.`,
      `our first gift will be to pay for the electric for ${randomChoice(["gaza", "the camp", "the village", "the school"])}.`,
      `${randomChoice(["The deal", "Sd", "It"])} be announced tonight`,
      `sources tell me 500 b ${randomChoice(["euro", "dollar", "yen"])} ${randomChoice(["bailout", "deal", "merger", "fund"])}, almost complete`,
      `just finished a dinner with the heads of major ${randomChoice(["insurance", "banking", "tech", "energy"])} cos to prepare (hopefully) future investments in state real estate.`,
      `when next ${loc().toLowerCase()}?`,
      `i have lunch tomorrow with ${vipRef(vip)}, then ${randomChoice(["Geneva", "Zurich", "London"])}`,
      `${vipRef(vip)} early is great`,
      `Sorry. Just finished a dinner with the heads of major insurance cos in France to prepare future investments.`,
      `I should see ${vipRef(vip)} in coming weeks`,
      `The real opportunity is turning pandemics into profit machines. Years before anyone else sees it.`,
      `${vipRef(vip)} at ${randomChoice(COMPANIES_CAUTION)} resigned after the exchanges were published.`,
      `Poor judgement. That's all he said. Poor judgement.`,
    ]);
  },

  // === EDUCATION / SCIENCE (the uncomfortable kind) ===
  education: () => {
    const vip = randomChoice(VIP_NAMES.filter(v => v.tag === "academic"));
    return randomChoice([
      `thanks i will review this week and revert to you. 1. Should the child be introduced to religion. new sexualities. tested? how often. standardized tests. sample projects. etc.`,
      `can we set up a call for later this week? the curriculum needs work.`,
      `the science program is progressing. ${vipRef(vip || randomChoice(VIP_NAMES))} is very interested.`,
      `please find attached the document from ${vipRef(vip || randomChoice(VIP_NAMES))}.`,
      `i need 2 young researchers for the ${randomChoice(["AI lab", "genetics program", "neuroscience dept", "linguistics project"])}. any suggestions?`,
      `the lecture at ${randomChoice(["MIT", "Harvard", "Stanford", "Oxford", "the Sorbonne"])} went very well. good crowd.`,
      `Re: Petit Prince — the education framework is almost ready. ${vipRef(randomChoice(VIP_NAMES))} reviewed it.`,
      `the ${randomChoice(["fellowship", "scholarship", "research grant", "stipend"])} for the ${randomChoice(["young woman", "student", "researcher", "intern"])} from ${randomChoice(["eastern europe", "scandinavia", "france", "brazil"])} is approved.`,
      `Re: L'Éducation d'un Petit Prince pour tous nos enfants — the framework on educating future kings is almost ready.`,
      `${vipRef(vip || randomChoice(VIP_NAMES))} sent photos of a property in Marrakech. 5.4 million euros, offshore.`,
      `The ministers of the elite. — caption on a photo at the Louvre`,
    ]);
  },

  // === CRYPTIC / SHORT ===
  cryptic: () => {
    return randomChoice([
      `good luck`, `yes. interesting to discuss.`, `agreed.`, `ny?`, `ok`, `done.`,
      `\u{1F44D}\u{1F92A}\u26A1\u{1F6EB}`, `likewise.`, `SOMETHING positive.`, `noted. will handle.`,
      `I understand the delay response from uncle.`, `confirmed.`,
      `tomorrow early?`, `global architects first`, `yes to dsk`,
      `interesting`, `will revert`, `noted`, `let me check`,
      `Macron is going to announce a reshuffle of the government soon`,
    ]);
  },

  // === DISTURBING (adapted for satire) ===
  disturbing_adapted: () => {
    return randomChoice([
      `do you remember the name of the ${randomChoice(["dentist", "tailor", "barber", "sommelier", "astrologer"])} that you used to send your ${randomChoice(["interns", "assistants", "coconuts", "turtles", "accountants"])} to?`,
      `Yes, many years ago you used to send them to a ${randomChoice(["vet", "mechanic", "florist", "chiropractor"])} in NY who once commented something to the effect that you were keeping him in business singlehandedly.`,
      `the ${randomChoice(["masseuse", "yoga instructor", "personal chef", "life coach", "astrologer"])} from ${randomChoice(["Sweden", "Brazil", "Thailand", "Russia", "Ukraine"])} is arriving tuesday.`,
      `ny?`,
      `Yes, many years ago you used to send them to a gyno in NY who once commented you were keeping him in business singlehandedly.`,
    ]);
  },

  // === EXTORTION / BLACKMAIL PARODY ===
  extortion_parody: () => {
    return randomChoice([
      `This is sensitive, so it will be the first and last email depending on your discretion.`,
      `Please arrange for 1 ${randomChoice(["bitcoin", "NFT", "vintage wine", "rare pokemon card", "bored ape"])} by 6pm EDT today.`,
      `The USB will be sent anonymously to your attention by overnight courier upon receipt of the ${randomChoice(["funds", "pizza", "coconuts", "rare stamps", "dogecoin"])}.`,
      `What is damning about Jeffrey is yet to be written. Did you know somewhere in the hills outside the Zorro, two foreign ${randomChoice(["pizzas", "coconuts", "turtles", "hamsters"])} were buried?`,
      `No attorneys. No samples. No questions please. Confirm asap.`,
      `You can choose to take it or trash it but this comes from a person that has been there and seen it all.`,
      `The material below was taken from Jeffrey's home as my insurance.`,
      `my assurance this is exclusive, never shared before. No attorneys. No questions please.`,
    ]);
  },

  // === DSK / FRENCH POLITICS ===
  french_politics: () => {
    const vip = randomChoice(VIP_NAMES.filter(v => ["politics", "culture"].includes(v.tag)));
    return randomChoice([
      `As I told you, ${vipRef(vip || randomChoice(VIP_NAMES))} is conducting a concert at IMA Saturday evening for fundraising and of course my parents will be present.`,
      `My father would like to know when you believe you will be in town to organize a meeting.`,
      `He is also asking whether you would be interested or not to meet DSK?`,
      `yes to dsk`,
      `We are back and had dinner this evening with my parents and Sebastien. We showed them the pictures we took, they loved the house.`,
      `Next week, May 1st is Labor Day in France. As it is a Thursday, a lot of companies will be closed until the next Monday.`,
      `My boyfriend just told me that he has organized a trip to visit a few cities in Spain.`,
      `My parents are going for 2 days in Marrakech, but they will be back Saturday morning the 3rd.`,
      `${vipRef(randomChoice(VIP_NAMES))} is going to announce a reshuffle of the government soon. And my father is in London for the next 2 days.`,
      `He's asking each of us to present interesting and disruptive ideas. About pretty much everything. He wants to lead Europe. Maybe the world.`,
      `I had a nice conversation with Macron regarding our business in France.`,
      `${vipRef(vip || randomChoice(VIP_NAMES))} is conducting a concert at IMA Saturday evening for fundraising.`,
      `France is going badly, huh? Very badly.`,
      `Bannon met ${vipRef(vip || randomChoice(VIP_NAMES))} in London to discuss the "refinancement" of the party.`,
      `Do you have any ideas for fundraising for ${vipRef(vip || randomChoice(VIP_NAMES))} as a future presidential candidate?`,
      `Let's meet and talk about it.`,
      `I had lunch at the Élysée and had a nice conversation about global governance.`,
    ]);
  },

  // === DAVOS / WEF ===
  davos: () => {
    return randomChoice([
      `davos can really replace the UN. cyber, crypto, genetics... intl coordination. like my stint at the trilateral.`,
      `issues now need to deal with the distributed trust and internet fallout.`,
      `Exactly - we need a new global architecture. World Economic Forum (Davos) is uniquely positioned - public private.`,
      `global architects first`,
      `the panel on ${randomChoice(["AI governance", "crypto regulation", "gene editing", "climate finance", "pandemic preparedness"])} went very well. ${vipRef(randomChoice(VIP_NAMES))} was impressive.`,
      `Hooe to see you during your stay ;)`,
      `the private dinner after the forum was incredible. ${vipRef(randomChoice(VIP_NAMES))} and ${vipRef(randomChoice(VIP_NAMES))} both want to continue the conversation.`,
      `Thx btw for a great dinner. — ${vipRef(randomChoice(VIP_NAMES))}`,
      `I'm looking forward. Sushi would be amazing. — visiting the townhouse in a few weeks.`,
      `${vipRef(randomChoice(VIP_NAMES))} is a good friend. — email to Larry Summers`,
      `He awards the Nobel Peace Prize. — re: the Norwegian diplomat`,
    ]);
  },

  // === AQUARIUM — marine/animal coded language ===
  aquarium: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `I'm on my island in the Caribbean, with an aquarium full of girls.`,
      `The King of Saudi Arabia has a few white sharks in his palace in Jeddah. I totally prefer yours.`,
      `As two are Russian, I guess we can call them white sharks…`,
      `Some are like shrimp — you throw away the head and keep the body.`,
      `I like shrimp, but not when they're too pink. I clearly prefer the white ones.`,
      `We are — once again — in agreement.`,
      `Sounds fun, but where are the cute girls?`,
      `Nowhere… boring. I really need to come see you.`,
      `${vipRef(vip)} is bringing the aquarium to ${island()}. you should come appreciate the view.`,
      `the white sharks from last time were incredible. ${vipRef(vip)} agrees.`,
    ]);
  },

  // === ENTREMETTEUR — matchmaker / recruitment ===
  entremetteur: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `my very good friend Jeffrey is in ${loc()}… maybe I've already told you about him. He needs a beautiful woman to accompany him to meet ${vipRef(vip)}.`,
      `Jeffrey is a super cool and nice guy, and a very good friend of mine. He has helped me so much and I adore him enormously!!!`,
      `I'm asking around for your future assistant, but you need to hire one who's not too pretty…`,
      `And this one is (I think) totally your girl.`,
      `Thank you for a fun night… Your littlest girl was a little naughty.`,
      `I found at least 3 very good young poor. Meet this one. Not the beauty queen but we both likes her a lot.`,
      `Intellectuals, scientists… or very very cute twenty-somethings.`,
      `I recommend ${vipRef(vip)}'s former butler — he used to serve at the Palace. Tip from Ariane.`,
    ]);
  },

  // === INTELLECTUEL CAPTIF — intellectual dependence ===
  intellectuel_captif: () => {
    const vip = randomChoice(VIP_NAMES.filter(v => v.tag === "academic"));
    return randomChoice([
      `Our friendship is deep and sincere and everlasting.`,
      `You are our best friend. I mean "the" one.`,
      `We're with you all the way.`,
      `You're constantly with us in spirit and in our thoughts.`,
      `You are of course welcome to use the apt in New York with your new leisure time, or visit New Mexico again.`,
      `Noam and I hope to see you again soon and have a toast for your birthday.`,
      `The impact of Jeffrey's limitless curiosity, extensive knowledge, penetrating insights is only heightened by his easy informality.`,
      `${vipRef(vip || randomChoice(VIP_NAMES))} quickly became a highly valued friend and regular source of intellectual exchange and stimulation.`,
    ]);
  },

  // === EMAIL DRAFT — self-addressed blackmail memos ===
  email_draft: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `[DRAFT — NOT SENT] ${vipRef(vip)} asked me to arrange meetings. I also helped procure medication to hide the situation from his wife.`,
      `[DRAFT] Note to self: ${vipRef(vip)} visited the island on [DATE]. Photos in safe.`,
      `[DRAFT — NOT SENT] Apparently, Jeffrey wrote an email to himself. That email was never sent; the email is false.`,
      `Every minute I spent with him I regret, and I apologize that I did that.`,
      `[MEMO] ${vipRef(vip)} — leverage material. Keep in personal archive.`,
      `[UNSENT] ${vipRef(vip)} wants this to go away. I told him it wouldn't be cheap.`,
    ]);
  },

  // === NORMALISATION — cultural circle & predatory finance ===
  normalisation: () => {
    const vip = randomChoice(VIP_NAMES);
    return randomChoice([
      `She's a despicable and disgusting person. (referring to the 15-year-old victim)`,
      `Dream dinner: ${vipRef(randomChoice(VIP_NAMES))}, ${vipRef(randomChoice(VIP_NAMES))}, the former president, and the Dalai Lama.`,
      `God is a construct.`,
      `${vipRef(vip)} recognized "poor judgement" in his exchanges.`,
      `The real opportunity is in turning pandemics into profit machines. The infrastructure is already there.`,
      `${vipRef(vip)} at Paul Weiss resigned after his email exchanges were published.`,
      `the treasure hunt for girls on the island was ${vipRef(vip)}'s idea.`,
      `${vipRef(vip)} visited the island and then introduced me to ${vipRef(randomChoice(VIP_NAMES))}.`,
    ]);
  },
};

// ============================================================
// TOPIC → PATTERN WEIGHTS
// ============================================================
export const TOPIC_WEIGHTS = {
  island:       ["island_invite", "coded_language", "meeting_coord", "spy_humor", "cryptic", "aquarium"],
  geopolitics:  ["geopolitical", "financial", "spy_humor", "meeting_coord", "davos", "cryptic"],
  science:      ["education", "meeting_coord", "coded_language", "financial", "cryptic", "intellectuel_captif"],
  coconuts:     ["coded_language", "island_invite", "disturbing_adapted", "meeting_coord", "cryptic", "aquarium", "entremetteur"],
  deals:        ["financial", "geopolitical", "meeting_coord", "spy_humor", "cryptic"],
  extortion:    ["extortion_parody", "cryptic", "spy_humor", "disturbing_adapted"],
  french:       ["french_politics", "meeting_coord", "financial", "coded_language", "cryptic", "entremetteur"],
  davos:        ["davos", "geopolitical", "financial", "spy_humor", "cryptic", "normalisation", "intellectuel_captif"],
  aquarium:     ["aquarium", "coded_language", "island_invite", "entremetteur", "cryptic"],
  entremetteur: ["entremetteur", "aquarium", "meeting_coord", "french_politics", "cryptic"],
  blackmail:    ["email_draft", "extortion_parody", "normalisation", "spy_humor", "cryptic"],
  generic:      Object.keys(MESSAGE_PATTERNS),
  random:       Object.keys(MESSAGE_PATTERNS),
};

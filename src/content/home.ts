// Home page copy, shared by the live page and the design concepts.
// Keep em dashes out of this file: the voice uses commas and full stops.

export const CHECKOUT_URL = 'https://briggsbookclubltd.memberful.com/checkout';
export const CHECKOUT_PLAN = '141115';

export const IMAGES = {
  manuscripts: '/WhatsApp Image 2025-11-03 at 3.08.19 PM.jpeg',
  shaykh: '/481670751_1186997073434369_6966345736034781904_n.jpg',
} as const;

export const hero = {
  eyebrow: 'A circle of sacred reading',
  title: 'Briggs’ Book Club',
  lead: 'You were never too late for this tradition.',
  body: 'Every week, Shaykh Mustafa Briggs opens a classical Islamic text and reads it, line by line, with more than 500 of us around the world. You don’t need Arabic, there’s nothing to prepare, and nobody here falls behind.',
  newLabel: 'New this term',
  // "ﷺ" is rendered separately by the pages so it can use the Arabic face.
  newBefore: 'Qurrat al-Abṣār, the life of the Prophet',
  newAfter: 'in verse, read with a commentary that has never been taught in English before.',
  cta: 'Take your seat',
  reassurance: 'Pay what you can · Cancel anytime',
  motto: 'Read. Reflect. Remember.',
};

export const chain = {
  num: '01',
  title: 'The Chain',
  paragraphs: [
    'For fourteen centuries this knowledge has travelled from heart to heart: from the Prophet {saw} to his Companions, from Madina to Kufa, from Tunis to Timbuktu. Scholars call this unbroken chain the {i:isnād}. It was never built in lecture halls. It was built in small circles, one sitting at a time, by people who kept showing up.',
    'Somewhere along the way, many of us decided that circle was for other people: the ones with Arabic, the ones who studied abroad, the ones who started young.',
    'This circle exists to prove otherwise. The classical texts are still read the way they always were, from a teacher, line by line. And there is a seat for you.',
  ],
  stations: ['Madina', 'Kufa', 'Tunis', 'Timbuktu', 'You'],
};

export const whoFor = {
  num: '02',
  title: 'Who This Circle Is For',
  intro: 'This is for you if',
  items: [
    'you’ve always meant to read the classical texts and never known where to begin',
    'you’ve started a course before and quietly dropped off when life got busy',
    'you don’t read Arabic, or you read it slowly',
    'you’d rather learn one line deeply than skim a hundred pages',
    'you want one still place in your week that belongs to your heart',
  ],
  notFor:
    'This isn’t for you if you want certificates, exams or somewhere to prove what you know. There are good places for those. This circle is for something slower.',
};

export const believe = {
  num: '03',
  title: 'What We Believe',
  pillars: [
    { word: 'Read', line: 'the text together.' },
    { word: 'Reflect', line: 'on what it asks of you.' },
    { word: 'Remember', line: 'Allah, and the people who carried this knowledge to us.' },
  ],
  isnt: ['A class with homework', 'A course with requirements', 'A place to perform'],
  is: ['A circle of sincerity', 'Love of knowledge', 'Stillness in your week'],
  quote: 'It isn’t about keeping up or catching up. It’s about showing up.',
};

export const reading = {
  num: '04',
  title: 'What We’re Reading',
  subtitle: 'Two texts, one circle.',
  beginning: {
    status: 'Beginning',
    title: 'Qurrat al-Abṣār',
    fullTitle: 'Qurrat al-Abṣār fī sīrat al-mushaffaʿ al-mukhtār',
    subtitle: 'A poem on the life of the Prophet {saw}',
    paragraphs: [
      'An {i:arjūza} like this is not a summary. It compresses the whole life of the Prophet {saw} into rhyming couplets, so the student carries the sira in memory rather than on a shelf. From there, it is ready for a khutba, a class or a majlis, and any line can be opened up at length.',
      'The poet, ʿAbd al-ʿAzīz b. ʿAbd al-Wāḥid al-Lamṭī al-Miknāsī, studied in Fes and settled in Madina. He performed the hajj more than thirty times and wrote across many fields, including an {i:Alfiyya} in grammar. He finished this poem in Madina more than five hundred years ago, and it is what carried his name across the desert. It has been memorised and taught in the {i:maḥḍara} ever since, and remains one of the standard sira texts of the West African and Saharan curriculum, alongside works like the {i:Alfiyya} of al-ʿIrāqī.',
    ],
    commentaryTitle: 'A commentary that came by hand',
    commentary: [
      'We read the poem with {i:Bughyat al-Abrār min Sharḥ Qurrat al-Abṣār}, by the late Shaykh Muḥammad al-Ḥasan b. Aḥmad al-Khadīm of Taysir, Mauritania, {i:raḥimahullāh}, who passed away in Rabīʿ al-Awwal 1448. He gave Shaykh Mustafa a copy himself, with permission to teach it and translate it.',
      'It has never been taught or published in English before. You will receive the translation in instalments as we go.',
    ],
  },
  continuing: {
    status: 'Continuing',
    title: 'Masālik al-Jinān',
    subtitle: 'The Pathways to Paradise, by Shaykh Ahmadu Bamba',
    body: 'We carry on with the poem on the path of spiritual purification, with its translation still arriving in instalments.',
  },
};

export const sitting = {
  num: '05',
  title: 'How a Sitting Works',
  lead: 'You don’t need to prepare anything. You only need to arrive.',
  body: 'Shaykh Mustafa reads the Arabic, then explains it in English, line by line. He carries the text for us, drawing on the Qur’an, the Sunnah and the living chain of {i:isnād}. Then the floor is yours, and you can ask whatever you like.',
  steps: [
    { label: 'He reads', text: 'The Arabic, aloud, as it has always been read.' },
    { label: 'He explains', text: 'In English, line by line, from the Qur’an, the Sunnah and the chain.' },
    { label: 'You ask', text: 'The floor is yours. Ask whatever you like.' },
  ],
  footnote: 'Every sitting is recorded and kept in the replay library.',
};

export const guide = {
  num: '06',
  title: 'The One Who Opens the Book',
  name: 'Shaykh Mustafa Briggs',
  paragraphs: [
    'Mustafa has taught at more than 50 universities, including Oxford, Cambridge, Harvard and Yale, and wrote the Amazon bestseller {i:Beyond Bilal: Black History in Islam}. He studied at SOAS and al-Azhar and holds classical {i:ijazat} from Shariff Ibrahim Ibn Saleh al-Hussaini.',
    'Through those {i:ijazat}, the texts reach you the way they always have, from teacher to student. Every week, he sits down to read with us.',
  ],
  credentials: ['50+ universities', 'Beyond Bilal', 'SOAS · al-Azhar', 'Classical ijazat'],
};

export const company = {
  num: '07',
  title: 'The Company You Keep',
  lead: 'The Prophet {saw} taught through {i:suhbah}, companionship. The book is why we gather. Each other is why we stay.',
  stats: [
    { value: '500+', label: 'readers worldwide' },
    { value: 'Live', label: 'all recorded' },
    { value: 'WhatsApp', label: 'member circle' },
  ],
  closing: 'People like us read the classics slowly, together, and keep coming back.',
};

export const hadiyah = {
  num: '08',
  title: 'The Hadiyah',
  intro:
    'In the West African tradition, knowledge was never sold. The teacher taught freely, and the student gave what they could out of gratitude. That gift is called a {i:hadiyah}.',
  arabic: 'لَا تُرَدّ وَلَا تُعَدّ وَلَا تُحَدّ',
  translation: 'It is not rejected, not counted, and not limited.',
  body: 'The hadiyah isn’t a price. It is the oldest way of honouring knowledge. One monthly gift of any amount opens everything, both texts included.',
  formLabel: 'Your monthly hadiyah',
  amounts: [
    { value: '5', label: '£5' },
    { value: '10', label: '£10', badge: 'Popular' },
    { value: '25', label: '£25' },
  ],
  customLabel: 'or enter your own amount',
  cta: 'Take your seat',
  small: 'Takes about 60 seconds · Cancel anytime in two taps',
  secure: 'Secure checkout via Memberful. The redirect after payment can take up to a minute.',
  includesTitle: 'Your seat includes',
  includes: [
    'Every live sitting with Shaykh Mustafa, plus every replay',
    'The English translation of both texts, in instalments as we read',
    'The private WhatsApp community',
    'Reading guides for the texts we are reading together',
  ],
};

export const faq = {
  title: 'Questions, Answered',
  items: [
    {
      q: 'When are the sittings?',
      a: 'We gather weekly on Sundays, live online. Every sitting is recorded, so you can catch up whenever you need to.',
    },
    {
      q: 'What if I can only give a little?',
      a: 'Then give a little. A £2 hadiyah is received with the same gratitude as £50. What matters is that you are in the room.',
    },
    {
      q: 'Do I need Arabic or previous study?',
      a: 'No. Shaykh Mustafa reads the Arabic and explains it in English, line by line. You come as you are, sit, listen and ask. There is no homework and nothing to keep up with.',
    },
    {
      q: 'What do I get access to?',
      a: 'Everything. Every live sitting, the full replay library, the English translation of both texts as it arrives, the reading guides and the private WhatsApp community. One monthly hadiyah covers it all.',
    },
    {
      q: 'How do I cancel?',
      a: 'Anytime, in a couple of taps, from your Memberful account. No questions asked, and you are always welcome back.',
    },
  ],
  closing: 'Whoever gives shares in the reward of all who benefit. Every contribution sustains the circle.',
};

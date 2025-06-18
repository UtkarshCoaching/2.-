const questions = [
  {
    "question": "একটি ডুয়াল লেয়ার Blue-ray ডিস্ক সর্বোচ্চ কত পরিমাণ ডেটা সঞ্চয় করে রাখতে পারে?",
    "options": ["20 GB", "30 GB", "40 GB", "50 GB"],
    "answer": "50 GB",
    "explanation": "একটি সিঙ্গেল লেয়ার ব্লু-রে ডিস্ক 25 GB ডেটা ধারণ করতে পারে, আর একটি ডুয়াল লেয়ার ব্লু-রে ডিস্ক এর দ্বিগুণ, অর্থাৎ 50 GB ডেটা সঞ্চয় করে রাখতে পারে।"
  },
  {
    "question": "নিম্নলিখিতদের মধ্যে কোনটি গ্রাফিক অ্যাপ্লিকেশনের ক্ষেত্রে সবথেকে বেশি পরিমাণে ব্যবহৃত হয়?",
    "options": ["গ্রাফিক ট্যাবলেট", "জয়স্টিক", "লাইট পেন", "মাউস"],
    "answer": "গ্রাফিক ট্যাবলেট",
    "explanation": "গ্রাফিক ট্যাবলেট গ্রাফিক ডিজাইনিং, ডিজিটাল আর্ট এবং অন্যান্য গ্রাফিক অ্যাপ্লিকেশনগুলির জন্য অত্যন্ত উপযোগী, কারণ এটি হাতে আঁকার মতো নির্ভুলতা প্রদান করে।"
  },
  {
    "question": "মডেম (Modem) ব্যবহার করা হয়-",
    "options": ["অ্যানালগ সিগন্যালকে ডিজিটাল সিগন্যালে পরিবর্তিত করার জন্য", "ডিজিটাল সিগন্যালকে অ্যানালগ সিগন্যালে পরিবর্তিত করার জন্য", "উভয় কাজের জন্য", "কোনোটিই নয়"],
    "answer": "উভয় কাজের জন্য",
    "explanation": "মডেম (Modulator-Demodulator) অ্যানালগ সিগন্যালকে ডিজিটাল সিগন্যালে (ডেমড্যুলেশন) এবং ডিজিটাল সিগন্যালকে অ্যানালগ সিগন্যালে (মড্যুলেশন) রূপান্তরিত করে, যা ডেটা ট্রান্সফারের জন্য জরুরি।"
  },
  {
    "question": "Laser printer-এ কি ধরনের Laser ব্যবহার করা হয়?",
    "options": ["ডাইলেসার", "গ্যাস লেসার", "সেমিকন্ডাকটর লেসার", "এক্সিমার লেসার"],
    "answer": "সেমিকন্ডাকটর লেসার",
    "explanation": "লেজার প্রিন্টারে সেমিকন্ডাক্টর লেজার ব্যবহার করা হয়, যা প্রিন্টিং প্রক্রিয়ায় লেজার রশ্মি তৈরি করে।"
  },
  {
    "question": "Laser printer কার উদাহরণ?",
    "options": ["লাইন প্রিন্টার", "ডট-ম্যাট্রিক্স প্রিন্টার", "পেজ প্রিন্টার", "কোনোটিই নয়"],
    "answer": "পেজ প্রিন্টার",
    "explanation": "লেজার প্রিন্টার একটি পেজ প্রিন্টারের উদাহরণ, কারণ এটি একবারে পুরো পৃষ্ঠা প্রিন্ট করতে পারে।"
  },
  {
    "question": "কম্পিউটারে কোন স্টোরেজ মাধ্যমটিকে সাধারণত পরিবর্তিত করা যায় না?",
    "options": ["ROM", "RAM", "হার্ডডিস্ক", "ফ্ল্যাশ ড্রাইভ"],
    "answer": "ROM",
    "explanation": "ROM (Read-Only Memory) হল এক ধরনের স্টোরেজ যা একবার লেখা হলে তার ডেটা সাধারণত পরিবর্তিত বা মোছা যায় না।"
  },
  {
    "question": "নিম্নলিখিতদের মধ্যে কোনটি একটি আউটপুট ডিভাইস নয়?",
    "options": ["জয়স্টিক", "হেডফোন", "প্লটার", "প্রোজেক্টর"],
    "answer": "জয়স্টিক",
    "explanation": "জয়স্টিক একটি ইনপুট ডিভাইস যা গেম খেলার জন্য বা কার্সর নিয়ন্ত্রণের জন্য ব্যবহৃত হয়। হেডফোন, প্লটার এবং প্রোজেক্টর আউটপুট ডিভাইস।"
  },
  {
    "question": "কম্পিউটারের প্রসেসর নিম্নলিখিত অংশগুলি নিয়ে গঠিত।",
    "options": ["CPU ও মেইন মেমোরি", "হার্ড ডিস্ক ও ফ্লপি ড্রাইভ", "মেইন মেমোরি ও স্টোরেজ", "কন্ট্রোল ইউনিট ও ALU"],
    "answer": "কন্ট্রোল ইউনিট ও ALU",
    "explanation": "কম্পিউটারের প্রসেসর (CPU) মূলত কন্ট্রোল ইউনিট (CU) এবং অ্যারিথমেটিক লজিক ইউনিট (ALU) নিয়ে গঠিত।"
  },
  {
    "question": "মেইন মেমোরি ______ এর সাথে সমন্বয় রেখে কাজ করে।",
    "options": ["RAM", "CPU", "ফাংশন কার্ড", "সিস্টেম বোর্ড"],
    "answer": "CPU",
    "explanation": "মেইন মেমোরি (RAM) সরাসরি CPU-এর সাথে সমন্বয় করে কাজ করে, কারণ CPU দ্রুত ডেটা অ্যাক্সেস এবং প্রক্রিয়াকরণের জন্য RAM ব্যবহার করে।"
  },
  {
    "question": "সমস্ত লজিক্যাল ও ম্যাথমেটিকাল ক্যালকুলেশন কম্পিউটারে _______ দ্বারা সম্পন্ন হয়।",
    "options": ["মনিটর", "ALU", "Intel", "মাদারবোর্ড"],
    "answer": "ALU",
    "explanation": "ALU (Arithmetic Logic Unit) হল CPU-এর একটি অংশ যা সমস্ত গাণিতিক (যোগ, বিয়োগ ইত্যাদি) এবং যৌক্তিক (তুলনা করা) অপারেশন সম্পন্ন করে।"
  },
  {
    "question": "দুটি আউটপুট ডিভাইস হল-",
    "options": ["মনিটর ও প্রিন্টার", "ফ্লপি ডিস্ক ও CD", "কিবোর্ড ও মাউস", "কোনোটাই নয়"],
    "answer": "মনিটর ও প্রিন্টার",
    "explanation": "মনিটর ভিজ্যুয়াল আউটপুট প্রদর্শন করে এবং প্রিন্টার হার্ড কপি আউটপুট তৈরি করে, উভয়ই আউটপুট ডিভাইস।"
  },
  {
    "question": "বহুল ব্যবহৃত ইনপুট ডিভাইসগুলি হল",
    "options": ["মাইক্রোফোন ও প্রিন্টার", "স্ক্যানার ও মনিটর", "ডিজিটাল ক্যামেরা ও স্পিকার", "কিবোর্ড ও মাউস"],
    "answer": "কিবোর্ড ও মাউস",
    "explanation": "কিবোর্ড এবং মাউস হল দুটি সবচেয়ে সাধারণ ইনপুট ডিভাইস যা কম্পিউটারে ডেটা এবং নির্দেশাবলী প্রবেশ করানোর জন্য ব্যবহৃত হয়।"
  },
  {
    "question": "নিম্নলিখিতদের মধ্যে কোনটি একটি ইনপুট ডিভাইস নয়?",
    "options": ["কিবোর্ড", "মনিটর", "জয়স্টিক", "মাইক্রোফোন"],
    "answer": "মনিটর",
    "explanation": "মনিটর একটি আউটপুট ডিভাইস যা ডেটা প্রদর্শন করে। কিবোর্ড, জয়স্টিক এবং মাইক্রোফোন ইনপুট ডিভাইস।"
  },
  {
    "question": "কম্পিউটারে কিবোর্ডের কাজ কি?",
    "options": ["প্রিন্ট করা", "ইনপুট", "টাইপ করা", "ইনপুট ও আউটপুটের মাঝামাঝি কাজ"],
    "answer": "ইনপুট",
    "explanation": "কিবোর্ডের প্রধান কাজ হলো টেক্সট, সংখ্যা এবং কমান্ড আকারে কম্পিউটারে ডেটা ইনপুট করা।"
  },
  {
    "question": "নিম্নলিখিতদের মধ্যে কোনটি একটি আউটপুট ডিভাইস?",
    "options": ["প্রিন্টার", "মনিটর", "মাউস", "a ও b উভয়েই"],
    "answer": "a ও b উভয়েই",
    "explanation": "প্রিন্টার এবং মনিটর উভয়ই আউটপুট ডিভাইস। প্রিন্টার ডেটার হার্ড কপি দেয়, এবং মনিটর ভিজ্যুয়াল ডেটা প্রদর্শন করে।"
  },
  {
    "question": "নাম্বার প্যাড-কে যদি ডিরেকশনাল অ্যারো-র মতো ব্যবহার করতে হয়, তাহলে press করতে হবে-",
    "options": ["Num Lock", "Caps Lock", "Arrow Lock", "Shift"],
    "answer": "Num Lock",
    "explanation": "নাম্বার প্যাডকে ডিরেকশনাল অ্যারো বা নেভিগেশনাল কী হিসাবে ব্যবহার করতে হলে Num Lock কী টি অন বা অফ করতে হয়।"
  },
  {
    "question": "Ctrl, Alt ও Shift-কে বলা হয় _______ Keys",
    "options": ["মডিফায়ার", "আলফানিউমেরিক", "ফাংশন", "অ্যাডজাস্টমেন্ট"],
    "answer": "মডিফায়ার",
    "explanation": "Ctrl, Alt এবং Shift কীগুলি মডিফায়ার কী হিসাবে পরিচিত কারণ এগুলি অন্য কীগুলির সাথে একত্রিত হয়ে বিশেষ কাজ সম্পাদন করে।"
  },
  {
    "question": "বিভিন্ন জিনিসে যে লাইনের প্যাটার্ন ছাপানো থাকে, তাকে বলা হয়-",
    "options": ["মূল্য", "OCR", "স্ক্যানার", "বার কোড"],
    "answer": "বার কোড",
    "explanation": "বিভিন্ন পণ্যে ছাপানো লাইনের প্যাটার্নকে বার কোড বলা হয়, যা পণ্যের তথ্য ডিজিটাল ফরম্যাটে সংরক্ষণ করে।"
  },
  {
    "question": "একটি স্ক্যানার স্ক্যান করে-",
    "options": ["ছবি", "টেক্সট", "ছবি ও টেক্সট উভয়েই", "কোনোটাই নয়"],
    "answer": "ছবি ও টেক্সট উভয়েই",
    "explanation": "একটি স্ক্যানার ছবি এবং টেক্সট উভয়কেই ডিজিটাল ফরম্যাটে রূপান্তর করতে পারে।"
  },
  {
    "question": "MICR-এ C বোঝায়-",
    "options": ["Code", "Colour", "Computer", "Character"],
    "answer": "Character",
    "explanation": "MICR-এর পুরো কথা হল Magnetic Ink Character Recognition, যেখানে C দ্বারা Character বোঝানো হয়। এটি ব্যাংকিং শিল্পে চেক প্রক্রিয়াকরণে ব্যবহৃত হয়।"
  },
  {
    "question": "কম্পিউটারে যে কাজটি করা হচ্ছে, সেটি দেখায় কোন অংশে?",
    "options": ["RAM", "প্রিন্টার", "মনিটর", "ROM"],
    "answer": "মনিটর",
    "explanation": "কম্পিউটারে বর্তমানে যে কাজটি চলছে, তা মনিটরের পর্দায় দৃশ্যমান হয়।"
  },
  {
    "question": "দুটি শব্দের মাঝে ফাঁকা স্থান রাখতে গেলে, আমাদের যে Key ব্যবহার করতে হয়, তা হল-",
    "options": ["ব্যাক স্পেস", "সিফট", "Esc Cape", "স্পেস বার"],
    "answer": "স্পেস বার",
    "explanation": "দুটি শব্দের মাঝে ফাঁকা স্থান তৈরি করতে স্পেস বার কী ব্যবহার করা হয়।"
  },
  {
    "question": "মাউসের সাহায্যে কোনো আইটেমকে এক জায়গা থেকে আর এক জায়গায় নিয়ে যাওয়ার প্রক্রিয়াকে আমরা কি বলি?",
    "options": ["ক্লিক", "ডাবল ক্লিক", "ড্র্যাগ এন্ড ড্রপ", "পয়েন্ট"],
    "answer": "ড্র্যাগ এন্ড ড্রপ",
    "explanation": "মাউসের সাহায্যে কোনো আইটেমকে এক জায়গা থেকে অন্য জায়গায় সরানোর প্রক্রিয়াকে 'ড্র্যাগ এন্ড ড্রপ' বলা হয়।"
  },
  {
    "question": "OCR-র পুরো কথা হল-",
    "options": ["Optical Character Recognition", "Optical CPU Recognition", "Optical Character Rendering", "Other Character Restoration"],
    "answer": "Optical Character Recognition",
    "explanation": "OCR এর পুরো কথা হলো Optical Character Recognition, যা স্ক্যান করা ডকুমেন্ট থেকে টেক্সট চেনার জন্য ব্যবহৃত হয়।"
  },
  {
    "question": "কোন কাজ করা হচ্ছে, তার ভিত্তিতে _______ বদলে যায়।",
    "options": ["অ্যাকটিভ ট্যাব", "মাউস পয়েন্টার", "রিবন", "কোনোটাই নয়"],
    "answer": "মাউস পয়েন্টার",
    "explanation": "কম্পিউটারে যে ধরনের কাজ করা হচ্ছে (যেমন টেক্সট লেখা, ছবি এডিট করা বা লিংক ক্লিক করা), তার উপর ভিত্তি করে মাউস পয়েন্টারের আকার পরিবর্তিত হয়।"
  },
  {
    "question": "কম্পিউটারের মস্তিষ্ক হল একটি মাইক্রোপ্রসেসর এবং এর অপর নাম হল-",
    "options": ["মাইক্রোচিপ", "ম্যাঙ্গোচিপ", "ম্যাক্সোপ্রসেসর", "ক্যালকুলেটর"],
    "answer": "মাইক্রোচিপ",
    "explanation": "কম্পিউটারের মস্তিষ্ক অর্থাৎ মাইক্রোপ্রসেসরকে প্রায়শই মাইক্রোচিপও বলা হয়, কারণ এটি একটি ছোট চিপের মধ্যে তৈরি হয়।"
  },
  {
    "question": "CD-র সাহায্যে আমরা কি করতে পারি?",
    "options": ["পড়তে", "লিখতে", "পড়তে ও লিখতে", "কোনোটাই নয়"],
    "answer": "পড়তে ও লিখতে",
    "explanation": "CD (Compact Disc) এর সাহায্যে আমরা ডেটা পড়তে ও লিখতে (যদি CD-RW হয়) পারি।"
  },
  {
    "question": "একটি CD-ROM ডিস্ক-",
    "options": ["মুছে আবার লেখা যায় না", "ফ্লপি ডিস্ক-র থেকে কম তথ্য রাখতে পারে", "একবারই লেখা যায়", "কোনোটাই না"],
    "answer": "একবারই লেখা যায়",
    "explanation": "CD-ROM (Compact Disc Read-Only Memory) ডিস্কে ডেটা একবারই লেখা যায় এবং সেটি শুধুমাত্র পড়া যায়, মুছে বা আবার লেখা যায় না।"
  },
  {
    "question": "_______ প্রক্রিয়ার মাধ্যমে কোনো ডিস্ককে ট্রাক ও সেক্টরে বিভক্ত করা যায়।",
    "options": ["ট্রাকিং", "ফরম্যাটিং", "ক্রাশিং", "অ্যালটিং"],
    "answer": "ফরম্যাটিং",
    "explanation": "ফরম্যাটিং প্রক্রিয়ার মাধ্যমে একটি ডিস্ককে ট্র্যাকে এবং সেক্টরে বিভক্ত করা হয়, যা ডেটা সংরক্ষণের জন্য প্রস্তুত করে।"
  },
  {
    "question": "এমন একটি যন্ত্র, যা কম্পিউটারকে প্রয়োজনে বিদ্যুৎ সরবরাহ করে, ভোল্টেজ নিয়ন্ত্রণ করে, তা হল-",
    "options": ["PSU", "USP", "UPPS", "UPS"],
    "answer": "UPS",
    "explanation": "UPS (Uninterruptible Power Supply) এমন একটি যন্ত্র যা বিদ্যুৎ সরবরাহ বন্ধ হয়ে গেলে কম্পিউটারকে সাময়িকভাবে বিদ্যুৎ সরবরাহ করে এবং ভোল্টেজ নিয়ন্ত্রণ করে।"
  },
  {
    "question": "নিম্নলিখিত কোনটি হার্ডওয়্যার-র উদাহরণ নয়?",
    "options": ["MP3 ফাইল", "কিবোর্ড", "মনিটর", "মাউস"],
    "answer": "MP3 ফাইল",
    "explanation": "MP3 ফাইল একটি সফটওয়্যার বা ডিজিটাল ডেটা ফরম্যাটের উদাহরণ, যেখানে কিবোর্ড, মনিটর এবং মাউস হলো হার্ডওয়্যার।"
  },
  {
    "question": "সাধারণত কোন সাইজের ফ্লপি ডিস্ক ব্যবহার করা হয়?",
    "options": ["3.5", "5", "4", "3"],
    "answer": "3.5",
    "explanation": "সাধারণত 3.5 ইঞ্চি ফ্লপি ডিস্ক সবচেয়ে বেশি ব্যবহৃত হতো, যদিও এখন এগুলি প্রায় অপ্রচলিত।"
  }
]


const questionNumberElement = document.querySelector('.question-number');
const questionTextElement = document.querySelector('.question-text');
const optionsAreaElement = document.querySelector('.options-area');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const submitButton = document.querySelector('.submit-button');
const clearResponseButton = document.querySelector('.clear-response-button');
const markForReviewButton = document.querySelector('.mark-for-review-button');
const resultAreaElement = document.querySelector('.result-area');
const scoreElement = document.getElementById('score');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const unattemptedCountElement = document.getElementById('unattempted-count');
const timeElement = document.getElementById('time');
const reviewContainer = document.getElementById('review-questions');
const questionGridContainer = document.querySelector('.question-grid');

// নতুন ফিল্টার বাটন
const showAllButton = document.getElementById('show-all');
const showCorrectButton = document.getElementById('show-correct');
const showWrongButton = document.getElementById('show-wrong');
const showUnattemptedButton = document.getElementById('show-unattempted');

// Introduction Screen Elements
const introductionScreen = document.querySelector('.introduction-screen');
const startTestButton = document.getElementById('start-test-button');
const testContent = document.querySelector('.test-content');


let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let markedForReview = new Array(questions.length).fill(false);
let timeLeft = 32 * 60; // 30 minutes in seconds
let timerInterval;
let totalScore = 0;
let questionStatus = new Array(questions.length).fill(null); // 'correct', 'wrong', 'unattempted'

// একটি অ্যারে শাফেল করার জন্য ইউটিলিটি ফাংশন (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  timeElement.textContent = formatTime(timeLeft);
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showResult();
  } else {
    timeLeft--;
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumberElement.textContent = `প্রশ্ন ${currentQuestionIndex + 1}`;

  questionTextElement.textContent = currentQuestion.question || '';

  const imageElement = document.getElementById('question-image');
  if (currentQuestion.image) {
    imageElement.src = currentQuestion.image;
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }

  const shuffledOptions = [...currentQuestion.options];
  shuffleArray(shuffledOptions); // অপশনগুলো শাফেল করুন

  optionsAreaElement.innerHTML = '';
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.textContent = option;
    button.addEventListener('click', (event) => selectAnswer(event, option));
    optionsAreaElement.appendChild(button);

    if (userAnswers[currentQuestionIndex] === option) {
      button.classList.add('selected');
    }
  });

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === questions.length - 1;

  if (markedForReview[currentQuestionIndex]) {
    markForReviewButton.classList.add('marked');
    markForReviewButton.textContent = 'পর্যালোচনা থেকে সরান';
  } else {
    markForReviewButton.classList.remove('marked');
    markForReviewButton.textContent = 'Mark for Review';
  }

  updateReviewButtons();
}

function selectAnswer(event, answer) {
  userAnswers[currentQuestionIndex] = answer;
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.classList.remove('selected'));
  event.target.classList.add('selected');
  updateReviewButtons();
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function clearResponse() {
    userAnswers[currentQuestionIndex] = null;
    markedForReview[currentQuestionIndex] = false;
    loadQuestion();
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    // This logic ensures if a question is marked/unmarked, it automatically moves to the next,
    // or just reloads the current one if it's the last question.
    if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
    } else {
        loadQuestion(); // Reload to update button text/style
    }
}


function submitTest() {
  clearInterval(timerInterval);
  showResult();
}

function showResult() {
  introductionScreen.style.display = 'none'; // Intro screen hide
  testContent.style.display = 'none'; // Test content hide
  resultAreaElement.style.display = 'block'; // Result area show

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  totalScore = 0;

  questions.forEach((question, index) => {
    // সঠিক উত্তর খুঁজে বের করার জন্য `answer` প্রপার্টি ব্যবহার করুন
    const correctAnswerOption = question.options.find(opt => opt.startsWith(question.answer));

    if (userAnswers[index] === correctAnswerOption) {
      correctCount++;
      totalScore++;
      questionStatus[index] = 'correct'; // স্ট্যাটাস সংরক্ষণ করুন
    } else if (userAnswers[index] !== null) {
      wrongCount++;
      totalScore -= 0.33;
      questionStatus[index] = 'wrong'; // স্ট্যাটাস সংরক্ষণ করুন
    } else {
        unattemptedCount++;
        questionStatus[index] = 'unattempted'; // স্ট্যাটাস সংরক্ষণ করুন
    }
  });

  totalScore = Math.max(0, totalScore); // স্কোর 0 এর নিচে যাতে না যায়

  scoreElement.textContent = totalScore.toFixed(2);
  correctCountElement.textContent = correctCount;
  wrongCountElement.textContent = wrongCount;
  unattemptedCountElement.textContent = unattemptedCount;

  filterQuestions('all'); // প্রাথমিকভাবে সমস্ত প্রশ্ন প্রদর্শন করুন
}

function updateReviewButtons() {
    const currentReviewButtons = questionGridContainer.querySelectorAll('.grid-button');

    Array.from(currentReviewButtons).forEach((button, index) => {
        button.classList.remove('answered', 'unanswered', 'current-question', 'marked-for-review');

        if (index === currentQuestionIndex) {
            button.classList.add('current-question');
        }

        if (userAnswers[index] !== null) {
            button.classList.add('answered');
            if (markedForReview[index]) {
                button.classList.add('marked-for-review');
            }
        } else if (markedForReview[index]) {
            button.classList.add('marked-for-review');
        } else {
            button.classList.add('unanswered');
        }
    });
}

function filterQuestions(filterType) {
    reviewContainer.innerHTML = ''; // পূর্বের রিভিউ আইটেমগুলি মুছে ফেলুন

    // সমস্ত ফিল্টার বাটন থেকে active ক্লাস সরান
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });

    // ক্লিক করা বাটনে active ক্লাস যোগ করুন
    document.getElementById(`show-${filterType}`).classList.add('active');


    questions.forEach((question, index) => {
        const status = questionStatus[index];

        let shouldDisplay = false;
        if (filterType === 'all') {
            shouldDisplay = true;
        } else if (filterType === 'correct' && status === 'correct') {
            shouldDisplay = true;
        } else if (filterType === 'wrong' && status === 'wrong') {
            shouldDisplay = true;
        } else if (filterType === 'unattempted' && status === 'unattempted') {
            shouldDisplay = true;
        }

        if (shouldDisplay) {
            const div = document.createElement('div');
            div.classList.add('review-item');
            div.style.width = '100%';
            let userAnswerText = userAnswers[index] || 'কোন উত্তর নেই';
            const correctAnswerText = question.options.find(opt => opt.startsWith(question.answer)) || 'N/A';

            let statusText = '';
            let userAnswerClass = '';

            if (userAnswers[index] === correctAnswerText) {
                userAnswerClass = 'correct-text';
                div.classList.add('correct-answer-review');
                statusText = ' (সঠিক উত্তর)';
            } else if (userAnswers[index] !== null) {
                userAnswerClass = 'wrong-text';
                div.classList.add('wrong-answer-review');
                statusText = ' (ভুল উত্তর)';
            } else if (markedForReview[index]) {
                div.classList.add('marked-for-review-review');
                statusText = ' (পর্যালোচনার জন্য চিহ্নিত - উত্তর দেওয়া হয়নি)';
            } else {
                div.classList.add('unanswered-review');
                statusText = ' (উত্তর দেওয়া হয়নি)';
            }

            if (userAnswers[index] !== null && markedForReview[index]) {
                // This condition for adding '*' is a bit tricky, if marked is cleared on clear response,
                // then * won't appear, which is correct.
                // Re-evaluate if you want a visual indicator for "attempted and marked for review" explicitly.
                // For now, I'll remove the '*' as it's typically for "unattempted and marked for review".
                // statusText += ' <span style="color: red;">*</span>';
            }

            const questionContent = question.question ? `<b>প্রশ্ন ${index + 1}: ${question.question}</b>` :
                                      question.image ? `<img src="${question.image}" alt="Question Image" class="review-question-image" style="max-width: 100px; max-height: 100px; display: block; margin-top: 5px;">` :
                                      `<b>প্রশ্ন ${index + 1}</b>`;


            div.innerHTML = `
              <p class="review-question">${questionContent}<span class="status-text">${statusText}</span></p>
              <p class="review-user-answer">Your Answer: <span class="${userAnswerClass}">${userAnswerText}</span></p>
              <p class="review-correct-answer">Correct Answer: <span class="correct-text">${correctAnswerText}</span></p>
              ${question.explanation ? `<p class="review-explanation">ব্যাখ্যা: ${question.explanation}</p>` : ''}
            `;

            reviewContainer.appendChild(div);
        }
    });
}


// প্রাথমিক কল
document.addEventListener('DOMContentLoaded', () => {
    // Start Test button event listener
    startTestButton.addEventListener('click', () => {
        introductionScreen.style.display = 'none'; // Hide intro screen
        testContent.style.display = 'block'; // Show test content

        // প্রশ্ন গ্রিড বাটন তৈরি করুন - ONLY when test starts
        for (let i = 0; i < questions.length; i++) {
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.textContent = i + 1;
            button.addEventListener('click', () => {
                currentQuestionIndex = i;
                loadQuestion();
            });
            questionGridContainer.appendChild(button);
        }

        loadQuestion(); // প্রথম প্রশ্ন লোড করুন
        startTimer();   // টাইমার শুরু করুন
        updateReviewButtons(); // রিভিউ বাটনগুলো আপডেট করুন
    });

    // Event listeners for navigation and action buttons (always present)
    nextButton.addEventListener('click', nextQuestion);
    prevButton.addEventListener('click', prevQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    markForReviewButton.addEventListener('click', toggleMarkForReview);
    submitButton.addEventListener('click', submitTest);

    // ফিল্টার বাটনগুলির জন্য ইভেন্ট লিসেনার যোগ করুন
    showAllButton.addEventListener('click', () => filterQuestions('all'));
    showCorrectButton.addEventListener('click', () => filterQuestions('correct'));
    showWrongButton.addEventListener('click', () => filterQuestions('wrong'));
    showUnattemptedButton.addEventListener('click', () => filterQuestions('unattempted'));
});
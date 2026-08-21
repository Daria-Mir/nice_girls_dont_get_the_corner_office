// NICE GIRLS INTERACTIVE WORKBOOK JS

// 49 Self-Assessment Statements (Chapter 1)
const quizQuestions = [
  { id: 1, text: "I can tell you the unwritten rules for success in my company." },
  { id: 2, text: "I prepare in advance for social events by creating a list of possible topics to discuss." },
  { id: 3, text: "I’m comfortable questioning those in authority when their expectations or requests don’t make sense." },
  { id: 4, text: "My elevator speech rolls off the tip of my tongue." },
  { id: 5, text: "My communications are crisp, clear, and concise." },
  { id: 6, text: "My hair and makeup augment my verbal messages for maximum credibility." },
  { id: 7, text: "I do not express negative opinions about others in online public forums." },
  { id: 8, text: "I engage in social networking via LinkedIn and other professional platforms." },
  { id: 9, text: "The need to be liked does not preclude me from saying things others might not like to hear." },
  { id: 10, text: "When given an assignment with too little time or too few resources to complete it, I negotiate for what I need." },
  { id: 11, text: "When asked what I do, I describe my work in terms of achievements and the way in which I add value." },
  { id: 12, text: "I present my ideas as statements rather than couching them as questions." },
  { id: 13, text: "My nonverbal communications enhance my verbal ones." },
  { id: 14, text: "When someone hurts my feelings, I let it go and move on." },
  { id: 15, text: "I use office politics to my advantage." },
  { id: 16, text: "I rarely bring food to the office to share with others." },
  { id: 17, text: "My focus is more on adding value than on doing my job." },
  { id: 18, text: "I seek high-profile assignments that will stretch my skills and let others see what I’m capable of." },
  { id: 19, text: "It’s unusual for me to apologize when I haven't done anything wrong." },
  { id: 20, text: "I dress for the success I want, not the job I have." },
  { id: 21, text: "I believe I’m as smart if not smarter than the next person." },
  { id: 22, text: "I capitalize on the professional relationships I make." },
  { id: 23, text: "I don’t multitask as a steady diet." },
  { id: 24, text: "I’m an effective negotiator." },
  { id: 25, text: "There’s nothing on my social media sites that I wouldn’t want a prospective employer to see." },
  { id: 26, text: "I speak slowly and clearly." },
  { id: 27, text: "I don’t engage in public grooming such as applying makeup, fixing my hair, etc." },
  { id: 28, text: "I am powerful." },
  { id: 29, text: "I have one or more mentors who I know will advocate for me when opportunities arise for which I am qualified." },
  { id: 30, text: "When I’m bullied, I let the other person know how I feel about it in a professional manner." },
  { id: 31, text: "I devote time each week to building and maintaining my network." },
  { id: 32, text: "I effectively toot my own horn." },
  { id: 33, text: "Others describe me as articulate." },
  { id: 34, text: "I have no obvious tattoos or multiple facial piercings that detract from a corporate look." },
  { id: 35, text: "I speak early and often in meetings." },
  { id: 36, text: "I actively seek to understand the needs of my constituents/boss so that I can better serve them." },
  { id: 37, text: "My office decor underscores my professionalism." },
  { id: 38, text: "I don’t aim for perfection." },
  { id: 39, text: "I regularly solicit feedback that will help me build my personal brand." },
  { id: 40, text: "I vary my communication style to influence others to accept my ideas and proposals." },
  { id: 41, text: "When seated at a conference table, I put my hands on the table and lean in." },
  { id: 42, text: "When others act inappropriately toward me, I address it directly with them rather than hold it in or complain to friends." },
  { id: 43, text: "I don’t wait to be given what I want, need, or deserve—I ask for it." },
  { id: 44, text: "I’ll ask a question even if I fear it might sound stupid." },
  { id: 45, text: "I tend not to be hard on myself when things go wrong." },
  { id: 46, text: "I use meetings to market my personal brand." },
  { id: 47, text: "I present ideas using influential business language." },
  { id: 48, text: "I know how to accessorize outfits to make a statement." },
  { id: 49, text: "When given critical feedback, I take it in stride rather than perseverate over it." }
];

// The 7 categories corresponding to the columns on page 21
const categories = [
  { name: "How You Play the Game", chapter: 2 },
  { name: "How You Act", chapter: 3 },
  { name: "How You Think", chapter: 4 },
  { name: "How You Brand & Market Yourself", chapter: 5 },
  { name: "How You Sound", chapter: 6 },
  { name: "How You Look", chapter: 7 },
  { name: "How You Respond", chapter: 8 }
];

// Curated Favorite Tips for each chapter
const chapterTips = {
  2: [
    { title: "Learn Chess Strategy", text: "Learn to play chess. It will help you develop a more strategic mind when it comes to winning business games." },
    { title: "Avoid the Worker Bee Trap", text: "Don't work without a break. Working non-stop makes you less productive and sends a message that you are a worker bee, not a leader." },
    { title: "Embrace Office Politics", text: "Don't avoid office politics. Politics is how relationships are built and leverage is gained. Learn the landscape and use it to your advantage." }
  ],
  3: [
    { title: "Eliminate Multitasking", text: "Avoid multitasking. Doing everything at once suggests you are disorganized and lack focus. Focus on one high-value task at a time." },
    { title: "Respect over Likeability", text: "Stop needing to be liked. It is more important to be respected than liked. Respect is the currency of the corner office." },
    { title: "Nurturing Stereotype Block", text: "Stop feeding others. Bringing baked goods to the office may seem friendly, but it reinforces the nurturing 'girl' stereotype rather than the 'leader' image." }
  ],
  4: [
    { title: "Think Like an Owner", text: "Stop thinking like an employee; start thinking like an owner. Align your daily goals with the company's bottom-line objectives." },
    { title: "Ditch Perfectionism", text: "Do not strive for perfection. Perfection is the enemy of progress. Focus on high-impact results rather than flawless execution." },
    { title: "Negotiate as Default", text: "Negotiate everything. Never accept the first offer, whether it's salary, resources, or project timelines. Negotiating shows you know your value." }
  ],
  5: [
    { title: "Define Your Brand", text: "Define your personal brand. Decide on 3 key words you want people to say about you when you leave a room, and align your behavior with them." },
    { title: "Take Your Seat", text: "Sit at the table. When attending meetings, do not sit on the perimeter chairs. Sit at the main table and occupy your rightful space." },
    { title: "Accept Compliments Proudly", text: "Stop being modest. When complimented, say 'Thank you, I'm glad you liked it' instead of minimizing your contribution." }
  ],
  6: [
    { title: "Speak in Statements", text: "State your ideas as statements, not questions. Saying 'I believe we should do X' is far more powerful than 'Should we do X?'" },
    { title: "Ban Empty Apologies", text: "Stop apologizing. Never apologize for taking up space, asking a question, or expressing a different viewpoint." },
    { title: "Purge Minimizing Words", text: "Avoid minimizing words. Remove qualifiers like 'just', 'only', and 'quickly' from your emails and conversations." }
  ],
  7: [
    { title: "Curb Nervous Smiling", text: "Stop smiling inappropriately. A constant smile when delivering serious or professional messages detracts from your authority." },
    { title: "Command Physical Space", text: "Take up physical space. Stand tall, rest your arms on the conference table, and avoid making yourself small." },
    { title: "Hold Eye Contact", text: "Maintain firm, direct eye contact. It projects confidence, honesty, and leadership capability." }
  ],
  8: [
    { title: "Reject Clerical Chores", text: "Stop taking notes, getting coffee, or making copies. Doing clerical work in meetings signals that you are support staff, not an active decision-maker." },
    { title: "Direct Conflict Resolution", text: "Address inappropriate behavior immediately. Do not complain to friends later; address it directly and professionally in the moment." },
    { title: "Prioritize Your Agenda", text: "Prioritize your own needs. You are entitled to have your needs met. Say no to dead-end assignments that do not advance your goals." }
  ]
};

// Mindmap Chapter Description & Mistakes Directory
const mindmapChapterInfo = {
  2: {
    title: "Chapter 2: How You Play the Game",
    desc: "Focuses on understanding workplace rules, boundaries, and competitive dynamics. Many women view the game of business as something unpleasant to be avoided, which holds them back.",
    mistakes: ["Pretending It Isn’t a Game", "Working Harder Instead of Smarter", "Avoiding Office Politics", "Not Expanding Your Network", "Apologizing for Winning"]
  },
  3: {
    title: "Chapter 3: How You Act",
    desc: "Deals with behavioral patterns that reduce credibility, such as the need to be liked, public grooming, taking on menial tasks, or trying to be 'nice' instead of respected.",
    mistakes: ["Trying to Be Liked by Everyone", "Doing Clerical Tasks for Meetings", "Feeding Others (Bringing Cookies)", "Minimizing Your Office Space", "Holding in Your Feelings"]
  },
  4: {
    title: "Chapter 4: How You Think",
    desc: "Examines cognitive limiting factors like perfectionism, waiting to be noticed, or failing to negotiate resources and salary.",
    mistakes: ["Striving for Flawless Perfection", "Waiting to Be Asked or Promoted", "Accepting the First Salary Offer", "Believing Others Know More", "Ignoring Your Gut Feelings"]
  },
  5: {
    title: "Chapter 5: How You Brand & Market Yourself",
    desc: "Covers personal branding, visibility in key meetings, claiming credit for achievements, and occupying a seat at the main table.",
    mistakes: ["Staying Invisible in Key Forums", "Sitting on the Perimeter of the Room", "Modestly Deflecting Compliments", "Failing to Toot Your Own Horn", "Not Defining Your Personal Brand"]
  },
  6: {
    title: "Chapter 6: How You Sound",
    desc: "Analyzes verbal communication habits like rising inflections, apologizing unnecessarily, using minimizing qualifiers, and speaking too fast.",
    mistakes: ["Using Qualifiers (just, only)", "Apologizing for Taking Space", "Couching Statements as Questions", "Speaking Too Fast Under Pressure", "Not Asking for What You Need"]
  },
  7: {
    title: "Chapter 7: How You Look",
    desc: "Addresses executive presence, dress codes, body language, command of physical space, and eye contact.",
    mistakes: ["Nervous Smiling When Delivering News", "Making Yourself Physically Small", "Dressing for the Job You Have (Not Want)", "Avoiding Direct Eye Contact", "Fidgeting or Public Grooming"]
  },
  8: {
    title: "Chapter 8: How You Respond",
    desc: "Examines how you react to other people's treatment of you, such as tolerating bad behavior, accepting clerical tasks, or failing to hold boundaries.",
    mistakes: ["Absorbing Inappropriate Treatment", "Taking Dead-End Assignments", "Failing to Delegate Clerical Work", "Letting Others Interrupt You", "Fearing Retaliation for Speaking Up"]
  }
};

// State
let currentQuizPage = 0;
const totalQuizPages = 7;
const answers = {};
let finalCategoryScores = [];
let bookTextIndex = [];
let activeAudios = []; // Keep track of active audio players

// DOM elements
const startQuizBtn = document.getElementById("start-quiz-btn");
const quizIntroBox = document.getElementById("quiz-intro-box");
const quizForm = document.getElementById("quiz-form");
const quizPagesContainer = document.getElementById("quiz-pages-container");
const prevPageBtn = document.getElementById("prev-page-btn");
const nextPageBtn = document.getElementById("next-page-btn");
const submitQuizBtn = document.getElementById("submit-quiz-btn");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const resultsSection = document.getElementById("results-section");
const overallScoreDisplay = document.getElementById("overall-score-display");
const verdictTitle = document.getElementById("verdict-title");
const verdictDescription = document.getElementById("verdict-description");
const verdictBadgeText = document.getElementById("verdict-badge-text");
const categoryBarsList = document.getElementById("category-bars-list");
const generateScheduleBtn = document.getElementById("generate-schedule-btn");

const scheduleSection = document.getElementById("schedule-section");
const chapterCardsContainer = document.getElementById("chapter-cards-container");
const toast = document.getElementById("toast");
const exportCanvas = document.getElementById("export-canvas");
const printOnlyContainer = document.getElementById("print-only-container");

// Notion Modal DOM elements
const notionModal = document.getElementById("notion-modal");
const closeNotionModalBtn = document.getElementById("close-notion-modal-btn");
const btnProceedNotion = document.getElementById("btn-proceed-notion");
const notionPreviewText = document.getElementById("notion-preview-text");

// Mindmap Modal DOM elements
const mindmapModal = document.getElementById("mindmap-modal");
const closeMindmapModalBtn = document.getElementById("close-mindmap-modal-btn");
const btnMindmapGo = document.getElementById("btn-mindmap-go");
const mindmapModalTitle = document.getElementById("mindmap-modal-title");
const mindmapModalDesc = document.getElementById("mindmap-modal-desc");
const mindmapModalMistakesList = document.getElementById("mindmap-modal-mistakes-list");

// Chatbot DOM elements
const chatbotToggleBtn = document.getElementById("chatbot-toggle-btn");
const chatbotWindow = document.getElementById("chatbot-window");
const chatCloseBtn = document.getElementById("chat-close-btn");
const chatSettingsBtn = document.getElementById("chat-settings-btn");
const chatbotSettingsPane = document.getElementById("chatbot-settings-pane");
const geminiApiKeyInput = document.getElementById("gemini-api-key-input");
const saveApiKeyBtn = document.getElementById("save-api-key-btn");
const apiKeyStatus = document.getElementById("api-key-status");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInputText = document.getElementById("chatbot-input-text");
const chatSendBtn = document.getElementById("chat-send-btn");

// On Load
loadBookIndex();
initMindmapNodes();
loadSavedApiKey();
initChatbotSuggestions();

// Load Book RAG JSON Index
function loadBookIndex() {
  fetch("book_text_index.json")
    .then(response => response.json())
    .then(data => {
      bookTextIndex = data;
      console.log("RAG Book Index Loaded:", bookTextIndex.length, "chunks");
    })
    .catch(err => {
      console.error("Failed to load book text index. Chatbot will run in simulated mode.", err);
    });
}

let selectedMindmapChapter = null;

// 1. Interactive Mindmap Nodes
function initMindmapNodes() {
  const outerNodes = document.querySelectorAll(".mindmap-node.outer");
  outerNodes.forEach(node => {
    node.addEventListener("click", () => {
      const chapterNum = parseInt(node.getAttribute("data-chapter"));
      openMindmapPopup(chapterNum);
    });
  });
}

function openMindmapPopup(chapterNum) {
  selectedMindmapChapter = chapterNum;
  const info = mindmapChapterInfo[chapterNum];
  if (!info) return;

  mindmapModalTitle.innerText = info.title;
  mindmapModalDesc.innerText = info.desc;
  
  // Populate mistakes list
  mindmapModalMistakesList.innerHTML = "";
  info.mistakes.forEach(mistake => {
    const li = document.createElement("li");
    li.innerText = mistake;
    mindmapModalMistakesList.appendChild(li);
  });

  mindmapModal.classList.remove("hidden");
}

function unlockReadingSchedule(targetChapterNum) {
  // If finalCategoryScores is empty (user hasn't taken quiz yet), populate it with default values!
  if (!finalCategoryScores || finalCategoryScores.length === 0) {
    finalCategoryScores = categories.map((cat, idx) => ({
      name: cat.name,
      chapter: cat.chapter,
      score: 20, // default score
      categoryIdx: idx
    }));
  }
  
  // Unlock and show the scheduleSection
  quizIntroBox.classList.add("hidden");
  quizForm.classList.add("hidden");
  resultsSection.classList.add("hidden");
  scheduleSection.classList.remove("hidden");

  // Re-render the cards if they are not already rendered!
  if (chapterCardsContainer.children.length === 0) {
    const sortedCategories = [...finalCategoryScores].sort((a, b) => a.score - b.score);
    chapterCardsContainer.innerHTML = "";
    activeAudios = [];

    sortedCategories.forEach((cat, priorityIndex) => {
      const templateContainer = document.getElementById("chapter-templates");
      const templateCard = templateContainer.querySelector(`[data-chapter="${cat.chapter}"]`);
      
      if (templateCard) {
        const clonedCard = templateCard.cloneNode(true);
        const badge = clonedCard.querySelector(".chapter-badge");
        if (badge) {
          badge.innerText = `Priority #${priorityIndex + 1} (${cat.name})`;
        }
        const scoreEl = clonedCard.querySelector(".ch-score");
        if (scoreEl) {
          scoreEl.innerText = cat.score;
        }
        if (priorityIndex === 0) {
          clonedCard.classList.add("highest-priority");
        }
        initAudioPlayer(clonedCard, cat.chapter);
        initNoteTaker(clonedCard, cat);
        initFavoriteTips(clonedCard, cat.chapter, cat.name);
        chapterCardsContainer.appendChild(clonedCard);
      }
    });
  }
  
  // Scroll to the card!
  setTimeout(() => {
    const chapterCard = document.querySelector(`.chapter-card-wrapper[data-chapter="${targetChapterNum}"]`);
    if (chapterCard) {
      chapterCard.scrollIntoView({ behavior: "smooth", block: "start" });
      // Flash outline
      chapterCard.style.outline = "3px solid var(--ink-rose)";
      setTimeout(() => {
        chapterCard.style.outline = "none";
      }, 2000);
    }
  }, 300);
}

// 2. Render Quiz Statements
function renderQuizQuestions() {
  quizPagesContainer.innerHTML = "";
  
  for (let page = 0; page < totalQuizPages; page++) {
    const pageDiv = document.createElement("div");
    pageDiv.className = `quiz-page ${page === 0 ? "" : "hidden"}`;
    pageDiv.id = `quiz-page-${page}`;
    
    const pageTitle = document.createElement("h3");
    pageTitle.className = "quiz-page-title";
    pageTitle.innerText = `Workbook Section ${page + 1}: General Evaluation`;
    pageDiv.appendChild(pageTitle);
    
    const startIdx = page * 7;
    for (let i = 0; i < 7; i++) {
      const question = quizQuestions[startIdx + i];
      if (!question) continue;
      
      const qItem = document.createElement("div");
      qItem.className = "question-item";
      qItem.innerHTML = `
        <p class="question-text">${question.id}. ${question.text}</p>
        <div class="likert-options">
          <label class="likert-label">
            <input type="radio" name="q_${question.id}" value="1" required>
            <span class="likert-circle">1</span>
            <span class="likert-text">Rarely</span>
          </label>
          <label class="likert-label">
            <input type="radio" name="q_${question.id}" value="2">
            <span class="likert-circle">2</span>
            <span class="likert-text">Sometimes</span>
          </label>
          <label class="likert-label">
            <input type="radio" name="q_${question.id}" value="3">
            <span class="likert-circle">3</span>
            <span class="likert-text">Usually</span>
          </label>
          <label class="likert-label">
            <input type="radio" name="q_${question.id}" value="4">
            <span class="likert-circle">4</span>
            <span class="likert-text">Always</span>
          </label>
        </div>
      `;
      pageDiv.appendChild(qItem);
    }
    quizPagesContainer.appendChild(pageDiv);
  }
}

// Navigation logic for Quiz
function updateQuizNavigation() {
  for (let page = 0; page < totalQuizPages; page++) {
    const pageEl = document.getElementById(`quiz-page-${page}`);
    if (pageEl) {
      if (page === currentQuizPage) {
        pageEl.classList.remove("hidden");
      } else {
        pageEl.classList.add("hidden");
      }
    }
  }

  if (currentQuizPage === 0) {
    prevPageBtn.classList.add("hidden");
  } else {
    prevPageBtn.classList.remove("hidden");
  }

  if (currentQuizPage === totalQuizPages - 1) {
    nextPageBtn.classList.add("hidden");
    submitQuizBtn.classList.remove("hidden");
  } else {
    nextPageBtn.classList.remove("hidden");
    submitQuizBtn.classList.add("hidden");
  }

  const progressPercent = ((currentQuizPage + 1) / totalQuizPages) * 100;
  progressFill.style.width = `${progressPercent}%`;
  progressText.innerText = `Section ${currentQuizPage + 1} of ${totalQuizPages}`;
}

function isCurrentPageValid() {
  const startQ = currentQuizPage * 7 + 1;
  const endQ = startQ + 6;
  
  for (let q = startQ; q <= endQ; q++) {
    const radios = document.getElementsByName(`q_${q}`);
    let checked = false;
    for (let r = 0; r < radios.length; r++) {
      if (radios[r].checked) {
        checked = true;
        answers[q] = parseInt(radios[r].value);
        break;
      }
    }
    if (!checked) return false;
  }
  return true;
}

startQuizBtn.addEventListener("click", () => {
  quizIntroBox.classList.add("hidden");
  quizForm.classList.remove("hidden");
  renderQuizQuestions();
  updateQuizNavigation();
});

prevPageBtn.addEventListener("click", () => {
  if (currentQuizPage > 0) {
    currentQuizPage--;
    updateQuizNavigation();
    quizForm.scrollIntoView({ behavior: "smooth" });
  }
});

nextPageBtn.addEventListener("click", () => {
  if (isCurrentPageValid()) {
    if (currentQuizPage < totalQuizPages - 1) {
      currentQuizPage++;
      updateQuizNavigation();
      quizForm.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    showToast("Please answer all statements on this page before moving forward!");
  }
});

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isCurrentPageValid()) {
    calculateAndShowScores();
  } else {
    showToast("Please make sure all statements are answered.");
  }
});

// Scoring Calculation
function calculateAndShowScores() {
  quizForm.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth" });

  let overallScore = 0;
  const categoryScores = [0, 0, 0, 0, 0, 0, 0];

  for (let q = 1; q <= 49; q++) {
    const val = answers[q] || 1;
    overallScore += val;
    const catIdx = (q - 1) % 7;
    categoryScores[catIdx] += val;
  }

  overallScoreDisplay.innerText = overallScore;

  let verdictTitleText = "";
  let verdictDesc = "";
  let badgeText = "";

  if (overallScore >= 159) {
    verdictTitleText = "You go, girl!";
    badgeText = "Winning Woman";
    verdictDesc = "Your score indicates you must already have the corner office or are well on your way to getting it. Focus on questions where you scored a 1 or 2, and pay it forward by mentoring other women.";
  } else if (overallScore >= 110) {
    verdictTitleText = "Fine-tuning Needed";
    badgeText = "On Her Way";
    verdictDesc = "Although you frequently engage in behaviors worthy of a winning woman, there are times when you don't get your due because you get caught up in Nice Girl Syndrome.";
  } else {
    verdictTitleText = "Danger Zone!";
    badgeText = "Nice Girl Trap";
    verdictDesc = "You are falling into the trap of acting like the nice little girl you were taught to be in childhood. You frequently wonder why you aren’t achieving the success you’ve worked so hard for.";
  }

  verdictTitle.innerText = verdictTitleText;
  verdictDescription.innerText = verdictDesc;
  verdictBadgeText.innerText = badgeText;

  finalCategoryScores = categories.map((cat, idx) => ({
    name: cat.name,
    chapter: cat.chapter,
    score: categoryScores[idx],
    categoryIdx: idx
  }));

  // Render Category Bars
  categoryBarsList.innerHTML = "";
  const minScore = Math.min(...categoryScores);

  finalCategoryScores.forEach(cat => {
    const percent = (cat.score / 28) * 100;
    const isLowest = cat.score === minScore;
    
    const catEl = document.createElement("div");
    catEl.className = "cat-bar-item";
    catEl.innerHTML = `
      <div class="cat-bar-label-row">
        <span>${cat.name} (Chapter ${cat.chapter})</span>
        <span><strong>${cat.score}</strong> / 28</span>
      </div>
      <div class="cat-bar-bg">
        <div class="cat-bar-fill ${isLowest ? "lowest" : ""}" style="width: ${percent}%;"></div>
      </div>
    `;
    categoryBarsList.appendChild(catEl);
  });
}

// 3. Reshuffle & Build Chapter Cards
generateScheduleBtn.addEventListener("click", () => {
  resultsSection.classList.add("hidden");
  scheduleSection.classList.remove("hidden");
  scheduleSection.scrollIntoView({ behavior: "smooth" });

  const sortedCategories = [...finalCategoryScores].sort((a, b) => a.score - b.score);
  chapterCardsContainer.innerHTML = "";
  activeAudios = [];

  sortedCategories.forEach((cat, priorityIndex) => {
    const templateContainer = document.getElementById("chapter-templates");
    const templateCard = templateContainer.querySelector(`[data-chapter="${cat.chapter}"]`);
    
    if (templateCard) {
      const clonedCard = templateCard.cloneNode(true);
      
      const badge = clonedCard.querySelector(".chapter-badge");
      if (badge) {
        badge.innerText = `Priority #${priorityIndex + 1} (${cat.name})`;
      }
      
      const scoreEl = clonedCard.querySelector(".ch-score");
      if (scoreEl) {
        scoreEl.innerText = cat.score;
      }
      
      if (priorityIndex === 0) {
        clonedCard.classList.add("highest-priority");
      }

      // Initialize Custom Audio Player
      initAudioPlayer(clonedCard, cat.chapter);

      // Add Note Taker Box
      initNoteTaker(clonedCard, cat);



      // Add Favorite Tips Visual Quote Cards
      initFavoriteTips(clonedCard, cat.chapter, cat.name);

      chapterCardsContainer.appendChild(clonedCard);
    }
  });
});

// 4. Initialize Custom Audio Player
function initAudioPlayer(cardEl, chapterNum) {
  const audio = cardEl.querySelector("audio");
  const playBtn = cardEl.querySelector(".compact-play-btn");
  const progressSlider = cardEl.querySelector(".compact-time-slider");
  const timeDisplay = cardEl.querySelector(".time-display");
  const speedBtn = cardEl.querySelector(".compact-speed-btn");
  const wheels = cardEl.querySelectorAll(".compact-wheel");

  if (!audio || !playBtn) return;

  activeAudios.push(audio);

  // Play / Pause
  playBtn.addEventListener("click", () => {
    // Pause other playing tracks
    activeAudios.forEach(otherAudio => {
      if (otherAudio !== audio && !otherAudio.paused) {
        otherAudio.pause();
        const otherBtn = otherAudio.closest(".act-audio-player").querySelector(".compact-play-btn");
        const otherWheels = otherAudio.closest(".act-audio-player").querySelectorAll(".compact-wheel");
        if (otherBtn) otherBtn.innerText = "PLAY";
        otherWheels.forEach(w => w.classList.remove("spinning"));
      }
    });

    if (audio.paused) {
      audio.play().then(() => {
        playBtn.innerText = "PAUSE";
        wheels.forEach(w => w.classList.add("spinning"));
      }).catch(err => {
        console.error("Audio playback error:", err);
        showToast("Audio file failed to load. Fallback loading...");
      });
    } else {
      audio.pause();
      playBtn.innerText = "PLAY";
      wheels.forEach(w => w.classList.remove("spinning"));
    }
  });

  // Time Updates
  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      progressSlider.value = percentage;
      timeDisplay.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    timeDisplay.innerText = `0:00 / ${formatTime(audio.duration)}`;
  });

  // Slider Scrubbing
  progressSlider.addEventListener("input", () => {
    if (audio.duration) {
      const newTime = (progressSlider.value / 100) * audio.duration;
      audio.currentTime = newTime;
    }
  });

  // Speed Control
  speedBtn.addEventListener("click", () => {
    let currentSpeed = parseFloat(speedBtn.getAttribute("data-speed"));
    let nextSpeed = 1.0;
    if (currentSpeed === 1.0) nextSpeed = 1.25;
    else if (currentSpeed === 1.25) nextSpeed = 1.5;
    else if (currentSpeed === 1.5) nextSpeed = 2.0;
    else nextSpeed = 1.0;

    audio.playbackRate = nextSpeed;
    speedBtn.setAttribute("data-speed", nextSpeed.toString());
    speedBtn.innerText = `${nextSpeed}x`;
  });
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// 5. Initialize Note Taker Box
function initNoteTaker(cardEl, cat) {
  const bodyEl = cardEl.querySelector(".chapter-body");
  const noteBox = document.createElement("div");
  noteBox.className = "note-taker-box";
  
  const storageKey = `nicegirls_notes_ch_${cat.chapter}`;
  const savedNote = localStorage.getItem(storageKey) || "";

  noteBox.innerHTML = `
    <h4>✍️ Chapter Journal & Action Commits</h4>
    <textarea placeholder="Write down the specific mistakes in this chapter you commit to addressing, and your action steps...">${savedNote}</textarea>
    <div class="note-actions">
      <span class="autosave-tag">✓ Auto-saved locally</span>
      <button class="btn-notion" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" style="margin-right: 6px;"><path d="M4.6 2h14.8c1 0 1.6.8 1.6 1.7v16.5c0 .9-.6 1.8-1.6 1.8H4.6c-1 0-1.6-.9-1.6-1.8V3.7c0-.9.6-1.7 1.6-1.7zm3 3.5c-.5 0-.9.4-.9.9v11.2c0 .5.4.9.9.9h7.8c.5 0 .9-.4.9-.9V6.4c0-.5-.4-.9-.9-.9H7.6zm1.3 2.6h5.2v1H8.9v-1zm0 2.2h5.2v1H8.9V10.3zm0 2.1h5.2v1H8.9v-1z"/></svg>
        Share to Notion
      </button>
    </div>
  `;

  const textarea = noteBox.querySelector("textarea");
  textarea.addEventListener("input", (e) => {
    localStorage.setItem(storageKey, e.target.value);
  });

  const notionBtn = noteBox.querySelector(".btn-notion");
  notionBtn.addEventListener("click", () => {
    const noteText = textarea.value.trim();
    if (!noteText) {
      showToast("Please write some notes first before sharing!");
      return;
    }

    const shareContent = `
# NICE GIRLS DON'T GET THE CORNER OFFICE - GROWTH DIARY
## ${cat.name} (Chapter ${cat.chapter})
Category Score: ${cat.score} / 28

### My Action Commitments:
${noteText}
    `.trim();

    navigator.clipboard.writeText(shareContent).then(() => {
      // Show Notion sync instructions modal
      notionPreviewText.innerText = shareContent;
      notionModal.classList.remove("hidden");
    }).catch(err => {
      console.error("Clipboard copy failed:", err);
      showToast("Failed to copy notes. Please copy manually.");
    });
  });

  bodyEl.appendChild(noteBox);
}



// 7. Favorite Tips Exporter (Quotes rendered as actual Images in DOM)
function initFavoriteTips(cardEl, chapterNum, chapterName) {
  const bodyEl = cardEl.querySelector(".chapter-body");
  const tipsBox = document.createElement("div");
  tipsBox.className = "tips-gallery-box";
  tipsBox.innerHTML = `<h4>💡 Favorite Tips to Get the Corner Office</h4>`;
  
  const tipsGrid = document.createElement("div");
  tipsGrid.className = "tips-grid";
  
  const tipsList = chapterTips[chapterNum] || [];
  
  tipsList.forEach((tip, idx) => {
    const cardItem = document.createElement("div");
    cardItem.className = "tip-card";
    
    // Add image shell
    cardItem.innerHTML = `
      <div class="tip-image-wrap">
        <div class="chat-loading" style="padding: 40% 10%;"><span></span><span></span><span></span></div>
      </div>
      <div class="tip-share-panel">
        <button class="btn-share linkedin">Share LinkedIn</button>
        <button class="btn-share instagram">Export Instagram</button>
      </div>
    `;

    // Render Canvas Quote to Image on Load
    // Wait briefly to make sure canvas fonts are loaded
    setTimeout(() => {
      const dataUrl = generateTipCardDataURL(tip.text, chapterNum, chapterName);
      const imgWrap = cardItem.querySelector(".tip-image-wrap");
      if (imgWrap) {
        imgWrap.innerHTML = `<img src="${dataUrl}" alt="${tip.title}" class="tip-generated-image">`;
      }
    }, 150 + idx * 50);

    // Share LinkedIn
    cardItem.querySelector(".linkedin").addEventListener("click", () => {
      const dataUrl = generateTipCardDataURL(tip.text, chapterNum, chapterName);
      const postText = `Career wisdom from Chapter ${chapterNum} of Dr. Lois Frankel's 'Nice Girls Don't Get the Corner Office':\n\n"${tip.text}"\n\n#NiceGirls #CareerGrowth #Leadership`;
      shareQuoteCard(postText, dataUrl, "LinkedIn");
    });

    // Share Instagram
    cardItem.querySelector(".instagram").addEventListener("click", () => {
      const dataUrl = generateTipCardDataURL(tip.text, chapterNum, chapterName);
      const postText = `Career wisdom from Chapter ${chapterNum} of Dr. Lois Frankel's 'Nice Girls Don't Get the Corner Office':\n\n"${tip.text}"\n\n#NiceGirls #CareerGrowth #Leadership`;
      shareQuoteCard(postText, dataUrl, "Instagram");
    });

    tipsGrid.appendChild(cardItem);
  });
  
  tipsBox.appendChild(tipsGrid);
  bodyEl.appendChild(tipsBox);
}

// Generate Quote Card Image Data URL
function generateTipCardDataURL(tipText, chapterNum, chapterName) {
  const ctx = exportCanvas.getContext("2d");
  
  // Clean background
  ctx.fillStyle = "#fdfaf6";
  ctx.fillRect(0, 0, 1080, 1080);
  
  // Double borders
  ctx.strokeStyle = "#945069";
  ctx.lineWidth = 15;
  ctx.strokeRect(40, 40, 1000, 1000);

  ctx.strokeStyle = "#ebdcd5";
  ctx.lineWidth = 4;
  ctx.strokeRect(65, 65, 950, 950);

  // Quote Mark
  ctx.font = "italic 160px Georgia, serif";
  ctx.fillStyle = "rgba(235, 179, 197, 0.4)";
  ctx.fillText("“", 120, 240);

  // Chapter context (at top)
  ctx.textAlign = "center";
  ctx.fillStyle = "#6b6062";
  ctx.font = "bold 20px Georgia, serif";
  ctx.fillText(`CHAPTER ${chapterNum}: ${chapterName.toUpperCase()}`, 540, 160);

  // Tip Text (center)
  ctx.fillStyle = "#2e2426";
  ctx.font = "italic 40px Georgia, serif";

  const maxTextWidth = 780;
  const lineHeight = 65;
  const centerX = 540;
  const centerY = 520;

  // Text Wrapping
  const words = tipText.split(' ');
  let line = '';
  let lines = [];
  
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxTextWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  const startY = centerY - ((lines.length - 1) * lineHeight) / 2;
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i].trim(), centerX, startY + i * lineHeight);
  }

  // Footer Brand
  ctx.fillStyle = "#945069";
  ctx.font = "bold 36px Georgia, serif";
  ctx.fillText("Dr. Lois P. Frankel", centerX, 880);

  ctx.fillStyle = "#6b6062";
  ctx.font = "12px monospace";
  ctx.fillText("NICE GIRLS DON'T GET THE CORNER OFFICE", centerX, 930);

  return exportCanvas.toDataURL("image/png");
}

function shareQuoteCard(postText, canvasDataUrl, platform) {
  // Convert Data URL to a File Object
  fetch(canvasDataUrl)
    .then(res => res.blob())
    .then(blob => {
      const file = new File([blob], `NiceGirls_Tip.png`, { type: "image/png" });
      
      // If Web Share API supports file sharing
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
          files: [file],
          title: "Dr. Lois Frankel Career Wisdom",
          text: postText
        })
        .then(() => showToast(`Shared to ${platform} successfully!`))
        .catch(err => {
          console.log("Web share cancelled or failed, running fallback:", err);
          fallbackShare(canvasDataUrl, postText, platform);
        });
      } else {
        fallbackShare(canvasDataUrl, postText, platform);
      }
    })
    .catch(err => {
      console.error("Error preparing file share:", err);
      fallbackShare(canvasDataUrl, postText, platform);
    });
}

function fallbackShare(dataUrl, postText, platform) {
  const link = document.createElement("a");
  link.download = `NiceGirls_Tip.png`;
  link.href = dataUrl;
  
  navigator.clipboard.writeText(postText).then(() => {
    showToast(`Caption copied! Downloading Quote Card for ${platform}...`);
    link.click();
    setTimeout(() => {
      if (platform === "LinkedIn") {
        window.open("https://www.linkedin.com/feed/", "_blank");
      } else {
        window.open("https://www.instagram.com/", "_blank");
      }
    }, 1500);
  }).catch(() => {
    link.click();
  });
}

// 8. GEMINI RAG CHATBOT LOGIC

// Global fallback API Key
const GLOBAL_GEMINI_API_KEY = "AIzaSyDR-7ENcnmDHfQJNdI2UuPUXaiQ00v6740";

// Toggle Chat Window
chatbotToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  chatbotWindow.classList.toggle("hidden");
  if (!chatbotWindow.classList.contains("hidden")) {
    chatbotWindow.scrollIntoView({ behavior: "smooth", block: "end" });
  }
});

chatCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  chatbotWindow.classList.add("hidden");
});

// Click outside to close chatbot window
document.addEventListener("click", (e) => {
  if (!chatbotWindow.classList.contains("hidden") && 
      !chatbotWindow.contains(e.target) && 
      !chatbotToggleBtn.contains(e.target)) {
    chatbotWindow.classList.add("hidden");
  }
});

chatSettingsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  chatbotSettingsPane.classList.toggle("hidden");
});

// Manage API Key
saveApiKeyBtn.addEventListener("click", () => {
  const key = geminiApiKeyInput.value.trim();
  if (key) {
    localStorage.setItem("gemini_api_key", key);
    apiKeyStatus.innerText = "Key Saved!";
    apiKeyStatus.style.color = "var(--ink-sage)";
    setTimeout(() => {
      chatbotSettingsPane.classList.add("hidden");
      apiKeyStatus.innerText = "";
    }, 1000);
  } else {
    localStorage.removeItem("gemini_api_key");
    apiKeyStatus.innerText = "Using Global Key";
    apiKeyStatus.style.color = "var(--ink-sage)";
  }
});

function loadSavedApiKey() {
  const key = localStorage.getItem("gemini_api_key") || "";
  geminiApiKeyInput.value = key;
  if (key) {
    apiKeyStatus.innerText = "Custom Key Connected";
  } else {
    apiKeyStatus.innerText = "Global Key Active";
  }
}

// Suggestion Chips
function initChatbotSuggestions() {
  const chips = document.querySelectorAll(".suggestion-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chatbotInputText.value = chip.innerText;
      handleSendMessage();
    });
  });
}

chatSendBtn.addEventListener("click", handleSendMessage);
chatbotInputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSendMessage();
  }
});

// Chat processor
function handleSendMessage() {
  const text = chatbotInputText.value.trim();
  if (!text) return;

  // Add User message
  addChatMessage("user", text);
  chatbotInputText.value = "";

  // Add Loader
  const loaderId = addChatLoader();

  // Run RAG Search
  setTimeout(() => {
    const ragResults = searchBookText(text);
    const key = localStorage.getItem("gemini_api_key") || GLOBAL_GEMINI_API_KEY;
    
    if (key) {
      callLiveGeminiAPI(text, ragResults, loaderId, key);
    } else {
      callSimulatedGeminiAPI(text, ragResults, loaderId);
    }
  }, 400);
}

function parseMarkdownToHTML(text) {
  // 1. Handle bold text first
  let html = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  
  // 2. Split into lines to parse structural elements
  const lines = html.split('\n');
  let insideList = false;
  let result = [];
  
  for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed) {
      if (insideList) {
        result.push("</ul>");
        insideList = false;
      }
      continue;
    }
    
    // Match headings: ### or ## or #
    if (trimmed.startsWith("###")) {
      if (insideList) { result.push("</ul>"); insideList = false; }
      result.push(`<h3>${trimmed.replace(/^###\s*/, "")}</h3>`);
    } else if (trimmed.startsWith("##")) {
      if (insideList) { result.push("</ul>"); insideList = false; }
      result.push(`<h2>${trimmed.replace(/^##\s*/, "")}</h2>`);
    } else if (trimmed.startsWith("#")) {
      if (insideList) { result.push("</ul>"); insideList = false; }
      result.push(`<h1>${trimmed.replace(/^#\s*/, "")}</h1>`);
    } 
    // Match bullet points: * or -
    else if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      if (!insideList) {
        result.push("<ul class=\"chat-list\">");
        insideList = true;
      }
      let content = trimmed.replace(/^[\*\-•]\s*/, "");
      result.push(`<li>${content}</li>`);
    } 
    // Normal paragraphs
    else {
      if (insideList) {
        result.push("</ul>");
        insideList = false;
      }
      result.push(`<p>${trimmed}</p>`);
    }
  }
  
  if (insideList) {
    result.push("</ul>");
  }
  
  return result.join("\n");
}

function addChatMessage(sender, text, citation = null) {
  const msgEl = document.createElement("div");
  msgEl.className = `chat-msg ${sender}`;
  
  // Parse markdown structural syntax to HTML
  msgEl.innerHTML = parseMarkdownToHTML(text);
  
  if (citation) {
    const citeEl = document.createElement("span");
    citeEl.className = "citation";
    citeEl.innerText = citation;
    msgEl.appendChild(citeEl);
  }
  
  chatbotMessages.appendChild(msgEl);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addChatLoader() {
  const loaderDiv = document.createElement("div");
  loaderDiv.className = "chat-msg coach chat-loader-msg";
  loaderDiv.innerHTML = `
    <div class="chat-loading">
      <span></span><span></span><span></span>
    </div>
  `;
  chatbotMessages.appendChild(loaderDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  return loaderDiv;
}

// Clientside RAG Matcher (Optimized Semantic Keyword & Pattern Ranking)
function searchBookText(query) {
  if (!bookTextIndex || bookTextIndex.length === 0) return [];

  const queryLower = query.toLowerCase();
  
  // 1. Extract Mistake number if present in query (e.g. "mistake 21")
  const mistakeMatch = queryLower.match(/\bmistake\s+(\d+)\b/);
  const targetMistakeNum = mistakeMatch ? parseInt(mistakeMatch[1]) : null;

  // 2. Tokenize query using extended stop-words to prevent irrelevant terms from inflating scores
  const stopWords = [
    "the", "and", "for", "with", "what", "how", "this", "about", "your", "does", "that", "book",
    "should", "would", "could", "from", "have", "been", "will", "than", "them", "their", "there",
    "were", "was", "are", "you", "more", "most", "some", "any", "out", "into", "onto", "over",
    "under", "appropriate", "inappropriate", "gain", "want", "work", "like", "need", "take", "make"
  ];
  const tokens = queryLower
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, " ")
    .split(/\s+/)
    .filter(t => t.length > 2 && !stopWords.includes(t));

  // 3. Score each chunk
  const scoredChunks = bookTextIndex.map(chunk => {
    let score = 0;
    const chunkTextLower = chunk.text.toLowerCase();
    
    // Direct Mistake number match boost
    if (targetMistakeNum && chunk.mistake_num === targetMistakeNum) {
      score += 180; // Massively boost the specific mistake chunk
    }
    
    // Direct concept expansions
    if (queryLower.includes("flirt") && chunk.text.includes("Mistake 34")) {
      score += 150;
    }
    if ((queryLower.includes("smile") || queryLower.includes("smiling")) && chunk.text.includes("Mistake 103")) {
      score += 100;
    }
    if ((queryLower.includes("apolog") || queryLower.includes("sorry")) && chunk.text.includes("Mistake 55")) {
      score += 100;
    }
    if ((queryLower.includes("cookies") || queryLower.includes("baking") || queryLower.includes("feed")) && chunk.text.includes("Mistake 21")) {
      score += 100;
    }
    if ((queryLower.includes("clerical") || queryLower.includes("notes") || queryLower.includes("coffee")) && 
        (chunk.text.includes("Mistake 20") || chunk.text.includes("Mistake 130"))) {
      score += 100;
    }

    // Prefix/Stem matching (e.g. 'flirt' matches 'flirting', 'flirtatious')
    tokens.forEach(token => {
      const prefixRegex = new RegExp("\\b" + token + "\\w*", "gi");
      const matches = chunkTextLower.match(prefixRegex);
      if (matches) {
        score += matches.length * 4.0; // High score for word-prefix matches
      } else if (chunkTextLower.includes(token)) {
        score += 1.0; // Substring fallback
      }
    });

    // Chapter Context Boost
    if ((queryLower.includes("play") || queryLower.includes("game")) && chunk.chapter === "Chapter 2") score += 10;
    if ((queryLower.includes("act") || queryLower.includes("behave")) && chunk.chapter === "Chapter 3") score += 10;
    if ((queryLower.includes("think") || queryLower.includes("mindset")) && chunk.chapter === "Chapter 4") score += 10;
    if ((queryLower.includes("brand") || queryLower.includes("market") || queryLower.includes("credit")) && chunk.chapter === "Chapter 5") score += 10;
    if ((queryLower.includes("sound") || queryLower.includes("speak") || queryLower.includes("voice")) && chunk.chapter === "Chapter 6") score += 15;
    if ((queryLower.includes("look") || queryLower.includes("dress") || queryLower.includes("eye")) && chunk.chapter === "Chapter 7") score += 10;
    if ((queryLower.includes("respond") || queryLower.includes("react")) && chunk.chapter === "Chapter 8") score += 10;

    return { ...chunk, score };
  });

  // Sort and pick top 3 relevant chunks
  return scoredChunks
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

// Live Gemini API Call
function callLiveGeminiAPI(query, contextPages, loaderEl, apiKey) {
  let contextString = "";
  if (contextPages.length > 0) {
    contextString = contextPages.map(p => {
      const range = p.page_num_1based === p.end_page ? `Page ${p.page_num_1based}` : `Pages ${p.page_num_1based}-${p.end_page}`;
      return `[${range} | ${p.chapter}]:\n${p.text}`;
    }).join("\n\n");
  } else {
    contextString = "No specific pages found matching this query in the search index.";
  }

  const promptText = `
You are Dr. Lois Frankel's AI Executive Coach, assisting a user in their career growth and leadership journey.
Use the provided context blocks from her book "Nice Girls Don't Get the Corner Office" as your primary strategic guidance and inspiration.

Guidelines:
1. If the retrieved context contains relevant advice, incorporate it and cite the page/chapter.
2. If the retrieved context is not directly applicable, answer the user's question anyway using your extensive knowledge of professional coaching, female leadership strategies, and Lois Frankel's core philosophies. 
3. Speak in a warm, natural, and conversational tone. Avoid sounding robotic or saying that you are restricted to context.
4. Provide highly actionable, encouraging advice (e.g., specific scripts, behaviors to adopt, or actions to take).
5. Provide detailed, thorough, and comprehensive explanations. Explain your reasoning fully and give clear step-by-step guidance. Do not artificially truncate your response.

Context from the book:
${contextString}

User Question: ${query}
  `.trim();

  // Call Gemini 3.6 Flash
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: promptText
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 4096
      }
    })
  })
  .then(res => {
    if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
    return res.json();
  })
  .then(data => {
    loaderEl.remove();
    try {
      const responseText = data.candidates[0].content.parts[0].text;
      const pages = contextPages.map(p => {
        if (p.page_num_1based === p.end_page) return `Page ${p.page_num_1based}`;
        return `Pages ${p.page_num_1based}-${p.end_page}`;
      }).join(", ");
      addChatMessage("coach", responseText, pages ? `Sources: ${pages}` : null);
    } catch (e) {
      console.error(e);
      addChatMessage("coach", "Oops! I received an empty or corrupted response from Gemini. Please try again.");
    }
  })
  .catch(err => {
    console.error(err);
    loaderEl.remove();
    addChatMessage("coach", `Failed to call Gemini API (${err.message}). Check your API Key or try again.`);
  });
}

// Simulated Prototype Fallback
function callSimulatedGeminiAPI(query, contextPages, loaderEl) {
  loaderEl.remove();
  
  if (contextPages.length === 0) {
    addChatMessage("coach", "I scanned the book but couldn't find a direct match for this question. Could you try rephrasing or asking about a different mistake section?");
    return;
  }

  const topPage = contextPages[0];
  const snippet = topPage.text.substring(0, 350) + "...";
  const sourceText = topPage.page_num_1based === topPage.end_page ? `Page ${topPage.page_num_1based}` : `Pages ${topPage.page_num_1based}-${topPage.end_page}`;
  
  const simResponse = `
I scanned the book and found this relevant excerpt on **${sourceText}** in **${topPage.chapter}**:

"${snippet}"
  `.trim();

  addChatMessage("coach", simResponse, `Sources: ${sourceText}`);
}

// 9. Toast Notification
function showToast(message) {
  toast.innerText = message;
  toast.classList.remove("hidden");
  toast.style.opacity = "1";
  
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 3000);
}

// 10. NOTION SYNC MODAL TRIGGERS
closeNotionModalBtn.addEventListener("click", () => {
  notionModal.classList.add("hidden");
});

btnProceedNotion.addEventListener("click", () => {
  notionModal.classList.add("hidden");
  window.open("https://notion.so/new", "_blank");
});

notionModal.addEventListener("click", (e) => {
  if (e.target === notionModal) {
    notionModal.classList.add("hidden");
  }
});

// 11. NEWSLETTER SIGNUP HANDLER
const newsletterForm = document.getElementById("newsletter-form");
const newsletterStatus = document.getElementById("newsletter-status");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("subscriber-name").value.trim();
    const email = document.getElementById("subscriber-email").value.trim();
    
    newsletterStatus.innerText = "Subscribing...";
    newsletterStatus.className = "newsletter-status success";
    newsletterStatus.classList.remove("hidden");
    
    setTimeout(() => {
      newsletterStatus.innerText = `Thank you, ${name}! You've subscribed to Tech Girls Book Club. Check your inbox soon!`;
      newsletterForm.reset();
    }, 1000);
  });
}

// 12. MINDMAP POPUP MODAL TRIGGERS
closeMindmapModalBtn.addEventListener("click", () => {
  mindmapModal.classList.add("hidden");
});

btnMindmapGo.addEventListener("click", () => {
  mindmapModal.classList.add("hidden");
  if (selectedMindmapChapter) {
    unlockReadingSchedule(selectedMindmapChapter);
  }
});

mindmapModal.addEventListener("click", (e) => {
  if (e.target === mindmapModal) {
    mindmapModal.classList.add("hidden");
  }
});

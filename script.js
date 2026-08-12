// --- ROSTER DATA (APPENDIX A) ---
const ROSTER = [
    "Abhineet Akotkar", "Aditya Santosh Gawande", "Ajay Naik", "Akash Makone", "Anamika Durga Chaudhary",
    "ANAND YENKAR", "Anuja Dhamdhere", "Anup Mali", "Asad Shaikh", "Astha Singh", "Ayush Sarode",
    "Bhakti Deshpande", "Brijesh Jagtap", "Chanchal Dhanwe", "Damodhar Zanwar", "Dipali Sitafe",
    "Dipansh Sanjay Kumar Singh", "Ekansh Narang", "Gayatri Nair", "Ishita Kolhe", "Jasveen Kaur Jandu",
    "Jaya Singh", "Madhavi Gaikwad", "Parinita Rawale", "Prarthana Pawar", "Prashant Patil",
    "Prathamesh nagare", "Prathamesh Pote", "Purva Patil", "Renuka Patil", "Rishita Margam",
    "Rohan Agre", "Rohit Rathod", "Ruchika Nalawade", "Rutuja Hakke", "Sahil Waykar", "Saksham Jain",
    "Sakshi Randive", "Seema Dangi", "Sejal Gogavale", "Shreya Iyer", "siddhi joshi", "Siddhi Patil",
    "Surbhi Rawat", "Suyash Naikare", "Tanmay Mahesh Shriwas", "vaishnavi shingare", "Varsha Gurunath Bokse",
    "Vrushal Sanjiv Khairnar", "Yash Mahajan"
];

let cohortList = ["DWP018", "DWP019"];

// --- MASTER QUESTION DATA ---
const RAW_QUESTIONS = [
    // PART 1: MCQs (1 to 6)
    {
        id: 1, part: 1, type: 'mcq',
        source: "1- What is your good name?",
        options: [
            "May I know your full name, please?",
            "What is your good name please?",
            "What is your actual name?",
            "May I have your name title?",
            "What is the good name of yours?"
        ],
        correct: 0,
        explanation: `<strong>Correct Answer:</strong> "May I know your full name, please?"<br><br>
        <strong>Direct Hindi Translation Analysis:</strong>
        <br>• <em>"Aapka shubh naam kya hai?"</em> ➔ Direct translation of options 2 & 5 ("What is your good name?"). In English, 'good name' is an improper literal translation of 'shubh naam'.
        <br>• <em>"Aapka asli naam kya hai?"</em> ➔ Direct translation of option 3 ("What is your actual name?"), which sounds suspicious or accusatory in customer support.
        <br><br>
        <strong>Standard English Rule:</strong> Always use polite phrases such as <em>"May I know your name, please?"</em> or <em>"May I have your name, please?"</em>.`
    },
    {
        id: 2, part: 1, type: 'mcq',
        source: "2- Today morning I woke up late.",
        options: [
            "Today morning I got up late.",
            "I woke up late this morning.",
            "I got woken up late today morning.",
            "This morning today I woke up late.",
            "Today early morning I woke up late."
        ],
        correct: 1,
        explanation: `<strong>Correct Answer:</strong> "I woke up late this morning."<br><br>
        <strong>Direct Hindi Translation Analysis:</strong>
        <br>• <em>"Aaj subah main der se utha."</em> ➔ Translates word-for-word to <em>"Today morning I woke up late"</em>.
        <br><br>
        <strong>Standard English Rule:</strong> 'Today morning' is grammatically incorrect. Use the native collocation <strong>"this morning"</strong> or <strong>"this afternoon"</strong>.`
    },
    {
        id: 3, part: 1, type: 'mcq',
        source: "3- I am having a lot of work.",
        options: [
            "I am having work loads.",
            "I am possessing a lot of work.",
            "I have a lot of work.",
            "I am holding a lot of work.",
            "I have having many works."
        ],
        correct: 2,
        explanation: `<strong>Correct Answer:</strong> "I have a lot of work."<br><br>
        <strong>Direct Hindi Translation Analysis:</strong>
        <br>• <em>"Mere paas bohot kaam ho raha hai / hai."</em> ➔ Mapped incorrectly into continuous tense as <em>"I am having..."</em>.
        <br><br>
        <strong>Standard English Rule:</strong> Stative verbs indicating possession or static states (like <em>have</em>) cannot be used in continuous tense (-ing forms). Use simple present tense: <strong>"I have"</strong>.`
    },
    {
        id: 4, part: 1, type: 'mcq',
        source: "4- Open the light, please.",
        options: [
            "Please start the light.",
            "Turn on the light, please.",
            "Open up the lights, please.",
            "Light up open, please.",
            "Please switch open the light."
        ],
        correct: 1,
        explanation: `<strong>Correct Answer:</strong> "Turn on the light, please."<br><br>
        <strong>Direct Hindi Translation Analysis:</strong>
        <br>• <em>"Light kholo, please."</em> ➔ Direct literal translation leads to <em>"Open the light"</em> or <em>"Open up the light"</em>.
        <br>• <em>"Light chalu karo."</em> ➔ Translates directly to <em>"Start the light"</em>.
        <br><br>
        <strong>Standard English Rule:</strong> We 'open' doors, boxes, or windows. For electrical equipment, use <strong>"turn on / turn off"</strong> or <strong>"switch on / switch off"</strong>.`
    },
    {
        id: 5, part: 1, type: 'mcq',
        source: "5- He is my cousin brother.",
        options: [
            "He is my cousin brother only.",
            "He is my real cousin brother.",
            "He is my cousin.",
            "He is a cousin brother of mine.",
            "He is my cousin relation."
        ],
        correct: 2,
        explanation: `<strong>Correct Answer:</strong> "He is my cousin."<br><br>
        <strong>Direct Hindi Translation Analysis:</strong>
        <br>• <em>"Woh mera chachera bhai hai."</em> ➔ Translates directly to <em>"He is my cousin brother"</em>.
        <br><br>
        <strong>Standard English Rule:</strong> The word 'cousin' already implies relation. Adding 'brother' or 'sister' is redundant. Gender is established by the pronoun (<em>He</em> or <em>She</em>).`
    },
    {
        id: 6, part: 1, type: 'mcq',
        source: "6- Why you are late?",
        options: [
            "Why you came late?",
            "Why are you late?",
            "You are late for what reason?",
            "Why late you are?",
            "Why you got late?"
        ],
        correct: 1,
        explanation: `<strong>Correct Answer:</strong> "Why are you late?"<br><br>
        <strong>Direct Hindi Translation Analysis:</strong>
        <br>• <em>"Aap kyun late ho?"</em> ➔ Keeps word order intact: Subject (Aap/You) + Verb (ho/are) = <em>"Why you are late?"</em>.
        <br><br>
        <strong>Standard English Rule:</strong> Direct question structures require inversion: Question Word + Auxiliary/Verb + Subject (<em>"Why are you..."</em>).`
    },

    // PART 2: Typing Tasks (7 to 13)
    {
        id: 7, part: 2, type: 'typing',
        source: "7- I am staying in Mumbai.",
        starter: "I live in",
        validAnswers: [
            "I live in Mumbai.",
            "I reside in Mumbai.",
            "I am living in Mumbai.",
            "I currently live in Mumbai.",
            "I am based in Mumbai."
        ],
        explanation: "'Staying' implies short-term temporary lodging (e.g. hotel). For permanent residence, use 'live in' or 'reside in'."
    },
    {
        id: 8, part: 2, type: 'typing',
        source: "8- Current is gone.",
        starter: "The power has",
        validAnswers: [
            "The power has gone out.",
            "The power went out.",
            "There is a power outage.",
            "The electricity is out.",
            "The power has gone."
        ],
        explanation: "'Current' refers to electrical flow, not utility service. Use 'power outage' or 'the power has gone out'."
    },
    {
        id: 9, part: 2, type: 'typing',
        source: "9- I did not ate food.",
        starter: "I did not",
        validAnswers: [
            "I did not eat food.",
            "I did not eat.",
            "I haven't eaten food.",
            "I have not eaten.",
            "I did not eat my meal."
        ],
        explanation: "The auxiliary 'did' must always be followed by the base verb ('eat', not past tense 'ate')."
    },
    {
        id: 10, part: 2, type: 'typing',
        source: "10- Give me a call back later, no?",
        starter: "Could you call",
        validAnswers: [
            "Could you call me back later?",
            "Please call me back later.",
            "Could you please call me back later?",
            "Can you call me back later?",
            "Would you call me back later?"
        ],
        explanation: "Ending sentences with 'no?' is a direct translation of Hindi tag 'na?'. Use professional phrasing: 'Could you call me back later?'"
    },
    {
        id: 11, part: 2, type: 'typing',
        source: "11- My head is paining.",
        starter: "I have a",
        validAnswers: [
            "I have a headache.",
            "My head hurts.",
            "I am having a headache.",
            "I have a severe headache.",
            "My head is aching."
        ],
        explanation: "Body parts 'ache' or 'hurt'. Saying 'head is paining' is an incorrect literal translation."
    },
    {
        id: 12, part: 2, type: 'typing',
        source: "12- One small help I need.",
        starter: "I need a",
        validAnswers: [
            "I need a small favor.",
            "I need a little help.",
            "Could you help me with something small?",
            "I need a quick favor.",
            "I need some help."
        ],
        explanation: "'Help' is uncountable. Use 'a favor' or 'some help' instead of 'one small help'."
    },
    {
        id: 13, part: 2, type: 'typing',
        source: "13- She was giving exam yesterday.",
        starter: "She was taking",
        validAnswers: [
            "She was taking an exam yesterday.",
            "She was sitting for an exam yesterday.",
            "She took an exam yesterday.",
            "She was writing an exam yesterday.",
            "She was appearing for an exam yesterday."
        ],
        explanation: "Students 'take' or 'sit for' an exam. Teachers 'give' or 'administer' exams."
    },

    // PART 3: Drag & Drop Tasks (14 to 21)
    {
        id: 14, part: 3, type: 'dragdrop',
        source: "14- I am knowing the answer.",
        correctBlocks: ["I know", "the answer"],
        distractorBlocks: ["am knowing", "answer know"],
        explanation: `<strong>Detailed Explanation:</strong> Stative verbs such as 'know' express states of mind or condition, not physical actions. They must NOT be used in continuous (-ing) tenses.<br><br>
        <strong>Correct Usage Examples of 'to know':</strong><br>
        • <strong>Example 1:</strong> <u>I</u> [Subject] <u>know</u> [Verb] <u>the correct resolution</u> [Object].<br>
        • <strong>Example 2:</strong> <u>She</u> [Subject] <u>knows</u> [Verb] <u>the account details</u> [Object].`
    },
    {
        id: 15, part: 3, type: 'dragdrop',
        source: "15- I am knowing him since two years.",
        correctBlocks: ["I have known", "him for", "two years"],
        distractorBlocks: ["am knowing", "since two years"],
        explanation: `<strong>Detailed Explanation:</strong> 
        <br>1. <strong>Stative Verb Error:</strong> 'Know' cannot be in continuous tense ('am knowing'). Use 'have known' for an action starting in the past and continuing today.
        <br>2. <strong>Time Expression Error:</strong> Use <strong>'since'</strong> ONLY with a specific starting point in time (e.g., <em>since 2024</em>, <em>since May</em>). Use <strong>'for'</strong> to denote duration (e.g., <em>for 2 years</em>, <em>for 5 months</em>).<br><br>
        <strong>Correct Stative Verb Examples with 'to know' & 'to have':</strong><br>
        • <strong>Example 1 ('to know'):</strong> <u>They</u> [Subject] <u>have known</u> [Verb] <u>the client</u> [Object] <u>for six months</u> [Complement].<br>
        • <strong>Example 2 ('to have'):</strong> <u>We</u> [Subject] <u>have</u> [Verb] <u>the files</u> [Object] <u>ready</u> [Complement].`
    },
    {
        id: 16, part: 3, type: 'dragdrop',
        source: "16- How much price for this?",
        correctBlocks: ["How much", "does this cost?"],
        distractorBlocks: ["is price for", "what price of"],
        explanation: `<strong>Detailed Explanation:</strong> Avoid asking 'how much price'. Frame questions using standard dynamic verbs like 'cost'.<br><br>
        <strong>Sentence Structure Breakdown:</strong><br>
        • <u>How much</u> [Question Word] <u>does</u> [Auxiliary Verb] <u>this product</u> [Subject] <u>cost</u> [Main Verb]?<br>
        • <u>What</u> [Question Word] <u>is</u> [Verb] <u>the price of this item</u> [Subject Complement]?`
    },
    {
        id: 17, part: 3, type: 'dragdrop',
        source: "17- I am agreeing with you.",
        correctBlocks: ["I agree", "with you"],
        distractorBlocks: ["am agree", "agreeing with"],
        explanation: `<strong>Detailed Explanation:</strong> 'Agree' is a stative verb expressing opinion/mental state. Never use continuous forms ('am agreeing').<br><br>
        <strong>Correct Usage Examples with 'to have' and 'to know':</strong><br>
        • <strong>Example 1 ('to have'):</strong> <u>I</u> [Subject] <u>have</u> [Verb] <u>a new query</u> [Object].<br>
        • <strong>Example 2 ('to know'):</strong> <u>He</u> [Subject] <u>knows</u> [Verb] <u>the process</u> [Object].`
    },
    {
        id: 18, part: 3, type: 'dragdrop',
        source: "18- Where you are going?",
        correctBlocks: ["Where are", "you going?"],
        distractorBlocks: ["you are", "going where"],
        explanation: `<strong>Detailed Explanation:</strong> Direct questions require inverted word order where the auxiliary verb precedes the subject.<br><br>
        <strong>Structure Breakdown:</strong><br>
        • <u>Where</u> [Question Word] <u>are</u> [Auxiliary Verb] <u>you</u> [Subject] <u>going</u> [Main Verb]?`
    },
    {
        id: 19, part: 3, type: 'dragdrop',
        source: "19- He is not listening me.",
        correctBlocks: ["He is not", "listening to me"],
        distractorBlocks: ["listening me", "he not listen"],
        explanation: `<strong>Detailed Explanation:</strong> The verb 'listen' MUST be followed by the preposition 'to' when followed by a direct object.<br><br>
        <strong>Sentence Structural Examples with Subject, Verb, and Object labelled:</strong><br>
        • <strong>Example 1:</strong> <u>She</u> [Subject] <u>is listening to</u> [Verb + Preposition] <u>the caller</u> [Object].<br>
        • <strong>Example 2:</strong> <u>Please listen to</u> [Verb + Preposition] <u>my instructions</u> [Object].<br><br>
        <strong>Two Additional Supporting Examples:</strong><br>
        • <strong>Example 3:</strong> <u>They</u> [Subject] <u>listened to</u> [Verb] <u>the customer complaint</u> [Object].<br>
        • <strong>Example 4:</strong> <u>We</u> [Subject] <u>are listening to</u> [Verb] <u>the feedback</u> [Object].`
    },
    {
        id: 20, part: 3, type: 'dragdrop',
        source: "20- I will come to office after two days.",
        correctBlocks: ["I", "will come", "to", "the office", "in two days"],
        distractorBlocks: ["post two days", "after two days"],
        explanation: `<strong>Detailed Explanation:</strong> Use 'in [duration]' to indicate future time. 'After two days' is a literal translation of 'do din ke baad'.<br><br>
        <strong>Sentence Structure Breakdown (Subject, Verb, Object/Complement):</strong><br>
        • <u>I</u> [Subject] <u>will come</u> [Verb] <u>to the office</u> [Prepositional Phrase / Complement] <u>in two days</u> [Time Complement].`
    },
    {
        id: 21, part: 3, type: 'dragdrop',
        source: "21- You can go by walking to the PG.",
        correctBlocks: ["You can", "walk to", "the accommodation"],
        distractorBlocks: ["go by walking", "walk and go"],
        explanation: `<strong>Detailed Explanation:</strong> 'Go by walking' is a direct translation of 'chalke jaana'. In standard English, use the simple verb 'walk to' or 'go on foot'.<br><br>
        <strong>Examples using 'walk to' with Subject, Verb, and Object/Complement labeled:</strong><br>
        • <strong>Example 1:</strong> <u>You</u> [Subject] <u>can walk to</u> [Verb + Preposition] <u>the office</u> [Object/Location].<br>
        • <strong>Example 2:</strong> <u>The candidates</u> [Subject] <u>walked to</u> [Verb + Preposition] <u>the training center</u> [Object/Location].`
    }
];

// --- APP STATE ---
let currentParticipant = null;
let activeQuestions = [];
let currentIndex = 0;
let userAnswers = {};

window.onload = function() {
    populateRoster();
    populateCohortDropdowns();
};

function populateRoster() {
    const select = document.getElementById('student-name-select');
    // keep default options
    select.innerHTML = `<option value="">-- Select Your Name --</option><option value="CUSTOM_NAME">-- Type My Own Name --</option>`;
    ROSTER.forEach(name => {
        let opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    });
}

function toggleNameInput(select) {
    const customGroup = document.getElementById('custom-name-group');
    if (select.value === 'CUSTOM_NAME') {
        customGroup.classList.remove('hidden');
        document.getElementById('student-name-text').required = true;
    } else {
        customGroup.classList.add('hidden');
        document.getElementById('student-name-text').required = false;
    }
}

function populateCohortDropdowns() {
    const studentSelect = document.getElementById('cohort-code');
    const adminSelect = document.getElementById('filter-cohort');

    studentSelect.innerHTML = '<option value="">-- Select Cohort --</option>';
    adminSelect.innerHTML = '<option value="ALL">All Cohorts</option>';

    cohortList.forEach(c => {
        let opt1 = document.createElement('option');
        opt1.value = c; opt1.textContent = c;
        studentSelect.appendChild(opt1);

        let opt2 = document.createElement('option');
        opt2.value = c; opt2.textContent = c;
        adminSelect.appendChild(opt2);
    });
}

function addCohortCode() {
    const input = document.getElementById('new-cohort-input');
    const code = input.value.trim().toUpperCase();
    if (!code) return alert("Please enter a valid cohort code.");
    if (cohortList.includes(code)) return alert("Cohort code already exists.");
    
    cohortList.push(code);
    input.value = '';
    populateCohortDropdowns();
    alert(`Cohort ${code} added successfully!`);
}

function showLogin() {
    document.getElementById('screen-login').classList.remove('hidden');
    document.getElementById('screen-admin-login').classList.add('hidden');
    document.getElementById('screen-admin-dashboard').classList.add('hidden');
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-summary').classList.add('hidden');
}

function showAdminLogin() {
    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-admin-login').classList.remove('hidden');
}

// Student Login Submit
document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    
    const email = document.getElementById('student-email').value.trim();
    if (!validateEmail(email)) {
        alert("Please enter a valid email address containing '@' and ending with '.com' or '.in'.");
        return;
    }

    let pName = document.getElementById('student-name-select').value;
    if (pName === 'CUSTOM_NAME') {
        pName = document.getElementById('student-name-text').value.trim();
        if (!pName) return alert("Please enter your full name.");
    } else if (!pName) {
        return alert("Please select or enter your name.");
    }

    currentParticipant = {
        name: pName,
        cohort: document.getElementById('cohort-code').value,
        date: formatDate(document.getElementById('attempt-date').value),
        email: email,
        status: 'Incomplete',
        score: 0
    };

    activeQuestions = prepareShuffledQuestions();
    userAnswers = {};
    currentIndex = 0;

    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    renderPageNumbers();
    loadQuestion(currentIndex);
};

function validateEmail(email) {
    if (!email.includes('@')) return false;
    return email.endsWith('.com') || email.endsWith('.in');
}

function formatDate(dateStr) {
    if(!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateStr;
}

function prepareShuffledQuestions() {
    let part1 = RAW_QUESTIONS.filter(q => q.part === 1);
    let part2 = RAW_QUESTIONS.filter(q => q.part === 2);
    let part3 = RAW_QUESTIONS.filter(q => q.part === 3);

    return [
        ...shuffleArray(part1),
        ...shuffleArray(part2),
        ...shuffleArray(part3)
    ];
}

function shuffleArray(arr) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderPageNumbers() {
    const container = document.getElementById('page-numbers-container');
    container.innerHTML = '';
    activeQuestions.forEach((q, idx) => {
        const btn = document.createElement('div');
        btn.className = `page-num ${idx === currentIndex ? 'active' : ''} ${userAnswers[q.id] ? 'answered' : ''}`;
        btn.textContent = idx + 1;
        btn.onclick = () => jumpToQuestion(idx);
        container.appendChild(btn);
    });
}

function jumpToQuestion(index) {
    currentIndex = index;
    renderPageNumbers();
    loadQuestion(currentIndex);
}

function loadQuestion(index) {
    const q = activeQuestions[index];
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'source-sentence';
    title.textContent = `Q${index + 1}. Correct this sentence: "${q.source}"`;
    container.appendChild(title);

    const saved = userAnswers[q.id] || {};

    if (q.type === 'mcq') {
        const optionsDiv = document.createElement('div');
        q.options.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'mcq-option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q_${q.id}`;
            radio.value = idx;
            if (saved.answer !== undefined && saved.answer == idx) radio.checked = true;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });
        container.appendChild(optionsDiv);
    } else if (q.type === 'typing') {
        const wrap = document.createElement('div');
        wrap.innerHTML = `<p style="color: #666; font-size: 14px;"><strong>Collocation Starter:</strong> "${q.starter}..."</p>`;
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `input_${q.id}`;
        input.value = saved.answer || '';
        input.placeholder = "Type the full correct sentence here...";
        wrap.appendChild(input);
        container.appendChild(wrap);
    } else if (q.type === 'dragdrop') {
        const wrap = document.createElement('div');
        wrap.innerHTML = `<p style="color: #666; font-size: 14px;">Drag and drop blocks to form the correct sentence:</p>`;
        
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.id = 'dropZone';

        const pool = document.createElement('div');
        pool.className = 'drag-container';
        pool.id = 'dragPool';

        let allBlocks = [...q.correctBlocks, ...q.distractorBlocks];
        if (!saved.poolState) {
            allBlocks = shuffleArray(allBlocks);
        }

        const currentPlaced = saved.answerArr || [];
        const currentPool = saved.poolArr || allBlocks;

        currentPlaced.forEach(txt => dropZone.appendChild(createDragBlock(txt)));
        currentPool.forEach(txt => pool.appendChild(createDragBlock(txt)));

        wrap.appendChild(dropZone);
        wrap.appendChild(pool);
        container.appendChild(wrap);

        setupDragEvents(dropZone, pool);
    }

    if (saved.submitted) {
        showExplanation(q, saved);
    }
}

function createDragBlock(text) {
    const el = document.createElement('div');
    el.className = 'drag-item';
    el.textContent = text;
    el.draggable = true;
    el.setAttribute('data-text', text);
    return el;
}

function setupDragEvents(dropZone, pool) {
    let draggedItem = null;

    document.querySelectorAll('.drag-item').forEach(item => {
        item.addEventListener('dragstart', function() {
            draggedItem = item;
            setTimeout(() => item.style.display = 'none', 0);
        });

        item.addEventListener('dragend', function() {
            setTimeout(() => {
                draggedItem.style.display = 'block';
                draggedItem = null;
            }, 0);
        });
    });

    [dropZone, pool].forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            if (draggedItem) {
                this.appendChild(draggedItem);
            }
        });
    });
}

function submitAnswer() {
    const q = activeQuestions[currentIndex];
    let ans = null;
    let isCorrect = false;
    let userText = "";

    if (q.type === 'mcq') {
        const sel = document.querySelector(`input[name="q_${q.id}"]:checked`);
        if (!sel) return alert("Please select an answer.");
        ans = parseInt(sel.value);
        isCorrect = (ans === q.correct);
        userText = q.options[ans];
    } else if (q.type === 'typing') {
        const inputElem = document.getElementById(`input_${q.id}`);
        if (!inputElem) return;
        ans = inputElem.value.trim();
        if (!ans) return alert("Please type your response.");
        userText = ans;
        const cleanedUser = ans.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ");
        isCorrect = q.validAnswers.some(v => {
            const cleanedV = v.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ");
            return cleanedUser === cleanedV;
        });
    } else if (q.type === 'dragdrop') {
        const dropZone = document.getElementById('dropZone');
        const pool = document.getElementById('dragPool');
        if (!dropZone || !pool) return;
        const placed = Array.from(dropZone.children).map(c => c.getAttribute('data-text'));
        const remainingPool = Array.from(pool.children).map(c => c.getAttribute('data-text'));

        if (placed.length === 0) return alert("Please drag at least one block into the sentence area.");

        userText = placed.join(" ");
        ans = { placed, pool: remainingPool };

        const targetText = q.correctBlocks.join(" ");
        isCorrect = (userText.trim().toLowerCase() === targetText.trim().toLowerCase());
    }

    const prevSaved = userAnswers[q.id] || {};
    const isRevised = prevSaved.isRevised || false;

    let points = 0;
    if (!isRevised && isCorrect) points = 1;

    userAnswers[q.id] = {
        answer: (q.type === 'dragdrop') ? userText : ans,
        answerArr: (q.type === 'dragdrop') ? ans.placed : null,
        poolArr: (q.type === 'dragdrop') ? ans.pool : null,
        isCorrect: isCorrect,
        submitted: true,
        isRevised: isRevised,
        points: points,
        userText: userText
    };

    renderPageNumbers();
    loadQuestion(currentIndex);
}

function loadQuestion(index) {
    const q = activeQuestions[index];
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'source-sentence';
    title.textContent = `Q${index + 1}. Correct this sentence: "${q.source}"`;
    container.appendChild(title);

    const saved = userAnswers[q.id] || {};
    const isSubmitted = saved.submitted === true;

    if (q.type === 'mcq') {
        const optionsDiv = document.createElement('div');
        q.options.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'mcq-option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q_${q.id}`;
            radio.value = idx;
            if (saved.answer !== undefined && saved.answer == idx) radio.checked = true;
            if (isSubmitted) radio.disabled = true; // Lock radio inputs if submitted
            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });
        container.appendChild(optionsDiv);
    } else if (q.type === 'typing') {
        const wrap = document.createElement('div');
        wrap.innerHTML = `<p style="color: #666; font-size: 14px;"><strong>Collocation Starter:</strong> "${q.starter}..."</p>`;
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `input_${q.id}`;
        input.value = saved.answer || '';
        input.placeholder = "Type the full correct sentence here...";
        if (isSubmitted) input.disabled = true; // Lock text input if submitted
        wrap.appendChild(input);
        container.appendChild(wrap);
    } else if (q.type === 'dragdrop') {
        const wrap = document.createElement('div');
        wrap.innerHTML = `<p style="color: #666; font-size: 14px;">Drag and drop blocks to form the correct sentence:</p>`;
        
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.id = 'dropZone';

        const pool = document.createElement('div');
        pool.className = 'drag-container';
        pool.id = 'dragPool';

        let allBlocks = [...q.correctBlocks, ...q.distractorBlocks];
        if (!saved.poolState) {
            allBlocks = shuffleArray(allBlocks);
        }

        const currentPlaced = saved.answerArr || [];
        const currentPool = saved.poolArr || allBlocks;

        currentPlaced.forEach(txt => dropZone.appendChild(createDragBlock(txt)));
        currentPool.forEach(txt => pool.appendChild(createDragBlock(txt)));

        wrap.appendChild(dropZone);
        wrap.appendChild(pool);
        container.appendChild(wrap);

        // Only attach drag events if NOT submitted
        if (!isSubmitted) {
            setupDragEvents(dropZone, pool);
        } else {
            // Disable dragging on blocks
            dropZone.querySelectorAll('.drag-item').forEach(el => el.draggable = false);
            pool.querySelectorAll('.drag-item').forEach(el => el.draggable = false);
        }
    }

    if (isSubmitted) {
        showExplanation(q, saved);
    }
}

function showExplanation(q, saved) {
    const container = document.getElementById('question-container');
    const oldExp = container.querySelector('.explanation');
    if (oldExp) oldExp.remove();

    const expDiv = document.createElement('div');
    expDiv.className = `explanation ${saved.isCorrect ? 'correct' : 'incorrect'}`;
    let pointText = saved.isRevised ? " (0 points due to Revision)" : (saved.isCorrect ? " (+1 point)" : " (0 points)");
    expDiv.innerHTML = `<strong>Result:</strong> ${saved.isCorrect ? 'Correct' : 'Incorrect'}${pointText}<br><br>${q.explanation}`;
    container.appendChild(expDiv);
}

function reviseAnswer() {
    const q = activeQuestions[currentIndex];
    const confirmRevise = confirm("Revising this answer will forfeit points for this question. Your original and revised answers will both be logged in the report. Continue?");
    if (confirmRevise) {
        userAnswers[q.id] = {
            submitted: false,
            isRevised: true,
            answer: null,
            answerArr: null,
            poolArr: null,
            points: 0
        };
        renderPageNumbers();
        loadQuestion(currentIndex);
    }
}

function navBack() {
    if (currentIndex > 0) {
        currentIndex--;
        renderPageNumbers();
        loadQuestion(currentIndex);
    }
}

function confirmHome() {
    if (confirm("Are you sure you want to go back to Home? Unsaved changes will be lost.")) {
        showLogin();
    }
}

function generateFinalReport() {
    if (Object.keys(userAnswers).length < activeQuestions.length) {
        if (!confirm("You have unanswered questions. Are you sure you want to generate the final report?")) {
            return;
        }
    }

    let totalScore = 0;
    activeQuestions.forEach(q => {
        if (userAnswers[q.id] && userAnswers[q.id].points) {
            totalScore += userAnswers[q.id].points;
        }
    });

    currentParticipant.score = totalScore;
    currentParticipant.status = 'Complete';
    saveAttemptRecord(currentParticipant, userAnswers);

    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-summary').classList.remove('hidden');

    document.getElementById('score-display').textContent = `Final Score for ${currentParticipant.name}: ${totalScore} / ${activeQuestions.length}`;

    const tbody = document.getElementById('summary-tbody');
    tbody.innerHTML = '';

    activeQuestions.forEach(q => {
        const u = userAnswers[q.id] || { userText: 'Not Answered', isCorrect: false };
        const tr = document.createElement('tr');

        const tdUser = document.createElement('td');
        tdUser.innerHTML = `<strong>Source:</strong> ${q.source}<br>
            <strong>Your Answer:</strong> ${u.userText}<br>
            ${u.isCorrect ? '<span style="color:green;font-weight:bold;">Correct</span>' : '<span style="color:red;font-weight:bold;">Incorrect</span>'}<br><br>
            <small style="color:#333;">${q.explanation}</small>`;

        const tdRight = document.createElement('td');
        tdRight.innerHTML = getHighlightedCorrectAnswer(q);

        tr.appendChild(tdUser);
        tr.appendChild(tdRight);
        tbody.appendChild(tr);
    });

    document.getElementById('feedback-points').innerHTML = `
        <ol style="margin-left: 20px; padding: 0;">
            <li style="margin-bottom: 12px;">
                <strong>Eliminate Stative Verb Continuous Forms & Master Time Expressions:</strong> Avoid using continuous '-ing' verbs with states of mind or possession. Distinguish between 'since' (starting time point) and 'for' (duration).
                <br><em>Example 1:</em> Say "I have known him for two years" instead of "I am knowing him since two years."
                <br><em>Example 2:</em> Say "I have a query" instead of "I am having a query."
            </li>
            <li style="margin-bottom: 12px;">
                <strong>Use Standard Professional Collocations & Prepositions:</strong> Replace direct Hindi translations with proper prepositions (e.g., 'listen to').
                <br><em>Example 1:</em> Say "He is not listening to me" instead of "He is not listening me."
                <br><em>Example 2:</em> Say "You can walk to the office" instead of "You can go by walking."
            </li>
            <li>
                <strong>Apply Proper Question Inversion and Future Time Phrases:</strong> Invert subject and verb in direct questions and use 'in' for future time frames.
                <br><em>Example 1:</em> Say "Where are you going?" instead of "Where you are going?".
                <br><em>Example 2:</em> Say "I will come in two days" instead of "I will come after two days."
            </li>
        </ol>
    `;
}

function getHighlightedCorrectAnswer(q) {
    if (q.type === 'mcq') {
        return `<span class="collocation-highlight">${q.options[q.correct]}</span>`;
    } else if (q.type === 'typing') {
        return `<span class="collocation-highlight">${q.validAnswers[0]}</span>`;
    } else if (q.type === 'dragdrop') {
        return `<span class="collocation-highlight">${q.correctBlocks.join(' ')}</span>`;
    }
}

function getStoredAttempts() {
    return JSON.parse(localStorage.getItem('quiz_attempts') || '[]');
}

function saveAttemptRecord(participant, answers) {
    let attempts = getStoredAttempts();
    attempts = attempts.filter(a => a.name !== participant.name);
    attempts.push({ ...participant, answers, timestamp: new Date().toISOString() });
    localStorage.setItem('quiz_attempts', JSON.stringify(attempts));
}

document.getElementById('admin-login-form').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('admin-email').value;
    const pass = document.getElementById('admin-password').value;

    if (email === 'ryanaidennis@gmail.com' && pass === 'Love@123') {
        document.getElementById('screen-admin-login').classList.add('hidden');
        document.getElementById('screen-admin-dashboard').classList.remove('hidden');
        renderAdminTable();
    } else {
        alert("Invalid Admin Credentials.");
    }
};

function renderAdminTable() {
    const tbody = document.getElementById('admin-tbody');
    tbody.innerHTML = '';
    const attempts = getStoredAttempts();
    const filterCohort = document.getElementById('filter-cohort').value;

    // Combine ROSTER names and custom names stored in attempts
    let allNames = [...new Set([...ROSTER, ...attempts.map(a => a.name)])];

    allNames.forEach(name => {
        const att = attempts.find(a => a.name === name);
        const cohort = att ? att.cohort : 'N/A';

        if (filterCohort !== 'ALL' && att && att.cohort !== filterCohort) return;

        const tr = document.createElement('tr');
        const isComplete = att && att.status === 'Complete';

        tr.innerHTML = `
            <td><input type="checkbox" class="admin-select-cb" data-name="${name}"></td>
            <td>${name}</td>
            <td>${cohort}</td>
            <td>${att ? att.date : '-'}</td>
            <td>${att ? att.email : '-'}</td>
            <td><span class="${isComplete ? 'status-complete' : 'status-incomplete'}">${isComplete ? 'Complete' : 'Incomplete'}</span></td>
            <td>${att ? att.score : '-'}</td>
            <td>
                ${att ? `<button class="btn-danger" style="padding:4px 8px; font-size:12px;" onclick="deleteAttempt('${name}')">Delete Attempt</button>` : '-'}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteAttempt(name) {
    if (confirm(`Are you sure you want to delete the quiz attempt for ${name}?`)) {
        let attempts = getStoredAttempts();
        attempts = attempts.filter(a => a.name !== name);
        localStorage.setItem('quiz_attempts', JSON.stringify(attempts));
        renderAdminTable();
    }
}

function toggleSelectAll(masterCb) {
    document.querySelectorAll('.admin-select-cb').forEach(cb => cb.checked = masterCb.checked);
}

function exportExcel() {
    const attempts = getStoredAttempts();
    const selectedNames = Array.from(document.querySelectorAll('.admin-select-cb:checked')).map(cb => cb.getAttribute('data-name'));

    if (selectedNames.length === 0) {
        return alert("Please select at least one candidate to export.");
    }

    const exportData = [];

    selectedNames.forEach(name => {
        const att = attempts.find(a => a.name === name);
        if (att) {
            exportData.push({
                "Participant Name": att.name,
                "Cohort Code": att.cohort,
                "Attempt Date": att.date,
                "Email": att.email,
                "Status": att.status,
                "Total Score": att.score
            });
        } else {
            exportData.push({
                "Participant Name": name,
                "Cohort Code": "N/A",
                "Attempt Date": "N/A",
                "Email": "N/A",
                "Status": "Incomplete",
                "Total Score": "N/A"
            });
        }
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Quiz Results");
    XLSX.writeFile(workbook, "Indian_English_Quiz_Report.xlsx");
}

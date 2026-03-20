/* ========================================
   AIONEX 2K26 — Main Script
   Data-driven rendering + GSAP animations
   ======================================== */

// ─────────────────────────────────────────
// DATA: Edit these arrays to add/remove events & faculty
// ─────────────────────────────────────────

const technicalEvents = [
    {
        name: "Paper Presentation",
        description: "Present your research on emerging technologies. Share your insights and innovations with an expert panel.\n\nTheme: Artificial Intelligence, Data Science",
        icon: "file-text",
        coordinator: { name: "Aswin A", phone: "+91 78458 29455" },
        rules: [
            "<span class='rule-key'>Team:</span> 1–2 participants per team",
            "<span class='rule-key'>Topic:</span> Must be related to technology or emerging tech",
            "<span class='rule-key'>Presentation:</span> 5 minutes per team",
            "<span class='rule-key'>Q&A:</span> 1 minute with judges",
            "<span class='rule-key'>Submission:</span> Bring PPT in a pen drive or submit PDF during registration",
            "<span class='rule-key'>Offline:</span> Ensure presentation works without internet",
            "<span class='rule-key'>File Name:</span> Use participant/team leader name for easy identification"
        ]
    },
    {
        name: "Debugging",
        description: "Find and fix bugs in the given code snippets. Test your debugging skills under pressure with tricky code challenges.",
        icon: "bug",
        coordinator: { name: "Afzar", phone: "+91 75300 77048" },
        rules: [
            "Do not use mobile phones inside the event hall.",
            "This event is divided into 2 Rounds.",
            "<span class='rule-key'>Round 1:</span> 30 minutes — Pen and paper based.",
            "Only winning participants from Round 1 proceed to Round 2.",
            "<span class='rule-key'>Round 2:</span> 30 minutes — Software based.",
            "The decision of the judges is final."
        ]
    },
    {
        name: "Prism AI",
        description: "Craft the perfect prompts to get AI to generate desired outputs. Master the art of prompt engineering.",
        icon: "sparkles",
        coordinator: { name: "Jothison", phone: "+91 94894 28051" },
        rules: [
            "<span class='rule-key'>Round 1 — Logo Creation:</span>",
            "Team: Individual or team of 2",
            "Task: Write a prompt and generate a logo using AI (e.g., ChatGPT)",
            "Topic: Given by organizers",
            "Time: 8 minutes",
            "Selection: Top scorers qualify for Round 2",
            "<span class='rule-key'>Round 2 — Scenery Prompt:</span>",
            "Team: Same participants continue",
            "Task: Create a prompt using given keywords/characters and generate an image",
            "Time: 10 minutes",
            "Evaluation: Based on creativity and accuracy"
        ]
    },
    {
        name: "Technical Quiz",
        description: "Test your knowledge on technology, programming, AI, and current trends in the tech world.",
        icon: "brain",
        coordinator: { name: "Sreejith", phone: "+91 77086 56064" },
        rules: [
            "Participants must arrive on time and register before the event starts.",
            "Teams will consist of 2 members each.",
            "The quiz will be conducted in two rounds:",
            "<span class='rule-key'>Round 1:</span> Technical questions related to Engineering",
            "<span class='rule-key'>Round 2:</span> Rapid fire",
            "30 seconds will be given for each question.",
            "Top scoring students qualify for the next round.",
            "No use of mobile phones or any external help during the quiz."
        ]
    },
];

const nonTechnicalEvents = [
    {
        name: "Spotify",
        description: "Guess the song from short clips and prove your musical knowledge. A fun and energetic challenge for music lovers.",
        icon: "music",
        coordinator: { name: "Aginson", phone: "+91 73958 87298" },
        rules: [
            "Team: 2 members per team",
            "<span class='rule-key'>Round 1:</span> 20 questions — Top 10 teams qualify",
            "<span class='rule-key'>Round 2:</span> 15 questions — Top 2 teams qualify",
            "Time: 30 seconds per question",
            "Final Task: Burst balloon → read proverb → sing a related song",
            "<span class='rule-key'>Scoring:</span> Correct song → +1 mark; Wrong/No song → chance passes to next team",
            "<span class='rule-key'>Negative Marking:</span> Wrong song / no answer / cheating → −1 mark",
            "No mobile phones or external help allowed"
        ]
    },
    {
        name: "Connection Puzzle",
        description: "Find the hidden connections between seemingly unrelated clues. A brain-teasing puzzle that tests your lateral thinking.",
        icon: "puzzle",
        coordinator: { name: "Godson Lalu", phone: "+91 63691 20813" },
        rules: [
            "<span class='rule-key'>Round 1 — Connections:</span>",
            "Team: 2 members per team",
            "Questions: 10 questions displayed",
            "Answering: Raise hand; first recognized team answers",
            "Rule: No shouting answers",
            "Scoring: +10 (correct), −5 (wrong)",
            "Selection: Top teams qualify for next round",
            "<span class='rule-key'>Round 2 — Puzzles:</span>",
            "Task: Solve puzzle questions displayed on screen",
            "Answering: Raise hand; first recognized team answers",
            "Rule: No shouting answers",
            "Scoring: +10 (correct)"
        ]
    },
    {
        name: "Who Am I",
        description: "Guess the personality from clues given one at a time. The fewer clues you need, the more points you score!",
        icon: "user-search",
        coordinator: { name: "Aswin Raj", phone: "+91 88075 11051" },
        rules: [
            "Individual participation",
            "Clues revealed one by one",
            "Points decrease with each clue used",
            "Covers tech leaders, scientists, and pop culture"
        ]
    }
];

const facultyCategories = {
    hod: [
        {
            name: "Dr. Dhanya D",
            designation: "Head of the Department",
            role: "",
            image: "assets/dhanaya.jpg"
        }
    ],
    symposium: [
        {
            name: "Mrs. Sherlin Y C",
            designation: "Assistant Professor",
            role: "",
            image: "assets/sherlin.png"
        },
    ],
    event: [
        {
            name: "Mrs. Ashlin Femi R N",
            designation: "Assistant Professor",
            role: "Event Coordinator",
            image: "assets/ashlin.png"
        },
    ],
    coordinators: [
        {
            name: "Mrs. Antush Fredian A",
            designation: "Assistant Professor",
            role: "Paper Presentation Coordinator",
            image: "assets/ANTUSH_FREDINA.png"
        },
        {
            name: "Ms. Jeffe Libi Shiny J",
            designation: "Assistant Professor",
            role: "Debugging Coordinator",
            image: "assets/jeffe.png"
        },
        {
            name: "Mrs. Reshma B Viswan",
            designation: "Assistant Professor",
            role: "Who Am I Coordinator",
            image: "assets/reshma.png"
        },
        {
            name: "Mrs. Jasmin Reeda R",
            designation: "Assistant Professor",
            role: "Tech Quiz Coordinator",
            image: "assets/jasmin.png"
        },
        {
            name: "Mrs. Ajitha M",
            designation: "Assistant Professor",
            role: "Prompt Coordinator",
            image: "assets/ajitha.png"
        },
        {
            name: "Mrs. Merlin Sheeba",
            designation: "Assistant Professor",
            role: "Connection Puzzle Coordinator",
            image: "assets/def-ava.avif"
        },
        {
            name: "Mr. Ramesh",
            designation: "Assistant Professor",
            role: "Spotify Coordinator",
            image: "assets/def-ava.avif"
        }
    ],
    staff: [
        {
            name: "Mr. Jino Singh G",
            designation: "Assistant Professor",
            role: "",
            image: "assets/jino.png"
        },
        {
            name: "Shobhana S",
            designation: "Assistant Professor",
            role: "",
            image: "assets/shobhana.jpg"
        }
    ],
    studentcoordinators: [
        {
            name: "Ashin J",
            designation: "Student Coordinator",
            role: "",
            image: "assets/ashin.jpg"
        },
        {
            name: "Arshek John J D",
            designation: "Student Coordinator",
            role: "",
            image: "assets/arshekh.jpg"
        }
    ]
};

// ─────────────────────────────────────────
// RENDER: Event Cards
// ─────────────────────────────────────────

const RULES_PREVIEW_COUNT = 3; // How many rules to show before "Read More"

function renderEventCard(event, type) {
    const accentClass = type === 'tech' ? 'tech' : 'non-tech';
    const accentColor = type === 'tech' ? '#c084fc' : '#e879f9';
    const accentColorRgb = type === 'tech' ? '192,132,252' : '232,121,249';

    let rulesHtml = '';
    if (event.rules && event.rules.length > 0) {
        const preview = event.rules.slice(0, RULES_PREVIEW_COUNT);
        const rest = event.rules.slice(RULES_PREVIEW_COUNT);
        const hasMore = rest.length > 0;

        rulesHtml = `
            <div class="rules-section border-t border-white/5 pt-4 mt-4">
                <div class="flex items-center gap-2 mb-3">
                    <i data-lucide="scroll-text" style="width:14px;height:14px;color:${accentColor};opacity:0.7"></i>
                    <span class="text-xs font-semibold uppercase tracking-wider" style="color:${accentColor}">Rules</span>
                </div>
                <ul class="rules-list space-y-1.5">
                    ${preview.map(rule => `
                        <li class="flex items-start gap-2 text-xs text-white/40 leading-relaxed">
                            <span style="color:${accentColor};opacity:0.5;margin-top:2px;flex-shrink:0">•</span>
                            <span>${rule}</span>
                        </li>
                    `).join('')}
                    ${hasMore ? `
                    <li class="rules-extra hidden">
                        <ul class="space-y-1.5">
                            ${rest.map(rule => `
                                <li class="flex items-start gap-2 text-xs text-white/40 leading-relaxed">
                                    <span style="color:${accentColor};opacity:0.5;margin-top:2px;flex-shrink:0">•</span>
                                    <span>${rule}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </li>
                    <li>
                        <button class="read-more-btn mt-2 text-xs font-semibold flex items-center gap-1 transition-all duration-200" style="color:${accentColor}" onclick="toggleRules(this)" data-accent="${accentColor}" data-accent-rgb="${accentColorRgb}">
                            <span class="btn-text">Read More</span>
                            <i data-lucide="chevron-down" style="width:12px;height:12px" class="btn-icon transition-transform duration-200"></i>
                        </button>
                    </li>
                    ` : ''}
                </ul>
            </div>`;
    }

    return `
        <div class="event-card ${type === 'non-tech' ? 'non-tech' : ''}" data-animate="event">
            <div class="event-card-icon ${accentClass}">
                <i data-lucide="${event.icon}" style="width:22px;height:22px;color:${accentColor}"></i>
            </div>
            <h3 class="font-space text-xl font-semibold text-white mb-3 tracking-tight">${event.name}</h3>
            <p class="text-sm text-white/40 leading-relaxed mb-5" style="flex-grow:1">${event.description}</p>
            <div class="border-t border-white/5 pt-4">
                <div class="flex items-center gap-2 mb-1.5">
                    <i data-lucide="user" style="width:14px;height:14px;color:${accentColor};opacity:0.6"></i>
                    <span class="text-xs font-medium text-white/60">${event.coordinator.name}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i data-lucide="phone" style="width:14px;height:14px;color:${accentColor};opacity:0.6"></i>
                    <span class="text-xs text-white/40">${event.coordinator.phone}</span>
                </div>
            </div>
            ${rulesHtml}
        </div>
    `;
}

function toggleRules(btn) {
    const rulesSection = btn.closest('.rules-section');
    const extraLi = rulesSection.querySelector('.rules-extra');
    const btnText = btn.querySelector('.btn-text');
    const btnIcon = btn.querySelector('.btn-icon');
    const isOpen = !extraLi.classList.contains('hidden');

    if (isOpen) {
        extraLi.classList.add('hidden');
        btnText.textContent = 'Read More';
        btnIcon.style.transform = 'rotate(0deg)';
    } else {
        extraLi.classList.remove('hidden');
        btnText.textContent = 'Show Less';
        btnIcon.style.transform = 'rotate(180deg)';
    }
    // Re-init icons in the newly revealed content
    lucide.createIcons();
}

function renderEvents() {
    const techGrid = document.getElementById('technical-events-grid');
    const nonTechGrid = document.getElementById('non-technical-events-grid');

    if (techGrid) {
        techGrid.innerHTML = technicalEvents.map(e => renderEventCard(e, 'tech')).join('');
    }
    if (nonTechGrid) {
        nonTechGrid.innerHTML = nonTechnicalEvents.map(e => renderEventCard(e, 'non-tech')).join('');
    }
}

// ─────────────────────────────────────────
// RENDER: Faculty Cards
// ─────────────────────────────────────────

function renderFacultyCard(faculty, featured = false) {
    const cardClass = featured ? 'faculty-card faculty-card-featured' : 'faculty-card';
    const imgClass = featured ? 'faculty-card-img faculty-card-img-featured' : 'faculty-card-img';
    const roleHtml = faculty.role
        ? `<p class="text-sm text-white/40">${faculty.role}</p>`
        : '';

    return `
        <div class="${cardClass}" data-animate="faculty">
            <img src="${faculty.image}" alt="${faculty.name}" class="${imgClass}" loading="lazy" style="object-position:center top">
            <h3 class="font-space text-lg font-semibold text-white mb-1">${faculty.name}</h3>
            <p class="text-xs font-medium tracking-wide uppercase mb-2" style="color:#c084fc">${faculty.designation}</p>
            ${roleHtml}
        </div>
    `;
}

function renderFaculty() {
    const hodGrid = document.getElementById('faculty-hod');
    const symposiumGrid = document.getElementById('faculty-symposium');
    const eventGrid = document.getElementById('faculty-event');
    const coordGrid = document.getElementById('faculty-coordinators');
    const staffGrid = document.getElementById('faculty-staff');
    const studentCoordGrid = document.getElementById('faculty-student-coordinators');

    if (hodGrid) {
        hodGrid.innerHTML = facultyCategories.hod.map(f => renderFacultyCard(f, true)).join('');
    }
    if (symposiumGrid) {
        symposiumGrid.innerHTML = facultyCategories.symposium.map(f => renderFacultyCard(f, true)).join('');
    }
    if (eventGrid) {
        eventGrid.innerHTML = facultyCategories.event.map(f => renderFacultyCard(f, true)).join('');
    }
    if (coordGrid) {
        coordGrid.innerHTML = facultyCategories.coordinators.map(f => renderFacultyCard(f)).join('');
    }
    if (staffGrid) {
        staffGrid.innerHTML = facultyCategories.staff.map(f => renderFacultyCard(f)).join('');
    }
    if (studentCoordGrid && facultyCategories.studentcoordinators) {
        studentCoordGrid.innerHTML = facultyCategories.studentcoordinators.map(f => renderFacultyCard(f)).join('');
    }
}

// ─────────────────────────────────────────
// PARTICLES: Subtle background canvas
// ─────────────────────────────────────────

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        const count = Math.min(60, Math.floor(window.innerWidth / 20));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.3 + 0.05
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${getParticleColor()}, ${p.opacity})`;
            ctx.fill();

            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[j].x - p.x;
                const dy = particles[j].y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${getParticleColor()}, ${0.04 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(drawParticles);
    }

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}

// ─────────────────────────────────────────
// THEME TOGGLE: Light / Dark
// ─────────────────────────────────────────

function getParticleColor() {
    const style = getComputedStyle(document.documentElement);
    return style.getPropertyValue('--particle-color').trim() || '192, 132, 252';
}

function initThemeToggle() {
    const html = document.documentElement;
    const saved = localStorage.getItem('aionex-theme');
    if (saved) {
        html.setAttribute('data-theme', saved);
    }

    function updateIcons() {
        const isDark = html.getAttribute('data-theme') !== 'light';
        document.querySelectorAll('.theme-icon-dark').forEach(el => {
            el.style.display = isDark ? 'block' : 'none';
        });
        document.querySelectorAll('.theme-icon-light').forEach(el => {
            el.style.display = isDark ? 'none' : 'block';
        });
    }

    function toggle() {
        const current = html.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        localStorage.setItem('aionex-theme', next);
        document.body.style.backgroundColor = getComputedStyle(html).getPropertyValue('--bg-body').trim();
        updateIcons();
        lucide.createIcons();
    }

    document.querySelectorAll('#theme-toggle, #theme-toggle-mobile').forEach(btn => {
        btn.addEventListener('click', toggle);
    });

    // Apply saved theme on load
    updateIcons();
    document.body.style.backgroundColor = getComputedStyle(html).getPropertyValue('--bg-body').trim();
}

// ─────────────────────────────────────────
// NAVBAR: Scroll blur + mobile toggle
// ─────────────────────────────────────────

function initNavbar() {
    const nav = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Scroll blur effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('menu-active');
            mobileMenu.classList.toggle('mobile-menu-closed');
            mobileMenu.classList.toggle('mobile-menu-open');
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('menu-active');
                mobileMenu.classList.add('mobile-menu-closed');
                mobileMenu.classList.remove('mobile-menu-open');
            });
        });
    }
}

// ─────────────────────────────────────────
// GSAP ANIMATIONS
// ─────────────────────────────────────────

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // ── Liquid Glass Hero Animations (spring physics feel) ──
    const heroTl = gsap.timeline({ delay: 0.2 });

    // Set initial states with slight blur for glassy reveal
    gsap.set('.hero-badge', { filter: 'blur(8px)' });
    gsap.set('.hero-title', { filter: 'blur(12px)' });
    gsap.set('.hero-tagline', { filter: 'blur(6px)' });
    gsap.set('.hero-details', { filter: 'blur(4px)' });
    gsap.set('.hero-buttons', { filter: 'blur(6px)' });
    gsap.set('.hero-image', { filter: 'blur(16px)' });

    heroTl
        .to('.hero-badge', {
            opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9,
            ease: 'back.out(1.7)'
        })
        .to('.hero-title', {
            opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0,
            ease: 'back.out(1.4)'
        }, '-=0.55')
        .to('.hero-tagline', {
            opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75,
            ease: 'power4.out'
        }, '-=0.55')
        .to('.hero-details', {
            opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.65,
            ease: 'power3.out'
        }, '-=0.45')
        .to('.hero-buttons', {
            opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75,
            ease: 'back.out(1.5)'
        }, '-=0.4')
        .to('.hero-image', {
            opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.1,
            ease: 'back.out(1.2)'
        }, '-=0.65')
        .to('.scroll-indicator', {
            opacity: 1, duration: 0.6, ease: 'power2.out'
        }, '-=0.3');

    // Set initial positions
    gsap.set('.hero-badge', { y: 24, opacity: 0 });
    gsap.set('.hero-title', { y: 36, opacity: 0 });
    gsap.set('.hero-tagline', { y: 22, opacity: 0 });
    gsap.set('.hero-details', { y: 18, opacity: 0 });
    gsap.set('.hero-buttons', { y: 22, opacity: 0 });
    gsap.set('.hero-image', { x: 48, opacity: 0 });
    gsap.set('.scroll-indicator', { opacity: 0 });

    // ── Events Section ──
    gsap.to('.event-label', {
        scrollTrigger: {
            trigger: '.events-header',
            start: 'top 80%',
        },
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
    });
    gsap.set('.event-label', { y: 15 });

    gsap.to('.event-title', {
        scrollTrigger: {
            trigger: '.events-header',
            start: 'top 80%',
        },
        opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: 'power3.out'
    });
    gsap.set('.event-title', { y: 20 });

    // Tech separator — liquid glass reveal
    gsap.fromTo('.tech-separator',
        { opacity: 0, scaleX: 0.85, filter: 'blur(8px)' },
        {
            scrollTrigger: { trigger: '.tech-separator', start: 'top 85%' },
            opacity: 1, scaleX: 1, filter: 'blur(0px)',
            duration: 0.9, ease: 'back.out(1.6)'
        }
    );

    // Non-tech separator
    gsap.fromTo('.nontech-separator',
        { opacity: 0, scaleX: 0.85, filter: 'blur(8px)' },
        {
            scrollTrigger: { trigger: '.nontech-separator', start: 'top 85%' },
            opacity: 1, scaleX: 1, filter: 'blur(0px)',
            duration: 0.9, ease: 'back.out(1.6)'
        }
    );

    // Stagger event cards — glass drop-in with spring
    gsap.utils.toArray('[data-animate="event"]').forEach((card, i) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.94, filter: 'blur(10px)' },
            {
                scrollTrigger: { trigger: card, start: 'top 89%' },
                opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                duration: 0.85,
                delay: (i % 4) * 0.09,
                ease: 'back.out(1.4)'
            }
        );
    });

    // ── Faculty Section ──
    gsap.to('.faculty-label', {
        scrollTrigger: {
            trigger: '.faculty-header',
            start: 'top 80%',
        },
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
    });
    gsap.set('.faculty-label', { y: 15 });

    gsap.to('.faculty-title', {
        scrollTrigger: {
            trigger: '.faculty-header',
            start: 'top 80%',
        },
        opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: 'power3.out'
    });
    gsap.set('.faculty-title', { y: 20 });

    // Faculty category separators — liquid reveal
    gsap.utils.toArray('.faculty-separator').forEach((sep) => {
        gsap.fromTo(sep,
            { opacity: 0, x: -20, filter: 'blur(6px)' },
            {
                scrollTrigger: { trigger: sep, start: 'top 86%' },
                opacity: 1, x: 0, filter: 'blur(0px)',
                duration: 0.8, ease: 'back.out(1.5)'
            }
        );
    });

    // Stagger faculty cards — glass drop spring
    gsap.utils.toArray('[data-animate="faculty"]').forEach((card, i) => {
        gsap.fromTo(card,
            { opacity: 0, y: 44, scale: 0.93, filter: 'blur(10px)' },
            {
                scrollTrigger: { trigger: card, start: 'top 89%' },
                opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                duration: 0.8,
                delay: i * 0.08,
                ease: 'back.out(1.5)'
            }
        );
    });

    // ── Footer — glass fade up ──
    gsap.utils.toArray('.footer-item').forEach((item, i) => {
        gsap.fromTo(item,
            { opacity: 0, y: 28, filter: 'blur(6px)' },
            {
                scrollTrigger: { trigger: item, start: 'top 91%' },
                opacity: 1, y: 0, filter: 'blur(0px)',
                duration: 0.7, delay: i * 0.1,
                ease: 'back.out(1.4)'
            }
        );
    });
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderEvents();
    renderFaculty();

    // Initialize Lucide icons (after dynamic content is rendered)
    lucide.createIcons();

    // Initialize features
    initThemeToggle();
    initParticles();
    initNavbar();

    // Wait a tick for DOM to settle, then animate
    requestAnimationFrame(() => {
        initAnimations();
    });
});

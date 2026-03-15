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
            "Team of 2 members",
            "Presentation duration: 8 minutes + 2 minutes Q&A",
            "Topics must be related to AI or Data Science",
            "PPT must be submitted before the event"
        ]
    },
    {
        name: "Debugging",
        description: "Find and fix bugs in the given code snippets. Test your debugging skills under pressure with tricky code challenges.",
        icon: "bug",
        coordinator: { name: "Afzar", phone: "+91 75300 77048" },
        rules: [
            "Individual participation",
            "Time limit: 30 minutes",
            "Languages: C, Python, or Java",
            "No external resources allowed"
        ]
    },
    {
        name: "Technical Quiz",
        description: "Test your knowledge on technology, programming, AI, and current trends in the tech world.",
        icon: "brain",
        coordinator: { name: "Sreejith", phone: "+91 77086 56064" },
        rules: [
            "1.Participants must arrive on time and register before the event starts.",
            "2.Teams will consist of 2 members each.",
            "3.The quiz will be conducted in two rounds:",
            "<span style='font-weight: bold;'>Round 1:</span> Technical questions related to Engineering",
            "<span style='font-weight: bold;'>Round 2:</span> Rapid fire",
            "4.30 seconds will be given for each question.",
            "5.Top scoring students qualify for the next round.",
            "6.No use of mobile phones or any external help during the quiz."
        ]
    },
    {
        name: "Prompt",
        description: "Craft the perfect prompts to get AI to generate desired outputs. Master the art of prompt engineering.",
        icon: "sparkles",
        coordinator: { name: "Jothison", phone: "+91 94894 28051" },
        rules: [
            "Individual participation",
            "AI tool will be provided",
            "Judged on creativity and accuracy of output",
            "Time limit: 20 minutes per challenge"
        ]
    }
];

const nonTechnicalEvents = [
    {
        name: "Aginson",
        description: "Guess the song from short clips and prove your musical knowledge. A fun and energetic challenge for music lovers.",
        icon: "music",
        coordinator: { name: "Student Coordinator", phone: "+91 73958 87298" },
        rules: [
            "Team of 2 members",
            "Multiple rounds with increasing difficulty",
            "No using phones or Shazam",
            "Covers all genres and languages"
        ]
    },
    {
        name: "Connection Puzzle",
        description: "Find the hidden connections between seemingly unrelated clues. A brain-teasing puzzle that tests your lateral thinking.",
        icon: "puzzle",
        coordinator: { name: "Godson Lalu", phone: "+91 63691 20813" },
        rules: [
            "Team of 2 members",
            "Multiple rounds",
            "Find the common link between given items",
            "Time-based scoring"
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
            "Points decrease with each clue",
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
        }
    ],
    staff: [
        {
            name: "Mrs. Sherlin Y C",
            designation: "Assistant Professor",
            role: "",
            image: "assets/sherlin.png"
        },
        {
            name: "Mr. Jino Singh G",
            designation: "Assistant Professor",
            role: "",
            image: "assets/jino.png"
        },
        {
            name: "Mr. Ramesh",
            designation: "Assistant Professor",
            role: "",
            image: "assets/def-ava.avif"
        }
    ]
};

// ─────────────────────────────────────────
// RENDER: Event Cards
// ───────────────────────────────────────  ──

function renderEventCard(event, type) {
    const accentClass = type === 'tech' ? 'tech' : 'non-tech';
    const accentColor = type === 'tech' ? '#ff6a00' : '#ff9500';

    const rulesHtml = event.rules && event.rules.length > 0
        ? `<div class="border-t border-white/5 pt-4 mt-4">
                <div class="flex items-center gap-2 mb-3">
                    <i data-lucide="scroll-text" style="width:14px;height:14px;color:${accentColor};opacity:0.7"></i>
                    <span class="text-xs font-semibold uppercase tracking-wider" style="color:${accentColor}">Rules</span>
                </div>
                <ul class="space-y-1.5">
                    ${event.rules.map(rule => `
                        <li class="flex items-start gap-2 text-xs text-white/35 leading-relaxed">
                            <span style="color:${accentColor};opacity:0.5;margin-top:2px">•</span>
                            <span>${rule}</span>
                        </li>
                    `).join('')}
                </ul>
           </div>`
        : '';

    return `
        <div class="event-card ${type === 'non-tech' ? 'non-tech' : ''}" data-animate="event">
            <div class="event-card-icon ${accentClass}">
                <i data-lucide="${event.icon}" style="width:22px;height:22px;color:${accentColor}"></i>
            </div>
            <h3 class="font-space text-xl font-semibold text-white mb-3 tracking-tight">${event.name}</h3>
            <p class="text-sm text-white/40 leading-relaxed mb-5">${event.description}</p>
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
            <img src="${faculty.image}" alt="${faculty.name}" class="${imgClass}" loading="lazy">
            <h3 class="font-space text-lg font-semibold text-white mb-1">${faculty.name}</h3>
            <p class="text-xs text-neon-purple/80 font-medium tracking-wide uppercase mb-2">${faculty.designation}</p>
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
}

// ─────────────────────────────────────────
// PARTICLES: Subtle background canvas
// ─────────────────────────────────────────

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

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
            ctx.fillStyle = `rgba(255, 106, 0, ${p.opacity})`;
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
                    ctx.strokeStyle = `rgba(255, 106, 0, ${0.04 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        animId = requestAnimationFrame(drawParticles);
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

    // ── Hero Animations ──
    const heroTl = gsap.timeline({ delay: 0.3 });

    heroTl
        .to('.hero-badge', {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
        })
        .to('.hero-title', {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out'
        }, '-=0.5')
        .to('.hero-tagline', {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
        }, '-=0.5')
        .to('.hero-details', {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
        }, '-=0.4')
        .to('.hero-buttons', {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
        }, '-=0.3')
        .to('.hero-image', {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out'
        }, '-=0.6')
        .to('.scroll-indicator', {
            opacity: 1, duration: 0.5, ease: 'power2.out'
        }, '-=0.2');

    // Set initial positions
    gsap.set('.hero-badge', { y: 20 });
    gsap.set('.hero-title', { y: 30 });
    gsap.set('.hero-tagline', { y: 20 });
    gsap.set('.hero-details', { y: 20 });
    gsap.set('.hero-buttons', { y: 20 });
    gsap.set('.hero-image', { x: 40 });

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

    // Tech separator
    gsap.to('.tech-separator', {
        scrollTrigger: {
            trigger: '.tech-separator',
            start: 'top 85%',
        },
        opacity: 1, duration: 0.7, ease: 'power2.out'
    });

    // Non-tech separator
    gsap.to('.nontech-separator', {
        scrollTrigger: {
            trigger: '.nontech-separator',
            start: 'top 85%',
        },
        opacity: 1, duration: 0.7, ease: 'power2.out'
    });

    // Stagger event cards
    gsap.utils.toArray('[data-animate="event"]').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
            },
            opacity: 0,
            y: 40,
            duration: 0.7,
            delay: (i % 3) * 0.12,
            ease: 'power3.out'
        });
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

    // Faculty category separators
    gsap.utils.toArray('.faculty-separator').forEach((sep) => {
        gsap.to(sep, {
            scrollTrigger: {
                trigger: sep,
                start: 'top 85%',
            },
            opacity: 1, duration: 0.7, ease: 'power2.out'
        });
    });

    // Stagger faculty cards
    gsap.utils.toArray('[data-animate="faculty"]').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
            },
            opacity: 0,
            y: 40,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // ── Footer ──
    gsap.utils.toArray('.footer-item').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
            },
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out'
        });
        gsap.set(item, { y: 20 });
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
    initParticles();
    initNavbar();

    // Wait a tick for DOM to settle, then animate
    requestAnimationFrame(() => {
        initAnimations();
    });
});

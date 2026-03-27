/**
 * BMSCE Placement Portal - Dynamic Content Loader
 * Handles Roadmap, Statistics, and Recruiter Grid
 */

// 1. Placement Roadmap Data (Based on BMSCE Guidelines)
const roadmapSteps = [
    { 
        id: 1, 
        title: "Student Registration", 
        desc: "Students enroll with the Placement Cell, upload verified CVs, and select industry tracks (IT, Core, or Management)." 
    },
    { 
        id: 2, 
        title: "Training & Skill-Up", 
        desc: "Comprehensive pre-placement training covering quantitative aptitude, soft skills, and technical mock interviews." 
    },
    { 
        id: 3, 
        title: "Eligibility Check", 
        desc: "Review of academic records (CGPA 6.0+) and backlog status against specific company recruitment criteria." 
    },
    { 
        id: 4, 
        title: "Drive Scheduling", 
        desc: "Coordination of campus visits or virtual drives with detailed job descriptions (JDs) shared in advance." 
    },
    { 
        id: 5, 
        title: "Recruitment Rounds", 
        desc: "Final selection involving online assessments, Group Discussions (GD), Technical, and HR interview rounds." 
    }
];

// 2. Recruiter Data with Image Pathing
// Replace 'logo_filename' with actual filenames in your assets folder
const recruiters = [
    { name: "Accolite Digital", logo: "accolite.png" },
    { name: "Atos", logo: "atos.png" },
    { name: "HSBC", logo: "hsbc.png" },
    { name: "Juspay", logo: "juspay.png" },
    { name: "Kyndryl", logo: "kyndryl.png" },
    { name: "Hexaware", logo: "hexaware.png" },
    { name: "Cvent", logo: "cvent.png" },
    { name: "JK Tech", logo: "jk_tech.png" },
    { name: "Hinduja Tech", logo: "hinduja.png" },
    { name: "KodNest", logo: "kodnest.png" },
    { name: "Kanini", logo: "kanini.png" },
    { name: "Juego Studios", logo: "juego.png" }
];

document.addEventListener('DOMContentLoaded', () => {
    initRoadmap();
    initRecruiters();
    // Initialize Lucide icons if the library is loaded
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

/**
 * Renders the 5-step placement process roadmap
 */
function initRoadmap() {
    const container = document.getElementById('roadmapContainer');
    if (!container) return;

    container.innerHTML = roadmapSteps.map(step => `
        <div class="flex flex-col bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-2xl transition-all h-full min-h-[260px] relative z-10 group">
            <div class="w-12 h-12 bg-[#003366] group-hover:bg-[#C5A059] text-white rounded-full flex items-center justify-center font-bold mb-6 shrink-0 shadow-lg transition-colors">
                ${step.id}
            </div>
            <div class="flex-grow">
                <h4 class="font-black text-[#003366] text-lg mb-3 leading-tight">${step.title}</h4>
                <p class="text-sm text-slate-500 leading-relaxed">${step.desc}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Renders the recruiter grid with logo support and fallback
 */
function initRecruiters() {
    const grid = document.getElementById('recruiterGrid');
    if (!grid) return;

    grid.innerHTML = recruiters.map(company => `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-md transition-all grayscale hover:grayscale-0 group h-32">
            <img 
                src="assets/logos/${company.logo}" 
                alt="${company.name}" 
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                class="max-h-12 w-auto object-contain"
            />
            <span class="hidden text-[#003366] font-black text-center text-sm uppercase tracking-wider">
                ${company.name}
            </span>
        </div>
    `).join('');
}
const tabData = {
    council: {
        title: "Board of Governors",
        text: "The institution is managed by the Council of Trustees under the BMS Educational Trust.",
        list: ["Dr. B.S. Ragini Narayan - Donor Trustee", "Sri. Aviram Sharma - Trustee", "Dr. Dayananda Mani - Chairman"]
    },
    library: {
        title: "Digital Library",
        text: "A state-of-the-art knowledge center with over 100,000 volumes and digital access to IEEE/ScienceDirect.",
        list: ["24/7 Digital Access", "1,200+ Seating Capacity", "Plagiarism Check Support"]
    },
    campus: {
        title: "Campus Life",
        text: "Experience a vibrant campus culture in the heart of Bengaluru with world-class facilities.",
        list: ["Annual Fest: UTSAV", "60+ Student Clubs", "High-Speed Campus WiFi"]
    }
};

function showTab(id) {
    // 1. Update Button Styling
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active', 'text-white');
        btn.classList.add('text-slate-400');
        // Match by text content to make it easier
        if (btn.innerText.toLowerCase().includes(id.substring(0, 3))) {
            btn.classList.add('active', 'text-white');
            btn.classList.remove('text-slate-400');
        }
    });

    // 2. Update Content Area
    const content = tabData[id];
    const container = document.getElementById('tab-content');
    
    container.innerHTML = `
        <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 class="text-2xl font-bold text-[#003366] mb-4">${content.title}</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">${content.text}</p>
            <ul class="space-y-3">
                ${content.list.map(item => `
                    <li class="flex items-center gap-3 text-slate-700 font-medium">
                        <div class="w-1.5 h-1.5 bg-[#C5A059] rounded-full"></div>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// Set default tab on load
window.onload = () => showTab('council');
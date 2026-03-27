// Mock Data with Sustainability Timers
const items = [
    { id: 1, name: "AirPods Pro", category: "Electronics", location: "Library", daysLeft: 2, emoji: "🎧" },
    { id: 2, name: "Student ID", category: "Documents", location: "Cafeteria", daysLeft: 5, emoji: "🪪" },
    { id: 3, name: "Blue Backpack", category: "Bags", location: "Auditorium", daysLeft: 1, emoji: "🎒" },
    { id: 4, name: "Calculator", category: "Electronics", location: "Block A", daysLeft: 6, emoji: "🧮" },
];

const grid = document.getElementById('itemsGrid');
const search = document.getElementById('searchInput');
const modal = document.getElementById('reportModal');

function render(data) {
    grid.innerHTML = data.map(item => `
        <div class="card">
            <div class="timer-badge">⌛ ${item.daysLeft} Days to Donation</div>
            <div class="card-img">${item.emoji}</div>
            <div class="card-body">
                <span class="tag">${item.category}</span>
                <h3 style="margin: 10px 0 5px 0;">${item.name}</h3>
                <p style="color: #666; font-size: 0.85rem;">📍 Found at ${item.location}</p>
                <button class="btn-primary" style="width: 100%; margin-top: 15px;" onclick="claimItem('${item.name}')">Claim Item</button>
            </div>
        </div>
    `).join('');
}

function claimItem(name) {
    alert(`Claim request for ${name} sent! Please visit the BMSCE Security Office with your USN for verification.`);
}

function toggleModal() {
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Search Functionality
search.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = items.filter(i => i.name.toLowerCase().includes(term));
    render(filtered);
});

// Form Submission
document.getElementById('reportForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = {
        id: Date.now(),
        name: document.getElementById('itemName').value,
        category: document.getElementById('itemCat').value,
        location: document.getElementById('itemLoc').value,
        daysLeft: 7, // New items always get 7 days
        emoji: "📦"
    };
    items.unshift(newItem);
    render(items);
    toggleModal();
    alert("Item reported! It will be listed for 7 days before donation.");
});

render(items);
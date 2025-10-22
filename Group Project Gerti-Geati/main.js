const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


function updateCountdown() {
    const nextMatch = new Date('2025-12-18T21:00:00');
    const now = new Date();
    const diff = nextMatch - now;

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "El Clásico is LIVE!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdown').textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


const players = [
    {
        name: "Lionel Messi",
        position: "Forward",
        team: "barca",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Lionel_Messi_20180626.jpg",
    },
    {
        name: "Sergio Busquets",
        position: "Midfielder",
        team: "barca",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Sergio_Busquets_2017.jpg",
    },
    {
        name: "Marc-André ter Stegen",
        position: "Goalkeeper",
        team: "barca",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Marc-Andr%C3%A9_ter_Stegen_2019.jpg",
    },
    {
        name: "Karim Benzema",
        position: "Forward",
        team: "madrid",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Karim_Benzema_2018.jpg",
    },
    {
        name: "Luka Modrić",
        position: "Midfielder",
        team: "madrid",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Luka_Modric_2018.jpg",
    },
    {
        name: "Thibaut Courtois",
        position: "Goalkeeper",
        team: "madrid",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Thibaut_Courtois_2018.jpg",
    },
];


function generatePlayerCards(playersList) {
    const grid = $('#playersGrid');
    grid.empty();

    playersList.forEach(player => {
        const card = $(`
            <div
                class="player-card bg-white rounded-lg shadow-lg p-4 text-center"
                role="region"
                aria-label="${player.name} card"
            >
                <img
                    src="${player.img}"
                    alt="${player.name}"
                    class="mx-auto rounded-full w-24 h-24 object-cover mb-4"
                />
                <h3 class="text-xl font-semibold">${player.name}</h3>
                <p class="text-gray-600">${player.position}</p>
                <p class="mt-2 font-bold ${
                    player.team === 'barca' ? 'text-red-700' : 'text-purple-700'
                }">
                    ${player.team === 'barca' ? 'FC Barcelona' : 'Real Madrid'}
                </p>
            </div>
        `);
        grid.append(card);
    });
}


generatePlayerCards(players);


$('.filter-btn').on('click', function () {
    const team = $(this).data('team');

    $('.filter-btn')
        .removeClass('bg-yellow-400 text-black')
        .addClass('bg-blue-600 text-white');
    $(this).removeClass('bg-blue-600 text-white').addClass('bg-yellow-400 text-black');

    if (team === 'all') {
        generatePlayerCards(players);
    } else {
        const filteredPlayers = players.filter(player => player.team === team);
        generatePlayerCards(filteredPlayers);
    }
});

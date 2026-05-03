// 1. LocalStorage (Інформація про систему)
// Збираєм дані про віндовс та браузер
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent.split(' ')[0]; // Беремо перше слово з рядка userAgent
const systemData = `${osInfo} | ${browserInfo}`;

localStorage.setItem('userSystemInfo', systemData);

document.getElementById('sysInfo').textContent = localStorage.getItem('userSystemInfo');


// 2. Fetch API (Отримання коментарів)

fetch('https://jsonplaceholder.typicode.com/posts/8/comments')
    .then(response => response.json()) // Перетворюємо відповідь у формат JSON
    .then(data => {
        const container = document.getElementById('reviewsContainer');
        container.innerHTML = ''; // Очищуємо текст
        
        // Перебираємо отриманий масив і створюємо HTML для кожного коментаря
        data.forEach(comment => {
            const commentHTML = `
                <div class="review-card" style="border:1px solid #ccc; margin-bottom:10px; padding:10px;">
                    <strong>${comment.email}</strong>
                    <p>${comment.body}</p>
                </div>
            `;
            container.innerHTML += commentHTML;
        });
    })
    .catch(error => console.error('Помилка Fetch:', error));


// 3. таймер та події

const modal = document.getElementById('contactModal');
const closeBtn = document.getElementById('closeModal');

// таймер 1хв. 
setTimeout(() => {
    modal.style.display = 'block';
}, 60000);

// Закриття модального вікна.
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


// 4.перемикач теми
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Перевіряємо поточний час при завантаженні
const currentHour = new Date().getHours();
let isDarkTheme = false;

// Від 07:00 до 21:00 світла, далі темна
if (currentHour >= 7 && currentHour < 21) {
    isDarkTheme = false;
    body.className = 'light-theme';
} else {
    isDarkTheme = true;
    body.className = 'dark-theme';
}

// Подія кліку на кнопку перемикання теми
themeToggleBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme; // Міняємо стан на протилежний
    
    if (isDarkTheme) {
        body.className = 'dark-theme';
    } else {
        body.className = 'light-theme';
    }
});
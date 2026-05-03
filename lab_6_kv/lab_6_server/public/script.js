// 1. LocalStorage (Інформація про систему)
// Збираєм дані про віндовс та браузер
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent.split(' ')[0]; // Беремо перше слово з рядка userAgent
const systemData = `${osInfo} | ${browserInfo}`;

localStorage.setItem('userSystemInfo', systemData);

const sysInfoElement = document.getElementById('sysInfo');
if (sysInfoElement) {
    sysInfoElement.textContent = localStorage.getItem('userSystemInfo');
}


// 2. Fetch API (Отримання коментарів)
fetch('https://jsonplaceholder.typicode.com/posts/8/comments')
    .then(response => response.json()) // Перетворюємо відповідь у формат JSON
    .then(data => {
        const container = document.getElementById('reviewsContainer');
        if (container) {
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
        }
    })
    .catch(error => console.error('Помилка Fetch:', error));


// 3. таймер та події
const modal = document.getElementById('contactModal');
const closeBtn = document.getElementById('closeModal');

// таймер 1хв. 
if (modal) {
    setTimeout(() => {
        modal.style.display = 'flex';
    }, 1000);
}

// Закриття модального вікна.
if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}


// 4. перемикач теми
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
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme; // Міняємо стан на протилежний
        
        if (isDarkTheme) {
            body.className = 'dark-theme';
        } else {
            body.className = 'light-theme';
        }
    });
}


// 5. Відправка форми зворотного зв'язку
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Зупиняємо стандартне перезавантаження сторінки

        // Збираємо дані з полів форми
        const formData = {
            name: this.name.value,
            email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        };

        try {
            // Виконуємо POST-запит на наш бекенд
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Повідомлення успішно відправлено!');
                this.reset(); // Очищаємо поля форми після відправки
                
                // Якщо форма знаходиться в модальному вікні, закриваємо його
                if (modal) {
                    modal.style.display = 'none';
                }
            } else {
                // Якщо сервер повернув помилку валідації (статус 400 або 500)
                const errorData = await response.json();
                alert(`Помилка: ${errorData.error || 'Не вдалося відправити повідомлення.'}`);
            }
        } catch (error) {
            console.error('Помилка відправки:', error);
            alert('Помилка з\'єднання з сервером.');
        }
    });
}
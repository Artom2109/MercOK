// Функція для зміни кольору фону
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функція для зміни тексту
function changeText() {
    document.getElementById("demo").innerHTML = "Любителям БМВ тут не місце)";
}

// Функція для зміни розміру шрифту на малий
function changeFontSizeSmall() {
    document.body.style.fontSize = "14px";
}

// Функція для зміни розміру шрифту на середній
function changeFontSizeMedium() {
    document.body.style.fontSize = "18px";
}

// Функція для зміни розміру шрифту на великий
function changeFontSizeLarge() {
    document.body.style.fontSize = "24px";
}

// Додаємо обробник подій для кожної кнопки меню
document.getElementById("smallFont").addEventListener("click", changeFontSizeSmall);
document.getElementById("mediumFont").addEventListener("click", changeFontSizeMedium);
document.getElementById("largeFont").addEventListener("click", changeFontSizeLarge);

// Функція для зміни теми на чорну
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

// Функція для показу повідомлення
function showAlert() {
    alert("Їсти хочу.");
}

// Обробка відправки форми
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var message = document.getElementById('message').value;
    alert('Форма відправлена. Ваше повідомлення: ' + message);
});

// Функція для отримання даних про продуктивність сайту
async function fetchPerformanceData() {
    try {
        // Замініть URL на URL вашого API моніторингу або джерела даних
        const response = await fetch('https://api.example.com/performance-data');
        
        if (!response.ok) {
            throw new Error('Мережна помилка: ' + response.status);
        }
        
        const data = await response.json();
        
        if (data.loadTime) {
            document.getElementById('performance-data').innerText = `Час завантаження: ${data.loadTime} сек`;
        } else {
            throw new Error('Неправильний формат даних');
        }
    } catch (error) {
        console.error('Помилка завантаження даних:', error);
        document.getElementById('performance-data').innerText = 'Помилка завантаження даних';
    }
}

// Виклик функції для отримання даних про продуктивність при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fetchPerformanceData);

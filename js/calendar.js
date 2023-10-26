// Функция для определения количества дней в месяце
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const calendarContainer = document.getElementById("calendar-container");
const currentMonthDisplay = document.getElementById("currentMonth");

// Определение текущей даты
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Объект для хранения забронированных дней
const bookedDays = {};

// Функция для создания календаря для заданного месяца
function createCalendar(year, month) {
    currentMonthDisplay.textContent = `${year}-${month + 1}`;
    
    const monthName = new Date(year, month, 1).toLocaleString('default', { month: 'long' });
    const monthDays = daysInMonth(month + 1, year);
    
    const monthDiv = document.createElement("div");
    monthDiv.classList.add("month");
    
    const table = document.createElement("table");
    table.classList.add("calendar-table");
    
    // Создание заголовков дней недели
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const headerRow = document.createElement("tr");
    daysOfWeek.forEach(day => {
        const th = document.createElement("th");
        th.innerText = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    // Создание ячеек для дней месяца
    let dayNumber = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const td = document.createElement("td");
            if (dayNumber <= monthDays) {
                td.innerText = dayNumber;
                if (bookedDays[`${year}-${month + 1}-${dayNumber}`]) {
                    td.classList.add("booked");
                } else {
                    td.classList.add("day");
                    td.addEventListener("click", function() {
                        if (!td.classList.contains("booked")) {
                            // Бронирование выбранного дня и следующих 8 дней
                            for (let k = 0; k < 9; k++) {
                                const nextDay = dayNumber + k;
                                if (nextDay <= monthDays) {
                                    const key = `${year}-${month + 1}-${nextDay}`;
                                    bookedDays[key] = true;
                                    const nextDayElement = document.querySelector(`td[data-day="${key}"]`);
                                    if (nextDayElement) {
                                        nextDayElement.classList.add("booked");
                                    }
                                }
                            }
                        }
                    });
                }
                td.setAttribute("data-day", `${year}-${month + 1}-${dayNumber}`);
                dayNumber++;
            }
            row.appendChild(td);
        }
        table.appendChild(row);
    }
    
    monthDiv.appendChild(table);
    calendarContainer.innerHTML = '';
    calendarContainer.appendChild(monthDiv);
}

// Создание календаря для текущего месяца
createCalendar(currentYear, currentMonth);

// Обработчик для кнопки "Предыдущий месяц"
document.getElementById("prevMonth").addEventListener("click", function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    createCalendar(currentYear, currentMonth);
});

// Обработчик для кнопки "Следующий месяц"
document.getElementById("nextMonth").addEventListener("click", function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    createCalendar(currentYear, currentMonth);
});

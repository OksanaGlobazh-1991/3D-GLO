const hello = document.querySelector('.hello'),
    day = document.querySelector('.day'),
    time = document.querySelector('.time'),
    newYear = document.querySelector('.newYear');

const date = new Date();

let hour = date.getHours();
if (hour >= 6 && hour < 12) {
  hello.textContent = 'Доброе утро';
} else if (hour >= 12 && hour < 18) {
  hello.textContent = 'Добрый день';
} else if (hour >= 18 && hour < 24) {
  hello.textContent = 'Добрый вечер';
} else if (hour >= 0 && hour < 6) {
  hello.textContent = 'Доброй ночи';
}


function getWeekDay(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
}
day.textContent = 'Сегодня: ' + getWeekDay(date);


time.textContent = 'Текущее время: ' + date.toLocaleTimeString() + ' PM';

function count() {
    let month = 'Jan',
        date = '01',
        year = '2022';
    theDate = month + ' ' + date + ' ' + year;

    dateNow = new Date();
    dateStop = new Date(theDate);

    timer = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 24);

    newYear.textContent = 'До нового года осталось ' + timer + ' дней';

}
count();

let hello = document.querySelector('.hello'),
    day = document.querySelector('.day'),
    time = document.querySelector('.time'),
    newYear = document.querySelector('.newYear');

    let date = new Date();
    
    // day.textContent = 'Сегодня: ' + 
    time.textContent = 'Текущее время: ' + date.toLocaleTimeString() + ' PM';
    newYear.textContent = 'До нового года осталось ' 
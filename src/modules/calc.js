const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
        input = calcBlock.querySelectorAll('input'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

    const countSum = () => {

        let total = 0,
            countValue = 1,
            dayValue = 1;

        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }


        if (typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
        }

        totalValue.textContent = total;
    };

    input.forEach(item => {
        item.addEventListener('input', () => {

            item.value = item.value.replace(/[^0-9]/g, '');
        });
    });

    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if (target.matches('.calc-type') || target.matches('.calc-square') ||
          target.matches('.calc-day') || target.matches('.calc-count')) {
            countSum();
        }
    });
};

export default calc;

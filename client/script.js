let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {

    type: 'line',
    data: {
        labels: ['Датасет 1', 'Датасет 2', 'Датасет 3', 'Датасет 4'],
        datasets: [{
            label: 'Количество сообщений',
            data: [6346, 70, 6134, 67],
            backgroundColor: ['#99EFD0', '#F2994A', '#8476AA', '#3AB7D2'],
            hoverBackgroundColor: ['#C2FFE2', '#FFC690', '#EEBCFF', '#8BEAFF'],
            borderColor: '#C2FFE2',
            fontColor: '#C4FFE2'
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 6000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        }
    }
});

var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Датасет 1', 'Датасет 2'],
        datasets: [{
            label: 'Количество сообщений:',
            data: [6346, 6134],
            backgroundColor: [
                '#F2994A',
                '#8476AA'
            ],
            hoverBackgroundColor: ['#FFC690', '#EEBCFF']
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Два наибольших датасета:',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }]
        }
    }
});


var quiz = {
    title: 'Данный заголовок создан человеком или ИИ?',
    questions: ['Вопрос 1', 'Вопрос 2', 'Вопрос 3', 'Вопрос 4', 'Вопрос 5', 'Вопрос 6', 'Вопрос 7', 'Вопрос 8', 'Вопрос 9', 'Вопрос 10', 'Вопрос 11', 'Вопрос 12', 'Вопрос 13', 'Вопрос 14', 'Вопрос 15']
};

new Vue({
    el: '#app',
    data: {
        show: true,
        num_1: '289',
        num_2: '181',
        quiz: quiz,
        questionIndex: 0,
        usansw: [],
        correctans: ["Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек"]
    },
    methods: {
       // Вернуться к предыдущему вопросу
        prev: function () {
            this.questionIndex--;
        },
        //колво правильных ответов
        score: function () {
            k = 0;
            for (let i = 0; i < this.correctans.length; i++) {
                if (this.usansw[i] == this.correctans[i]) {
                    k++;
                }
            }
            return k
        },
        addneuro: function () {
            this.usansw.push("Нейросеть");
            this.questionIndex++;;
        },
        addman: function () {
            this.usansw.push("Человек");
            this.questionIndex++;
        },
        async sendData() {
            const request = new Request(
                "http://localhost:3000/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ Текст1: this.usansw[0], Текст2: this.usansw[1], 
                    Текст3: this.usansw[2], Текст4: this.usansw[3], Текст5: this.usansw[4],
                    Текст6: this.usansw[5], Текст7: this.usansw[6], Текст8: this.usansw[7],
                    Текст9: this.usansw[8], Текст10: this.usansw[9], Текст11: this.usansw[10],
                    Текст12: this.usansw[11], Текст13: this.usansw[12], Текст14: this.usansw[13],
                    Текст15: this.usansw[14], Угадано: String(this.score()).concat("/15")})
                }
            );
            const res = await fetch(request);
            const info = await res.json();
            this.questionIndex++;
        } 
    }
});
//это функция чтобы кнопку можно было нажать только один раз
window.onload = function () {
    document.getElementById("onetime").onclick = function () {
        this.disabled = 'disabled';
    }
}

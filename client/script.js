let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {

    type: 'line',
    data: {
        labels: ['original', 'small_gpt', 'medium_gpt', 'large_gpt', 'dungeon'],
        datasets: [{
            data: [0.37, 0.38, 0.3, 0.25, 0.25],
            backgroundColor: ['#99EFD0', '#F2994A', '#8476AA', '#3AB7D2'],
            hoverBackgroundColor: ['#C2FFE2', '#FFC690', '#EEBCFF', '#8BEAFF'],
            borderColor: '#C2FFE2',
            fontColor: '#C4FFE2'
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        animations: {
            tension: {
                duration: 6000,
                easing: 'linear',
                from: 0,
                to: 0,
                loop: false
            }
        }
    }
});

var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['original', 'small_gpt', 'medium_gpt', 'large_gpt', 'dungeon'],
        datasets: [{
            label: 'Результат:',
            data: [0.07, 0.09, 0.1, 0.3, 0.33],
            backgroundColor: [
                '#F2994A',
                '#8476AA'
            ],
            hoverBackgroundColor: ['#FFC690', '#EEBCFF']
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
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


var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['original', 'small_gpt', 'medium_gpt', 'large_gpt', 'dungeon'],
        datasets: [{
            label: 'Результат:',
            data: [0.06, 0.055, 0.03, 0.021, 0.022],
            backgroundColor: [
                '#F2994A',
                '#8476AA'
            ],
            hoverBackgroundColor: ['#FFC690', '#EEBCFF']
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        indexAxis: 'x',
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

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['original', 'small_gpt', 'medium_gpt', 'large_gpt', 'dungeon'],
        datasets: [{
            label: 'Результат:',
            data: [40, 40, 29, 60, 64],
            backgroundColor: [
                "rgba(255, 84, 84, 0.5)",
                'rgba(219, 150, 66, 0.5)',
                'rgba(142, 113, 227, 0.5)',
                'rgba(94, 255, 207, 0.5)',
            ],
            borderColor: '#C2FFE2',
            hoverBackgroundColor: ["#f7436a", '#FFC690', '#EEBCFF', "#61ffc0"]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: ''
            }
        },
        indexAxis: 'x',
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
        questions: ['Павел, добрый день! Меня зовут Ольга, я рекрутер глобальной IT - компании Серб. Заинтересовал Ваш профиль. Сейчас я нахожусь в поиске Android - разработчика на проект по цифровой трансформации для одного из крупнейших ресторанов быстрого питания.',
        'Павел, добрый день! Меня зовут Олег, рекрутер Серба. Открыты ли сейчас к предложениям? В работе есть вакансия android разработчика в компанию Серб и несколько банков.',
        'Павел, добрый день! Меня зовут Ольга.Заинтересовалась Вашим профессиональным опытом) Подскажите пожалуйста есть ли у Вас сейчас возможность рассмотреть предложения о работе ? С удовольствием отвечу на все интересующие вас вопросы :)',
        'Добрый день, Павел :) Меня зовут Ольга, я представляю кадровое ИТ агентство. Мы занимаемся поиском ИТ специалистов в лучшие компании нашей страны. У меня есть в работе несколько проектов, для которых нужны талантливые Android разработчики.',
        'Здравствуйте Кирилл! Меня зовут Ольга, я IT рекрутер.Заинтересовалась Вашим профессиональным опытом) Ищу разработчика мобильных приложений для одного из крупнейших банков РФ - Серб. Открыты ли сейчас к предложениям ?',
        'Павел, Добрейший День! Заинтересовало ваше резюме в части мобильной разработки) Сейчас мы находимся на этапе активного поиска Android-разработчика (ребята работают только по программе Серб Anywhere), поэтому хочу предложить вам рассмотреть позицию Middle/Senior разработчик.',
        'Павел, приветствую! Я HR компании Серб. Я не знаю все ли устраивает вас на текущей работе, но не могу не озвучить свое предложение. Конец октября, скоро новый год. Вдруг это станет стимулом изменить что-то в жизни? Приглашаем Android (Kotlin) разработчика.',
        'Павел, добрый день! Меня зовут Ольга, я- IT-рекрутер компании Серб. У меня есть интересная вакансия для Android Developer.',
        'Павел,добрый день! Меня зовут Ольга – Серб. Решила вам написать и предложить вакансию Android-developer)Вдруг это станет стимулом изменить что то в жизни?)',
        'Павел, добрый день! Меня зовут Ольга, я рекрутер компании Серб. В данный момент нам нужен middle Android developer (Kotlin)',
        'Добрый день, Павел! Меня зовут Ольга. У меня есть интересная вакансия Android разработчика на Ваш опыт. В рамках данной вакансии возможна удаленная работа.',
        'Добрый день, Павел! Меня зовут Ольга - я занимаюсь поиском экспертов в Серб.',
        'Павел, привет! Меня зовут Ольга. Я в поисках Android разработчика в системный интегратор Серб.',
        'Павел, здравствуйте! Меня зовут Павел, я рекрутер для Android-разработчиков в компании “Серб". Мы занимаемся разработкой мобильных приложений и веб-сайтов в сфере услуг. В данный момент мы ищем Android разработчика для одного из наших финтех-проектов. Общие задачи: Техническое развитие проекта, исследование новых технологий и их интеграция ',
        'Павел, здравствуйте! Меня зовут Павел, я рекрутер для Android - разработчиков в компании “Серб". Задачи: разработка приложения интернет - магазина Технопарк, разработка новых фичей(минимум поддержки старых), code review, участие в принятии технических решений и планировании процесса разработки продукта']
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
        correctans: ["Человек", "Человек", "Нейросеть", "Человек", "Нейросеть", "Нейросеть", "Человек", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Человек", "Нейросеть", "Человек"]
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

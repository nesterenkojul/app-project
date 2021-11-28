
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
        quiz: quiz,
        questionIndex: 0,
        usansw: [],
        correctans: ["Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек", "Нейросеть", "Человек"]
    },
    methods: {
        // Перейти к следующему вопросу
        next: function () {
            this.questionIndex++;
        },
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
        }
    }
});

//                            <ol>
                          //      < !--Для каждого ответа текущего вопроса-- >
   // <div v-for="response in question.responses">
     //   <!-- Радио-кнопка имеет 3 новые директивы -->
       //                                 <!-- v-bind:value устанавливает "value" в значение "true" если ответ правильный -->
         //                               <!-- v-bind:name устанавливает "name" в значение индекса вопроса для группировки ответов по вопросу -->
           //                             <!-- v-model создает связь с userResponses -->
  //                                      <div class="ans" v-on:click="usans.push(response.correct)"
    //        v-bind:value="response.correct"
      //      v-bind:name="index"
        //    v-model="userResponses[index]"> {{ response.text }}
 //       </div>
 //   </div>
   //                         </ol > //
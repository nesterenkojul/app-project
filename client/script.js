
let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {

    type: 'line',
    data: {
        labels: ['������� 1', '������� 2', '������� 3', '������� 4'],
        datasets: [{
            label: '���������� ���������',
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
        labels: ['������� 1', '������� 2'],
        datasets: [{
            label: '���������� ���������:',
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
            text: '��� ���������� ��������:',
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
    title: '������ ��������� ������ ��������� ��� ��?',
    questions: ['������ 1', '������ 2', '������ 3', '������ 4', '������ 5', '������ 6', '������ 7', '������ 8', '������ 9', '������ 10', '������ 11', '������ 12', '������ 13', '������ 14', '������ 15']
};

new Vue({
    el: '#app',
    data: {
        quiz: quiz,
        questionIndex: 0,
        usansw: [],
        correctans: ["�������", "���������", "�������", "���������", "�������", "���������", "�������", "���������", "�������", "���������", "�������", "���������", "�������", "���������", "�������"]
    },
    methods: {
        // ������� � ���������� �������
        next: function () {
            this.questionIndex++;
        },
        // ��������� � ����������� �������
        prev: function () {
            this.questionIndex--;
        },
        //����� ���������� �������
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
            this.usansw.push("���������");
            this.questionIndex++;;
        },
        addman: function () {
            this.usansw.push("�������");
            this.questionIndex++;
        }
    }
});

//                            <ol>
                          //      < !--��� ������� ������ �������� �������-- >
   // <div v-for="response in question.responses">
     //   <!-- �����-������ ����� 3 ����� ��������� -->
       //                                 <!-- v-bind:value ������������� "value" � �������� "true" ���� ����� ���������� -->
         //                               <!-- v-bind:name ������������� "name" � �������� ������� ������� ��� ����������� ������� �� ������� -->
           //                             <!-- v-model ������� ����� � userResponses -->
  //                                      <div class="ans" v-on:click="usans.push(response.correct)"
    //        v-bind:value="response.correct"
      //      v-bind:name="index"
        //    v-model="userResponses[index]"> {{ response.text }}
 //       </div>
 //   </div>
   //                         </ol > //
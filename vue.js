
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

new Vue({
    el: '#card',
    data: {
        count: 1,
        texts: ["Первый текст", 
        "Второй текст", 
        "Третий текст", 
        "Четвертый текст",
        "Пятый текст", 
        "Шестой текст", 
        "Седьмой текст",
        "Восьмой текст", 
        "Девятый текст", 
        "Десятый текст",
        "Одиннадцатый текст", 
        "Двенадцатый текст", 
        "Тринадцатый текст",
        "Четырнадцатый текст", 
        "Пятнадцатый текст"],
        answers: [],
        rightanswers: ["Нейросеть","Человек", "Нейросеть", "Нейросеть", 
        "Человек", "Человек","Нейросеть", "Человек", "Нейросеть", "Человек", 
        "Нейросеть", "Нейросеть", "Нейросеть", "Человек", "Нейросеть"],
        guessed: 0,
        info: {}
    },
    methods: {
        async sendData() {
            const request = new Request(
                "http://localhost:3000/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ Текст1: this.answers[0], Текст2: this.answers[1], 
                    Текст3: this.answers[2], Текст4: this.answers[3], Текст5: this.answers[4],
                    Текст6: this.answers[5], Текст7: this.answers[6], Текст8: this.answers[7],
                    Текст9: this.answers[8], Текст10: this.answers[9], Текст11: this.answers[10],
                    Текст12: this.answers[11], Текст13: this.answers[12], Текст14: this.answers[13],
                    Текст15: this.answers[14], Угадано: String(this.guessed).concat("/15")})
                }
            );
            const res = await fetch(request);
            const info = await res.json();
            this.info = info;
        }
    }
})
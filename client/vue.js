
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

new Vue({
    el: '#card',
    data: {
        count: 1,
        headers: ["Первый заголовок", 
        "Второй заголовок", 
        "Третий заголовок", 
        "Четвертый заголовок"],
        answers: [],
        rightanswers: [1, 0, 0, 1],
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
                    body: JSON.stringify({ answers: this.answers.join(''), guessed: String(this.guessed).concat("/4")})
                }
            );
            const res = await fetch(request);
            const info = await res.json();
            this.info = info;
            console.log("Data sent")
        }
    }
})
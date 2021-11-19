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
        guessed: 0
    }
})
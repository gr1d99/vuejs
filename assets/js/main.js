/**
 * Created by root on 9/14/17.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: "hello ya'll this is vue"
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new  Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            {'text': 'Hello there'},
            {'text': 'Vue is just awesome'},
            {'text': 'Lets build some awesome stuff'}
        ]
    }
});

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue world'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
   el: '#app6',
    data: {
       message: 'Change me dynamically'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
   el: '#app7',
    data: {
       groceryList: [
           {id: 0, text: 'Vegetables'},
           {id: 1, text: 'Cheese'},
           {id: 2, text: 'Whatever else humans are supposed to eat'}
       ]
    }
});
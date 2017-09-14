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
        ],
        addItem: function (item) {
            return app4.todos.push({
                'text': item
            })
        },
        removeItem: function () {
            return app4.todos.pop()
        }
    }
});


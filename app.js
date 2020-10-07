new Vue({
    el: '#vue-app',
    data: {
        name: 'Milena',
        age: 29,
        job: 'Software Engineer',
        website: 'http://www.milenasuarez.com',
        websiteTag: '<a href="http://www.milenasuarez.com">Milena Website</a>',
        x: 0,
        y: 0
    },
    methods: {
        greet: function (time) {
            return `Good${time},${this.name}`;
        },
        add: function (inc) {
            this.age += inc;
        },
        substract: function (dec) { 
            this.age -= dec; 
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
new Vue({
    el: '#vue-app',
    data: {
        name: 'Milena',
        age: 29,
        job: 'Software Engineer',
        website: 'http://www.milenasuarez.com',
        websiteTag: '<a href="http://www.milenasuarez.com">v-html translate a html string in html code</a>',
        x: 0,
        y: 0
    },
    methods: {
        /** Data binding and directives Section */
        greet: function (time) {
            return `Good ${time}, ${this.name}`;
        },

        /** Events Section */
        add: function (inc) {
            this.age += inc;
        },
        substract: function (dec) { 
            this.age -= dec; 
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('click me');
        },

        /** KeyBoard Events Section */
        logName: function() {
            console.log('your enter your name');
        },
        logAge: function() {
            console.log('your enter your age');
        }
    }
});

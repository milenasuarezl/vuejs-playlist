new Vue({
    el: '#vue-app',
    data: {
        name: 'Milena',
        job: 'Software Engineer',
        website: 'http://www.milenasuarez.com',
        websiteTag: '<a href="http://www.milenasuarez.com">Milena Website</a>'
    },
    methods: {
        greet: function(time){
            return `Good${time},${this.name}`;
        }
    }
});
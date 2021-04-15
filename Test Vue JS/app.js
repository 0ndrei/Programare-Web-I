var Ex1 = new Vue({
    el: '#Ex1',
    data: {
        username: 'Lungu Andrei'
    }
})

var Ex2 = new Vue({
    el: '#Ex2',
    data: {
        year: new Date(),
    },
    computed: {
        age() {
            let age = new Date().getFullYear() - new Date(this.year).getFullYear();
            return age - 1;
        }
    }
})
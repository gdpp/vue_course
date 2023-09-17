Vue.createApp({
    data() {
        return {
            firstName: 'Gustavo',
            middleName: '',
            lastName: 'Perez',
            url: 'http://google.com',
            age: 20,
        };
    },
    methods: {
        increment() {
            this.age++;
        },
        updateLastName(msg, event) {
            console.log(msg);

            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },
    computed: {
        fullName() {
            return `${this.firstName} ${
                this.middleName
            } ${this.lastName.toUpperCase()}`;
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20;
            }, 3000);
        },
    },
}).mount('#app');

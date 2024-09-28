Vue.createApp({
    data(){
        return {
            player: {
                name: 'Gustavo',
                lives: 3
            },
            words: [
                'apple',
                'strawberry',
                'grape'
            ],
            result: 'fruits',
            url: 'http://github.com',
            showResult: false
        }
    },
    methods: {
        downgradeLive(){
            this.player.lives -= 1;
        }
    },
    computed: {
        error(){
            if (this.player.lives < 1) return 'Game Over';
            return 'Alive'
        },
        toggleResult(){
            return {hidden: !this.showResult}
        }
    },
    watch: {
        words(newVal, oldVal){

        }
    }
}).mount('#app');
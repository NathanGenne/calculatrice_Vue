const randVue = new Vue({
    el: '#calculatrice',
    data: {
        display: '0',
        operatorClicked: false,
        buffer: ''

      },

    methods: {
        append(number) {
            if (this.display === '0') {this.display = number}
            else {
                this.display = '' + this.display + number;
                this.operatorClicked = false;
            }
        },

        add() {
            console.log('addition');
            if (this.operatorClicked == false){
                this.display = '' + this.display + '+';
                this.operatorClicked = true;
            }
        },

        sub() {
            console.log('soustraction');
            if (this.operatorClicked == false){
                this.display = '' + this.display + '-';
                this.operatorClicked = true;
            }
        },

        allClear() {
            console.log('all clear !');
            this.display = '0';
            this.operatorClicked = false;
            this.buffer = '';
        },

        multiply() {
            console.log('multiplication');
            if (this.operatorClicked == false){
                this.display = '' + this.display + 'x';
                this.operatorClicked = true;
            }
        },


      }
})
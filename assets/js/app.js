/* ---------------- */
/* Nathan + Antoine */
/* ---------------- */

const randVue = new Vue({
    el: '#calculatrice',
    data: {
        display: '0',
        operatorClicked: false,
        buffer: '',
        lastOperator: ''

      },

    methods: {
        append(number) {
            if (this.display === '0' && number != 0) {this.display = number}
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
                this.lastOperator = '+';
            }
        },

        sub() {
            console.log('soustraction');
            if (this.operatorClicked == false){
                this.display = '' + this.display + '-';
                this.operatorClicked = true;
                this.lastOperator = '-';
            }
        },

        allClear() {
            console.log('all clear !');
            this.display = '0';
            this.operatorClicked = false;
            this.buffer = '';
            this.lastOperator = '';
        },

        multiply() {
            console.log('multiplication');
            if (this.operatorClicked == false){
                this.display = '' + this.display + 'x';
                this.operatorClicked = true;
                this.lastOperator = 'x';
            }
        },

        divide() {
            console.log('division');
            if (this.operatorClicked == false){
                this.display = '' + this.display + '/';
                this.operatorClicked = true;
                this.lastOperator = '/';
            }
        },

        reverse() {
            console.log('reverse');
            if (this.display.charAt (this.display.length - 1) == /[0-9]*/g) {
                console.log('ui');
            }
            let n = this.display;
            n = n.replace(/\+|\-|\/|\x/g, '|');
            n = n.split('|');
            n[n.lengh-1] *= -1;

            let newArr;
            for (let i = 0; i < n.length; i++) {
                newArr.push(n[i]);
                if (operatorsArr[i]) newArr.push(operatorsArr[i]);
            }

            newArr = newArr.join('');
            
        },

        percent() {
            console.log('pourcentage');
        },

        decimal() {
            console.log('décimal');
        },

        solve() {
            console.log('résolution');
            result = this.display.replace('x','*');
            this.display = eval(result);
        },


      }
})
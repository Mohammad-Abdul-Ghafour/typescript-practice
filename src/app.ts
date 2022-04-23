class Invoice {
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice("Mohammad","Work On The Website",250);
const invTwo = new Invoice("Ahmad","Work On The Website",300);

console.log(invOne,invTwo);

const invoices : Invoice[] = [];

invOne.amount = 500; // In the future we gonna make it unchangeable

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})

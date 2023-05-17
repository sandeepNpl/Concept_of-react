// type One = string
// type Two = string | number
// type Three = 'hello'

// // convert to more or less specific
// let a : One = 'hello'
// let b = a as Two
// let c = a as Three

// let d = <One>'Love'
// let e = <string | number | boolean>'wow'

// const addOrConcat = (a:number, b:number, c:'add' | 'concat'):number | string =>{
//     if(c === 'add') return a + b
//     return '' + b + c
// }

// let myVal: string = addOrConcat(2, 2,'concat') as string

// // Be careful

// const nextVal: number = addOrConcat(2, 2, 'concat') as number

// // 10 as string

// (10 as unknown) as string

// // The DOM
// const img = document.querySelector('img')
// const myImg = document.getElementById('#img') as HTMLImageElement

// img?.src
// myImg?.src




// CLASS

// class Coder {

//     secondLang!: string
 
//   constructor(
//      public readonly name: string,
//      public music: string,
//      private age: number, 
//      protected lag: string = 'C++'
//   ) 
  
//   {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lag = lag;
//   }

//   public getAge(){
//     return `Hello, I'm ${this.age}` 
//   }
// }


// const Obj = new  Coder ('Sandip', 'R & B', 22 )

// console.log(Obj.getAge());
// // console.log(Obj.age)
// // console.log(Obj.lag)

// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music:string,
//     age:number
//     )

//     {
//       super(name, music, age)
//       this.computer = computer
//     }

//     public getName(){
//       return `Hello I am ${this.name}`
//     }

//     public getLang(){
//       return `I write ${this.lag}`
//     }
// }


// const Saru = new  WebDev('Dell', 'Saru', 'R & B', 22 )

// console.log(Saru.getLang());
// console.log(Saru.getName())
// console.log(Saru.music)

// // ///////////////////////////////////////////

// interface Musician {
//   name: string,
//   instrument : string,
//   pattern : string
//   play(action: string): string
// }

// class Guitarist implements Musician {
//   name: string
//   instrument: string
//   pattern : string
  
//   constructor(name: string, instrument: string, pattern: string){
//     this.name = name
//     this.instrument = instrument
//     this.pattern = pattern
//   }

//   play(action: string){
//     return `${this.name} ${action} ${this.instrument} like ${this.pattern}`
//   }
// }

// const Work   = new Guitarist ('Saru', 'Guitar', 'ududdududud')

// console.log(Work.play('strum'))


// // ////////////////////////////////////////////////////

// class Peeps {
//   static count: number = 0

//   static getCount(): number{
//     return Peeps.count
//   }

//   public id : number

//   constructor(public name : string){
//     this.name = name
//     this.id = ++Peeps.count
//   }
// }

// const Sarita = new Peeps ('Sarita');
// const Saru1 = new Peeps ('Saru')
// const Sandip = new Peeps ('Sandip')

// // console.log(Peeps.count);

// console.log(Sarita.id);
// console.log(Saru1.id);
// console.log(Sandip.id)

// // ////////////////////////////////

// class Bands {
//   private dataState: string[]

//   constructor(){
//     this.dataState = []
//   }

//   public get data(): string[] {
//     return this.dataState
//   }

//   public set data(value:string[]){
//     if(Array.isArray(value) && value.every(el => typeof el ==='string')){
//       this.dataState = value
//       return
     
//     }else throw new Error('Params is not an array of strings ') 
//   }


// }

// const MyBands = new Bands()

// MyBands.data = ['Neil Young', 'Led Zep']
// console.log(MyBands.data)



// ///////////////////////////////////////////////////

// Generics 

// const echo = <T>(arg: T): T => arg

// const isObj = <T>(arg: T) : boolean => {
//   return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
// }

// console.log(isObj(true))
// console.log(isObj('Sandip'))
// console.log(isObj([1,2,4,5]))
// console.log({name:'Sandip'})
// console.log(isObj(null))


// Utility Types 

// Partial

interface Assignment {
  studentId:string,
  title: string,
  grade: number,
  verified?: boolean,
}


 







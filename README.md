# COMO USAR

### Para usar

npm install bible-pt

### Para Usar em JS

```JS
    const {Livro,Cap,Ver,Names} = require('bible-pt')

    let bibleLivro = async ()=>{
        let livro = await Livro('salmos')
        return livro;
    }
    let bibleCap= async ()=>{
        let livro = await Cap('salmos',23)
        return livro;
    }
    let bibleVer = async ()=>{
        let livro = await Ver('salmos',23,1)
          return livro;
    }
    let bibleCapNomes = async ()=>{
        let livro = await Names()
          return livro;
    }
    let bibleCompleta = async ()=>{
        let livro = await Bible()
          return livro;
    }
    let bibleVelhoTestamento = async ()=>{
        let livro = await Velho()
          return livro;
    }
    let bibleNovoTestamento = async ()=>{
        let livro = await Novo()
          return livro;
    }

```

### Para Usar em TS

```TS
   import { Livro, Cap, Ver, Names, Bible, Velho, Novo } from "bible-pt";

    async function BibleLivro(livr: string): Promise<any> {
    let livro = await Livro(livr);
    return livro;
    }
    BibleLivro("salmos");

    async function BibleCap(livr: string, cap: number): Promise<any> {
    let capi = await Cap(livr, cap);
    return capi;
    }
    BibleCap("salmos", 23);

    async function BibleVer(livr: string, cap: number, ver: number): Promise<any> {
    let verc = await Ver(livr, cap, ver);
    return verc;
    }
    BibleVer("salmos", 23, 1);

    async function bibleCompleta(): Promise<any> {
    let bible = await Bible();
    return bible;
    }
    bibleCompleta();

    async function bibleVelhoTestamento(): Promise<any> {
    let velho = await Velho();
    return velho;
    }
    bibleVelhoTestamento();

    async function bibleNovoTestamento(): Promise<any> {
    let novo = await Novo();;
    return novo;
    }
    bibleNovoTestamento();




```

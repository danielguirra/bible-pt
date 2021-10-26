# COMO USAR

### Para usar

npm install bible-pt

### Para Usar em JS

```JS
    const {Livro,Cap,Ver,Names} = require('bible-pt')

    let bibleLivro = async ()=>{
        let livro = await Livro('salmos')
    }
    let bibleCap= async ()=>{
        let livro = await Cap('salmos',23)
    }
    let bibleVer = async ()=>{
        let livro = await Ver('salmos',23,1)
    }
    let bibleVer = async ()=>{
        let livro = await Names()
    }

```

### Para Usar em TS

```TS
   import { Livro, Cap, Ver, Names } from "bible-pt";

    async function BibleLivro(livr: string): Promise<any> {
    let livro = await Livro(livr);
    console.log(livro);
    return livro;
    }
    BibleLivro("salmos");

    async function BibleCap(livr: string, cap: number): Promise<any> {
    let capi = await Cap(livr, cap);
    console.log(capi);
    return capi;
    }
    BibleCap("salmos", 23);

    async function BibleVer(livr: string, cap: number, ver: number): Promise<any> {
    let verc = await Ver(livr, cap, ver);
    console.log(verc);
    return verc;
    }
    BibleVer("salmos", 23, 1);

    async function BibleNames(): Promise<any> {
    let name = await Names();
    console.log(name);
    return name;
    }
    BibleNames();



```

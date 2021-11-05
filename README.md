# COMO USAR

### Para usar

npm install bible-pt

### Para Usar em JS

```JS
    const {
    AlmeidaLivro,
    AlmeidaCapitulo,
    AlmeidaVersiculo,
    AlmeidaNomes,
    AlmeidaBibla,
    AlmeidaVelho,
    AlmeidaNovo} = require('bible-pt')

    let bibleLivro = async ()=>{
        let livro = await AlmeidaLivro('salmos')
        return livro;
    }
    let bibleCap= async ()=>{
        let livro = await AlmeidaCapitulo('salmos',23)
        return livro;
    }
    let bibleVer = async ()=>{
        let livro = await AlmeidaVersiculo('salmos',23,1)
          return livro;
    }
    let bibleCapNomes = async ()=>{
        let livro = await AlmeidaNomes()
          return livro;
    }
    let bibleCompleta = async ()=>{
        let livro = await AlmeidaBibla()
          return livro;
    }
    let bibleVelhoTestamento = async ()=>{
        let livro = await AlmeidaVelho()
          return livro;
    }
    let bibleNovoTestamento = async ()=>{
        let livro = await AlmeidaNovo()
          return livro;
    }

```

### Para Usar em TS

```TS
   import {
    AlmeidaLivro,
    AlmeidaCapitulo,
    AlmeidaVersiculo,
    AlmeidaNomes,
    AlmeidaBibla,
    AlmeidaVelho,
    AlmeidaNovo
   } from "bible-pt";

    async function BibleLivro(livr: string): Promise<any> {
    let livro = await AlmeidaLivro(livr);
    return livro;
    }
    BibleLivro("salmos");

    async function BibleCap(livr: string, cap: number): Promise<any> {
    let capi = await AlmeidaCapitulo(livr, cap);
    return capi;
    }
    BibleCap("salmos", 23);

    async function BibleVer(livr: string, cap: number, ver: number): Promise<any> {
    let verc = await AlmeidaVersiculo(livr, cap, ver);
    return verc;
    }
    BibleVer("salmos", 23, 1);

    async function bibleCompleta(): Promise<any> {
    let bible = await AlmeidaBibla();
    return bible;
    }

    async function bibleVelhoTestamento(): Promise<any> {
    let velho = await AlmeidaVelho();
    return velho;
    }

    async function bibleNovoTestamento(): Promise<any> {
    let novo = await AlmeidaNovo();
    return novo;
    }

    async function bibleNomes():Promise<any>{
        let nomes = await AlmeidaNomes();
        return nomes;
    }






```

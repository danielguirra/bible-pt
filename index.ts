import axios from "axios";
import * as names from "./namesBible.json";
/**
 * Retorna os Nomes de todos livros em formato JSON
 */
export async function AlmeidaNomes(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/arc/nomes`);
  return bible["data"];
}
/**
 * Retorna o Livro passado na função em formato JSON
 */
export async function AlmeidaLivro(livro: string): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/arc/${livro}`
  );
  return bible["data"];
}
/**
 * Retorna o Livro passado na função em formato JSON
 */
export async function AlmeidaNumeroDeCapitulos(livro: string): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/arc/${livro}/capitulos`
  );
  return bible["data"];
}
/**
 * Retorna o Capitulo passado na função em formato JSON
 */
export async function AlmeidaCapitulo(
  livro: string,
  capitulo: number
): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/arc/${livro}/${capitulo}`
  );
  return bible["data"];
}
/**
 * Retorna o Versiculo passado na função em formato JSON
 */
export async function AlmeidaVersiculo(
  livro: string,
  capitulo: number,
  versiculo: number
): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/arc/${livro}/${capitulo}/${versiculo}`
  );
  return bible["data"];
}
/**
 * Retorna a Biblia Almeida Revisada e Corrigida completa em formato JSON
 */
export async function AlmeidaBibla(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/arc/`);
  return bible["data"];
}
/**
 * Retorna o velho testamento da Biblia Almeida Revisada e Corrigida completo em formato JSON
 */
export async function AlmeidaVelho(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/arc/velho`);
  return bible["data"];
}
/**
 * Retorna o novo testamento da Biblia Almeida Revisada e Corrigida completo em formato JSON
 */
export async function AlmeidaNovo(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/arc/novo`);
  return bible["data"];
}
/**
 * Retorna os Nomes de todos livros em formato JSON
 */
export async function KingJamesNomes(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/kja/nomes`);
  return bible["data"];
}
/**
 * Retorna o Livro passado na função em formato JSON
 */
export async function KingJamesLivro(livro: string): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/kja/${livro}`
  );
  return bible["data"];
}
export async function KingJamesNumeroDeCapitulos(livro: string): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/kja/${livro}/capitulos`
  );
  return bible["data"];
}
/**
 * Retorna o Capitulo passado na função em formato JSON
 */
export async function KingJamesCapitulo(
  livro: string,
  capitulo: number
): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/kja/${livro}/${capitulo}`
  );
  return bible["data"];
}
/**
 * Retorna o Versiculo passado na função em formato JSON
 */
export async function KingJamesVersiculo(
  livro: string,
  capitulo: number,
  versiculo: number
): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/kja/${livro}/${capitulo}/${versiculo}`
  );
  return bible["data"];
}
/**
 * Retorna a Biblia King James completa em formato JSON
 */
export async function KingJamesBibla(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/kja/`);
  return bible["data"];
}
/**
 * Retorna o velho testamento da Biblia King James completo em formato JSON
 */
export async function KingJamesVelho(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/kja/velho`);
  return bible["data"];
}
/**
 * Retorna o novo testamento da Biblia King James completo em formato JSON
 */
export async function KingJamesNovo(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/kja/novo`);
  return bible["data"];
}
/**
 * Retorna um capitulo da Biblia King James completo em formato JSON
 */
export async function CapituloDoDiaKingJames(): Promise<object> {
  names;
  const num = Math.floor(Math.random() * 65);
  const livro = names[num].id;
  const capitulos = await axios.get(
    `https://bible.danielguirra.repl.co/kja/${livro}`
  );
  const numc = Math.floor(Math.random() * capitulos.data.capitulos.length);
  const name = capitulos.data.livro;
  const capdia = {
    url: `https://bible.danielguirra.repl.co/kja/${livro}/${numc + 1}`,
    data: `${name} capitulo:${numc + 1}`,
  };
  return capdia;
}

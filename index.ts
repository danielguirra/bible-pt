import axios from "axios";

export async function Names(): Promise<any> {
  let bible = await axios.get(`https://bible.danielguirra.repl.co/bible/nomes`);
  return bible["data"];
}

export async function Livro(livro: string): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/bible/${livro}`
  );
  return bible["data"];
}
export async function Cap(livro: string, cap: number): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/bible/${livro}/${cap}`
  );
  return bible["data"];
}
export async function Ver(
  livro: string,
  cap: number,
  ver: number
): Promise<any> {
  let bible = await axios.get(
    `https://bible.danielguirra.repl.co/bible/${livro}/${cap}/${ver}`
  );
  return bible["data"];
}

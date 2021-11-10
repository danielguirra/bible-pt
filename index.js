"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KingJamesNovo = exports.KingJamesVelho = exports.KingJamesBibla = exports.KingJamesVersiculo = exports.KingJamesCapitulo = exports.KingJamesNumeroDeCapitulos = exports.KingJamesLivro = exports.KingJamesNomes = exports.AlmeidaNovo = exports.AlmeidaVelho = exports.AlmeidaBibla = exports.AlmeidaVersiculo = exports.AlmeidaCapitulo = exports.AlmeidaNumeroDeCapitulos = exports.AlmeidaLivro = exports.AlmeidaNomes = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Retorna os Nomes de todos livros em formato JSON
 */
function AlmeidaNomes() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/nomes`);
        return bible["data"];
    });
}
exports.AlmeidaNomes = AlmeidaNomes;
/**
 * Retorna o Livro passado na função em formato JSON
 */
function AlmeidaLivro(livro) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/${livro}`);
        return bible["data"];
    });
}
exports.AlmeidaLivro = AlmeidaLivro;
/**
 * Retorna o Livro passado na função em formato JSON
 */
function AlmeidaNumeroDeCapitulos(livro) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/${livro}/capitulos`);
        return bible["data"];
    });
}
exports.AlmeidaNumeroDeCapitulos = AlmeidaNumeroDeCapitulos;
/**
 * Retorna o Capitulo passado na função em formato JSON
 */
function AlmeidaCapitulo(livro, capitulo) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/${livro}/${capitulo}`);
        return bible["data"];
    });
}
exports.AlmeidaCapitulo = AlmeidaCapitulo;
/**
 * Retorna o Versiculo passado na função em formato JSON
 */
function AlmeidaVersiculo(livro, capitulo, versiculo) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/${livro}/${capitulo}/${versiculo}`);
        return bible["data"];
    });
}
exports.AlmeidaVersiculo = AlmeidaVersiculo;
/**
 * Retorna a Biblia Almeida Revisada e Corrigida completa em formato JSON
 */
function AlmeidaBibla() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/`);
        return bible["data"];
    });
}
exports.AlmeidaBibla = AlmeidaBibla;
/**
 * Retorna o velho testamento da Biblia Almeida Revisada e Corrigida completo em formato JSON
 */
function AlmeidaVelho() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/velho`);
        return bible["data"];
    });
}
exports.AlmeidaVelho = AlmeidaVelho;
/**
 * Retorna o novo testamento da Biblia Almeida Revisada e Corrigida completo em formato JSON
 */
function AlmeidaNovo() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/arc/novo`);
        return bible["data"];
    });
}
exports.AlmeidaNovo = AlmeidaNovo;
/**
 * Retorna os Nomes de todos livros em formato JSON
 */
function KingJamesNomes() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/nomes`);
        return bible["data"];
    });
}
exports.KingJamesNomes = KingJamesNomes;
/**
 * Retorna o Livro passado na função em formato JSON
 */
function KingJamesLivro(livro) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/${livro}`);
        return bible["data"];
    });
}
exports.KingJamesLivro = KingJamesLivro;
function KingJamesNumeroDeCapitulos(livro) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/${livro}/capitulos`);
        return bible["data"];
    });
}
exports.KingJamesNumeroDeCapitulos = KingJamesNumeroDeCapitulos;
/**
 * Retorna o Capitulo passado na função em formato JSON
 */
function KingJamesCapitulo(livro, capitulo) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/${livro}/${capitulo}`);
        return bible["data"];
    });
}
exports.KingJamesCapitulo = KingJamesCapitulo;
/**
 * Retorna o Versiculo passado na função em formato JSON
 */
function KingJamesVersiculo(livro, capitulo, versiculo) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/${livro}/${capitulo}/${versiculo}`);
        return bible["data"];
    });
}
exports.KingJamesVersiculo = KingJamesVersiculo;
/**
 * Retorna a Biblia King James completa em formato JSON
 */
function KingJamesBibla() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/`);
        return bible["data"];
    });
}
exports.KingJamesBibla = KingJamesBibla;
/**
 * Retorna o velho testamento da Biblia King James completo em formato JSON
 */
function KingJamesVelho() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/velho`);
        return bible["data"];
    });
}
exports.KingJamesVelho = KingJamesVelho;
/**
 * Retorna o novo testamento da Biblia King James completo em formato JSON
 */
function KingJamesNovo() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/kja/novo`);
        return bible["data"];
    });
}
exports.KingJamesNovo = KingJamesNovo;

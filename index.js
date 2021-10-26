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
exports.Ver = exports.Cap = exports.Livro = exports.Names = void 0;
const axios_1 = __importDefault(require("axios"));
function Names() {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/bible/nomes`);
        return bible["data"];
    });
}
exports.Names = Names;
function Livro(livro) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/bible/${livro}`);
        return bible["data"];
    });
}
exports.Livro = Livro;
function Cap(livro, cap) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/bible/${livro}/${cap}`);
        return bible["data"];
    });
}
exports.Cap = Cap;
function Ver(livro, cap, ver) {
    return __awaiter(this, void 0, void 0, function* () {
        let bible = yield axios_1.default.get(`https://bible.danielguirra.repl.co/bible/${livro}/${cap}/${ver}`);
        return bible["data"];
    });
}
exports.Ver = Ver;

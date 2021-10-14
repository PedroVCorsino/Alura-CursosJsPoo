import { Cliente } from "./cliente/cliente.js";
import { Funcionario } from "./funcionario/funcionario.js";
import { Gerente } from "./funcionario/gerente.js";
import { Diretor } from "./funcionario/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha('123456789');

const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha('123456');

const estaLogado = SistemaAutenticacao.login(gerente, "123456");
console.log(estaLogado);
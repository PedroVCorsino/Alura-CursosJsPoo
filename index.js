import { Cliente } from "./cliente/cliente.js";
import { Funcionario } from "./funcionario/funcionario.js";
import { Gerente } from "./funcionario/gerente.js";
import { Diretor } from "./funcionario/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Lais", 12345678902, "123");

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha('123456789');

const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha('123456');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
console.log(diretorEstaLogado);

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
console.log(gerenteEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");
console.log(clienteEstaLogado);


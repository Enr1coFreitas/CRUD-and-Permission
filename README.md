# CRUD-and-Permission
# CRUD de Usuário + Permissão de Administrador
Nesta entrega vamos desenvolver um CRUD de usuário, criando algumas regras de acesso apenas para usuários administradores.


Endpoints do serviço: <br/>
![image](https://user-images.githubusercontent.com/91137476/186179004-6bef9ea6-9701-402e-b2ad-b2837aa32fa0.png)
<br/>
Requisitos do Serviço
Esse serviço precisa possuir uma API REST para que os demais serviços consigam criar, listar, atualizar e deletar usuários de um banco de dados.

O banco de dados deve ser volátil, um array que seja zerado toda vez que a aplicação reiniciar.
O serviço deve ser implementado seguindo a estrutura abaixo

POST - /users
Rota para criação de usuário com os seguintes dados:
name: string
email: string
password: Deverá receber uma string mas armazenar uma hash gerada com o bcrypt
isAdm: boolean
createdOn: Não deve ser passado mas gerado no momento da validação dos dados no formato Date
updatedOn: Não deve ser passado mas gerado no momento da validação dos dados no formato Date, deve iniciar com o valor de criação (mesmo valor do campo createOn) e deve ser atualizado sempre que esse usuário for atualizado
uuid: Não deve ser passado mas gerado no momento da validação dos dados. Deve ser um identificador único gerado a partir de um número randômico.
A rota de criação deve retornar todos os dados, com exceção da hash de senha.
Não podem ser cadastrados dois usuário com o mesmo e-mail

POST - /login
Rota de login recebendo email e password
O login deve validar se o usuário existe e validar se a senha está correta
A rota de login deve retornar um token JWT válido por 24h caso todas as validações passem

GET - /users
A rota de listagem de usuários deve retornar todos os dados dos usuários, incluindo os hashs
Está rota precisa estar protegida por um middleware de validação do token JWT
Está rota só pode ser acessada por usuários que sejam administradores
Crie um middleware para verificar se o usuário é administrador.

GET - /users/profile
A rota de perfil deve retornar os dados do usuário que fizer a requisição
Está rota precisa estar protegida por um middleware de validação do token JWT
Você deve pegar os dados do usuário com o id que pode ser obtido decodificando o token JWT

PATCH - /users/<uuid>
A rota de atualização de usuário deve ser capaz de atualizar tanto um quanto todos os dados de um usuário
Está rota precisa estar protegida por um middleware de validação do token JWT
O campo updatedAt deve ser atualizado com uma string no formato Date, representando quando essa entrada foi atualizada
IMPORTANTE: O campo isAdm NÃO pode ser atualizado
IMPORTANTE: Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.
A rota de atualização de usuário deve retornar os dados do usuário atualizado
  
DELETE - /users/<uuid>
A rota de exclusão de usuário deve ser capaz de excluir usuários
Está rota precisa estar protegida por um middleware de validação do token JWT
IMPORTANTE: Apenas administradores podem excluir qualquer usuário, usuários não-administradores podem apenas excluir seu próprio usuário.
A rota de exclusão de usuário deve retornar um objeto com uma chave de nome "mensagem" com o valor "User deleted with success"
  
# TESTES REALIZADOS:
![image](https://user-images.githubusercontent.com/91137476/186178882-0cb456c8-dd0a-41a6-bb90-fe3c37e2fef6.png)

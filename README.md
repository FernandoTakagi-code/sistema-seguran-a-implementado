# Security-First Auth API 🛡️

API robusta de autenticação e gestão de usuários desenvolvida com foco em segurança da arquitetura e conformidade com os princípios da LGPD.

## 🛠️ Tecnologias e Arquitetura
- **Stack:** Node.js, TypeScript, Express.
- **ORM:** TypeORM com banco de dados PostgreSQL.
- **Segurança:** - **Hashing:** Bcrypt para armazenamento seguro de credenciais.
  - **Auth:** Autenticação Stateless via JWT (JSON Web Token).
  - **Middleware:** Camada de interceptação `ensureAuthenticated` para proteção de rotas privadas.
  - **Password Recovery:** Fluxo completo de recuperação de conta com tokens de expiração única.

## 🎯 Funcionalidades
- [x] Cadastro e Gestão de Usuários.
- [x] Controle de Acesso Baseado em Funções (RBAC).
- [x] Autenticação com Bearer Token.
- [x] Recuperação de senha segura.

## ⚙️ Instalação e Uso
1. Clone o repositório.
2. Configure o `ormconfig.json` com suas credenciais do Postgres.
3. Instale as dependências: `npm install` ou `yarn`.
4. Rode as migrations: `npm run typeorm migration:run`.
5. Inicie em modo dev: `npm run dev`.

---
*Desenvolvido como Projeto Integrador focado em Segurança da Informação.*

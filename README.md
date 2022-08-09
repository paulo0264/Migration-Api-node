<h1 align="center">
  <center>Consumindo Api usando o ORM do Prisma e o Node.js
</center>
</h1>

## 👨🏼‍💻 Aluno

- [Paulo Fagundes](https://www.linkedin.com/in/paulo-fagundes-381890aa)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd Migration-Api-node`;
3. Rode `yarn` ;
4. Rode `yarn prisma generate` para instalar os models do prisma no projeto
5. Rode `yarn dev` ou `npm run dev` para rodar a aplicação;
6. Acesse a URL `http://localhost:3000`;

## Como mostrar log da aplicação?

```ts
const prismaClient = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});
```

## Como incluir informações em um select com relacionamento

```ts
const product = await prismaClient.product.findFirst({
  where: {
    id,
  },
  include: {
    ProductCategory: {
      // Seleciona o model
      include: {
        category: true, // Dentro do model seleciono o relacionamento que quero trazer completo.
      },
    },
  },
});
```


# Unishare:

Modelo inicial React inspirado por [vitesse](https://github.com/antfu/vitesse).

## Recursos:

- ⚛️ ⚡️ [Reactjs](https://github.com/facebook/react), [Vite 2](https://github.com/vitejs/vite), [npm](https://npmjs.com/), [ESBuild](https://github.com/evanw/esbuild) 
- 🗂 [Roteamento baseado em arquivos](./src/pages) 
- 🏪 [Gerenciamento de estado via React Redux](https://react-redux.js.org/) 
- 🧱 [Sistema de layout](./src/layouts) 
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - motor CSS atômico instantâneo sob demanda 
- ⚓ [Use ícones de qualquer conjunto de ícones com classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons) 
- 🦾 TypeScript

## Servidor de Desenvolvimento

Execute `npm run dev` para um servidor de desenvolvimento. Acesse `http://localhost:3000/`. O aplicativo será recarregado automaticamente se você alterar algum dos arquivos de origem.

## Compilação

Execute `npm run build` para compilar o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

# Docker

## Construindo a Imagem Docker

Para construir a imagem Docker, execute `docker build -t unishare .`

## Executando a Imagem Docker

Para executar a imagem Docker, execute `docker run -d -p 8080:80 unishare`

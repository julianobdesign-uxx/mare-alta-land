# Maré Alta — Landing page (demonstrativa)

Landing page de um restaurante fictício de frutos do mar em Cabo Frio, RJ.
Feita com **React + Vite + Tailwind CSS**. Contatos, preços e depoimentos são placeholders.

## Requisitos
- Node.js 18 ou superior

## Instalação e execução
```bash
npm install
npm run dev        # desenvolvimento em http://localhost:5173
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## Estrutura
```
mare-alta/
├── index.html              # SEO, fontes, dados estruturados
├── package.json
├── vite.config.js          # base "./" (caminhos relativos)
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── assets/images/      # suas fotos (hero.jpg, moqueca.jpg, ...)
├── src/
│   ├── main.jsx            # ponto de entrada
│   ├── App.jsx             # composição da página e estado do pedido
│   ├── index.css           # Tailwind + tema (claro/escuro)
│   ├── components/         # Header, Hero, Menu, Cart, Galeria, ...
│   ├── data/
│   │   ├── config.js       # WhatsApp, endereço, horários, imagens
│   │   └── menu.js         # cardápio editável
│   └── lib/utils.js        # formatação de preço e link do WhatsApp
└── .github/workflows/deploy.yml
```

## Como editar
- **WhatsApp, telefone, endereço, horários, Instagram:** `src/data/config.js`. Número no formato `5522999999999`.
- **Cardápio e preços:** `src/data/menu.js`. Use `preco: 49.9` para exibir o valor; `null` mostra "Preço a definir".
- **Fotos:** coloque suas imagens (próprias ou licenciadas) em `public/assets/images/` com os nomes de `IMAGES` em `config.js`. Sem o arquivo, aparece um espaço reservado.
- **SEO:** ajuste título, descrição e dados estruturados em `index.html` com os dados reais.

## Publicação
**Vercel:** importe o repositório. Framework: Vite, build `npm run build`, saída `dist`.

**GitHub Pages:** envie o código para a branch `main`, abra *Settings → Pages* e escolha *Source: GitHub Actions*. O workflow `deploy.yml` publica a cada push.

## Observações
- Não use fotos de terceiros como se fossem do restaurante.
- Os depoimentos são fictícios e identificados como tal.

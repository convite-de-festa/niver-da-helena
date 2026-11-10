# 🌌 Helena 11 anos | Mundo Invertido

Convite de aniversário digital para a **Helena**, que está fazendo **11 anos**, inspirado no universo de **Stranger Things**.

Feito com **HTML, CSS e JavaScript puros**, sem frameworks e sem servidor, e hospedado no **GitHub Pages**.

🔗 **Site:** [Niver da Helena](https://pmagoga.github.io/niver-helena/)

---

## ✨ Funcionalidades

- 🌗 **Inverter Mundos:** alterna entre o mundo normal (tema claro) e o Mundo Invertido (tema escuro).
- 🎵 **Música ambiente:** botão para ligar e desligar a trilha sonora.
- 📍 **A missão:** data, horário, local e traje da festa.
- 🖼️ **Galeria:** imagens da série.
- 💬 **Confirmação de presença:** o formulário abre o WhatsApp com a mensagem pronta.
- 📱 **Responsivo:** funciona em celular, tablet e computador.
- ♿ **Acessibilidade:** textos alternativos nas imagens, foco visível e respeito à preferência por menos movimento.

---

## 🧩 Estrutura

```
niver-helena/
├── index.html
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── musics/normal-world.mpeg
    └── images/
        ├── backgrounds/   (florest.png, lamps.png, lamps-inverted.png)
        ├── banner/        (florest.webp)
        ├── characters/    (kids-on-the-bike.svg, inverted-world-monster.svg)
        ├── content/       (inverted-world.png, serie-image-01..03.png)
        └── footer/        (tape.svg)
```

---

## ✏️ Como personalizar

1. **Data, local e traje:** edite a seção `A missão` no `index.html`.
2. **WhatsApp que recebe as confirmações:** no `assets/js/main.js`, altere a constante:
    ```js
    const WHATSAPP_NUMBER = "5547999999999"; // DDI + DDD + número, só dígitos
    ```
3. **Música:** coloque o arquivo de áudio em `assets/music/normal-world.mpeg`.

---

## 🧑‍💻 Como executar localmente

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO
```

Abra o `index.html` no navegador. Não precisa de servidor.

---

## 🚀 Como publicar no GitHub Pages

1. Envie os arquivos para um repositório no GitHub, com o `index.html` na raiz.
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch **main** e a pasta **/ (root)**, e clique em **Save**.
5. Aguarde 1 a 2 minutos. O endereço do site aparece no topo da mesma página.

---

## 🛠️ Tecnologias

- **HTML5**
- **CSS3** (variáveis CSS para os temas, Flexbox, Grid e media queries)
- **JavaScript (ES6+)**

---

## 👩‍🏫 Créditos

Projeto desenvolvido com base nas aulas da **Semana Front-end DIO**, ministradas por:

- [Diogo Mainardes](https://github.com/diogomainardes)
- [Michele Ambrosio](https://github.com/micheleambrosio)

## 📜 Licença

Projeto pessoal, criado para uma festa de aniversário. Imagens e referências de Stranger Things pertencem aos seus respectivos detentores.

# niver-helena

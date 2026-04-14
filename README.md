# 📊 Conversor de Dados

Um conversor de unidades de armazenamento de dados simples, rápido e com interface moderna.

## ✨ Funcionalidades

- 🔄 Converte valores entre diferentes unidades de armazenamento
- 📱 Interface responsiva e intuitiva
- 🎨 Design moderno com tema escuro
- ⚡ Conversão em tempo real conforme você digita
- ✅ Validação de entrada de dados

## 🛠️ O que foi corrigido e completado

### HTML (index.html)
- ✅ Corrigidos os IDs dos elementos para baterem com o JavaScript:
  - `input-valor` → `inputValor`
  - `select-unidade` → `unidadeOrigem`
  - `resultados` → `resultadoArea`
- ✅ Adicionados labels descritivos para melhor UX
- ✅ Convertidos valores das opções de select para multiplicadores (1, 1024, 1048576, etc.)
- ✅ Adicionados atributos `min="0"` para validação nativa

### JavaScript (script.js)
- ✅ Removido import React desnecessário (era vanilla JavaScript)
- ✅ Corrigida sintaxe do template string que estava quebrada
- ✅ Adicionada validação para números negativos
- ✅ Adicionada verificação para valor zero com mensagem informativa
- ✅ Implementados tratamentos de erro com mensagens visuais
- ✅ Melhorados os emojis e mensagens em português
- ✅ HTML template dinâmico com formatação de 2 casas decimais

### CSS (style.css)
- ✅ Completado com estilos para todos os elementos
- ✅ Adicionados estilos para inputs e selects com transições suaves
- ✅ Estilo customizado do select com ícone de dropdown
- ✅ Caixa de resultados com animação de entrada (slideIn)
- ✅ Sistema de cores para erros, avisos e sucesso
- ✅ Design responsivo para celulares
- ✅ Efeito de gradient no título principal
- ✅ Box-shadow e borders com tema escuro moderno

## 🚀 Como usar

1. **Abra** o arquivo `index.html` no seu navegador
2. **Digite** um valor numérico no campo "Valor"
3. **Selecione** a unidade de origem (Bytes, KB, MB, GB ou TB)
4. **Veja** automaticamente a conversão para todas as unidades

### Exemplo:
- Digite: `1`
- Selecione: `Megabytes (MB)`
- Resultado: Verá quanto é 1 MB em Bytes, KB, GB e TB

## 📚 Estrutura de Conversão

As conversões usam o sistema decimal (base 10):
- 1 KB = 1.024 Bytes
- 1 MB = 1.048.576 Bytes
- 1 GB = 1.073.742.824 Bytes
- 1 TB = 1.099.511.827.776 Bytes

## 🎨 Cores e Design

- **Primária**: `#00d4ff` (Cyan)
- **Fundo**: `#0d1117` (Preto profundo)
- **Card**: `#161b22` (Cinza escuro)
- **Texto**: `#e6edf3` (Branco suave)

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- 🖥️ Desktops
- 💻 Tablets
- 📱 Smartphones

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis customizadas)
- Vanilla JavaScript (sem dependências externas)

## 👤 Autor

lukasxwz

## 📝 Licença

Livre para uso e modificação.

---

**Última atualização:** 14 de abril de 2026

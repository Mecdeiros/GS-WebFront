# Network Pro

Uma aplicação web interativa de rede profissional voltada ao futuro do trabalho, permitindo explorar perfis de profissionais com informações completas e filtros avançados.

##  Resumo do Projeto

Network Pro é uma Single Page Application (SPA) desenvolvida com React, JavaScript e Tailwind CSS que simula uma plataforma de networking profissional moderna. A aplicação apresenta 60 perfis fictícios de profissionais de diversas áreas, permitindo busca, filtragem e visualização detalhada de cada perfil.

### Funcionalidades Principais

- **Grid de Cards Profissionais**: Visualização em cards com foto, nome, cargo e principais skills
- **Modal Detalhada**: Informações completas incluindo:
  - Dados pessoais 
  - Formação acadêmica
  - Experiência profissional
  - Habilidades técnicas (hard skills)
  - Competências comportamentais (soft skills)
  - Hobbies e interesses
- **Sistema de Busca**: Busca em tempo real por nome, cargo ou habilidade
- **Filtros Avançados**: Filtro por área de atuação, cidade e tecnologia
- **Botões Funcionais**: 
  - "Recomendar profissional" - exibe toast de confirmação
  - "Enviar mensagem" - exibe toast preparando mensagem
- **Dark Mode**: Toggle para alternar entre modo claro e escuro
- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile

##  Instalação do Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:
```bash
git clone [<URL_DO_REPOSITORIO>](https://github.com/Mecdeiros/GS-WebFront)
```

2. Navegue até o diretório do projeto:
```bash
cd GS-WebFront
```

3. Instale as dependências:
```bash
npm install
```
ou
```bash
yarn install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
ou
```bash
yarn dev
```

5. Acesse a aplicação no navegador:
```
http://localhost:8080
```

##  Usuários e Senhas

Esta aplicação não possui sistema de autenticação. Todos os recursos estão disponíveis publicamente sem necessidade de login.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **JavaScript** - JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Next** - Build tool e dev server
- **Shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Biblioteca de ícones
- **React Router** - Roteamento de páginas

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes base do Shadcn
│   ├── DarkModeToggle.tsx
│   ├── FilterBar.tsx
│   ├── ProfessionalCard.tsx
│   ├── ProfessionalModal.tsx
│   └── SearchBar.tsx
├── data/               # Dados JSON dos profissionais
│   └── professionals.json
├── pages/              # Páginas da aplicação
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/              # Custom hooks
├── lib/                # Utilitários
└── index.css          # Estilos globais e design system
```

##  Design System

A aplicação utiliza um design system moderno com:

- **Cores Primárias**: Azul profissional (#3b82f6) e Ciano (#06b6d4)
- **Gradientes**: Gradientes suaves entre cores primárias
- **Sombras**: Sistema de sombras em cards e elementos interativos
- **Animações**: Transições suaves em hover e interações
- **Dark Mode**: Suporte completo a modo escuro com persistência

## Responsividade

O layout é totalmente responsivo com breakpoints para:
- Mobile: < 768px (1 coluna)
- Tablet: 768px - 1024px (2 colunas)
- Desktop: 1024px - 1280px (3 colunas)
- Large Desktop: > 1280px (4 colunas)

##  Próximos Passos

Possíveis melhorias futuras:
- Implementar sistema de autenticação real
- Adicionar backend com banco de dados
- Criar perfis editáveis
- Implementar sistema de mensagens real
- Adicionar notificações
- Integrar com APIs de redes sociais

##  Licença

Este projeto foi desenvolvido para fins educacionais.

##  Autores
- Guilherme de Medeiros RM:561699
- Victor Pucci Ferreira RM:561736
- Murilo Henrique Vieira Cruz RM:563743

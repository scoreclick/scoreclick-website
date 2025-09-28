# Uso do shadcn/ui no ScoreClick

## 📋 Diretrizes de Desenvolvimento

### ✅ **SEMPRE usar shadcn/ui@latest**

Ao criar novos componentes no projeto ScoreClick, **SEMPRE** utilize os componentes disponíveis no shadcn/ui@latest como base. Esta é a biblioteca de componentes padrão do projeto.

### 🎨 **Tema Personalizado ScoreClick**

O shadcn/ui foi configurado com o tema personalizado da marca ScoreClick:

- **Cores primárias**: Verde médio (#04a668)
- **Cores de accent**: Verde claro (#00dd81) 
- **Cores de destaque**: Verde escuro (#068258)
- **Tipografia**: Axiforma (títulos) e Exo 2 (textos)
- **Border radius**: 8px (0.5rem)

### 🛠 **Como Adicionar Novos Componentes**

```bash
# Adicionar um componente específico
pnpm dlx shadcn@latest add [component-name]

# Exemplos:
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add dropdown-menu
pnpm dlx shadcn@latest add form
pnpm dlx shadcn@latest add table
```

### 📦 **Componentes Disponíveis**

#### Básicos
- `Button` - Botões com variantes (default, outline, secondary, ghost, link)
- `Card` - Cards com header, content, footer
- `Input` - Campos de entrada
- `Label` - Labels para formulários

#### Para Adicionar Conforme Necessário
- `Dialog` - Modais e popups
- `DropdownMenu` - Menus suspensos
- `Form` - Formulários com validação
- `Table` - Tabelas de dados
- `Badge` - Etiquetas e tags
- `Alert` - Alertas e notificações
- `Toast` - Notificações temporárias
- `Sheet` - Painéis laterais
- `Tabs` - Abas de navegação
- `Accordion` - Acordeões expansíveis

### 🎯 **Padrões de Uso**

#### 1. Importação
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
```

#### 2. Variantes de Botão
```tsx
<Button>Primário</Button>
<Button variant="outline">Secundário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

#### 3. Tamanhos
```tsx
<Button size="sm">Pequeno</Button>
<Button size="default">Padrão</Button>
<Button size="lg">Grande</Button>
<Button size="icon">Ícone</Button>
```

#### 4. Cards
```tsx
<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
  <CardFooter>
    Ações do card
  </CardFooter>
</Card>
```

### 🎨 **Personalização com Tema ScoreClick**

#### Cores Disponíveis
- `bg-primary` - Verde médio (#04a668)
- `text-primary` - Verde médio
- `bg-accent` - Verde claro (#00dd81)
- `text-accent` - Verde claro
- `bg-muted` - Cinza claro (#e5edea)
- `text-muted-foreground` - Verde escuro (#068258)

#### Gradientes da Marca
```tsx
// Gradiente principal
className="bg-gradient-to-r from-primary to-accent"

// Gradiente com hover
className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
```

### 📱 **Responsividade**

Todos os componentes do shadcn/ui são responsivos por padrão. Use as classes do Tailwind para ajustes específicos:

```tsx
<Button className="w-full sm:w-auto">
  Responsivo
</Button>
```

### ♿ **Acessibilidade**

Os componentes do shadcn/ui já incluem:
- Suporte a navegação por teclado
- ARIA labels apropriados
- Foco visível
- Contraste adequado

### 🔧 **Customização Avançada**

Para customizações específicas da marca, edite as variáveis CSS em `src/app/globals.css`:

```css
:root {
  --primary: var(--brand-green-medium);
  --primary-foreground: #ffffff;
  --accent: var(--brand-green-light);
  --accent-foreground: var(--brand-gray-dark);
  /* ... outras variáveis */
}
```

### 📚 **Recursos Úteis**

- [Documentação oficial shadcn/ui](https://ui.shadcn.com/)
- [Componentes disponíveis](https://ui.shadcn.com/docs/components)
- [Tema e customização](https://ui.shadcn.com/docs/theming)
- [Exemplos de uso](https://ui.shadcn.com/examples)

### ⚠️ **Importante**

1. **NUNCA** crie componentes do zero quando existe um equivalente no shadcn/ui
2. **SEMPRE** use as variáveis CSS do tema ScoreClick
3. **MANTENHA** a consistência visual com a marca
4. **TESTE** a responsividade em diferentes tamanhos de tela
5. **VERIFIQUE** a acessibilidade dos componentes

---

**Lembre-se**: O shadcn/ui é a base de todos os componentes do projeto ScoreClick. Use-o como ponto de partida e personalize conforme necessário para manter a identidade visual da marca.

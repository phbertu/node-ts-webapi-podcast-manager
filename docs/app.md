# Podcast Manager

### Descrição

Um app ao estilo Netflix, onde eu possa centralizar diferentes episódios separados por categoria.

### Domínio

Podcasts feitos em vídeo

### Funcionalidades

- Listar os episódios em sessões de categorias
  - [Sáude, Fitness, Mentalidade, Humor]
- Filtrar episódios por nome de podcast

## Como

### Feature

Listar os episódios em sessões de categorias

#### Como vou implementar

Vou retornar em uma API REST (json) o nome do podcast, nome do episódio, imagem de capa, link

```js
[
  {
    podcastName: 'flow',
    episode: 'CBUM - flow#312',
    videoId: 'kd91xka901',
    cover: 'https://teste.com.br',
    link: 'https://imagem.com.br',
    categories: ['saúde', 'fitness'],
  },
  {
    podcastName: 'flow',
    episode: 'RUBENS BARRICHELO - flow#339',
    videoId: 'kd91xka901',
    cover: 'https://teste.com.br',
    link: 'https://imagem.com.br',
    categories: ['esporte', 'corrida'],
  },
];
```

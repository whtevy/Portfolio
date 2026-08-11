const skills = [
  {
    group: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "LocalStorage"]
  },
  {
    group: "Back-end",
    items: ["APIs REST", "SQL"]
  },
  {
    group: "Design",
    items: ["UI/UX", "Figma", "Paleta de cores"]
  }
];

const experiencia = [
  { periodo: "2025 — Atual", cargo: "Atendimento Chat Suporte tecnico", empresa: "Empresa Atual", descricao: "Atendo Clientes resolvendo seus problemas de internet conforme o problema informado." },
  { periodo: "2022 — 2023", cargo: "Menor Aprendiz Policia Penal", empresa: "Empresa Anterior", descricao: "Trabalhava com documentos e organização de arquivos." },
];

const projetos = [
  {
    nome: "Royal Flowers",
    descricao: "E-commerce de moda desenvolvido com foco em uma experiência visual elegante, catálogo de produtos, filtros, página de detalhes, responsividade e tema escuro.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    demo: "https://github.com/whtevy/Royals-Flowers"
  },
  {
    nome: "Potenze Iluminação",
    descricao: "Catálogo de produtos com sistema de filtros por potência, soquete, voltagem e lúmens, além de páginas de detalhes e comparação de produtos.",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM"],
    demo: "https://github.com/whtevy/Potenze"
  }
];

const extras = [
  { titulo: "Formação", texto: "Graduação em Engenharia de software (2025-2028)" },
  { titulo: "Cursos", texto: "Curso de Desenvolvimento de Sistemas (2023-2024)" },
  { titulo: "Idiomas", texto: "Português (nativo) e Inglês (básico)" },
  { titulo: "Interesses", texto: "Trabalhos para comecar minha carreira!" }
];

function renderSkills() {
  document.querySelector("#skills-list").innerHTML = skills.map(skill => `
    <div class="skill-group">
      <h3>${skill.group}</h3>
      <ul>${skill.items.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderExperience() {
  document.querySelector("#experience-list").innerHTML = experiencia.map(item => `
    <article class="experience-item">
      <p class="period">${item.periodo}</p>
      <div>
        <h3>${item.cargo}</h3>
        <p class="company">${item.empresa}</p>
        <p class="description">${item.descricao}</p>
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  document.querySelector("#projects-list").innerHTML = projetos.map(project => `
    <article class="project">
      <h3>${project.nome}</h3>
      <p class="project-description">${project.descricao}</p>
      <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      ${(project.demo || project.repo) ? `
        <div class="project-links">
          ${project.demo ? `<a href="${project.demo}">Ver projeto</a>` : ""}
        </div>` : ""}
    </article>
  `).join("");
}

function renderExtras() {
  document.querySelector("#extras-list").innerHTML = extras.map(item => `
    <div class="extra">
      <h3>${item.titulo}</h3>
      <p>${item.texto}</p>
    </div>
  `).join("");
}


renderSkills();
renderExperience();
renderProjects();
renderExtras();

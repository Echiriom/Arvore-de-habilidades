Hooks.on("renderActorSheet5eCharacter", (sheet, html, data) => {
  const tabs = html.find('.tabs[data-group="primary"]');
  if (!tabs.length) return;

  if (tabs.find('[data-tab="skill-tree"]').length) return;

  tabs.append(`
    <a class="item" data-tab="skill-tree">
      <i class="fas fa-project-diagram"></i> Skill Tree
    </a>
  `);

  const body = html.find('.sheet-body');
  body.append(`
    <div class="tab skill-tree" data-group="primary" data-tab="skill-tree">
      <button class="open-skill-tree">Abrir Skill Tree</button>
    </div>
  `);

  html.find('.open-skill-tree').on('click', () => {
    new SkillTreeApp(sheet.actor).render(true);
  });
});

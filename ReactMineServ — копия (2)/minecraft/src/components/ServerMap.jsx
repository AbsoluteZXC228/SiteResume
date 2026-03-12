import SkillsMatrixRain from './SkillsMatrixRain'
const skillSets = [
  {
    title: 'Python',
    items: ['Backend-логика', 'Скрипты и автоматизация', 'API и интеграции'],
  },
  {
    title: 'C#',
    items: ['.NET сервисы', 'Инструменты под Windows', 'Чистые архитектуры'],
  },
  {
    title: 'C++',
    items: ['Производительные модули', 'Алгоритмы', 'Низкоуровневые оптимизации'],
  },
]

const extraSkills = [
  'Git и командные процессы',
  'Паттерны проектирования',
  'Отладка и профилирование',
  'Тестирование и качество',
]

export default function ServerMap() {
  return (
    <section id="skills" className="section section-alt skills-section">
      <div className="skills-ambient" aria-hidden="true">
        <SkillsMatrixRain />
        <div className="skills-ambient__vignette"></div>
        <div className="skills-ambient__glow skills-ambient__glow-left"></div>
        <div className="skills-ambient__glow skills-ambient__glow-right"></div>
      </div>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Навыки</p>
          <h2>Технический профиль</h2>
          <p className="rules-note">Языки и подходы, с которыми уверенно работаю каждый день.</p>
        </div>

        <div className="skills-grid">
          {skillSets.map((skill) => (
            <article key={skill.title} className="panel skill-card">
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="skills-extra panel">
          <h3>Дополнительно</h3>
          <div className="skills-tags">
            {extraSkills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

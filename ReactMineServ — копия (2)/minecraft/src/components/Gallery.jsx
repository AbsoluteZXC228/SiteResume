import { useMemo, useState } from 'react'
import cityPhotoOne from '../Logo/Goroda/gorod1.png'
import cityPhotoTwo from '../Logo/Goroda/gorod2.png'
import cityPhotoThree from '../Logo/Goroda/gorod3.png'
import expeditionPhotoOne from '../Logo/expidion/exp1.png'

const galleryItems = [
  {
    title: 'Инженерные системы',
    text: 'Сложные модули и архитектуры, собранные как редстоун-схемы.',
    images: [
      { src: cityPhotoOne, alt: 'Визуальная метафора сложной системы' },
      { src: cityPhotoTwo, alt: 'Макет архитектуры и связей' },
      { src: cityPhotoThree, alt: 'Многоуровневая структура проекта' },
    ],
  },
  {
    title: 'Тактика и командные процессы',
    text: 'Сетапы, где результат зависит от дисциплины и синхронизации команды.',
    images: [{ src: expeditionPhotoOne, alt: 'Командная работа над задачей' }],
  },
  { title: 'Алгоритмы', text: 'Низкоуровневые оптимизации и чистая математика.' },
  { title: 'Инструменты', text: 'Автоматизация сборок, релизов и отчетности.' },
  { title: 'Интерфейсы', text: 'UI-инструменты и панели для внутренних систем.' },
  { title: 'Эксперименты', text: 'Прототипы, которые быстро превращаются в рабочие решения.' },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(-1)

  const activeItem = useMemo(() => {
    if (activeIndex < 0) {
      return null
    }

    return galleryItems[activeIndex] ?? null
  }, [activeIndex])

  const activeImages = activeItem?.images ?? []

  return (
    <section id="showcase" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Витрина</p>
          <h2>Визуальные акценты и сильные стороны</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className="gallery-card gallery-card-btn"
              onClick={() => setActiveIndex(index)}
              aria-label={`Открыть раздел ${item.title}`}
            >
              {item.images ? (
                <div
                  className={`gallery-preview-grid ${
                    item.images.length === 1
                      ? 'gallery-preview-single'
                      : item.images.length >= 3
                        ? 'gallery-preview-three'
                        : ''
                  }`}
                >
                  {item.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="gallery-preview-img"
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                <div className="gallery-preview" aria-hidden="true"></div>
              )}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="gallery-open-hint">
                {item.images ? 'Нажми, чтобы открыть визуал' : 'Раздел для будущих визуалов'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveIndex(-1)}
            aria-label="Закрыть"
          >
            ?
          </button>

          <div className="lightbox-content">
            <h3>{activeItem.title}</h3>
            <p>{activeItem.text}</p>

            {activeImages.length > 0 ? (
              <div className="lightbox-grid">
                {activeImages.map((image) => (
                  <figure key={image.src} className="lightbox-item">
                    <img src={image.src} alt={image.alt} className="lightbox-image" />
                  </figure>
                ))}
              </div>
            ) : (
              <div className="lightbox-empty">Скоро здесь появятся визуалы этого раздела.</div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}


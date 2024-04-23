import css from './ImageCard.module.css';

export default function ImageCard({ item, openModal }) {
  return (
    <div>
      <img
        onClick={() => openModal(item.urls.regular)}
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}

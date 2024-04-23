import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.cardList}>
      {items.map(item => (
        <li key={item.id} className={css.itemList}>
          <ImageCard openModal={openModal} item={item} />
        </li>
      ))}
    </ul>
  );
}

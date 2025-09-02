import css from "./LoadMoreBtn.module.css";
import Button from "../Button/Button";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.buttonWrapper}>
      <Button
        onClick={onClick}
        variant="darkButton"
        className={css.loadMoreButton}
      >
        Показати ще
      </Button>
    </div>
  );
}

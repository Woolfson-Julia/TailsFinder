import css from "./HowItWork.module.css";

import firstimg1x from "../../assets/how-works-1@1x.png";
import firstimg2x from "../../assets/how-works-1@2x.png";
import secondimg1x from "../../assets/how-works-2@1x.png";
import secondimg2x from "../../assets/how-works-2@2x.png";
import thirdimg1x from "../../assets/how-works-3@1x.png";
import thirdimg2x from "../../assets/how-works-3@2x.png";
import fourthimg1x from "../../assets/how-works-4@1x.png";
import fourthimg2x from "../../assets/how-works-4@2x.png";
import firstImgMobile1x from "../../assets/how-works-mobile-1@1x.png";
import firstImgMobile2x from "../../assets/how-works-mobile-1@2x.png";
import secondImgMobile1x from "../../assets/how-works-mobile-2@1x.png";
import secondImgMobile2x from "../../assets/how-works-mobile-2@2x.png";
import thirdImgMobile1x from "../../assets/how-works-mobile-3@1x.png";
import thirdImgMobile2x from "../../assets/how-works-mobile-3@2x.png";
import fourthImgMobile1x from "../../assets/how-works-mobile-4@1x.png";
import fourthImgMobile2x from "../../assets/how-works-mobile-4@2x.png";

export default function Info() {
  return (
    <div className={css.section}>
      <div className={`${css.container} container`}>
        <h2 className={css.title}>Як це працює?</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <picture className={css.picture}>
              <source
                media="(min-width: 834px)"
                srcSet={`${firstimg1x} 1x, ${firstimg2x} 2x`}
              />
              <img
                className={css.img}
                src={firstImgMobile1x}
                srcSet={`${firstImgMobile1x} 1x, ${firstImgMobile2x} 2x`}
                alt="
a man is typing something on his phone"
              />
            </picture>
            <p className={css.label}>Зареєструйтесь на сайті</p>
          </li>
          <li className={css.item}>
            <picture className={css.picture}>
              <source
                media="(min-width: 834px)"
                srcSet={`${secondimg1x} 1x, ${secondimg2x} 2x`}
              />
              <img
                className={css.img}
                src={secondImgMobile1x}
                srcSet={`${secondImgMobile1x} 1x, ${secondImgMobile2x} 2x`}
                alt="
laptop and search bar"
              />
            </picture>

            <p className={css.label}>Знайдіть або додайте оголошення</p>
          </li>
          <li className={css.item}>
            <picture className={css.picture}>
              <source
                media="(min-width: 834px)"
                srcSet={`${thirdimg1x} 1x, ${thirdimg2x} 2x`}
              />
              <img
                className={css.img}
                src={thirdImgMobile1x}
                srcSet={`${thirdImgMobile1x} 1x, ${thirdImgMobile2x} 2x`}
                alt="
girl holds a cat in her arms"
              />
            </picture>
            <p className={css.label}>
              Зв&apos;яжіться з власником чи тим, хто знайшов
            </p>
          </li>
          <li className={css.item}>
            <picture className={css.picture}>
              <source
                media="(min-width: 834px)"
                srcSet={`${fourthimg1x} 1x, ${fourthimg2x} 2x`}
              />
              <img
                className={css.img}
                src={fourthImgMobile1x}
                srcSet={`${fourthImgMobile1x} 1x, ${fourthImgMobile2x} 2x`}
                alt="
petting a dog"
              />
            </picture>
            <p className={css.label}>Поверніть тварину додому</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

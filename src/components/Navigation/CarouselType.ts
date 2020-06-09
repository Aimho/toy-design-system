import { TBaseComponent } from "../../utils/types";

export interface ICarouselProps extends TBaseComponent {
  /** Carousel maxWidth 설정 */
  maxWidth?: number;
  /** Carousel contents */
  contents: React.ReactNode[];
}

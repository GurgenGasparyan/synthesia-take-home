import { useSearchParams } from "react-router-dom";

export const useControlParams = ({ imageHeight, imageWidth }: { imageHeight: number, imageWidth: number }) => {
  const [queryParams, setQueryParams] = useSearchParams();

  const defaultWidth = queryParams.get('width') || imageWidth;
  const defaultHeight = queryParams.get('height') || imageHeight;
  const defaultIsBw = queryParams.get('isBw') || false;
  const defaultBlur = queryParams.get('blur') || 0;

  const setParams = ({
    width,
    height,
    isBw,
    blur,
  }: {
    width: string;
    height: string;
    isBw: string;
    blur: string;
  }) => {
    setQueryParams({ width, height, isBw, blur });
  }

  return { defaultWidth: Number(defaultWidth), defaultHeight: Number(defaultHeight), defaultIsBw: defaultIsBw === 'true', defaultBlur: Number(defaultBlur), setParams };
};

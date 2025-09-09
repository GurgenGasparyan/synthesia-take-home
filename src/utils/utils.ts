export const blurImage = (imageUrl: string, blur: number): string => {
  const url = new URL(imageUrl);
  url.searchParams.set('blur', blur.toString());
  return url.toString();
};

export const bwImage = (imageUrl: string, bw: boolean): string => {
  if(bw) {
    const url = new URL(imageUrl);
    url.searchParams.set('grayscale', '');
    return url.toString();
  }
  return imageUrl;
};

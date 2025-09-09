import { blurImage, bwImage } from './utils';

describe('Utils', () => {
  describe('blurImage', () => {
    it('adds blur parameter to image URL', () => {
      const imageUrl = 'https://example.com/5/5/5';
      const blur = 5;
      
      const result = blurImage(imageUrl, blur);
      
      expect(result).toBe('https://example.com/5/5/5?blur=5');
    });

    it('handles URLs with existing parameters', () => {
      const imageUrl = 'https://example.com/5/5/5?graycale=';
      const blur = 10;
      
      const result = blurImage(imageUrl, blur);
      
      expect(result).toBe('https://example.com/5/5/5?graycale=&blur=10');
    });

    it('overwrites existing blur parameter', () => {
      const imageUrl = 'https://example.com/5/5/5?blur=3';
      const blur = 7;
      
      const result = blurImage(imageUrl, blur);
      
      expect(result).toBe('https://example.com/5/5/5?blur=7');
    });

    it('handles zero blur value', () => {
      const imageUrl = 'https://example.com/5/5/5';
      const blur = 0;
      
      const result = blurImage(imageUrl, blur);
      
      expect(result).toBe('https://example.com/5/5/5?blur=0');
    });
  });

  describe('bwImage', () => {
    it('adds grayscale parameter when bw is true', () => {
      const imageUrl = 'https://example.com/5/5/5';
      
      const result = bwImage(imageUrl, true);
      
      expect(result).toBe('https://example.com/5/5/5?grayscale=');
    });

    it('returns original URL when bw is false', () => {
      const imageUrl = 'https://example.com/5/5/5';
      
      const result = bwImage(imageUrl, false);
      
      expect(result).toBe('https://example.com/5/5/5');
    });

    it('handles URLs with existing parameters when bw is true', () => {
      const imageUrl = 'https://example.com/5/5/5?blur=4';
      
      const result = bwImage(imageUrl, true);
      
      expect(result).toBe('https://example.com/5/5/5?blur=4&grayscale=');
    });
  });
});

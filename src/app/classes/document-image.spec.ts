import { DocumentImage } from './document-image';

describe('DocumentImage', () => {
  it('should create an instance', () => {
    expect(new DocumentImage('12', 'New Image', '/assets/images/UI5Logo.jpg')).toBeTruthy();
  });
});

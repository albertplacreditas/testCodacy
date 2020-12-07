import { getMonthNameByLocale } from '../date';

describe('getPreviousMonthNameByLocale', () => {
  it('should return the name of a month from the following date 2020-01-01', () => {
    const date = '2020-01-01';
    expect(getMonthNameByLocale(date)).toBe('janeiro');
  });

  it('should return the name of a month from the following date 2020-01-31', () => {
    const date = '2020-01-31';
    expect(getMonthNameByLocale(date)).toBe('janeiro');
  });

  it('should return the name of a month from the following date 2020-03-01', () => {
    const date = '2020-03-01';
    expect(getMonthNameByLocale(date)).toBe('março');
  });

  it('should return the name of a month from the following date 2020-12-31', () => {
    const date = '2020-12-31';
    expect(getMonthNameByLocale(date)).toBe('dezembro');
  });

  it('should return the name of a month from the following date 2020-02-29', () => {
    const date = '2020-02-29';
    expect(getMonthNameByLocale(date)).toBe('fevereiro');
  });
});
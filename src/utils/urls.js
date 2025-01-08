/*
This file is meant to centralize page pathnames so that, if one pages needs a pathname change,
the rest of the code would remain untouched and still functional;
Otherwise, the code would need to be updated in multiple places and that is prone to human error.
*/

export const baseUrl = 'https://nettiarchitetti.it';

export const pagePaths = {
  ricerche: 'ricerche',
  dinettica: 'ricerche/dinettica',
  extra: 'ricerche/extra',
}

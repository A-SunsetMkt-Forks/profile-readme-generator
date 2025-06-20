import { config } from 'config';

const { badgeBaseUrl, imageBaseUrl } =
  config.general.urls.sections.profileViews;

const urls = {
  badge: (username: string) =>
    `${badgeBaseUrl}?page_id=${username}.${username}&`,

  default: (username: string) => `${imageBaseUrl}/${username}/count.svg?`,
};

const getProfileViewsUrl = (type: keyof typeof urls, username: string) =>
  urls[type](username);

export { getProfileViewsUrl };

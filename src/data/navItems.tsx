import React from 'react';

export interface INavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  items?: INavItem[];
}

export const navItems: INavItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <i className="fas fa-home"></i>,
  },
  {
    name: 'Pages',
    href: '/pages',
    icon: <i className="fas fa-file"></i>,
    items: [
      {
        name: 'Features',
        href: '/features',
        items: [
          {
            name: "What's New",
            href: '/whats-new',
          },
          {
            name: "What's New 2",
            href: '/whats-new',
          },
          {
            name: "What's New 3",
            href: '/whats-new',
          },
          {
            name: "What's New 4",
            href: '/whats-new',
          },
        ],
      },
      {
        name: 'Act Now',
        href: '/act-now',
      },
      {
        name: 'Act Now 2',
        href: '/act-now',
        items: [
          {
            name: "What's New",
            href: '/whats-new',
          },
          {
            name: "What's New 2",
            href: '/whats-new',
          },
          {
            name: "What's New 3",
            href: '/whats-new',
          },
        ],
      },
      {
        name: 'Act Now 3',
        href: '/act-now',
      },
    ],
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    icon: <i className="fas fa-globe"></i>,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: <i className="fas fa-blog"></i>,
  },
  {
    name: 'Shop',
    href: '/shop',
    icon: <i className="fas fa-cart-shopping"></i>,
  },
  {
    name: 'Shortcodes',
    href: '/shortcode',
    icon: <i className="fas fa-code"></i>,
  },
];

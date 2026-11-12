export interface NavFlyoutGroup {
  heading: string;
  isLarge?: boolean;
  links: { label: string; href: string }[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  flyout?: NavFlyoutGroup[];
}

export interface CTALink {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  ariaLabel?: string;
}

export interface ResponsiveSources {
  small: string;
  small2x: string;
  medium: string;
  medium2x: string;
  large: string;
  large2x: string;
  largetall?: string;
  largetall2x?: string;
}

export interface HeroPromoData {
  id: string;
  headline: string;
  subhead: string;
  subheadGradient?: boolean;
  theme: 'dark' | 'light';
  bgColor: string;
  contentPosition: 'top' | 'bottom' | 'split';
  textPosition?: 'top' | 'bottom';
  href: string;
  ctas: CTALink[];
  imageAlt: string;
  sources: ResponsiveSources;
  logoImage?: {
    large: string;
    large2x: string;
    medium: string;
    medium2x: string;
    small: string;
    small2x: string;
    width: number;
    height: number;
  };
  superscript?: string;
  maxSubheadWidth?: string;
  videoUrl?: string;
  videoLoop?: boolean;
}

export interface TVCarouselSlide {
  id: string;
  title: string;
  genre?: string;
  tagline: string;
  ctaText: string;
  href: string;
  showAtvLogo: boolean;
  bgLarge: string;
  bgLarge2x: string;
  bgMedium: string;
  bgSmall: string;
  logoSrc: string;
  logoSrc2x: string;
}

export interface FamGallerySlide {
  id: string;
  service: 'arcade' | 'music' | 'fitness';
  title: string;
  ctaText: string;
  href: string;
  bgColor: string;
  imageSrc: string;
  imageSrc2x: string;
  isSquareAlbum?: boolean;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export const GLOBAL_NAV_ITEMS: NavItem[] = [
  {
    id: 'store',
    label: 'Store',
    href: 'https://www.apple.com/us/shop/goto/store',
    flyout: [
      {
        heading: 'Shop',
        isLarge: true,
        links: [
          { label: 'Shop Gifts', href: 'https://www.apple.com/us/shop/goto/store' },
          { label: 'Mac', href: 'https://www.apple.com/us/shop/goto/buy_mac' },
          { label: 'iPad', href: 'https://www.apple.com/us/shop/goto/buy_ipad' },
          { label: 'iPhone', href: 'https://www.apple.com/us/shop/goto/buy_iphone' },
          { label: 'Apple Watch', href: 'https://www.apple.com/us/shop/goto/buy_watch' },
          { label: 'Apple Vision Pro', href: 'https://www.apple.com/us/shop/goto/buy_vision' },
          { label: 'AirPods', href: 'https://www.apple.com/us/shop/goto/airpods/accessories' },
          { label: 'Home', href: 'https://www.apple.com/us/shop/goto/buy_home' },
          { label: 'Accessories', href: 'https://www.apple.com/us/shop/goto/buy_accessories' },
        ],
      },
      {
        heading: 'Quick Links',
        links: [
          { label: 'Find a Store', href: 'https://www.apple.com/retail/' },
          { label: 'Order Status', href: 'https://www.apple.com/us/shop/goto/order/list' },
          { label: 'Apple Upgrade', href: 'https://www.apple.com/us/shop/goto/apple_upgrade' },
          { label: 'Apple Trade In', href: 'https://www.apple.com/us/shop/goto/trade_in' },
          { label: 'Financing', href: 'https://www.apple.com/us/shop/goto/payment_plan' },
          { label: 'Personal Setup', href: 'https://www.apple.com/us/shop/goto/personal_setup' },
        ],
      },
      {
        heading: 'Shop Special Stores',
        links: [
          { label: 'Certified Refurbished', href: 'https://www.apple.com/us/shop/goto/special_deals' },
          { label: 'Education', href: 'https://www.apple.com/us/shop/goto/educationrouting' },
          { label: 'Business', href: 'https://www.apple.com/retail/business/' },
          { label: 'Veterans and Military', href: 'https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary' },
          { label: 'Government', href: 'https://www.apple.com/r/store/government/' },
        ],
      },
    ],
  },
  {
    id: 'mac',
    label: 'Mac',
    href: 'https://www.apple.com/mac/',
    flyout: [
      {
        heading: 'Explore Mac',
        isLarge: true,
        links: [
          { label: 'Explore All Mac', href: 'https://www.apple.com/mac/' },
          { label: 'MacBook Neo', href: 'https://www.apple.com/macbook-neo/' },
          { label: 'MacBook Air', href: 'https://www.apple.com/macbook-air/' },
          { label: 'MacBook Pro', href: 'https://www.apple.com/macbook-pro/' },
          { label: 'iMac', href: 'https://www.apple.com/imac/' },
          { label: 'Mac mini', href: 'https://www.apple.com/mac-mini/' },
          { label: 'Mac Studio', href: 'https://www.apple.com/mac-studio/' },
          { label: 'Displays', href: 'https://www.apple.com/displays/' },
        ],
      },
      {
        heading: 'Shop Mac',
        links: [
          { label: 'Shop Mac', href: 'https://www.apple.com/us/shop/goto/buy_mac' },
          { label: 'Help Me Choose', href: 'https://www.apple.com/mac/best-mac/' },
          { label: 'Mac Accessories', href: 'https://www.apple.com/us/shop/goto/mac/accessories' },
          { label: 'Apple Upgrade', href: 'https://www.apple.com/us/shop/goto/apple_upgrade' },
          { label: 'Apple Trade In', href: 'https://www.apple.com/us/shop/goto/trade_in' },
          { label: 'Financing', href: 'https://www.apple.com/us/shop/goto/payment_plan' },
        ],
      },
      {
        heading: 'More from Mac',
        links: [
          { label: 'Mac Support', href: 'https://support.apple.com/mac' },
          { label: 'AppleCare', href: 'https://www.apple.com/applecare/' },
          { label: 'macOS 27', href: 'https://www.apple.com/os/macos/' },
          { label: 'Apple Intelligence and Siri', href: 'https://www.apple.com/apple-intelligence/' },
          { label: 'Apps by Apple', href: 'https://www.apple.com/apps/' },
          { label: 'iCloud+', href: 'https://www.apple.com/icloud/' },
        ],
      },
    ],
  },
  {
    id: 'ipad',
    label: 'iPad',
    href: 'https://www.apple.com/ipad/',
    flyout: [
      {
        heading: 'Explore iPad',
        isLarge: true,
        links: [
          { label: 'Explore All iPad', href: 'https://www.apple.com/ipad/' },
          { label: 'iPad Pro', href: 'https://www.apple.com/ipad-pro/' },
          { label: 'iPad Air', href: 'https://www.apple.com/ipad-air/' },
          { label: 'iPad', href: 'https://www.apple.com/ipad-11/' },
          { label: 'iPad mini', href: 'https://www.apple.com/ipad-mini/' },
          { label: 'Apple Pencil', href: 'https://www.apple.com/apple-pencil/' },
          { label: 'Keyboards', href: 'https://www.apple.com/ipad-keyboards/' },
        ],
      },
      {
        heading: 'Shop iPad',
        links: [
          { label: 'Shop iPad', href: 'https://www.apple.com/us/shop/goto/buy_ipad' },
          { label: 'iPad Accessories', href: 'https://www.apple.com/us/shop/goto/ipad/accessories' },
          { label: 'Apple Upgrade', href: 'https://www.apple.com/us/shop/goto/apple_upgrade' },
          { label: 'Apple Trade In', href: 'https://www.apple.com/us/shop/goto/trade_in' },
          { label: 'Financing', href: 'https://www.apple.com/us/shop/goto/payment_plan' },
        ],
      },
      {
        heading: 'More from iPad',
        links: [
          { label: 'iPad Support', href: 'https://support.apple.com/ipad' },
          { label: 'AppleCare', href: 'https://www.apple.com/applecare/' },
          { label: 'iPadOS 27', href: 'https://www.apple.com/os/ipados/' },
          { label: 'Apple Intelligence and Siri', href: 'https://www.apple.com/apple-intelligence/' },
        ],
      },
    ],
  },
  {
    id: 'iphone',
    label: 'iPhone',
    href: 'https://www.apple.com/iphone/',
    flyout: [
      {
        heading: 'Explore iPhone',
        isLarge: true,
        links: [
          { label: 'Explore All iPhone', href: 'https://www.apple.com/iphone/' },
          { label: 'iPhone Duo', href: 'https://www.apple.com/iphone-duo/' },
          { label: 'iPhone 18 Pro', href: 'https://www.apple.com/iphone-18-pro/' },
          { label: 'iPhone Air', href: 'https://www.apple.com/iphone-air/' },
          { label: 'iPhone 17', href: 'https://www.apple.com/iphone-17/' },
          { label: 'iPhone 17e', href: 'https://www.apple.com/iphone-17e/' },
          { label: 'iPhone 16', href: 'https://www.apple.com/iphone-16/' },
        ],
      },
      {
        heading: 'Shop iPhone',
        links: [
          { label: 'Shop iPhone', href: 'https://www.apple.com/us/shop/goto/buy_iphone' },
          { label: 'iPhone Accessories', href: 'https://www.apple.com/us/shop/goto/iphone/accessories' },
          { label: 'Apple Upgrade', href: 'https://www.apple.com/us/shop/goto/apple_upgrade' },
          { label: 'Apple Trade In', href: 'https://www.apple.com/us/shop/goto/trade_in' },
          { label: 'Carrier Deals at Apple', href: 'https://www.apple.com/us/shop/goto/buy_iphone/carrier_offers' },
        ],
      },
      {
        heading: 'More from iPhone',
        links: [
          { label: 'iPhone Support', href: 'https://support.apple.com/iphone' },
          { label: 'AppleCare', href: 'https://www.apple.com/applecare/' },
          { label: 'iOS 27', href: 'https://www.apple.com/os/ios/' },
          { label: 'Apple Intelligence and Siri', href: 'https://www.apple.com/apple-intelligence/' },
        ],
      },
    ],
  },
  {
    id: 'watch',
    label: 'Watch',
    href: 'https://www.apple.com/watch/',
    flyout: [
      {
        heading: 'Explore Watch',
        isLarge: true,
        links: [
          { label: 'Explore All Apple Watch', href: 'https://www.apple.com/watch/' },
          { label: 'Apple Watch Series 12', href: 'https://www.apple.com/apple-watch-series-12/' },
          { label: 'Apple Watch Ultra 4', href: 'https://www.apple.com/apple-watch-ultra-4/' },
          { label: 'Apple Watch SE 3', href: 'https://www.apple.com/apple-watch-se/' },
          { label: 'Apple Watch Nike', href: 'https://www.apple.com/apple-watch-nike/' },
          { label: 'Apple Watch Hermès', href: 'https://www.apple.com/apple-watch-hermes/' },
        ],
      },
      {
        heading: 'Shop Watch',
        links: [
          { label: 'Shop Apple Watch', href: 'https://www.apple.com/us/shop/goto/buy_watch' },
          { label: 'Apple Watch Bands', href: 'https://www.apple.com/us/shop/goto/watch/bands' },
          { label: 'Apple Watch Accessories', href: 'https://www.apple.com/us/shop/goto/watch/accessories' },
        ],
      },
      {
        heading: 'More from Watch',
        links: [
          { label: 'Apple Watch Support', href: 'https://support.apple.com/watch' },
          { label: 'watchOS 27', href: 'https://www.apple.com/os/watchos/' },
          { label: 'Apple Fitness+', href: 'https://www.apple.com/apple-fitness-plus/' },
        ],
      },
    ],
  },
  {
    id: 'vision',
    label: 'Vision',
    href: 'https://www.apple.com/apple-vision-pro/',
    flyout: [
      {
        heading: 'Explore Vision',
        isLarge: true,
        links: [
          { label: 'Explore Apple Vision Pro', href: 'https://www.apple.com/apple-vision-pro/' },
          { label: 'Guided Tour', href: 'https://www.apple.com/apple-vision-pro/guided-tour/' },
          { label: 'Tech Specs', href: 'https://www.apple.com/apple-vision-pro/specs/' },
        ],
      },
      {
        heading: 'Shop Vision',
        links: [
          { label: 'Shop Apple Vision Pro', href: 'https://www.apple.com/us/shop/goto/buy_vision' },
          { label: 'Apple Vision Pro Accessories', href: 'https://www.apple.com/us/shop/goto/vision/accessories' },
          { label: 'Book a Demo', href: 'https://www.apple.com/retail/instore-shopping-session/' },
          { label: 'Financing', href: 'https://www.apple.com/us/shop/goto/payment_plan' },
        ],
      },
      {
        heading: 'More from Vision',
        links: [
          { label: 'Apple Vision Pro Support', href: 'https://support.apple.com/apple-vision-pro' },
          { label: 'AppleCare', href: 'https://www.apple.com/applecare/' },
          { label: 'visionOS 27', href: 'https://www.apple.com/os/visionos/' },
        ],
      },
    ],
  },
  {
    id: 'airpods',
    label: 'AirPods',
    href: 'https://www.apple.com/airpods/',
    flyout: [
      {
        heading: 'Explore AirPods',
        isLarge: true,
        links: [
          { label: 'Explore All AirPods', href: 'https://www.apple.com/airpods/' },
          { label: 'AirPods 4', href: 'https://www.apple.com/airpods-4/' },
          { label: 'AirPods Pro 3', href: 'https://www.apple.com/airpods-pro/' },
          { label: 'AirPods Max', href: 'https://www.apple.com/airpods-max/' },
        ],
      },
      {
        heading: 'Shop AirPods',
        links: [
          { label: 'Shop AirPods', href: 'https://www.apple.com/us/shop/goto/airpods/accessories' },
          { label: 'AirPods Accessories', href: 'https://www.apple.com/us/shop/goto/airpods/accessories' },
        ],
      },
      {
        heading: 'More from AirPods',
        links: [
          { label: 'AirPods Support', href: 'https://support.apple.com/airpods' },
          { label: 'AppleCare', href: 'https://www.apple.com/applecare/' },
          { label: 'Hearing Health', href: 'https://www.apple.com/airpods-pro/hearing-health/' },
          { label: 'Apple Music', href: 'https://www.apple.com/apple-music/' },
        ],
      },
    ],
  },
  {
    id: 'tv-home',
    label: 'TV & Home',
    href: 'https://www.apple.com/tv-home/',
    flyout: [
      {
        heading: 'Explore TV & Home',
        isLarge: true,
        links: [
          { label: 'Explore TV & Home', href: 'https://www.apple.com/tv-home/' },
          { label: 'Apple TV 4K', href: 'https://www.apple.com/apple-tv-4k/' },
          { label: 'HomePod', href: 'https://www.apple.com/homepod-2nd-generation/' },
          { label: 'HomePod mini', href: 'https://www.apple.com/homepod-mini/' },
        ],
      },
      {
        heading: 'Shop TV & Home',
        links: [
          { label: 'Shop Apple TV 4K', href: 'https://www.apple.com/us/shop/goto/buy_tv/apple_tv_4k' },
          { label: 'Shop HomePod', href: 'https://www.apple.com/us/shop/goto/buy_homepod/homepod' },
          { label: 'Shop HomePod mini', href: 'https://www.apple.com/us/shop/goto/buy_homepod/homepod_mini' },
          { label: 'TV & Home Accessories', href: 'https://www.apple.com/us/shop/goto/smart_home/accessories' },
        ],
      },
      {
        heading: 'More from TV & Home',
        links: [
          { label: 'Apple TV Support', href: 'https://support.apple.com/apple-tv' },
          { label: 'HomePod Support', href: 'https://support.apple.com/homepod' },
          { label: 'Apple TV app', href: 'https://www.apple.com/apple-tv-app/' },
          { label: 'Apple TV+', href: 'https://www.apple.com/apple-tv-plus/' },
          { label: 'Home app', href: 'https://www.apple.com/home-app/' },
        ],
      },
    ],
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    href: 'https://www.apple.com/entertainment/',
    flyout: [
      {
        heading: 'Explore Entertainment',
        isLarge: true,
        links: [
          { label: 'Explore Entertainment', href: 'https://www.apple.com/entertainment/' },
          { label: 'Apple One', href: 'https://www.apple.com/apple-one/' },
          { label: 'Apple TV+', href: 'https://www.apple.com/apple-tv-plus/' },
          { label: 'Apple Music', href: 'https://www.apple.com/apple-music/' },
          { label: 'Apple Arcade', href: 'https://www.apple.com/apple-arcade/' },
          { label: 'Apple Fitness+', href: 'https://www.apple.com/apple-fitness-plus/' },
          { label: 'Apple News+', href: 'https://www.apple.com/apple-news/' },
          { label: 'Apple Podcasts', href: 'https://www.apple.com/apple-podcasts/' },
          { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
        ],
      },
      {
        heading: 'Shop Entertainment',
        links: [
          { label: 'Apple Gift Cards', href: 'https://www.apple.com/us/shop/goto/giftcards' },
          { label: 'Redeem Gift Card', href: 'https://apps.apple.com/redeem' },
        ],
      },
      {
        heading: 'More from Entertainment',
        links: [
          { label: 'Apple TV+ Support', href: 'https://support.apple.com/apple-tv' },
          { label: 'Apple Music Support', href: 'https://support.apple.com/music' },
        ],
      },
    ],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    href: 'https://www.apple.com/us/shop/goto/buy_accessories',
    flyout: [
      {
        heading: 'Shop Accessories',
        isLarge: true,
        links: [
          { label: 'Shop All Accessories', href: 'https://www.apple.com/us/shop/goto/buy_accessories' },
          { label: 'Mac', href: 'https://www.apple.com/us/shop/goto/mac/accessories' },
          { label: 'iPad', href: 'https://www.apple.com/us/shop/goto/ipad/accessories' },
          { label: 'iPhone', href: 'https://www.apple.com/us/shop/goto/iphone/accessories' },
          { label: 'Apple Watch', href: 'https://www.apple.com/us/shop/goto/watch/accessories' },
          { label: 'Apple Vision Pro', href: 'https://www.apple.com/us/shop/goto/vision/accessories' },
          { label: 'AirPods', href: 'https://www.apple.com/us/shop/goto/airpods/accessories' },
          { label: 'TV & Home', href: 'https://www.apple.com/us/shop/goto/smart_home/accessories' },
        ],
      },
      {
        heading: 'Explore Accessories',
        links: [
          { label: 'Made by Apple', href: 'https://www.apple.com/us/shop/goto/accessories/all_accessories/made_by_apple' },
          { label: 'Beats by Dr. Dre', href: 'https://www.apple.com/us/shop/goto/accessories/all_accessories/beats_featured' },
          { label: 'AirTag', href: 'https://www.apple.com/airtag/' },
        ],
      },
      {
        heading: 'More from Accessories',
        links: [
          { label: 'Accessories Support', href: 'https://support.apple.com/accessories' },
          { label: 'Apple Trade In', href: 'https://www.apple.com/us/shop/goto/trade_in' },
        ],
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    href: 'https://support.apple.com/?cid=gn-ols-home-hp-tab',
    flyout: [
      {
        heading: 'Explore Support',
        isLarge: true,
        links: [
          { label: 'iPhone', href: 'https://support.apple.com/iphone' },
          { label: 'Mac', href: 'https://support.apple.com/mac' },
          { label: 'iPad', href: 'https://support.apple.com/ipad' },
          { label: 'Watch', href: 'https://support.apple.com/watch' },
          { label: 'Apple Vision Pro', href: 'https://support.apple.com/apple-vision-pro' },
          { label: 'AirPods', href: 'https://support.apple.com/airpods' },
          { label: 'TV', href: 'https://support.apple.com/apple-tv' },
        ],
      },
      {
        heading: 'Get Help',
        links: [
          { label: 'Community', href: 'https://discussions.apple.com/' },
          { label: 'Check Coverage', href: 'https://checkcoverage.apple.com/' },
          { label: 'Repair', href: 'https://support.apple.com/repair' },
          { label: 'Contact Us', href: 'https://support.apple.com/contact' },
        ],
      },
      {
        heading: 'More from Support',
        links: [
          { label: 'Get AppleCare+', href: 'https://www.apple.com/applecare/' },
          { label: 'Apple Account and Password', href: 'https://support.apple.com/apple-account' },
          { label: 'Billing & Subscriptions', href: 'https://support.apple.com/billing' },
          { label: 'Accessibility', href: 'https://support.apple.com/accessibility' },
        ],
      },
    ],
  },
];

export const RIBBON_DATA = {
  text: 'Thank you, Veterans. We honor you today and every day.',
  linkText: 'Learn about your special savings',
  href: 'https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary',
};

export const HERO_MODULES: HeroPromoData[] = [
  {
    id: 'holiday-2026',
    headline: 'Gifts they’ll love.',
    subhead: 'Find their perfect match this holiday.',
    theme: 'dark',
    bgColor: '#1a4c44',
    contentPosition: 'bottom',
    href: 'https://www.apple.com/us/shop/goto/store',
    videoUrl: './videos/holiday-2026.mp4',
    videoLoop: true,
    ctas: [
      {
        label: 'Shop gifts',
        href: 'https://www.apple.com/us/shop/goto/store',
        variant: 'primary',
        ariaLabel: 'Shop gifts, Holiday 2026',
      },
    ],
    imageAlt:
      'Montage of Apple products, centered Apple logo gift wrapped in a white bow, in yellow, light green, and dark green colors',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_mediumtall.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_mediumtall_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_large_2x.jpg',
      largetall: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_largetall.jpg',
      largetall2x: 'https://www.apple.com/v/homepage/images/holiday-2026/a/hero_holiday_2026_green__cxyzwl8xlggi_largetall_2x.jpg',
    },
  },
  {
    id: 'iphone-duo',
    headline: 'iPhone Duo',
    subhead: 'Hello, hello.',
    theme: 'light',
    bgColor: '#f5f5f7',
    contentPosition: 'top',
    href: 'https://www.apple.com/iphone-duo/',
    videoUrl: './videos/iphone-duo.mp4',
    videoLoop: true,
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/iphone-duo/',
        variant: 'primary',
        ariaLabel: 'Learn more, iPhone Duo',
      },
      {
        label: 'Buy',
        href: 'https://www.apple.com/us/shop/goto/buy_iphone/iphone_duo',
        variant: 'secondary',
        ariaLabel: 'Buy, iPhone Duo',
      },
    ],
    imageAlt:
      'iPhone Duo, held by two hands in landscape orientation, unfolded, interior display features Home Screen.',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_mediumtall.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_mediumtall_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_large_2x.jpg',
      largetall: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_largetall.jpg',
      largetall2x: 'https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated__ggqp9olf1ii6_largetall_2x.jpg',
    },
  },
  {
    id: 'macbook-pro-proled-xdr',
    headline: 'MacBook Pro',
    subhead: 'PROLED XDR Display',
    subheadGradient: true,
    theme: 'dark',
    bgColor: '#000000',
    contentPosition: 'top',
    href: 'https://www.apple.com/macbook-pro/proled-xdr-display/',
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/macbook-pro/proled-xdr-display/',
        variant: 'primary',
        ariaLabel: 'Learn more, MacBook Pro with PROLED 14 and 16 inch',
      },
      {
        label: 'Buy',
        href: 'https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_proled_xdr',
        variant: 'secondary',
        ariaLabel: 'Buy, MacBook Pro with PROLED 14 and 16 inch',
      },
    ],
    imageAlt:
      'MacBook Pro with PROLED XDR Display, space black color, screen shows ribbonlike objects densely patterned with glowing stripes of various widths, spelling the word Pro.',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_mediumtall.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_mediumtall_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_large_2x.jpg',
      largetall: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_largetall.jpg',
      largetall2x: 'https://www.apple.com/v/homepage/images/macbook-pro-proled-xdr/a/hero_macbook_pro_proled_xdr__dqehhz1bv7ue_largetall_2x.jpg',
    },
  },
];

export const PROMO_BENTO_TILES: HeroPromoData[] = [
  {
    id: 'iphone-18-pro',
    headline: 'iPhone 18 Pro',
    subhead: 'Pro further.',
    theme: 'dark',
    bgColor: '#000000',
    contentPosition: 'top',
    textPosition: 'top',
    href: 'https://www.apple.com/iphone-18-pro/',
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/iphone-18-pro/',
        variant: 'primary',
      },
      {
        label: 'Buy',
        href: 'https://www.apple.com/us/shop/goto/buy_iphone/iphone_18_pro',
        variant: 'secondary',
      },
    ],
    imageAlt:
      'iPhone 18 Pro, burgundy color (dark red), back exterior, Pro Fusion camera system at top, Apple logo in center',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/iphone-18-pro/a/promo_iphone_18_pro__9nn5m4mt2bmy_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/iphone-18-pro/a/promo_iphone_18_pro__9nn5m4mt2bmy_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/iphone-18-pro/a/promo_iphone_18_pro__9nn5m4mt2bmy_medium.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/iphone-18-pro/a/promo_iphone_18_pro__9nn5m4mt2bmy_medium_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/iphone-18-pro/a/promo_iphone_18_pro__9nn5m4mt2bmy_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/iphone-18-pro/a/promo_iphone_18_pro__9nn5m4mt2bmy_large_2x.jpg',
    },
  },
  {
    id: 'apple-watch-series-12',
    headline: 'Apple Watch Series 12',
    subhead: 'The most accurate heart rate sensing in a wearable.',
    superscript: '1',
    maxSubheadWidth: '295px',
    theme: 'dark',
    bgColor: '#000000',
    contentPosition: 'split',
    textPosition: 'bottom',
    href: 'https://www.apple.com/apple-watch-series-12/',
    logoImage: {
      large: 'https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_large.png',
      large2x: 'https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_large_2x.png',
      medium: 'https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_medium.png',
      medium2x: 'https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_medium_2x.png',
      small: 'https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_small.png',
      small2x: 'https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_small_2x.png',
      width: 304,
      height: 49,
    },
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/apple-watch-series-12/',
        variant: 'primary',
      },
      {
        label: 'Buy',
        href: 'https://www.apple.com/us/shop/goto/buy_watch/apple_watch_series_12',
        variant: 'secondary',
      },
    ],
    imageAlt:
      'Two Apple Watch Series 12 devices, aluminum case, dark bronze color, olive Sport Band, one showing front of watch with Heart Rate app, one showing back of watch with Health Sensing System',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_medium.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_medium_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_large_2x.jpg',
    },
  },
  {
    id: 'ipad',
    headline: 'iPad',
    subhead: 'Now with the speed of the A16 chip and double the starting storage.',
    maxSubheadWidth: '350px',
    theme: 'light',
    bgColor: '#f5f5f7',
    contentPosition: 'top',
    href: 'https://www.apple.com/ipad-11/',
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/ipad-11/',
        variant: 'primary',
      },
      {
        label: 'Buy',
        href: 'https://www.apple.com/us/shop/goto/buy_ipad/ipad',
        variant: 'secondary',
      },
    ],
    imageAlt:
      'iPad with Apple Pencil and Magic Keyboard, displaying a colorful app interface, shown alongside color options in blue, pink, yellow, and silver',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/ipad/a/promo_ipad__d9p5bux2okuq_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/ipad/a/promo_ipad__d9p5bux2okuq_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/ipad/a/promo_ipad__d9p5bux2okuq_medium.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/ipad/a/promo_ipad__d9p5bux2okuq_medium_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/ipad/a/promo_ipad__d9p5bux2okuq_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/ipad/a/promo_ipad__d9p5bux2okuq_large_2x.jpg',
    },
  },
  {
    id: 'airpods-pro-3',
    headline: 'AirPods Pro 3',
    subhead: 'The world’s best in-ear Active Noise Cancellation.',
    maxSubheadWidth: '250px',
    theme: 'light',
    bgColor: '#f5f5f7',
    contentPosition: 'top',
    href: 'https://www.apple.com/airpods-pro/',
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/airpods-pro/',
        variant: 'primary',
      },
      {
        label: 'Buy',
        href: 'https://www.apple.com/us/shop/goto/buy_airpods/airpods_pro_3',
        variant: 'secondary',
      },
    ],
    imageAlt: 'AirPods Pro 3, wireless headphones, white color, silicone tips',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_medium.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_medium_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_large_2x.jpg',
    },
  },
  {
    id: 'apple-upgrade',
    headline: 'Apple Upgrade',
    subhead: 'Love it. Lease it. Upgrade it.',
    superscript: '2',
    theme: 'light',
    bgColor: '#f5f5f7',
    contentPosition: 'top',
    href: 'https://www.apple.com/us/shop/goto/apple_upgrade',
    videoUrl: './videos/apple-upgrade.mp4',
    videoLoop: true,
    logoImage: {
      large: 'https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_large.png',
      large2x: 'https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_large_2x.png',
      medium: 'https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_medium.png',
      medium2x: 'https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_medium_2x.png',
      small: 'https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_small.png',
      small2x: 'https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_small_2x.png',
      width: 183,
      height: 49,
    },
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/us/shop/goto/apple_upgrade',
        variant: 'primary',
      },
    ],
    imageAlt:
      'iPhone 18 Pro, back exterior, iPhone silhouette fans out from behind into spectrum of purple and red colors',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_medium.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_medium_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_large_2x.jpg',
    },
  },
  {
    id: 'apple-card',
    headline: 'Apple Card',
    subhead: 'Get up to 3% Daily Cash back with every purchase.',
    maxSubheadWidth: '290px',
    theme: 'light',
    bgColor: '#f5f5f7',
    contentPosition: 'top',
    href: 'https://www.apple.com/apple-card/',
    logoImage: {
      large: 'https://www.apple.com/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_large.png',
      large2x: 'https://www.apple.com/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_large_2x.png',
      medium: 'https://www.apple.com/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_medium.png',
      medium2x: 'https://www.apple.com/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_medium_2x.png',
      small: 'https://www.apple.com/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_small.png',
      small2x: 'https://www.apple.com/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_small_2x.png',
      width: 110,
      height: 49,
    },
    ctas: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/apple-card/',
        variant: 'primary',
      },
      {
        label: 'Apply now',
        href: 'https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&start=false',
        variant: 'secondary',
      },
    ],
    imageAlt:
      'Apple Card, front, Apple logo in top left, cardholder name in middle left Marisa Robertson, card chip in middle right.',
    sources: {
      small: 'https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_small.jpg',
      small2x: 'https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_small_2x.jpg',
      medium: 'https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_medium.jpg',
      medium2x: 'https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_medium_2x.jpg',
      large: 'https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_large.jpg',
      large2x: 'https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_large_2x.jpg',
    },
  },
];

export const ATV_PLUS_LOGO_LIGHT =
  'https://www.apple.com/v/home/cj/images/tv-gallery/logo_hero_light__d7t8cya4x26a_small_2x.png';

export const APPLE_TV_CAROUSEL_SLIDES: TVCarouselSlide[] = [
  {
    id: 'stick',
    title: 'Stick',
    genre: 'Comedy',
    tagline: 'New season.',
    ctaText: 'Stream now',
    href: 'https://tv.apple.com/us/show/stick/umc.cmc.52w04zy67tiv11p8xvbc57wmc',
    showAtvLogo: true,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/_dBwNwM2I9UkkEgq5BmfWQ/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/_dBwNwM2I9UkkEgq5BmfWQ/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/_dBwNwM2I9UkkEgq5BmfWQ/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a6/95/81/a695819f-5019-eda5-5ec6-73015c8b6a84/13417594-bfbb-41fa-ab9d-449d8ca54ac3.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/fX9Bus3bPSqNIvzq-d8fSg/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/fX9Bus3bPSqNIvzq-d8fSg/440x108.png',
  },
  {
    id: 'nocturne',
    title: 'Nocturne',
    genre: 'Crime',
    tagline: 'The only way to save a villain’s missing victim is to get close enough to risk becoming one.',
    ctaText: 'Stream now',
    href: 'https://tv.apple.com/us/show/nocturne/umc.cmc.4cfsq1juke72zutv5xp0pw3rj',
    showAtvLogo: true,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/U9-SYh_2jKtYnfk0-zciDA/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/U9-SYh_2jKtYnfk0-zciDA/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/U9-SYh_2jKtYnfk0-zciDA/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/27/9e/a3/279ea3e9-4d9c-db8b-73d8-9e26d824602e/aa006c81-7ad6-40d8-8e19-7eee2394189c.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/0dVGA0_Ytah4r661ZkCESA/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/0dVGA0_Ytah4r661ZkCESA/440x108.png',
  },
  {
    id: 'formula-1',
    title: 'Formula 1',
    tagline: 'Every Grand Prix™, live and on demand—all in one place, all year long.',
    ctaText: 'F1 on Apple TV',
    href: 'https://tv.apple.com/us/room/formula-1/uts.room.formula-1',
    showAtvLogo: false,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f2/63/a7/f263a72a-6efb-66af-cc28-ac5b036acd62/2fa2d9f2-4bcc-4ca5-a248-ae8ed8e5cdd5.png/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f2/63/a7/f263a72a-6efb-66af-cc28-ac5b036acd62/2fa2d9f2-4bcc-4ca5-a248-ae8ed8e5cdd5.png/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f2/63/a7/f263a72a-6efb-66af-cc28-ac5b036acd62/2fa2d9f2-4bcc-4ca5-a248-ae8ed8e5cdd5.png/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/35/59/c4/3559c4fe-c9c3-ba08-625e-50f6e9756477/1268ce5d-c450-4dc0-a43d-43a8c52c8e95.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/f0/ac/1e/f0ac1e58-0027-49d0-378e-68470edfb0ec/3b7d6fac-0061-401c-9716-742245053fd0.png/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/f0/ac/1e/f0ac1e58-0027-49d0-378e-68470edfb0ec/3b7d6fac-0061-401c-9716-742245053fd0.png/440x108.png',
  },
  {
    id: 'awkwafina',
    title: 'Awkwafina: The Unlikely Cook',
    genre: 'Documentary',
    tagline: 'Awkwafina sets off on a culinary road trip to revive her family’s restaurant.',
    ctaText: 'Stream now',
    href: 'https://tv.apple.com/us/show/awkwafina-the-unlikely-cook/umc.cmc.1fhnal2vix2077ouh1hjy2eoc',
    showAtvLogo: true,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/TZVATMR_weMtIFMuuAhREw/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/TZVATMR_weMtIFMuuAhREw/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/TZVATMR_weMtIFMuuAhREw/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/a2/10/26/a210266b-1eba-a0f1-c056-bb8731f1ec2a/bb27ce47-7957-43a0-8ebd-14b85e037aff.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/zaOkNyh8q-2JfhdWEjyWbw/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/zaOkNyh8q-2JfhdWEjyWbw/440x108.png',
  },
  {
    id: 'mls',
    title: 'MLS',
    tagline: 'Watch every club, every match, live—all season long.',
    ctaText: 'MLS on Apple TV',
    href: 'https://tv.apple.com/us/channel/mls-season-pass/tvs.sbd.7000',
    showAtvLogo: false,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/69/92/07/69920774-cdc9-8bf1-c03d-24dda7780d2e/4143c92f-c854-46c0-9a0e-da9d632b0654.png/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/69/92/07/69920774-cdc9-8bf1-c03d-24dda7780d2e/4143c92f-c854-46c0-9a0e-da9d632b0654.png/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/69/92/07/69920774-cdc9-8bf1-c03d-24dda7780d2e/4143c92f-c854-46c0-9a0e-da9d632b0654.png/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/90/55/77/905577e1-f787-09bd-fda7-1337c29a5fbb/75db3f49-7d33-4887-9d2d-d66d6d028c64.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Kc1Xx3Z1QBOuXe1EHDu4TA/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Kc1Xx3Z1QBOuXe1EHDu4TA/440x108.png',
  },
  {
    id: 'tenzing',
    title: 'Tenzing',
    genre: 'Drama',
    tagline: 'Based on the true story of the thrilling quest to summit Everest for the first time.',
    ctaText: 'Stream now',
    href: 'https://tv.apple.com/us/movie/tenzing/umc.cmc.6lic0hhuxkrbem0n29vzjopii',
    showAtvLogo: true,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/CO4lIyj7dXy2D79e7FjgDA/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/CO4lIyj7dXy2D79e7FjgDA/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/CO4lIyj7dXy2D79e7FjgDA/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/d5/79/34/d5793458-8d76-d4f3-2a1b-43b60d0d530b/b69d2721-9f54-4602-a0ce-af05a8ecba1f.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/C0fOxZGfTfntifSO9gPZ7w/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/C0fOxZGfTfntifSO9gPZ7w/440x108.png',
  },
  {
    id: 'slow-horses',
    title: 'Slow Horses',
    genre: 'Thriller',
    tagline: 'MI5’s most unruly spies are back and under attack.',
    ctaText: 'Stream now',
    href: 'https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o',
    showAtvLogo: true,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/x5JjmiSD75wN12-HmmZRcg/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/x5JjmiSD75wN12-HmmZRcg/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/x5JjmiSD75wN12-HmmZRcg/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/1b/00/54/1b00549a-f09d-f96d-6077-9a7c75bd40b2/be4ff2b9-a7fa-4b9f-a9fb-2a0e8a413dc1.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/EJSCPD6sWV9Ib13RNrmy2g/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/EJSCPD6sWV9Ib13RNrmy2g/440x108.png',
  },
  {
    id: 'ted-lasso',
    title: 'Ted Lasso',
    genre: 'Comedy',
    tagline: 'The hit comedy is back and Tedder than ever.',
    ctaText: 'Stream now',
    href: 'https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy',
    showAtvLogo: true,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/eD8DZGJ170t3MyFhlWOkdw/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/eD8DZGJ170t3MyFhlWOkdw/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/eD8DZGJ170t3MyFhlWOkdw/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/3d/b5/d5/3db5d5c0-808b-d357-a2f1-2240d614e2b0/e6663278-3bd4-4114-9f97-082e7c192453.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Cc6MMzxFzD1gVqnd6IslKA/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Cc6MMzxFzD1gVqnd6IslKA/440x108.png',
  },
  {
    id: 'widows-bay',
    title: 'Widow’s Bay',
    genre: 'Mystery',
    tagline: '14 Emmy® Awards Including Best Comedy',
    ctaText: 'Stream now',
    href: 'https://tv.apple.com/us/show/widows-bay/umc.cmc.1zzly0vah46bnvnwf0qkrjhh2',
    showAtvLogo: true,
    bgLarge: 'https://is1-ssl.mzstatic.com/image/thumb/L6BJs1M_LHbp_DDigxy-eQ/980x522sr.jpg',
    bgLarge2x: 'https://is1-ssl.mzstatic.com/image/thumb/L6BJs1M_LHbp_DDigxy-eQ/1960x1044sr.jpg',
    bgMedium: 'https://is1-ssl.mzstatic.com/image/thumb/L6BJs1M_LHbp_DDigxy-eQ/688x368sr.jpg',
    bgSmall: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/24/02/93/240293be-55ce-cc4b-a30a-7628a4aa552a/d91b72d5-1195-4649-9cde-108390f91296.png/548x992nr.jpg',
    logoSrc: 'https://is1-ssl.mzstatic.com/image/thumb/vXNv4MQ8aLXIkWQTZxw-BQ/220x54.png',
    logoSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/vXNv4MQ8aLXIkWQTZxw-BQ/440x108.png',
  },
];

export const FAM_GALLERY_SLIDES: FamGallerySlide[] = [
  {
    id: 'hello-kitty',
    service: 'arcade',
    title: 'Hello Kitty Island Adventure',
    ctaText: 'Play now',
    href: 'https://apps.apple.com/us/app/hello-kitty-island-adventure/id1553505132',
    bgColor: '#f4f8fb',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/417x234.jpg',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/834x468.jpg',
  },
  {
    id: 'miley-zane-lowe',
    service: 'music',
    title: 'Miley: The Zane Lowe Interview',
    ctaText: 'Listen now',
    href: 'https://music.apple.com/us/station/miley-the-zane-lowe-interview/ra.6810826773',
    bgColor: '#000000',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e9/7b/bd/e97bbd89-c9ae-c79f-b533-bb9a806e5bf0/f81d102b-27cf-4041-814e-89a13fa320e3.png/196x196sr.jpg',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e9/7b/bd/e97bbd89-c9ae-c79f-b533-bb9a806e5bf0/f81d102b-27cf-4041-814e-89a13fa320e3.png/392x392sr.jpg',
    isSquareAlbum: true,
  },
  {
    id: 'join-team-ted-lasso',
    service: 'fitness',
    title: 'Join the Team with “Ted Lasso”',
    ctaText: 'Watch now',
    href: 'https://fitness.apple.com/us/studio-collection/join-the-team-with-ted-lasso/1673607671',
    bgColor: '#24568e',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/79/8e/f0/798ef0c7-5cdb-4eb0-6e23-4b68d5525832/3036bfa7-3cc0-419b-9c57-47e7101906ad.png/417x234.jpg',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/79/8e/f0/798ef0c7-5cdb-4eb0-6e23-4b68d5525832/3036bfa7-3cc0-419b-9c57-47e7101906ad.png/834x468.jpg',
  },
  {
    id: 'powerwash-simulator',
    service: 'arcade',
    title: 'PowerWash Simulator',
    ctaText: 'Play now',
    href: 'https://apps.apple.com/us/app/powerwash-simulator/id6477445344',
    bgColor: '#9fc6f4',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/417x234.jpg',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/834x468.jpg',
  },
  {
    id: 'new-music-daily',
    service: 'music',
    title: 'New Music Daily',
    ctaText: 'Listen now',
    href: 'https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5',
    bgColor: '#300402',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ff/1f/6a/ff1f6a26-4ad9-e922-cd91-c6c7d6ee8504/455170ad-ea7a-43fd-8f3a-0d8846798712.png/196x196SC.DN01.jpg?l=en-US',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ff/1f/6a/ff1f6a26-4ad9-e922-cd91-c6c7d6ee8504/455170ad-ea7a-43fd-8f3a-0d8846798712.png/392x392SC.DN01.jpg?l=en-US',
    isSquareAlbum: true,
  },
  {
    id: 'meditation-with-christian',
    service: 'fitness',
    title: 'Meditation with Christian',
    ctaText: 'Watch now',
    href: 'https://fitness.apple.com/us/workout/meditation-with-christian/6808747339',
    bgColor: '#241004',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/ea/5a/58/ea5a58f1-1eec-f488-ba04-eab9f25ed2e3/ME_CH_0345_artwork_en_ID360705_0.png/417x234.jpg',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/ea/5a/58/ea5a58f1-1eec-f488-ba04-eab9f25ed2e3/ME_CH_0345_artwork_en_ID360705_0.png/834x468.jpg',
  },
  {
    id: 'madden-nfl-27',
    service: 'arcade',
    title: 'Madden NFL 27 Arcade Edition',
    ctaText: 'Play now',
    href: 'https://apps.apple.com/us/app/madden-nfl-27-arcade-edition/id6755553408',
    bgColor: '#1f0f0f',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/b1/bd/81/b1bd81c6-f678-a6d1-25d2-9d3bd20e1299/f1d34c41-e9e3-428d-80b7-fff65822f3f6.png/417x234.jpg',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/b1/bd/81/b1bd81c6-f678-a6d1-25d2-9d3bd20e1299/f1d34c41-e9e3-428d-80b7-fff65822f3f6.png/834x468.jpg',
  },
  {
    id: 'todays-hits',
    service: 'music',
    title: 'Today’s Hits',
    ctaText: 'Listen now',
    href: 'https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb',
    bgColor: '#c69851',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/38/8c/80/388c802c-6280-aeae-a416-dfdbb52c35b8/ccb00e27-00ee-4027-9dc9-1fe208a94ac2.png/196x196SC.DN01.jpg?l=en-US',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/38/8c/80/388c802c-6280-aeae-a416-dfdbb52c35b8/ccb00e27-00ee-4027-9dc9-1fe208a94ac2.png/392x392SC.DN01.jpg?l=en-US',
    isSquareAlbum: true,
  },
  {
    id: 'programs',
    service: 'fitness',
    title: 'Programs',
    ctaText: 'Watch now',
    href: 'https://fitness.apple.com/us/Programs',
    bgColor: '#3a4a28',
    imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/2a/75/df/2a75df27-703b-4712-6d95-9c9e29ca1dc6/fa77ffdb-61aa-47e7-920a-7da1876f3929.png/417x234.jpg',
    imageSrc2x: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/2a/75/df/2a75df27-703b-4712-6d95-9c9e29ca1dc6/fa77ffdb-61aa-47e7-920a-7da1876f3929.png/834x468.jpg',
  },
];

export const FOOTER_FOOTNOTES = {
  numbered: [
    {
      num: 1,
      text: 'Based on data from an Apple-conducted study of heart rate accuracy, during July and August 2026, utilizing commercially available best-selling wearables available as of June 2026. For more information, visit ',
      linkText: 'apple.com/HRAccuracy',
      linkHref: 'https://www.apple.com/HRAccuracy',
    },
    {
      num: 2,
      text: 'Apple Upgrade is a device leasing program available in the U.S. (excluding U.S. territories). Leases are provided by Klarna: subject to eligibility and credit approval, including final approval at checkout. To be eligible, you must be a U.S. resident, at least 18 years old (or the legal age in your state), have an accepted credit or debit card, and have an Apple Account. Additional eligibility criteria apply. Device must be in good condition upon return; damage fees may apply. For iPhone only: In order to lease an iPhone, you must select an eligible carrier (but you cannot use a prepaid carrier plan). Upgrades require entering into a new lease and are subject to eligibility and credit approval. Apple Upgrade is not available on refurbished devices or online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses or enterprises; Government, Education, or Veterans and Military Purchase Programs.',
    },
  ],
  paragraphs: [
    'To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.',
    'Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.',
    'All communications from Apple and Goldman Sachs Bank USA about Apple Card (including transactional and marketing communications) and customer service support are available in English. Certain communications about Apple Card can be viewed in another language depending on your device language settings. If you reside in the U.S. Virgin Islands, American Samoa, Guam, Northern Mariana Islands, or U.S. Minor Outlying Islands, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.',
    'Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.',
    'A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.',
    'Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.',
  ],
};

export const FOOTER_COLUMNS: FooterSection[][] = [
  [
    {
      title: 'Shop and Learn',
      links: [
        { label: 'Store', href: 'https://www.apple.com/us/shop/goto/store' },
        { label: 'Mac', href: 'https://www.apple.com/mac/' },
        { label: 'iPad', href: 'https://www.apple.com/ipad/' },
        { label: 'iPhone', href: 'https://www.apple.com/iphone/' },
        { label: 'Watch', href: 'https://www.apple.com/watch/' },
        { label: 'Vision', href: 'https://www.apple.com/apple-vision-pro/' },
        { label: 'AirPods', href: 'https://www.apple.com/airpods/' },
        { label: 'Home', href: 'https://www.apple.com/home/' },
        { label: 'AirTag', href: 'https://www.apple.com/airtag/' },
        { label: 'Accessories', href: 'https://www.apple.com/us/shop/goto/buy_accessories' },
        { label: 'Gift Cards', href: 'https://www.apple.com/us/shop/goto/giftcards' },
      ],
    },
    {
      title: 'Apple Wallet',
      links: [
        { label: 'Wallet', href: 'https://www.apple.com/wallet/' },
        { label: 'Apple Card', href: 'https://www.apple.com/apple-card/' },
        { label: 'Apple Pay', href: 'https://www.apple.com/apple-pay/' },
        { label: 'Apple Cash', href: 'https://www.apple.com/apple-cash/' },
      ],
    },
  ],
  [
    {
      title: 'Account',
      links: [
        { label: 'Manage Your Apple Account', href: 'https://account.apple.com/' },
        { label: 'Apple Store Account', href: 'https://www.apple.com/us/shop/goto/account' },
        { label: 'iCloud.com', href: 'https://www.icloud.com/' },
      ],
    },
    {
      title: 'Entertainment',
      links: [
        { label: 'Apple One', href: 'https://www.apple.com/apple-one/' },
        { label: 'Apple TV', href: 'https://www.apple.com/apple-tv/' },
        { label: 'Apple Music', href: 'https://www.apple.com/apple-music/' },
        { label: 'Apple Arcade', href: 'https://www.apple.com/apple-arcade/' },
        { label: 'Apple Fitness+', href: 'https://www.apple.com/apple-fitness-plus/' },
        { label: 'Apple News+', href: 'https://www.apple.com/apple-news/' },
        { label: 'Apple Podcasts', href: 'https://www.apple.com/apple-podcasts/' },
        { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
        { label: 'App Store', href: 'https://www.apple.com/app-store/' },
      ],
    },
  ],
  [
    {
      title: 'Apple Store',
      links: [
        { label: 'Find a Store', href: 'https://www.apple.com/retail/' },
        { label: 'Genius Bar', href: 'https://www.apple.com/retail/geniusbar/' },
        { label: 'Today at Apple', href: 'https://www.apple.com/today/' },
        { label: 'Group Reservations', href: 'https://www.apple.com/today/groups/' },
        { label: 'Apple Camp', href: 'https://www.apple.com/today/camp/' },
        { label: 'Apple Store App', href: 'https://apps.apple.com/us/app/apple-store/id375380948' },
        { label: 'Certified Refurbished', href: 'https://www.apple.com/us/shop/goto/special_deals' },
        { label: 'Apple Upgrade', href: 'https://www.apple.com/us/shop/goto/apple_upgrade' },
        { label: 'Apple Trade In', href: 'https://www.apple.com/us/shop/goto/trade_in' },
        { label: 'Financing', href: 'https://www.apple.com/us/shop/goto/payment_plan' },
        { label: 'Carrier Deals at Apple', href: 'https://www.apple.com/us/shop/goto/buy_iphone/carrier_offers' },
        { label: 'Order Status', href: 'https://www.apple.com/us/shop/goto/order/list' },
        { label: 'Shopping Help', href: 'https://www.apple.com/us/shop/goto/help' },
      ],
    },
  ],
  [
    {
      title: 'For Business',
      links: [
        { label: 'Apple and Business', href: 'https://www.apple.com/business/' },
        { label: 'Shop for Business', href: 'https://www.apple.com/retail/business/' },
      ],
    },
    {
      title: 'For Education',
      links: [
        { label: 'Apple and Education', href: 'https://www.apple.com/education/' },
        { label: 'Shop for K-12', href: 'https://www.apple.com/education/k12/how-to-buy/' },
        { label: 'Shop for College', href: 'https://www.apple.com/us/shop/goto/educationrouting' },
      ],
    },
    {
      title: 'For Healthcare',
      links: [
        { label: 'Apple and Healthcare', href: 'https://www.apple.com/healthcare/' },
      ],
    },
    {
      title: 'For Government',
      links: [
        { label: 'Apple and Government', href: 'https://www.apple.com/government/' },
        { label: 'Shop for Veterans and Military', href: 'https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary' },
        { label: 'Shop for State and Local Employees', href: 'https://www.apple.com/us_epp_67909/store' },
        { label: 'Shop for Federal Employees', href: 'https://www.apple.com/us_epp_55499/store' },
      ],
    },
  ],
  [
    {
      title: 'Apple Values',
      links: [
        { label: 'Accessibility', href: 'https://www.apple.com/accessibility/' },
        { label: 'Education', href: 'https://www.apple.com/education-initiative/' },
        { label: 'Environment', href: 'https://www.apple.com/environment/' },
        { label: 'Inclusion and Diversity', href: 'https://www.apple.com/diversity/' },
        { label: 'Privacy', href: 'https://www.apple.com/privacy/' },
        { label: 'Racial Equity and Justice', href: 'https://www.apple.com/racial-equity-justice-initiative/' },
        { label: 'Supply Chain Innovation', href: 'https://www.apple.com/supply-chain/' },
      ],
    },
    {
      title: 'About Apple',
      links: [
        { label: 'Newsroom', href: 'https://www.apple.com/newsroom/' },
        { label: 'Apple Leadership', href: 'https://www.apple.com/leadership/' },
        { label: 'Career Opportunities', href: 'https://www.apple.com/careers/us/' },
        { label: 'Investors', href: 'https://investor.apple.com/' },
        { label: 'Ethics & Compliance', href: 'https://www.apple.com/compliance/' },
        { label: 'Events', href: 'https://www.apple.com/apple-events/' },
        { label: 'Contact Apple', href: 'https://www.apple.com/contact/' },
      ],
    },
  ],
];

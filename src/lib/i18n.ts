export type Lang = "hy" | "ru" | "en";

export const translations = {
  hy: {
    nav: { about: "Մեր մասին", photos: "Լուսանկարներ", reviews: "Կարծիքներ", contact: "Կապ" },
    hero: {
      eyebrow: "Հաղպատ • Ալավերդի • Լոռի",
      title: "Լաստիվեր",
      subtitle: "Հայկական խոհանոցի համն ու Լոռու բնության շունչը մեկ սեղանի շուրջ",
      cta: "Ամրագրել սեղան",
      ctaSecondary: "Տեսնել լուսանկարները",
    },
    about: {
      kicker: "Մեր մասին",
      title: "Հայկական ավանդույթներ Լոռու սրտում",
      lead: "Լաստիվերը հյուրընկալ ռեստորան է Հաղպատում՝ վանքից ընդամենը մի քայլ հեռու։ Այստեղ դուք կզգաք իսկական հայկական հյուրընկալությունը՝ թարմ լավաշով, տանդիրով եփած ուտեստներով և գետի սահուն երգով։",
      pillars: [
        { t: "Տեղն ու տեսարանը", d: "Հաղպատ վանքի կողքին, գետի ափին՝ բնության գրկում։" },
        { t: "Ավանդական խոհանոց", d: "Հայկական և արևելաեվրոպական ուտեստներ՝ թարմ տեղական մթերքից։" },
        { t: "Ջերմ հյուրընկալություն", d: "Հյուրերն այստեղ ընկեր են դառնում սեղանի շուրջ։" },
      ],
    },
    photos: { kicker: "Պատկերասրահ", title: "Մի հայացք Լաստիվերին" },
    reviews: { kicker: "Կարծիքներ", title: "Ինչ են ասում մեր հյուրերը", source: "Tripadvisor", list: [
      { name: "Екатерина П.", place: "Սանկտ Պետերբուրգ", date: "Ապրիլ 2026", text: "Շատ զով ու գեղեցիկ վայր է, հոգևոր մարդիկ, համեղ ուտեստներ, գետի աղմուկ — բոլորին խորհուրդ եմ տալիս։" },
      { name: "Haykuhi T.", place: "Հայաստան", date: "Հոկտեմբեր 2025", text: "Հետաքրքիր տեսարժան վայր է գեղեցիկ բնությամբ, քարանձավներով և հիանալի սննդով։ Խորհուրդ եմ տալիս, եթե ուզում եք զգալ հայկական մշակույթը։" },
    ]},
    contact: {
      kicker: "Կապ",
      title: "Այցելեք մեզ",
      address: "Հաղպատ, Ալավերդի, Լոռու մարզ, Հայաստան",
      hours: "Ամեն օր՝ 09:00 – 23:00",
      phone: "+374 43 003088",
      directions: "Քարտեզ",
      whatsapp: "Գրել WhatsApp-ով",
    },
    footer: "© 2026 Լաստիվեր ռեստորան • Բոլոր իրավունքները պաշտպանված են",
  },
  ru: {
    nav: { about: "О нас", photos: "Фото", reviews: "Отзывы", contact: "Контакты" },
    hero: {
      eyebrow: "Ахпат • Алаверди • Лори",
      title: "Ластивер",
      subtitle: "Вкус армянской кухни и дыхание лорийской природы за одним столом",
      cta: "Забронировать стол",
      ctaSecondary: "Смотреть фото",
    },
    about: {
      kicker: "О нас",
      title: "Армянские традиции в сердце Лори",
      lead: "Ластивер — гостеприимный ресторан в Ахпате, в двух шагах от монастыря. Здесь вас встретят настоящим армянским радушием, свежим лавашом из тонира, блюдами из местных продуктов и спокойной песней горной реки.",
      pillars: [
        { t: "Локация и виды", d: "У монастыря Ахпат, на берегу реки, в окружении природы." },
        { t: "Традиционная кухня", d: "Армянские и восточно-европейские блюда из свежих местных продуктов." },
        { t: "Тёплый приём", d: "У нас гости становятся друзьями за общим столом." },
      ],
    },
    photos: { kicker: "Галерея", title: "Один взгляд на Ластивер" },
    reviews: { kicker: "Отзывы", title: "Что говорят наши гости", source: "Tripadvisor", list: [
      { name: "Екатерина П.", place: "Санкт-Петербург", date: "Апрель 2026", text: "Очень классное и красивое место, душевные люди, вкусно, шум реки — всем советую." },
      { name: "Haykuhi T.", place: "Армения", date: "Октябрь 2025", text: "Интересное живописное место с красивой природой, пещерами и прекрасной едой. Рекомендую, если хотите почувствовать армянскую культуру." },
    ]},
    contact: {
      kicker: "Контакты",
      title: "Приходите в гости",
      address: "Ахпат, Алаверди, Лорийская область, Армения",
      hours: "Ежедневно: 09:00 – 23:00",
      phone: "+374 43 003088",
      directions: "Построить маршрут",
      whatsapp: "Написать в WhatsApp",
    },
    footer: "© 2026 Ресторан Ластивер • Все права защищены",
  },
  en: {
    nav: { about: "About", photos: "Photos", reviews: "Reviews", contact: "Contact" },
    hero: {
      eyebrow: "Haghpat • Alaverdi • Lori",
      title: "Lastiver",
      subtitle: "The taste of Armenian cuisine and the breath of Lori’s nature at one table",
      cta: "Reserve a table",
      ctaSecondary: "See the photos",
    },
    about: {
      kicker: "About us",
      title: "Armenian tradition in the heart of Lori",
      lead: "Lastiver is a welcoming restaurant in Haghpat, a short walk from the monastery. Expect true Armenian hospitality, fresh lavash from the tonir, dishes made with local produce, and the gentle song of the river just outside.",
      pillars: [
        { t: "Location & views", d: "Right next to Haghpat Monastery, on the riverside, surrounded by nature." },
        { t: "Traditional cuisine", d: "Armenian and Eastern European dishes made from fresh local ingredients." },
        { t: "Warm hospitality", d: "Here, guests become friends around the same table." },
      ],
    },
    photos: { kicker: "Gallery", title: "A glimpse of Lastiver" },
    reviews: { kicker: "Reviews", title: "What our guests say", source: "Tripadvisor", list: [
      { name: "Ekaterina P.", place: "St. Petersburg", date: "April 2026", text: "Very cool and beautiful place, soulful people, delicious food, the sound of the river — I recommend it to everyone." },
      { name: "Haykuhi T.", place: "Armenia", date: "October 2025", text: "An interesting sightseeing spot with beautiful nature, caves and great food. My recommendation if you want to see and taste Armenian culture." },
    ]},
    contact: {
      kicker: "Contact",
      title: "Come and visit us",
      address: "Haghpat, Alaverdi, Lori Province, Armenia",
      hours: "Open daily: 09:00 – 23:00",
      phone: "+374 43 003088",
      directions: "Get directions",
      whatsapp: "Message on WhatsApp",
    },
    footer: "© 2026 Lastiver Restaurant • All rights reserved",
  },
} as const;

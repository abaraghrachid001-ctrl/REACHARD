export const locales = ["fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const dictionaries = {
  fr: {
    nav: {
      services: "Services",
      blog: "Blog",
      resources: "Bibliothèque",
      membership: "Adhésion",
      store: "Boutique",
      contact: "Contact",
      login: "Connexion",
      dashboard: "Tableau de bord",
    },
    hero: {
      eyebrow: "Génie Civil & Travaux Publics — Maroc",
      title: "L'ingénierie marocaine, élevée au rang d'excellence.",
      subtitle:
        "Métrés, plans AutoCAD, dossiers d'appel d'offres, formations et estimations de coûts — réunis dans une plateforme pensée pour les ingénieurs, bureaux d'études et entreprises de BTP.",
      ctaPrimary: "Explorer la bibliothèque",
      ctaSecondary: "Devenir membre Premium",
    },
    services: {
      eyebrow: "Ce que nous proposons",
      title: "Une suite complète pour vos projets de BTP",
      items: [
        {
          title: "Métrés & Quantitatifs",
          desc: "Détails de quantités précis, conformes aux normes marocaines, prêts à intégrer dans vos appels d'offres.",
        },
        {
          title: "Fichiers AutoCAD",
          desc: "Plans DWG structurés — VRD, ouvrages d'art, bâtiments — vérifiés par des ingénieurs.",
        },
        {
          title: "Dossiers de marchés publics",
          desc: "CPS, règlements de consultation et bordereaux conformes au code marocain des marchés publics.",
        },
        {
          title: "Formations spécialisées",
          desc: "Sessions animées par des experts : calcul de structures, génie routier, gestion de chantier.",
        },
        {
          title: "Estimation des coûts",
          desc: "Bordereaux de prix actualisés et outils de chiffrage pour des devis fiables et rapides.",
        },
      ],
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      blog: "المقالات",
      resources: "المكتبة",
      membership: "العضوية",
      store: "المتجر",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      dashboard: "لوحة التحكم",
    },
    hero: {
      eyebrow: "الهندسة المدنية والأشغال العمومية — المغرب",
      title: "الهندسة المغربية في أعلى درجات التميّز.",
      subtitle:
        "المقايسات، ملفات الأوتوكاد، ملفات الصفقات العمومية، التكوينات وتقدير التكاليف — كل ذلك في منصة واحدة مخصصة للمهندسين ومكاتب الدراسات وشركات البناء.",
      ctaPrimary: "استكشاف المكتبة",
      ctaSecondary: "الانضمام كعضو مميز",
    },
    services: {
      eyebrow: "خدماتنا",
      title: "حل شامل لمشاريع البناء والأشغال العمومية",
      items: [
        { title: "المقايسات والكميات", desc: "تفاصيل كمية دقيقة ومطابقة للمعايير المغربية." },
        { title: "ملفات الأوتوكاد", desc: "مخططات DWG منظمة ومدققة من قبل مهندسين." },
        { title: "ملفات الصفقات العمومية", desc: "دفاتر الشروط ووثائق مطابقة لقانون الصفقات العمومية." },
        { title: "تكوينات متخصصة", desc: "دورات يؤطرها خبراء في حساب البنيات وهندسة الطرق." },
        { title: "تقدير التكاليف", desc: "أسعار محدثة وأدوات لتقدير دقيق وسريع." },
      ],
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

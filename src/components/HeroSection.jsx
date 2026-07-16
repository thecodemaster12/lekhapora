import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center gap-4 px-10 py-20">
        <div className="hero-content flex-1 space-y-2">
            <div className="text-center md:text-left">
                <span className="text-sm bg-green-200 p-2 rounded-2xl inline-block">{t('hero-subtitle')}</span>
            </div>
            <h2 className="text-secondary font-bold text-4xl">{t('hero-title')}</h2>
            <p>{t('hero-intro')}</p>
        </div>
        <div className="hero-banner flex-1 hidden justify-center md:block">
            <img src="https://placehold.co/600x400" alt="" />
        </div>
    </div>
  )
}

export default HeroSection
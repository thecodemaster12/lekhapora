import Card from "./Card"
import { useTranslation } from "react-i18next"

const OptionGrid = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4 px-10">
        <div className="mb-10">
            <h2 className="section-title">{t('grid-title')}</h2>
            <p className="section-intro">{t('grid-intro')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Card title="Addition" intro="Addition is a mathematical operation that involves adding two or more numbers together to produce a new number." link="/math/addition" />
        </div>
    </div>
  )
}

export default OptionGrid
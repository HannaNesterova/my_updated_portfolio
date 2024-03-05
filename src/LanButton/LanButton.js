import styles from './LenButtom.module.css';
import { useTranslation } from 'react-i18next';

function LanButton(){
    const {i18n, t} = useTranslation();
    const languageToogle =() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en')
    }

    return(

        <div>
            <button className={styles.button} onClick={languageToogle}>
                {i18n.language === 'en' ? 'EN' : 'UK'}
            </button>
        </div>
    )
}

export default LanButton;
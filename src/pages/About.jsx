import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { LangContext } from '../App';


function About() {
    const { lang, setLang } = useContext(LangContext);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang])

    return (
        <div className='w-full flex flex-col items-center justify-center gap-5'>
            <div className='self-end'>
                <select value={lang} onChange={(e) => setLang(e.target.value)}>
                    <option value="uz">uz</option>
                    <option value="ru">ru</option>
                    <option value="en">en</option>
                </select>
            </div>
            <div className='flex flex-col items-start justify-center w-2/3 gap-3'>
                <b>{t("aboutUs")}</b>
                {t("2msg")}

                <b>{t("who-we-are")}</b>
                {t("3msg")}

                <b>{t("what-we-do")}</b>
                {t("4msg")}

                <b>{t("why-choose-us")}</b>
                {t("5msg")}

                <b>{t("our-vision")}</b>
                {t("6msg")}
            </div>
        </div>
    );
}

export default About;
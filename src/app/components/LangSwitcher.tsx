"use client"
import { Locale } from "@/i18n/request";
import { setUserLocale } from "@/lib/locale";
import {startTransition} from 'react';
import { useLocale, useTranslations } from "next-intl";

const LangSwitcher = () => {
    const t = useTranslations();
    const locale = useLocale();

    const items = [
        {
          value: "es",
          label: t("es")
        },
        {
          value: "en",
          label: t("en")
        }
      ];

    function onChange(value: string) {
        const locale = value as Locale;
        console.log({
            locale
        })
        startTransition(() => {
          setUserLocale(locale);
        });
      }

    return (
        <div className="w-full">
            <select onChange={(e) => onChange(e.target.value)}>
            {items.map((item) => (
                <option
                  key={item.value}
                  className="flex cursor-default items-center px-3 py-2 text-base data-[highlighted]:bg-slate-100 text-slate-900"
                  value={item.value}
                  defaultValue={locale}
                >
                  {item.label}
                </option>
              ))}
            </select>
        </div>
    )
}

export default LangSwitcher;
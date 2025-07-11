import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Locales = "en" | "pt-BR";

type FeatureItem = {
  i18n: Record<
    Locales,
    {
      title: string;
      description: ReactNode;
    }
  >;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const FeatureList: FeatureItem[] = [
  {
    i18n: {
      "pt-BR": {
        description: (
          <>
            Chega de problemas com 'ç', 'ã', 'é' e outros caracteres especiais.
            Comunicação através do pyodbc lida com codificação de forma
            confiável.
          </>
        ),
        title: "Sem problemas com encoding",
      },
      en: {
        title: "Free of Encoding Issues",
        description: (
          <>
            No more problems with 'ç', 'ã', 'é' and other special characters.
            Communication through the pyodbc handles encoding reliably - without
            chopping.
          </>
        ),
      },
    },
    Svg: require("@site/static/img/utf-filter.svg").default,
  },
  {
    i18n: {
      "pt-BR": {
        title: "IntelliSense",
        description: (
          <>
            Com tipos completos e <i>JSDoc</i> bem escritos, você recebe
            autocomplete, sugestões e <b>segurança de tipos</b> diretamente no
            seu editor.
          </>
        ),
      },
      en: {
        title: "IntelliSense",
        description: (
          <>
            With full typings and well-written <i>JSDoc</i>, you get
            autocomplete, suggestions and <b>type security</b> right in your
            editor.
          </>
        ),
      },
    },
    Svg: require("@site/static/img/techno-brain.svg").default,
  },
  {
    i18n: {
      "pt-BR": {
        title: "SQL para desenvolvedores JS/TS",
        description: (
          <>
            Perfeito para aqueles que apenas querem <code>SELECIONAR</code> ou{" "}
            <code>INSERIR</code> dados sem ter que se lembrar onde vai o{" "}
            <i>WHERE</i>, <i>LIMIT</i> ou a <i>vírgula</i>.
          </>
        ),
      },
      en: {
        title: "SQL for JS/TS Developers",
        description: (
          <>
            Perfect for those who just want to <code>SELECT</code> or{" "}
            <code>INSERT</code> data without having to remember where the{" "}
            <i>WHERE</i>, <i>comma</i> or <i>LIMIT</i> goes.
          </>
        ),
      },
    },
    Svg: require("@site/static/img/language-convert.svg").default,
  },
];

function Feature({ Svg, i18n, locale }: { locale: string } & FeatureItem) {
  const { title, description } = i18n[locale];
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const { i18n } = useDocusaurusContext();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} locale={i18n.currentLocale} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

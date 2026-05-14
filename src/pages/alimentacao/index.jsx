import styles from "./index.module.css";

import {
  Apple,
  Salad,
  GlassWater,
  HeartPulse,
} from "lucide-react";

export default function Alimentacao() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Saúde e equilíbrio
          </span>

          <h1>Alimentação Saudável</h1>

          <p>
            Uma alimentação equilibrada fornece energia, fortalece o organismo
            e contribui para uma vida mais saudável e com qualidade.
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.infoCard}>
          <div className={styles.iconBox}>
            <Apple size={34} />
          </div>

          <div>
            <h2>Por que se alimentar bem?</h2>

            <p>
              A alimentação saudável ajuda no funcionamento do corpo,
              melhora a imunidade e reduz riscos de diversas doenças.
            </p>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Salad size={28} />
            </div>

            <h3>Nutrientes essenciais</h3>

            <p>
              Frutas, verduras e legumes fornecem vitaminas e minerais
              importantes para o organismo.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <GlassWater size={28} />
            </div>

            <h3>Hidratação</h3>

            <p>
              Consumir água regularmente auxilia na circulação, digestão
              e funcionamento do corpo.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <HeartPulse size={28} />
            </div>

            <h3>Mais qualidade de vida</h3>

            <p>
              Bons hábitos alimentares ajudam na disposição física,
              concentração e bem-estar diário.
            </p>
          </div>
        </section>

        <section className={styles.highlight}>
          <div className={styles.highlightContent}>
            <h2>Benefícios da alimentação</h2>

            <ul>
              <li>Fortalecimento da imunidade</li>
              <li>Mais energia no dia a dia</li>
              <li>Prevenção de doenças</li>
              <li>Melhora da saúde física e mental</li>
            </ul>
          </div>

          <div className={styles.imageArea}>
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
              alt="Alimentação saudável"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
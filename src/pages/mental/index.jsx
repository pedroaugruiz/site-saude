import styles from "./index.module.css";

import {
  Brain,
  HeartHandshake,
  Smile,
  MoonStar,
} from "lucide-react";

export default function SaudeMental() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Equilíbrio e bem-estar
          </span>

          <h1>Saúde Mental</h1>

          <p>
            Cuidar da saúde mental é essencial para manter o equilíbrio emocional,
            melhorar a qualidade de vida e fortalecer o bem-estar diário.
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.infoCard}>
          <div className={styles.iconBox}>
            <Brain size={34} />
          </div>

          <div>
            <h2>Por que cuidar da mente?</h2>

            <p>
              A saúde mental influencia pensamentos, emoções e comportamentos,
              impactando diretamente a rotina e os relacionamentos.
            </p>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Smile size={28} />
            </div>

            <h3>Bem-estar emocional</h3>

            <p>
              Manter hábitos saudáveis ajuda na autoestima,
              felicidade e controle das emoções.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <MoonStar size={28} />
            </div>

            <h3>Descanso e equilíbrio</h3>

            <p>
              Dormir bem e respeitar momentos de descanso são importantes
              para reduzir o estresse e a ansiedade.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <HeartHandshake size={28} />
            </div>

            <h3>Apoio e convivência</h3>

            <p>
              Conversar, buscar apoio e manter boas relações contribuem
              para uma mente mais saudável.
            </p>
          </div>
        </section>

        <section className={styles.highlight}>
          <div className={styles.highlightContent}>
            <h2>Importância da saúde mental</h2>

            <ul>
              <li>Redução do estresse e ansiedade</li>
              <li>Melhora da autoestima</li>
              <li>Mais equilíbrio emocional</li>
              <li>Qualidade de vida e bem-estar</li>
            </ul>
          </div>

          <div className={styles.imageArea}>
            <img
              src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop"
              alt="Saúde mental"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
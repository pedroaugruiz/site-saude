import { useState } from "react";

import styles from "./index.module.css";

import {
  Scale,
  Calculator,
  Activity,
  HeartPulse,
} from "lucide-react";

export default function IMC() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  function calcularIMC() {

    if (!peso || !altura) return;

    const imc = peso / (altura * altura);

    setResultado(imc.toFixed(1));

    if (imc < 18.5) {
      setClassificacao("Abaixo do peso normal");
    }

    else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao("Peso normal");
    }

    else if (imc >= 25 && imc <= 29.9) {
      setClassificacao("Excesso de peso");
    }

    else if (imc >= 30 && imc <= 34.9) {
      setClassificacao("Obesidade classe I");
    }

    else if (imc >= 35 && imc <= 39.9) {
      setClassificacao("Obesidade classe II");
    }

    else {
      setClassificacao("Obesidade classe III");
    }
  }

  return (
    <div className={styles.container}>

      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>

          <span className={styles.badge}>
            Saúde e equilíbrio corporal
          </span>

          <h1>Calculadora IMC</h1>

          <p>
            Descubra seu Índice de Massa Corporal e veja a
            classificação baseada nos valores recomendados.
          </p>

        </div>
      </section>

      <main className={styles.main}>

        <section className={styles.infoCard}>

          <div className={styles.iconBox}>
            <Scale size={34} />
          </div>

          <div>
            <h2>O que é IMC?</h2>

            <p>
              O Índice de Massa Corporal (IMC) é um cálculo utilizado para avaliar se o peso
              está adequado em relação à altura.
            </p>
          </div>

        </section>

        <section className={styles.calculator}>

          <div className={styles.inputGroup}>
            <label>Peso (kg)</label>

            <input
              type="number"
              placeholder="Ex: 70"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Altura (m)</label>

            <input
              type="number"
              step="0.01"
              placeholder="Ex: 1.75"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>

          <button onClick={calcularIMC}>
            <Calculator size={18} />
            Calcular IMC
          </button>

          {resultado && (
            <div className={styles.result}>
              <h3>Seu IMC: {resultado}</h3>

              <p>{classificacao}</p>
            </div>
          )}

        </section>

        <section className={styles.tableSection}>

          <h2>Classificação IMC</h2>

          <div className={styles.tableWrapper}>

            <table>

              <thead>
                <tr>
                  <th>IMC</th>
                  <th>Classificação</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Menor que 18,5</td>
                  <td>Abaixo do peso normal</td>
                </tr>

                <tr>
                  <td>18,5 - 24,9</td>
                  <td>Peso normal</td>
                </tr>

                <tr>
                  <td>25,0 - 29,9</td>
                  <td>Excesso de peso</td>
                </tr>

                <tr>
                  <td>30,0 - 34,9</td>
                  <td>Obesidade classe I</td>
                </tr>

                <tr>
                  <td>35,0 - 39,9</td>
                  <td>Obesidade classe II</td>
                </tr>

                <tr>
                  <td>Maior ou igual a 40</td>
                  <td>Obesidade classe III</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </main>
    </div>
  );
}
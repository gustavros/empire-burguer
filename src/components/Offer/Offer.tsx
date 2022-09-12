import styles from "./offer.module.sass";

// images

import offer_01 from "/src/assets/ofertas/oferta-1.png";
import offer_02 from "/src/assets/ofertas/oferta-2.png";
import offer_03 from "/src/assets/ofertas/oferta-3.png";

export const Offer = () => {
  return (
    <section className={styles.container__section}>
      <div className={styles.container__wrapper}>
        <article>
          <div className={styles.container__contents}>
            <h1>Ofertas especiais</h1>
            <p>
              Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
              sempre estamos mudando o nosso cardapio.
            </p>
          </div>
          <div className={styles.container__offers}>
            <div className={styles.container__offer} id={styles.first__offer}>
              <img src={offer_01} alt="Foto de um hambúrguer" />
              <div>
                <h3>Burger imperial+batata</h3>
                <p>250kg</p>
              </div>
              <h3>
                Apenas <br />
                <span>Hoje</span>
              </h3>
            </div>
            <div className={styles.container__right}>
              <div
                className={styles.container__offer}
                id={styles.second__offer}
              >
                <img src={offer_02} alt="" />
                <div>
                  <h3>Batata</h3>
                  <p>150kg</p>
                </div>
              </div>
              <div className={styles.container__offer} id={styles.third__offer}>
                <img src={offer_03} alt="" />
                <div>
                  <h3>Sorvete</h3>
                  <p>50kg</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className={styles.container__infos}>
          <article>
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="47.7188"
                cy="48.2346"
                r="47.4141"
                fill="#1D0605"
                fill-opacity="0.2"
              />
              <path
                d="M45.635 26.2527V21.9523C44.2471 21.9523 42.8854 21.9699 41.5254 21.9471C39.9984 21.9224 38.9949 20.4362 39.5689 19.0555C39.9115 18.2342 40.5515 17.7522 41.4367 17.7487C45.6471 17.7311 49.8576 17.7294 54.0663 17.7487C55.1967 17.754 56.0749 18.7143 56.0802 19.8329C56.0854 20.9797 55.1932 21.9224 54.0245 21.9435C52.6593 21.9682 51.2941 21.9488 49.8802 21.9488V26.2632C55.1184 26.7645 59.7758 28.7027 63.9202 32.201C64.3689 31.7191 64.8036 31.239 65.2541 30.7729C65.8297 30.1749 66.4106 29.5839 66.9984 28.9982C67.9376 28.0625 69.2123 28.0221 70.068 28.8927C70.9219 29.7615 70.8732 31.0385 69.9376 31.9953C69.068 32.8852 68.1845 33.7594 67.308 34.6441C67.1567 34.7971 67.0141 34.9589 66.8454 35.14C71.2854 40.6804 73.2802 46.9805 72.5845 54.0651C72.0332 59.6775 69.781 64.5547 66.0071 68.7126C58.7358 76.7223 46.661 79.0159 36.9793 74.3004C26.9636 69.4249 21.5689 58.7576 22.9254 48.1941C24.3689 36.9534 33.2993 27.4381 45.635 26.2527ZM26.9115 51.4163C26.9028 63.0193 36.1984 72.4836 47.6367 72.517C59.2106 72.5522 68.5619 63.1477 68.5862 51.4462C68.6106 39.8819 59.2541 30.3859 47.8297 30.3789C36.2732 30.3701 26.9202 39.7763 26.9115 51.4163Z"
                fill="#FAE2CB"
              />
              <path
                d="M64.418 51.4848C64.4215 60.7169 56.9415 68.294 47.8093 68.3045C38.5485 68.3151 31.0719 60.7662 31.0772 51.411C31.0824 42.1683 38.5554 34.6001 47.6841 34.593C56.9519 34.586 64.4128 42.1155 64.4163 51.4831L64.418 51.4848ZM45.665 46.1767C45.665 47.888 45.6128 49.6011 45.6945 51.3072C45.7206 51.8718 45.9519 52.5525 46.3276 52.9499C48.3485 55.0904 50.4302 57.1747 52.5311 59.2378C52.8615 59.5614 53.3815 59.7795 53.8441 59.8551C54.7067 59.9958 55.5345 59.4541 55.8998 58.6609C56.2772 57.8413 56.1258 56.9443 55.4389 56.2442C53.7119 54.4854 51.9606 52.7512 50.2476 50.9801C50.0232 50.7479 49.8545 50.3504 49.8511 50.0285C49.8215 47.1124 49.8337 44.1945 49.8337 41.2783C49.8337 39.7728 49.0041 38.8019 47.7328 38.8125C46.4806 38.823 45.6685 39.7763 45.6667 41.2449C45.665 42.8894 45.6667 44.5339 45.6667 46.1784L45.665 46.1767Z"
                fill="#FAE2CB"
              />
            </svg>
            <div>
              <h3>Horário de funcionamento</h3>
              <p>
                Segunda-feira a sexta-feira:<span> 17h00 - 23h00</span>
              </p>
              <p>
                Sabado a Domíngo: <span>18h00 - 23h00</span>
              </p>
            </div>
          </article>
          <div className={styles.container__info}>
            <p>Não esqueça de marcar a gente no Instagram:</p>
            <p>#empireburger </p>
          </div>
        </div>
      </div>
    </section>
  );
};

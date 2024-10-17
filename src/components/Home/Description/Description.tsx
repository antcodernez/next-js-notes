import Image from "next/image"
import styles from "./Description.module.sass"

export const Description = () => {
    return (
        <section className={styles.Description}>
            <h1>Description about products</h1>
            <Image 
                src="/images/angry-cat.png" 
                alt="Angry cat" 
                width={500} 
                height={300} 
                priority={false} 
                quality={7}
            />

            <p>
                ¡Bienvenido a Silk Road, el mercado libre sin límites! ¿Buscas lo que no puedes encontrar en ningún otro lugar? Aquí, todo es posible. Compra y vende lo que quieras, sin restricciones, y con total anonimato. Nuestra plataforma, impulsada por Bitcoin y protegida en la red Tor, garantiza privacidad y libertad absoluta. Desde productos únicos hasta servicios exclusivos, en Silk Road tú decides las reglas.

                No más controles. No más límites. Solo tú y tus transacciones.

                Silk Road Donde el mercado es verdaderamente libre .
            </p>
        </section>
    )
}
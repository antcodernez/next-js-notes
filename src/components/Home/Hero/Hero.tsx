import styles from "./Hero.module.css";

export const Hero = () => {
    console.log(styles);
    
    return (
        <section className="section">
            <h1 className={styles.hero}>Hero</h1>
            <h2>Hola xd</h2>
        </section>
    )
}
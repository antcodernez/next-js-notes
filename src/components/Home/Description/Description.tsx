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
        </section>
    )
}
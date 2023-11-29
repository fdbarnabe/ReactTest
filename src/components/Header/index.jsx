import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <span>Fernando Domingues Barnabé.dev</span>
            <nav>
                <a href="">Python</a>
                <a href="">Html</a>
                <a href="">Java</a>
                <a href="">Css</a>
            </nav>
        </header>
    )
}

export default Header
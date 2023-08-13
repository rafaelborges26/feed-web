import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rafaelborges26.png" />
                    <div className={styles.authorInfo}>
                        <strong>Rafael Borges</strong>
                        <span>Surfista</span>
                    </div>
                </div>
                <time title='11 de Agosto às 22:30h' dateTime="2023-08-11 22:30:00" >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal 👋</p>
                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>
                <p><a>Acesse e deixe seu feedback 👉 devonlane.design</a></p>
                <p>
                    <a>#uiux</a>{' '}
                    <a>#userexperience</a>
                </p>
            </div>
        </article>
    )
}
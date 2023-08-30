import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div style={styles.comment}>
            <img src="https://github.com/rafaelborges26" alt="Rafael" />

            <div className='commentBox'>
                <div className='commentContent'>
                    <header>
                        <div className={styles.author}>
                            <strong>Rafael Borges</strong>
                            <time title='11 de Agosto às 22:30h' dateTime="2023-08-11 22:30:00" >Cerca de 1h atrás</time>

                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>muito bom parabens</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/rafaelborges26.png" alt="Rafael Borges" />
                <strong>Rafael Borges</strong>
                <span>Surfista iniciante</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
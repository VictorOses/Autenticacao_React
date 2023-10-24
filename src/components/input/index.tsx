import styles from './styles.module.css'

//SETA O TIPO DOS PARÂMETROS QUE A FUNÇÃO INPUT DEVERÁ RECEBER
type Props = {
    label: string,
    onChange: (event: any) => void
}

export default function Input(props: Props) {
    return (
        <div className={styles.divInput}>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input} type="text" onChange={props.onChange} />
        </div>
    )
}
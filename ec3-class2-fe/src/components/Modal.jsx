import "../styles/Modal.css"

function Modal(props){
    return (
        <div className="modalOverlay" onClick={props.onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <h3>Informações do Usuário</h3>
                <div className="modalInfo">
                    <div><strong>Nome:</strong> {props.user?.name}</div>
                    <div><strong>Email:</strong> {props.user?.email}</div>
                    <div><strong>Telefone:</strong> {props.user?.phone}</div>
                    <div><strong>Website:</strong> {props.user?.website}</div>
                    <div><strong>Empresa:</strong> {props.user?.company?.name}</div>
                </div>
                <button className="closeButton" onClick={props.onClose}>
                    Fechar
                </button>
            </div>
        </div>
    )
}

export default Modal;
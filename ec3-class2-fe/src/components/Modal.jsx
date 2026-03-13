function Modal(props){
    return (
        <>
            <h3>Meu modal</h3>
            Name:{props.user?.name}
            Phone:{props.user?.phone}
            Website:{props.user?.website} 
        </>
    )
}

export default Modal;
import './ComponentWrapper.css'

export default function ComponentWrapper(props) {
    return (
        <div className={props.className}>
            <div className={`wrapper`}>
                {props.children}
            </div>
        </div>
    )
}
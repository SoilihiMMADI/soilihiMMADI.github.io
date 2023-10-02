import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const MyButtonClose = ({onClose}) => {
  return (
    <>
      <button className="my-btn-close" onClick={onClose}>
        <FontAwesomeIcon icon={faClose} color="#bea064" />
      </button>
    </>
  )
}

export default MyButtonClose

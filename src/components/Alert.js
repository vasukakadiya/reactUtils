import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type==='Success'?'success':props.alert.type} alert-dismissible fade show`}>
        <strong>{props.alert.type}</strong> {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

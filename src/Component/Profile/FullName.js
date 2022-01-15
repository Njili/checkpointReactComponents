import React from 'react'

const FullName = () => {
    return (
        <div>
        <p>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            FullName :
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Monkey D Luffy
          </div>
        </div>
      </div>
    )
}

export default FullName

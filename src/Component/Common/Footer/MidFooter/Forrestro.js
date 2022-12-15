import React from 'react'
import '../Footer.css'
const Forrestro = ({forrestro}) => {
  const Name = forrestro?.nameLink ?? '';
  const firstLink = forrestro?.firstLink ?? '';
  const secondLink = forrestro?.secondLink ?? '';
  const thirdLink = forrestro?.thirdLink ?? '';
  return (
    <div className='forrestro mid-footer-div'>
    <h3 className='mid-footer-title'>{Name}</h3>
    <div className="mid-footer-link-wrapper">
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{firstLink}</a></p>
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{secondLink}</a></p>
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{thirdLink}</a></p>
    </div>
    </div>
  )
}

export default Forrestro
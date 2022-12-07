import React from 'react'
import '../css/footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='container-footer'>
        <footer>
            <section className='social'>      
                <a href="https://github.com/John-devX"><FaGithub className='icons-social'/></a>
                <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG7YMz4PBKRBgAAAYTPFMI4foRG_SNMuBI1DYg6PE065BpUFIKT_lcMYN4kcdBIcGeDnbkrt06W_X6hFydN_J7vsXbNVgJdyP6jq9eVC49wBMrEQhO861xeTeD_-TrR2l8YIHs=&original_referer=https://www.linkedin.com/in/john-anderson-a13a50251&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjohn-anderson-a13a50251%3Foriginal_referer%3D" target='_blank' rel='noopener'><FaLinkedin className='icons-social' /></a>
            </section>
            <section className='developer'>
              <p>Developer <span id='span-dev'>John-DevX</span></p>
            </section>
        </footer>
    </div>
  )
}

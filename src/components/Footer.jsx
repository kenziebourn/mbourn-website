import React from 'react'

const Footer = () => {
  const lineBreaks = [...Array(10)].map(() => <br />);

  return (
    <div>
        {lineBreaks}
        <div class="text-center hover:text-white duration-500">
            <a id="mbournwebsite" href="https://github.com/kenziebourn/mbourn-website">
                Designed & Built by McKenzie Bourn ©
                </a>
        </div>
    </div>
  )
}

export default Footer;

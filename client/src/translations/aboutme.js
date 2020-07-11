import React from 'react'

const aboutmeFi = () => {
    return(
        <div>
            <h2>Hei</h2>
            <p>
                Olen helsinkiläinen taidemaalari, joka työskentelee pääasiassa öljyvärein.
                Tällä hetkellä olen kiinnostunut erityisesti ihmisten kuvaamisesta ja 
                selaan innokkaasti vanhoja valokuvia löytääkseni materiaalia maalauksiani varten.
                Taustalla minulla on perusteelliset nuoruudessa hankitut elävän mallin piirustusopinnot
                sekä akateeminen loppututkinto maalaustaiteesta.
            </p>
        </div>
    )
}

const aboutmeEn = () => {
    return(
        <div>
            <h2>Hi</h2>
            <p>
                I am a Helsinki-based artist who mainly works with oilpaints. 
                Currently, I am particulary intersested in portraying people in
                my paintings. In the background, I have a thorough study of living model
                acquired in my youth as well as an academic degree in painting.
            </p>
        </div>
    )
}

export default { aboutmeFi, aboutmeEn }
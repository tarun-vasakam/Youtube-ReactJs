import React from 'react';
import Video from './video';
import Re from './assets/react.jpg';
import CSS from './assets/css.jpg';
import Ne from './assets/ne.jpg';
import spot from './assets/spotify.jpg';
import Naruto from './assets/naruto.jpg';
import PY from './assets/python.webp';
import Jack from './assets/jackie.jpg';
import Thalapathy from './assets/thalap.jpg';

export default function Main(){
    const datas = [
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/2sVeyo2tYbE?si=_t_0NFSaOi_0KRTH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,imag: Re, title: "ReactJs Tutorial | Tamil", cname: "JvlCode", views: "33K", age: "9 months ago" },
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/3cUkvFKYbHE?si=0cQVOaRSMJunb_1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,imag: PY, title: "10 Tips to improve your Python Code", cname: "Tech with Tim", views: "149K", age: "12 days ago"},
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/8zknRr_fjB4?si=KOp_M7my_ZyzRsIt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, imag: spot, title: "Muzumathi | A.R.Rahman", cname: "Spotify", views: "23M", age: "1 day ago"},
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/wsTv9y931o8?si=93ck5uCzoSaJ_mmq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, imag: CSS, title: "Css FlexBox in 20 mins", cname: "CSS Master", views: "1M", age: "1 year ago"},
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/jgQjes7MgTM?si=b4f7IvBTF347Ou_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,imag: Ne, title: "Best Roadmap to Crack any Coding Interview", cname: "NeetCode", views: "890K", age: "3 months ago"},
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/emAtvzZyenY?si=-AJo6e2R_Enqr2g6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,imag: Naruto, title: "Naruto Vs Sasuke | Industry Baby", cname: "aero.yt", views: "199K", age: "2 weeks ago"},
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/kx8V0vRvX44?si=Rpl4GQztsqYaMtMi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,imag: Thalapathy, title: "Thalapathy motivation at Audio Launch", cname: "Thalapathy", views: "1.1M", age: "21 hours ago"},
        { iframe: <iframe width="290" height="180" src="https://www.youtube.com/embed/OQGzpDzM03E?si=Ja2FyIvrB6RNZEko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,imag: Jack, title: "Jackie Chan S4 E22 | Tamil", cname: "Uncle Black", views: "500K", age: "4 months ago"}
    ]

    return(
        <section className='main-main'>
            {datas.map((data) => <Video iframe={data.iframe} imag={data.imag} title={data.title} cname={data.cname} views={data.views} age={data.age}/>)}
        </section>
    );
}
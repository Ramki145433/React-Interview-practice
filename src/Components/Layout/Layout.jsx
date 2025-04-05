import React from 'react'
import "./Layout.css"

const Layout = () => {
  return (
    <div className='container'>
      <header className='header'></header>
      <aside className='sidebar'></aside>
      <main className='main'>
        {
            Array.from({length : 50}, (_,i) => {
                return(
                    <p key={i} className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus earum reiciendis placeat repudiandae nulla voluptatum a modi? Adipisci porro minus quasi quidem cumque vero debitis quod quia est itaque.
                    Laborum molestias rem praesentium iste. Autem pariatur unde expedita nesciunt velit itaque qui illum dolorum? Nemo, maxime magni reprehenderit obcaecati soluta sed quidem pariatur iste quis suscipit alias. Modi, vel.
                    Eos porro sapiente vitae autem soluta nobis quasi sint impedit sit magni architecto odio, nam tempore vero voluptate. Eligendi iure veritatis inventore alias ex possimus recusandae! Autem tempora atque consequuntur.
                    Veniam eius dolores adipisci ea harum reprehenderit mollitia exercitationem soluta vitae officia eveniet, voluptatem minima ducimus deleniti quam aliquid magnam dignissimos, iste quidem maiores ab eaque nulla! Eveniet, obcaecati vitae.
                    Illum quis maxime possimus odit? Maiores aspernatur sint vel eius fugit nulla fugiat quasi eaque tempore quidem id repellendus aperiam sit omnis unde tempora, rem quae quis. Sunt, consectetur ratione!
                    Veritatis alias necessitatibus explicabo, inventore velit qui modi rem officia blanditiis repellat est quaerat reiciendis reprehenderit temporibus iste ipsam quisquam dolorem harum quibusdam quae. Reiciendis illo provident nobis adipisci tempore?
                    Ipsum libero assumenda corporis ducimus perspiciatis autem rerum ea, a dolore molestiae debitis veritatis ullam nihil aut, quisquam nemo at sit </p>
                )
            })
        }
      </main>
    </div>
  )
}

export default Layout

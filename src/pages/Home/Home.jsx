import './Home.scss'
import { motion as m } from 'framer-motion'
function Home() {
    return (
        <m.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="min-w-full h-full bg-accent-700 absolute top-0 left-0"
        >
            <header className="text-center">
                <h1 className="text-9xl text-primary-200 pt-16">Welcome</h1>
                <div className="pt-36 text-primary-50 text-4xl">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. In debitis doloremque ab mollitia, earum nesciunt
                        eius iure magni praesentium vitae fugiat porro quae.
                        Enim consectetur facilis doloremque ad, et eius!
                    </p>
                    <p>
                        Repellat sapiente ipsum sequi optio inventore ab
                        distinctio, explicabo atque animi earum, itaque
                        praesentium tempora ex perferendis nihil quos nesciunt
                        repellendus enim aut quidem odit vero adipisci? Eveniet,
                        incidunt harum.
                    </p>
                    <p>
                        Sed consectetur delectus ad voluptate obcaecati! Beatae
                        tempora, consectetur magni ipsum odio architecto nobis
                        facere accusantium. Dolor tenetur nihil nostrum
                        reprehenderit. Nihil voluptatibus eaque magnam nam
                        voluptatum ipsum pariatur fugiat.
                    </p>
                </div>
            </header>
        </m.div>
    )
}

export default Home

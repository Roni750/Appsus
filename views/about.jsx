
export function About() {
    return <section className="about">
        <h1 className="about-title">About us</h1>
        <div className="cards-container">
            <div className="card">
                <img src="./assets/img/roni-img.jpg"></img>
                <h2 className="card-title">Roni Yerushalmi</h2>
                <p>Yo, I'm a student at coding academy's Fullstack Bootcamp course, March 2023<br />
                    I'm a huge motorcycles & technology enthusiast, anything that concludes these two topics will
                    probably be on my favorites list pending for read until I get my life back, which means by the end
                    of the course.</p>
                    <div class="about-footer">
                <a href="https://www.linkedin.com/in/%E2%80%AAroni-yerushalmi-2184b0227/"><i
                        class="fa-brands fa-linkedin"></i></a> | <a href="https://github.com/Roni750"><i
                        class="fa-brands fa-github"></i></a>
            </div>
            </div>
            <div className="card">
                <img src="./assets/img/ofek-img.jpg"></img>
                <h2 className="card-title">Ofek Rashti</h2>
                <p>Hey, I’m Ofek 22 years old studying Full-Stack development, in Coding-Academy. Always looking for a new challenge and to self improve.</p>
                <div class="about-footer">
                <a href="https://www.linkedin.com/in/%E2%80%AAroni-yerushalmi-2184b0227/"><i
                        class="fa-brands fa-linkedin"></i></a> | <a href="https://github.com/ofekr2261"><i
                        class="fa-brands fa-github"></i></a>
            </div>
            </div>
        </div>
    </section>
}

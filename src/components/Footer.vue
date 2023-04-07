<template>
    <section class="footer" id="footer">
        <footer>
            <div class="container">
                <div class="element">
                    <div class="footer-items">
                        <div class="footer-logo item">
                            <div class="logo">
                                <a href="#">
                                    <img class="logo-img" src="../assets/img/logo.png" alt="logo">
                                </a>
                            </div>
                            <p>Dos Con Dos</p>
                        </div>
                        <div class="footer-contact item">
                            <div class="title">CONTACTEZ-NOUS</div>
                            <ul>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-location-pin"></i>
                                        2323 Rue Galvani, Québec, QC, CA G1N 4H7
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-phone"></i>
                                        4189328666
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-envelope"></i>
                                        info@doscondos.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="copyright">
                        <div class="copyright-items">
                            <span>© Copyright 2023</span>
                            <div class="social">
                                <a href="#" class="soc-f">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</template>

<style scoped>
.title:after {
    content: "";
    height: 1px;
    width: 100px;
    margin-block: 1rem;
    background-color: #fff;
    display: block;
}

.soc-f{
    font-size: 30px;
    color: #fff;
}

.copyright {
    padding-top: 1.5rem;
}
.copyright-items{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright::before {
    content: "";
    height: 1px;
    margin-block: .5rem 1.5rem;
    background-color: #fff;
    display: block;
}

.footer {
    background-color: #21418E;
    color: #fff;
    padding-block: 3.4375rem 1.5rem;
}

.logo {
    background-color: #fff;
    width: 9.375rem;
    height: 9.375rem;
}

.footer-items {
    display: flex;
}

.item {
    width: 50%;
}

li {
    padding-block: 13px 15px;
}

span {
    max-width: 48%;
    display: block;
}

p {
    margin-block: 1rem;
}


</style>
<template>
    <nav class="navmenu">
        <ul>
            <li><a href="#">ACCEUIL</a> </li>
            <li><a href="#schedule">CALENRIER</a> </li>
            <li><a href="#contact">CONTACT</a> </li>
            <li> <a href="">SE CONNECTER / S'INSCRIRE</a></li>
        </ul>
    </nav>
</template>

<style scoped>
.navmenu ul {
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-family: 'Open sans', sans-serif;
    padding: 0;
}

li a{
    margin: .625rem 1.25rem;
    cursor: pointer;
    text-decoration: none;
    color: #111;
}

@media (width < 974px) {



    .navmenu ul {
        flex-direction: column;
        font-family: 'Arimo', sans-serif;
        border-right: 1px solid #DCDFE6;
        width: 100%;
    }


    .navmenu {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }


    li {
        height: 3.5rem;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 1rem;
        margin: 0;
    }

    li:hover {
        background-color: #E9ECF4;
    }
}
</style>
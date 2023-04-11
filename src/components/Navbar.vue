<template>
    <nav class="navmenu">
        <ul>
            <li>ACCEUIL</li>
            <li>CALENRIER</li>
            <li>CONTACT</li>
            <li>SE CONNECTER / S'INSCRIRE</li>
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

li {
    margin: .625rem 1.25rem;
    cursor: pointer;
}

@media (width < 974px) {



    .navmenu ul {
        flex-direction: column;
        font-family: 'Arimo', sans-serif;
        border-right: 1px solid #DCDFE6;
        width: 100%;
    }


    .navmenu{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }


    li{
        height: 3.5rem;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 0 0 0 1rem;
    }

    li:hover{
        background-color: #E9ECF4;
    }
}
</style>
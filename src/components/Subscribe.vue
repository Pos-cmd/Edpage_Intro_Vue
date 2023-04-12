<script setup>
const emit = defineEmits(['closeModal']);
const closeModal = () => emit('closeModal');

</script>

<template>
    <div class="modal-bg">
        <div class="modal">
            <div class="modal-header">
                <span>Formulaire - Connexion</span>
                <button class="close-btn" @click="closeModal">X</button>
            </div>
            <div class="modal-form">
                <form action="">
                    <div class="form-item">
                        <label for="">Adresse Email</label>
                        <div class="input-element">
                            <input type="email" placeholder="Adresse Email">
                            <span></span>
                        </div>
                    </div>
                    <div class="form-item">
                        <label for="">Mot de passe</label>
                        <div class="input-element">
                            <input type="password" placeholder="Mot de passe">
                            <span></span>
                        </div>
                    </div>
                </form>
            </div>
            <section class="modal-info">
                <a class="info" href="#">Vous n'avez pas de compte? S'inscrire</a>
                <a class="info" href="#">Mot de passe oublié</a>
            </section>
            <div class="modal-footer">
                <span>
                    <button class="btn-annuler">Annuler</button>
                    <button class="btn-valider">Valider</button>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-bg {
    font-family: 'Arimo', sans-serif;
    font-size: 14px;
    position: fixed;
    width: 100%;
    min-width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.modal {
    position: relative;
    background: #fff;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, .1);
    width: 60%;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
}

.modal-form {
    padding-block: 2rem 1rem;
    color: grey;
}

form .form-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-block: 1rem;
}

form .form-item label {
    width: 150px;
}

form .form-item input {
    width: 100%;
    height: 32px;
    padding-inline: 1rem;
    border: 1px solid #9c9da0;
    border-radius: 5px;
}

form .form-item input:focus {
    outline: 1px solid #DCDFE6;
}

.modal .close-btn {
    background: none;
    border: none;
    cursor: pointer;
}

.modal-info {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 1rem;
}

.modal .info {
    text-decoration: none;
    color: gray;
    ;
}

.modal .info:hover {
    text-decoration: underline;
}

.modal-footer span {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}

.modal-footer button {
    padding: .5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.btn-annuler {
    border: 1px solid #DCDFE6;
    background-color: #fff;
    transition: all .4s ease;
}

.btn-annuler:hover {
    border-color: #21418E;
    color: #21418E;
    background-color: #21428e15;
}

.btn-valider {
    border: 1px solid white;
    background-color: #21418E;
    color: white;
    transition: all .4s ease;
}

.btn-valider:hover {
    background-color: #4865b1;
}

.input-element {
    display: flex;
    flex-direction: column;
    width: 100%;
}

@media screen and (width < 767px) {

    .modal {
        width: 90%;
    }

    form .form-item {
        align-items: flex-start;
        flex-direction: column;
    }

    .modal-info {
        margin-bottom: 1rem;
    }
}
</style>
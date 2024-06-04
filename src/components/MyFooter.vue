<template>
    <footer class="footer">
        <div class="container footer__container">
            <img class="footer__logo" src="../assets/img/logo.svg" alt="Логотип Freshy Bar" />
            <p class="footer__copyright">© Freshy Bar, 2024</p>
            <div class="footer__developer">
                Developer:
                <a class="footer__link" href="https://github.com/Kalliacto" target="_blank">
                    &nbsp;Kalliacto with Love&#129505;
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'MyFooter',
};
</script>

<style scoped>
.footer {
    padding: 30px 0 32px;
}
.footer__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        'logo .'
        'copyright developer';
    gap: 40px;
}
.footer__logo {
    grid-area: logo;
}
.footer__copyright {
    grid-area: copyright;
}
.footer__developer {
    grid-area: developer;
    justify-self: end;
}
.footer__link:hover {
    cursor: pointer;
    color: var(--second-red);
}
@media (max-width: 940px) {
    .footer {
        padding-bottom: 24px;
    }
    .footer__container {
        gap: 24px;
    }
}

@media (max-width: 640px) {
    .footer__container {
        grid-template-columns: 1fr;
        grid-template-areas:
            'logo'
            'copyright'
            'developer';
        gap: 20px;
    }
    .footer__logo {
        max-width: 120px;
    }
    .footer__developer {
        justify-self: start;
    }
}
</style>

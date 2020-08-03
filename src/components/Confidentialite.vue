<template>
  <div class="hero-body">
    <div class="container">
      <div class="notification">
        <h1 class="title is-4 has-text-centered">Politique de cookies</h1>

        <br />
        <p>
          <strong>Que'est ce qu'un cookie</strong>
        </p>
        <br />

        <p>
          Ce sont de minuscules fichiers téléchargés sur votre
          ordinateur, pour améliorer votre expérience. Cette page
          décrit les informations qu'ils collectent, comment nous les
          utilisons et pourquoi nous devons parfois stocker ces
          cookies. Nous partagerons également la façon dont vous
          pouvez empêcher le stockage de ces cookies, mais cela peut
          dégrader ou «casser» certains éléments de la fonctionnalité
          du site.
        </p>

        <br />
        <p>
          <strong>Comment nous utilisons les cookies</strong>
        </p>
        <br />

        <p>
          Nous utilisons des cookies pour diverses raisons détaillées
          ci-dessous. Malheureusement, dans la plupart des cas, il n'y
          a pas d'options standard pour désactiver les cookies sans
          désactiver complètement les fonctionnalités et les
          fonctionnalités qu'ils ajoutent à ce site. Il est recommandé
          de laisser tous les cookies si vous ne savez pas si vous en
          avez besoin ou non au cas où ils seraient utilisés pour
          fournir un service que vous utilisez.
        </p>

        <br />
        <p>
          <strong>Désactivation des cookies</strong>
        </p>
        <br />

        <p>
          Vous pouvez empêcher l'installation de cookies en ajustant
          les paramètres de votre navigateur (voir l'aide de votre
          navigateur pour savoir comment procéder). Soyez conscient
          que la désactivation des cookies affectera la fonctionnalité
          de ce site et de nombreux autres sites Web que vous visitez.
          La désactivation des cookies entraînera généralement la
          désactivation de certaines fonctionnalités et
          fonctionnalités de ce site. Il est donc recommandé de ne pas
          désactiver les cookies.
        </p>

        <br />
        <p>
          <strong>Les cookies que nous utilisons</strong>
        </p>
        <br />

        <p>Cookies fournis par des tiers de confiance :</p>

        <ul>
          <li>
            <p>
              Des analyses tierces sont utilisées pour suivre et
              mesurer l'utilisation de ce site afin que nous
              puissions continuer à produire du contenu engageant.
              Ces cookies peuvent suivre des éléments tels que le
              temps que vous passez sur le site ou les pages que
              vous visitez, ce qui nous aide à comprendre comment
              nous pouvons améliorer le site pour vous.
            </p>
          </li>
        </ul>

        <br />
        <p>
          <strong>Plus d'informations</strong>
        </p>
        <br />

        <p>
          J'espère que cela a clarifié les choses pour vous et comme
          cela a été mentionné précédemment s'il y a quelque chose
          dont vous n'êtes pas sûr d'avoir besoin ou non, il est
          généralement plus sûr de laisser les cookies activés au cas
          où il interagirait avec l'une des fonctionnalités que vous
          utilisez sur notre site.
        </p>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    // if (this.isMainBackground) this.$store.commit("updateBackground");
  },
  beforeDestroy: function () {
    // this.$store.commit("updateBackground");
  },
};
</script>

<style lang="scss" scoped>
.notification {
  margin-top: 50px;
}
</style>

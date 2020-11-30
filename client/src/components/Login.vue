<template>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="Email" />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </p>
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password" />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
    <p class="control">
      <button class="button" id="btn" @click.prevent="login">
        <strong> Login </strong>
      </button>
      <button class="button" @click.prevent="fbLogin">
        <strong> FB Login</strong>
      </button>
      <button class="button" @click.prevent="googleLogin">
        <strong> Google Login</strong>
      </button>
    </p>
  </div>
</template>

<script>
import session from "@/models/session";
let auth2 = null;

export default {
  methods: {
    login() {
      session.user = {
        name: "Maria Hernandez",
        handle: "m11hern24",
        profile:
          "https://mail.google.com/mail/u/1?ui=2&ik=fdc8bf2c36&attid=0.1&permmsgid=msg-a:r4432692003323843178&th=17589f806c709fd0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9zbt-HM5tNOD9huzPb4NO0uv8Bsf3ES72VF0N6qlvMYr55eP2LUtuGV-8yWBk9d-glE25vT9kPGFUj8KOgBBIinuqrKm2jEE7TmkPOErQmGOizksX2vqqCEIA&disp=emb&realattid=17589f7fad245554d281",
      };
      this.$router.push("Feed");
    },
    fbLogin() {
      FB.login(
        (authInfo) => {
          FB.api("me?fields=id,name,email,picture", (x) => {
            session.user = {
              name: x.name,
              handle: x.email,
              profile: x.picture.data.url,
            };
            this.$router.push("Feed");
          });
        },
        { scope: "public_profile,email,user_photos" }
      );
    },
    async googleLogin() {
      const googleUser = await auth2.signIn();
      const profile = googleUser.getBasicProfile();
      session.user = {
        name: profile.getName(),
        handle: profile.getEmail(),
        profile: profile.getImageUrl(),
      };
      this.$router.push("Feed");
    },
  },
};
///////////////////////////////////
// load facebook script
window.fbAsyncInit = function () {
  FB.init({
    appId: "1144678312688368",
    cookie: true,
    xfbml: true,
    version: "v9.0",
  });

  FB.AppEvents.logPageView();
};
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
///////////////////////////////////
//load google script
const googleScriptTag = document.createElement("script");
googleScriptTag.setAttribute("src", "https://apis.google.com/js/api:client.js");
document.head.appendChild(googleScriptTag);
googleScriptTag.onload = () => {
  // the global gapi variable is created by loading that script
  gapi.load("auth2", () => {
    auth2 = gapi.auth2.init({
      client_id:
        "339414840125-sken17fa4hneitcklrl3bpl8goc879c2.apps.googleusercontent.com",
      cookiepolicy: "single_host_origin",
      scope: "profile email",
    });
  });
};
</script>

<style>
.input {
  margin: 5px;
}
.input[type="text"]:focus {
  box-shadow: 0 0 5px pink;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid pink;
}
.input[type="password"]:focus {
  box-shadow: 0 0 5px pink;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid pink;
}
.field {
  text-align: center;
  margin: auto;
  width: 50%;
}
.button {
  margin-left: 5px;
}
#btn {
  margin-left: 27%;
}
</style>
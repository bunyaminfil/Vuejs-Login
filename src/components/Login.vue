<template>
  <div>
    <body>
      <div class="giris">
        <div style="display:inline-block">
          <h2 class="text">Login</h2>
        </div>

        <form>
          <div class="pc">
            <input id="UserName" class="name" type="text" placeholder="İsim" />
          </div>
          <div class="pc">
            <input
              id="UserPassword"
              class="sifre"
              type="password"
              placeholder="Şifre"
            />
          </div>
          <button id="postData" class="btn" type="button">Giriş Yap</button>
        </form>
      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
  font-family: "Montserrat", sans-serif;
}
.giris {
  text-align: center;
  width: 350px;
  box-sizing: border-box;
  padding: 40px;
  background: white;
  font-family: "Montserrat";
  font-weight: 600px;
}
.title {
  margin-left: 30%;
  text-align: center;
}
.giris.pc {
  position: relative;
  width: 100%;
  margin-bottom: 25px;
}
.giris .pc input {
  text-align: center;
  background-color: rgb(242, 242, 242);
  height: 50px;
  width: 100%;
  padding: 0, 20px;
  box-sizing: border-box;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 20px;
}
.pc {
  margin-top: 3%;
}
.btn {
  text-align: center;
  background-color: rgb(34, 31, 32);
  outline: none;
  height: 50px;
  width: 100%;
  margin-top: 6%;
  border: none;
  border-radius: 20px;
  color: rgb(255, 255, 255);
  font-family: "Montserrat";
  font-weight: 400px;
}
.sifre {
  font-family: "Montserrat";
  font-weight: 400px;
}
.name {
  font-family: "Montserrat";
  font-weight: 400px;
}
</style>

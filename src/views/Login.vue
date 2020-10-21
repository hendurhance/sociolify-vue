<template>
<section>
  <div class="main">
    <b-container>
        <div class="form">
          <div class="text">
            <h3>LOGIN</h3>
          </div>
          <form @submit="onSubmit">
            <div class="form-input">
              <i class="fa fa-user icon"></i>
              <input placeholder="Username" type="text" name="" id="">
            </div>
            <div class="form-input">
              <i class="fa fa-key icon"></i>
              <input placeholder="Password" type="password" name="" id="">
            </div>
            <div class="form-input">
              <button disabled>LOGIN</button>
            </div>
          </form>
        </div>
    </b-container> 
  </div>
</section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
section{
  padding: 3em 20em;
}
.main{
  background: #5da7608f;
  margin: 0 auto;
}
.form{
  padding: 3em;
}
.form .text{
  margin-bottom: 1em;
}
.form .text h3{
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  color: rgb(14, 3, 3);
}
.form-input{
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.form-input input{
  width: 100%;
  padding: 10px;
  outline: none;
}
.form-input input:focus {
  border: 2px solid rgb(16, 128, 50);
}
.icon {
  padding: 15px;
  background: rgb(16, 128, 50);
  color: white;
  min-width: 50px;
  text-align: center;
}
.form-input button {
  background-color: rgb(16, 128, 50);
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-weight: 700;
  letter-spacing: 2px;
}
.form-input button:hover {
  opacity: 1;
}

@media screen and (max-width: 768px) {
    section{
        padding: 3em 0.2em !important;        
    }
    .form{
      padding: .5em;
    }
}
</style>
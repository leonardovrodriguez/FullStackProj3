<template>
  <div class="container" style="padding-top: 0px !important; margin-top: 0px !important;">
    <h1 style="color:#ffffff; font-family: Arial, Helvetica, sans-serif; !important; font-weight:bold;">Tweeter
    <font-awesome-icon icon="fa-solid fa-kiwi-bird"></font-awesome-icon>
    </h1>
    <!-- Create Post Here-->
    <label for="create-post" style="color:#ffffff; font-family: Arial, Helvetica, sans-serif;"> Whats on your mind?</label>
    <div class="create-post">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm input-group">
          <input type="text" id="create-post" class="form-control" v-model="text" placeholder="Post Description"/>
          <button v-on:click="createPost" class="btn btn-primary">
            <font-awesome-icon icon="fa-solid fa-paper-plane"></font-awesome-icon>
          </button>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
    <hr>
    <!-- Posts -->
    <p class="error" v-if="error">{{error}}</p>
    <div class="post-container">
      <div class="post" v-for="(post,index) in posts" 
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      >
      {{`
         ${post.createdAt.getMonth()+1}/
         ${post.createdAt.getDate()}/
         ${post.createdAt.getFullYear()}
      `}}
      <p class="text">{{post.text}}</p> 
      <button v-if="index != toUpdate" class="btn btn-primary"  id="update-post" v-on:click="setUpdateIndex(index)">
        <font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon>
      </button>
      <div v-if="index == toUpdate" class =row>
        <div v-if="index == toUpdate" class="col-sm"></div>
        <div v-if="index == toUpdate" class="col-sm input-group">
        <input v-if="index == toUpdate" class="form-control" type="text" v-model="newText" placeholder="New Description"/>
        </div>
        <div v-if="index == toUpdate" class="col-sm"></div>
      </div>
      <button v-if="index == toUpdate" class="btn btn-primary"  v-on:click="updatePost(post._id, newText)">Submit</button>
      <button v-if="index == toUpdate" class="btn btn-primary"  v-on:click="resetUpdate">Cancel</button>
      <button v-if="index != toUpdate" class="btn btn-primary"  v-on:click="deletePost(post._id)">
        <font-awesome-icon icon="fa-solid fa-trash"></font-awesome-icon>
      </button>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';
import "bootstrap/dist/js/bootstrap.js";
import "toastr/toastr.js"
import toastr from 'toastr';

export default {
  name: 'PostComponent',
  data() {
    return{ 
      posts: [],
      toUpdate: null,
      newText: '',
      error: '',
      text: '',
    }
  },
  async created() {
    try{
      this.posts = await PostService.getPosts();
    }catch(err) {
      this.error = err.message;
    }
    
  },
  methods:{
    async createPost(){
      if (!this.text) toastr.error("Enter a description!")
      else{
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();    
      toastr.success("Post Created!");
      this.text='';
      }
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
      toastr.success("Post Deleted!");
   },
    async updatePost(id){
      await PostService.updatePost(id,this.newText);
      this.posts = await PostService.getPosts();
      toastr.success("Post Updated!");
      this.toUpdate = null;
      this.newText = '';
    },
    setUpdateIndex(index){
      this.toUpdate = index;
    },
    resetUpdate(){
      this.toUpdate= null;
      this.newText= '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Change style -->
<style scoped>
div.container {
  background-color: #000000;
  padding: 0px;
  margin-top: 0px !important;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffffff;
}

div.post {
  position: relative;
  border: 2px solid #000000;
  border-radius: 10px;
  background-color:  #1F1B24;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
  color:white !important;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
  color: white;
}

h1 {
  margin:0px;
}
</style>

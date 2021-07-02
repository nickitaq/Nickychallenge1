
//TODO: RETRIEVE USER NAME AND EMAIL 
document.addEventListener("DOMContentLoaded", function(event) {

    async function users(){
       return await fetch('https://jsonplaceholder.typicode.com/users',).
        then(users => users.json()).then(data =>{
        const userCard = document.querySelector(".container") 
         userCard.innerHTML = data.map(user =>
             ` <div class="user curve">
                <p>${user.name}</p>
                    <p>${user.email}</p>
                    <a href="index.html?user_id=${user.id}" class="curve click">
                        Get User’s Posts
                    </a>
                    </div>
                  `).join(" ")
    
        }).then(error=>console.log(error))  
     }
    
    async function posts(user_id){
        return await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
            .then(postsData =>postsData.json())
            .then(posts=>{            
                const postsCard = document.querySelector(".posts")            
                postsCard.innerHTML = posts.map(post =>
                `   <div class="post curve">
                         <p>bbb${post.title}</p>              
                    </div>
                    `).join(" ")
        })
    } 
    
    function switchUsersAndPosts(){
        const user_id  = new URLSearchParams(window.location.search).get("user_id")
        if (user_id){
            posts(user_id)
            document.querySelector("#title").innerText='Posts'
        } else{
          users()
          document.querySelector("#title").innerText='Users'
        }
    }
    switchUsersAndPosts()
    })
var parent = document.getElementById('parent')

const users = [
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaO89frOcROXphkKmceDjhsFCrOuE-yHTrw&s",
      "name": "Hakeem Chicha",
      "age": 69,
      "location": "Ajmer",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Riya Kapoor",
      "age": 24,
      "location": "Delhi",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1503354531728-dedfa6cb4e8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Arjun Singh",
      "age": 30,
      "location": "Mumbai",
      "status": "Friend",
      "buttonText": "Remove Friend",
      isFriend: true
    },
    {
      "image": "https://images.unsplash.com/photo-1635098996189-6edad727a0f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Sana Khan",
      "age": 27,
      "location": "Lucknow",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1531287333398-6d7bd77ef790?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Vikas Yadav",
      "age": 35,
      "location": "Jaipur",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1553544923-37efbe6ff816?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Meena Patil",
      "age": 29,
      "location": "Pune",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Kabir Sheikh",
      "age": 26,
      "location": "Hyderabad",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1727173973886-87df96d8a638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Neha Sharma",
      "age": 23,
      "location": "Chandigarh",
      "status": "Friend",
      "buttonText": "Remove Friend",
      isFriend: true
    },
    {
      "image": "https://images.unsplash.com/photo-1594751684241-bcef815d5a57?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Rahul Varma",
      "age": 31,
      "location": "Kolkata",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Divya Mehta",
      "age": 28,
      "location": "Ahmedabad",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1710548651184-5eb2b115fe80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Zoya Khan",
      "age": 25,
      "location": "Bhopal",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1639164543505-01e8d1332f0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Amit Jain",
      "age": 34,
      "location": "Surat",
      "status": "Friend",
      "buttonText": "Remove Friend",
      isFriend: true
    },
    {
      "image": "https://images.unsplash.com/photo-1586425225143-0c8f59053610?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Priya Singh",
      "age": 32,
      "location": "Noida",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1710695568547-55afb2b5a1fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fDB8fHww",
      "name": "Rohan Das",
      "age": 33,
      "location": "Patna",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    },
    {
      "image": "https://images.unsplash.com/photo-1519744434498-a0de604df9db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fHww",
      "name": "Ayesha Malik",
      "age": 24,
      "location": "Indore",
      "status": "Stranger",
      "buttonText": "Add Friend",
      isFriend: false
    }
  ]


function mainFunction(){



var abc = ''

users.forEach((elem, index)=>{
    abc +=`<div class="card">
            <img src=${elem.image} alt="">
            <h2>${elem.name}</h2>
            <h5>${elem.age}, ${elem.location}</h5>
            <h4>${elem.status}</h4>
            <button id="${index}">${elem.buttonText}</button>
        </div>`
})

document.body.innerHTML = abc
}
mainFunction()

document.addEventListener('click', function(event){
  if (users[event.target.id].status == 'Stranger'){
    users[event.target.id].status = 'Friend'
    users[event.target.id].buttonText = 'Remove Friend'

  }else{
    users[event.target.id].status = 'Stranger'
    users[event.target.id].buttonText = 'Add Friend'
  }
    
    mainFunction()
})
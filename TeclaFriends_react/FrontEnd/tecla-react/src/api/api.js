//obtener busqueda de ususarios
const getSearch = async (text) => {
  console.log(JSON.parse(window.localStorage.getItem("TOKEN")).token)
  return await fetch(`http://localhost:3001/busqueda/${text}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  }).then((res) => res.json());
};

//insertar nuevos cursos
const pushCourse = async (obtainData) => {
  return await fetch(`http://localhost:3001/cursos/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

//insertar habilidades
const pushAbiliti = async (data) => {
  return await fetch(`http://localhost:3001/habilidades/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

//enviar consulta de problemas
const pushHelp = async (obtainData) => {
  return await fetch(`http://localhost:3001/help/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

const getCuorse = async (data) => {
  return await fetch(`http://localhost:3001/cursos/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getAbility = async (data) => {
  return await fetch(`http://localhost:3001/habilidades/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//Funcion para listar posibles amigos
const getFriends = async (data) => {
  return await fetch(`http://localhost:3001/amigos/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//registar nuevo ususario
const register = async (newUser) => {
  var url = "http://localhost:3001/register";
  var urlPhoto =
    "https://api.imgbb.com/1/upload?key=8bf495d29a8eaf97bf28a9d4e52cea42";
  var formData = new FormData();
  let resultado;
  var fileField = document.querySelector("#profilePhoto");
  formData.append("image", fileField.files[0]);

  let obtainData = () => {
    return {
      mail: newUser[1].value,
      name: newUser[2].value,
      middle_name: newUser[3].value,
      last_name: newUser[4].value,
      city: newUser[6].value,
      country: newUser[5].value,
      birth_date: newUser[10].value,
      academic_level: newUser[8].value,
      lenguages: newUser[9].value,
      linkedIn: newUser[7].value,
      hobbies: newUser[12].value,
      password: newUser[11].value,
      profile_photo: resultado.data.url,
    };
  };

  let sendData = async () => {
    await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(obtainData()), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        resultado = json;
      })

      .then(() => {
        if (resultado === "userAdded") {
          console.log("Success:", resultado);
          alert("User Added");
          window.location.href = "/";
        } else {
          alert(resultado.error);
          console.log("error: ", resultado.error);
          console.log(resultado);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  await fetch(urlPhoto, {
    mode: "cors",
    method: "POST",
    mimeType: "multipart/form-data",
    body: formData,
    data: formData,
  })
    .then((res) => res.json())
    .then((json) => {
      resultado = json;
    })
    .then(() => {
      return sendData();
    })
    .catch((error) => console.error("Error:", error));
};

//iniciar sesion
const inicioSesion = async (obtainData) => {
  return await fetch("http://localhost:3001/login", {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
};

//obtener notificaciones para mostrarlas en la nav
const getNotifications = async (data) => {
  return await fetch(`http://localhost:3001/request/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//obtener personas que te han manadado solicitudes
const getPossibleFriend = async (data) => {
  return await fetch(`http://localhost:3001/amistad/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

    //obtener personas que te han manadado solicitudes
  const discoverFriend = async (data) => {
    return await fetch(`http://localhost:3001/noamigos/${data}`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json"
       },
     })  
      .then((res) => res.json())  
      .catch((err) => console.log(err));
   };


//Checar login
const loginCheck = async (obtainData) => {
  return await fetch("http://localhost:3001/login/check", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${obtainData.token}`
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
};
//mandar solicitudes de amistad
const requestApi = async (data) => {
  return await fetch(`http://localhost:3001/request/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
};

//Actualizar estatus 
const updateStatus = async (data) => {
  return await fetch(`http://localhost:3001/request/update`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
}

//feedback
const pushfeedback= async (data) => {
  return await fetch(`http://localhost:3001/feedback`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${JSON.parse(window.localStorage.getItem("TOKEN")).token}`
    },
  })
    .then((res) => res.json())
    .then((json) => {
      alert(json);
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
}


   //obtener los diferentes feedback
   const feedbackGet = async (data) => {
    return await fetch(`http://localhost:3001/feedbackget/${data}`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json"
       },
     })  
      .then((res) => res.json())  
      .catch((err) => console.log(err));
   };

export {
  getPossibleFriend,
  getCuorse,
  getFriends,
  pushAbiliti,
  getAbility,
  pushHelp,
  getSearch,
  pushCourse,
  getNotifications,
  requestApi,
  discoverFriend,
  updateStatus,
  pushfeedback,
  feedbackGet,

};

export { register, inicioSesion, loginCheck };

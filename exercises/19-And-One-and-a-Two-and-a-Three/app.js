contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
let datos = [];
for(key in contact){
  datos.push(key + " : " + contact[key])
}
 console.log(datos.join(''))
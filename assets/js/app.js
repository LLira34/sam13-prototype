var btnNotificacion = document.getElementById("buttonN"),  
    btnPermiso = document.getElementById("buttonP")
    titulo = "Muelle 13",
    opciones = {
        icon: "logo.png",
        body: "Se envio mensaje a Gmail"
    };

function permiso() {  
        //Notification.requestPermission();
        var n = new Notification(titulo, opciones);
};

function mostrarNotificacion() {  
    if(Notification) {
        /*if (Notification.permission == "granted") {*/
            var n = new Notification(titulo, opciones);
        }

        /*else if(Notification.permission == "default") {
            alert("Primero da los permisos de notificación");
        }

        else {
            alert("Bloqueaste los permisos de notificación");
        }*/
    
};

btnPermiso.addEventListener("click", permiso);  
btnNotificacion.addEventListener("click", permiso);
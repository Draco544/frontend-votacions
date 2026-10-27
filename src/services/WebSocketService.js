import { useAppStore } from "@/stores/app";
import { el } from "vuetify/locale";




class WebSocketService {
    constructor(url){
        this.url = url;
        this.socket = null;
        this.store = useAppStore
    }

    connect() {
        this.socket =  new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log("Conexion con el WS establecida");
            
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            this.store.setVotos(data);
        };

        this.socket.onclose = () => {
            console.log("Conexion con el WS cerrada");

            setTimeout(() => this.connect(), 5000);
        };

        this.socket.onerror = (error) =>  {
            console.log("Websocket error", error);
            
        };
    }

        
    sendVote(optionalIndex) {
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ vote: optionalIndex}));

        }else{
            console.log("Websocket no conectado");
            
        }
    }

    disconect() {
        if (this.socket) {
            this.socket.close();
        }
    }


}

export default WebSocketService;
//IIFE
const mostrarVideo = (() => {
    let mostrar = (url, idIframe) => document.getElementById(idIframe).setAttribute("src", url);
    return{
        verVideo: (url, idIframe) => mostrar(url, idIframe)
    }    
})();


class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (new_url) => _url = new_url;
    }
    get obtainingUrl(){
        return this.getUrl();
    }
    setInicio = () => {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
    super(url);
    let _id = id;
    this.getId = () => _id;
    this.setId = (new_id) => this._id = new_id;
    }
    get obtainingId(){
        return this.getId();
    }
    playMultimedia = () => {
        mostrarVideo.verVideo(this.obtainingUrl, this.obtainingId);
    }
    setInicio = (start) => {
        document.getElementById(this.obtainingId).setAttribute('src', this.obtainingUrl+start)
    }
}

let musica = new Reproductor('https://www.youtube.com/embed/vlhaFtsnqfs', 'musica');
let peliculas = new Reproductor('https://www.youtube.com/embed/fWQrd6cwJ0A', 'peliculas');
let series = new Reproductor('https://www.youtube.com/embed/kAYc5elCJcE', 'series');

musica.playMultimedia();
musica.setInicio('?start=82');
peliculas.playMultimedia();
series.playMultimedia();
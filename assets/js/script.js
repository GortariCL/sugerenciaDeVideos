//1. Implementar el Patrón Módulo mediante IIFE
const showVideo = (() => {
    let show = (url, idIframe) => {
        document.getElementById(idIframe).setAttribute("src", url);
    };
    return{
        watchVideo: (url, idIframe) => show(url, idIframe)
    };
})();

//2. Establecer una clase padre denominada Multimedia
class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (new_url) => _url = new_url;
    };
    get obtainingUrl(){
        return this.getUrl();
    };
    setInicio = () => {
        return "Este método es para realizar un cambio en la URL del video";
    };
};

//3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia
class Reproductor extends Multimedia{
    constructor(url, id){
    super(url);
    let _id = id;
    this.getId = () => _id;
    this.setId = (new_id) => this._id = new_id;
    };
    get obtainingId(){
        return this.getId();
    };
    playMultimedia = () => {
        showVideo.watchVideo(this.obtainingUrl, this.obtainingId);
    };
    setInicio = (time) => {
        document.getElementById(this.obtainingId).setAttribute('src', this.obtainingUrl+`?start=${time}`);
    };
};

// 4. Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta
// iframe, por lo que se deben crear tres instancias, una para música, otra para película
// y otra para serie, con sus respectivas URL.
let music = new Reproductor('https://www.youtube.com/embed/vlhaFtsnqfs', 'musica');
let movies = new Reproductor('https://www.youtube.com/embed/fWQrd6cwJ0A', 'peliculas');
let series = new Reproductor('https://www.youtube.com/embed/kAYc5elCJcE', 'series');

// 5. Invocar al método “playMultimedia” para cada instancia creada, mostrando así los
// videos en el documento HTML.
music.playMultimedia();
movies.playMultimedia();
series.playMultimedia();

// 6. Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las
// instancias creadas.
music.setInicio('82');
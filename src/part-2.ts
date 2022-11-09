

/*
    Create structure about songs and make jukebox, which will randonly get the song from the list of songs.

    Make a Playlist of songs (reuse code from exercise 17)
    - declare class for playlist
    -- use private and static properties
    - prepare 'addSong' method
    - create new instance, access and call: 
        -- playlist, its public instance property, public instance method, public static property

    Create an interface describing stock item
        - allow to get and set it within warehouse location (make it as a class)
        - make new slot in warehouse and put there new stock item object
*/

class Song 
{    
    private artist: string;
    private title: string;
    
    constructor(artist: string, title: string)
    {
        this.artist = artist;
        this.title = title;
    }
}

class Jukebox
{
    private songs: Song[];

    constructor(songs: Song[])
    {
        this.songs = songs;
    }

    randomSong()
    {
        return this.songs[Math.floor(Math.random() * this.songs.length)];
    }
}

class Playlist
{
    private playlist: Song[] = [];

    addSong(song: Song)
    {
        this.playlist.push(song);
    }
}

var playlist = new Playlist();
playlist.addSong(new Song('artist', 'title'))

interface Stock
{
    id: number;
    name: string;
    location: string;
}

class warehouse
{
    private _stock;

    get stock()
    {
        return this._stock;
    }

    set stock(stock: Stock)
    {
        this._stock = stock;
    }
}
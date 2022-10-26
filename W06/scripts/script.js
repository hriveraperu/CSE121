const ceratiId = "1QOmebWGB6FdFtW7Bo3F0W";
const sodastereoId = "7An4yvF7hDYDolN4m5zKBp";



let tempAlbumChose = "";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd20d3bb018msh8f784acc9a58170p192ce6jsn03211ec860f3',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

let chosenId = "";

function toChooseId() {
    let artist = document.querySelector("#artist").value;
    
    if (artist === "artist_2") {
        chosenId = 'https://spotify23.p.rapidapi.com/artist_albums/?id=' + ceratiId + '&offset=0&limit=100';
        document.querySelector("#list").textContent = "";
        document.querySelector("#track-list").textContent = "";
        tempAlbumChose = ""
    } else if (artist === "artist_1"){
        chosenId = 'https://spotify23.p.rapidapi.com/artist_albums/?id=' + sodastereoId + '&offset=0&limit=100';
        document.querySelector("#list").textContent = "";
        document.querySelector("#track-list").textContent = "";
        tempAlbumChose = ""
    };
    
    resultAlbum.fetchAlbum();
};


let resultAlbum = {
    fetchAlbum: function () {
        fetch(chosenId, options)
        .then((response) => response.json())
        .then((data) => this.displayAlbum(data));
	
    },
    displayAlbum: function(data) {
        const { items } = data.data.artist.discography.albums;
        
      
        if (tempAlbumChose === '') {
            reset(); 
        } else {
            document.querySelector("#list").textContent = "";
        }
        


        items.forEach(element => {
            const { name, id } = element.releases.items[0]
            const { year } = element.releases.items[0].date
            const { url } = element.releases.items[0].coverArt.sources[0]

            
            let eachDisc = document.createElement("li");

            let discName = document.createElement("h3");
            discName.textContent = name;
    
            let discYear = document.createElement("h4");
            discYear.textContent = year;
    
            let imageUrl = document.createElement("img");
            imageUrl.setAttribute("src", url);
            imageUrl.setAttribute("alt", name);
    
            eachDisc.appendChild(discName);
            eachDisc.appendChild(discYear);
            eachDisc.appendChild(imageUrl);
            eachDisc.setAttribute("id", id);

            if (tempAlbumChose === "") {
                document.querySelector("#list").appendChild(eachDisc);
                

                let optionAlbum = document.createElement("option");
                optionAlbum.textContent = name
                optionAlbum.setAttribute("value", id)
                document.querySelector("#album-array").appendChild(optionAlbum);
            } else {
                if (id === albumId) {
                    document.querySelector("#list").appendChild(eachDisc);

                    let optionAlbum = document.createElement("option");
                    optionAlbum.textContent = name
                    optionAlbum.setAttribute("value", id)
                    document.querySelector("#album-array").appendChild(optionAlbum);
                }
            
            }
            
        });
    
    }
};

let albumId = "";

let resultTracklist = {
    
    fetchTracklist: function() {
        fetch('https://spotify23.p.rapidapi.com/album_tracks/?id=' + albumId + '&offset=0&limit=300', options)
        .then((response2) => response2.json())
        .then((data2) => this.displayList(data2));
        
    },
    displayList: function(data2) {
        const { items } = data2.data.album.tracks;
        // console.log(items);
        // console.log(data2);
        document.querySelector("#track-list").textContent = "";
        
      
        // reset();
        // document.querySelector("#list") = "";
        // document.querySelector("#list").appendChild(tempAlbumChose);

        items.forEach(element => {
            const { name, trackNumber } = element.track;
            const { totalMilliseconds } = element.track.duration;
            // console.log(name);
            // console.log(trackNumber);
            // console.log(totalMilliseconds);
            
            
            
            let trackList = document.createElement("li");

            let trackName = document.createElement("p");
            trackName.textContent = name;
    
            let trackLength = document.createElement("h4");
            let tempTime = new Date(totalMilliseconds)
            trackLength.textContent = `${tempTime.getMinutes()}:${tempTime.getSeconds()}`;
    
        
            trackList.appendChild(trackName);
            trackList.appendChild(trackLength);
            document.querySelector("#track-list").appendChild(trackList);
            

            
        });
       
    }
};





function reset() {
    document.querySelector("#list").textContent = ""
    document.querySelector("#album-array").textContent = ""
    

    let optionDefault = document.createElement("option");
    optionDefault.textContent = "Choose an Album...";

    document.querySelector("#album-array").appendChild(optionDefault);
};



function hiddenAlbums() {



    let chosenAlbum = document.querySelector("#album-array");


    let chosenValue = chosenAlbum.options[chosenAlbum.selectedIndex].value;

    albumId = chosenValue;
    resultAlbum.fetchAlbum();
    tempAlbumChose = document.getElementById(chosenValue);


    function softReset() {
        document.querySelector("#list").textContent = ""
    };

    

    softReset();
    


    

    resultTracklist.fetchTracklist();

};

document.querySelector("#default-section").addEventListener("change", toChooseId);

document.querySelector("#album-section").addEventListener("change", hiddenAlbums);



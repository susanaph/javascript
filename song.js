/*
In this little program I print information about one of the songs I listen to a lot, my favorite part of this is the very famous Allegro. 
*/

// object with composers
var greatComposers = {
        1: "Wolfgang Amadeus Mozart",
        2: "Ludwig van Beethoven",
        3: "Johann Sebastian Bach",
        4: "George Frideric Handel",
        5: "Franz Joseph Haydn",
}

// information about the song
var genre = "Classical"
// extracting value from object to get composer name
var composer = greatComposers['1']
var title = "Eine kleine Nachtmusik"
var durationInSeconds = 352
var durationUnit = "seconds"
var Conductor = "Andrew Watkinson"
var OriginalYear = 1787
var KochelCatalogue = "K. 525"
var OtherName = "Serenade No. 13 for strings in G major"
var PlaceComposed = "Vienna"
var PerformedBy = "City of London Sinfonia"
var PerformedAt = 1998
var SpotifyURL = "https://open.spotify.com/track/2mRUmSG3XGjFloqgAT2UJN?si=r2ONdAfASFOLcU9i5vE-4g"
var FunFact = "Did you know that " + YearsBetween() + " years passed between this piece being composed and the performance by the City of London Sinfonia?"


// array to display the information
var MusicInfo = ["Genre:", "Composer:", "Title:", "Duration:", "Conductor:", "Original Year:", "Köchel Catalogue:", "Also known as:", "Composed in:", "Performed by:", "Spotify:", "Performed at:"]

// say if genre is classical
function MusicType() {
if (genre === "Classical") {
        console.log("Yep, it's classical!")
}
else {
        console.log("Not Classical")
}
}

// calculate years between year composed and year performed
function YearsBetween() {
        return(PerformedAt - OriginalYear)
}

// print information about the song
MusicType()
console.log(MusicInfo[0], genre)
console.log(MusicInfo[1], composer)
console.log(MusicInfo[2], title)
console.log(MusicInfo[3], durationInSeconds, durationUnit)
console.log(MusicInfo[5], OriginalYear)
console.log(MusicInfo[6], KochelCatalogue)
console.log(MusicInfo[7], OtherName)
console.log(MusicInfo[8], PlaceComposed)
console.log(MusicInfo[4], Conductor)
console.log(MusicInfo[9], PerformedBy)
console.log(MusicInfo[11], PerformedAt)
console.log(MusicInfo[10], SpotifyURL)
console.log(FunFact)
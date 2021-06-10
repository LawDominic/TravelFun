export default class DataManager {

    // variable initialisation
    static myInstance = null;
    userID = "";
    listingID = "";
    categoryID = "";
    locationValue = "";

    // lisings array
    listings = [
        {
            "listingID": 1,
            "name": "Test",
            "location": "Sydney",
            "width": {
                "width": 240,
            },
            "rating": 0,
            "images": [
                require("../assets/location-bg.jpeg"),
                require("../assets/location-bg.jpeg")
            ],
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin elementum leo. Nunc dignissim ipsum euismod mauris sollicitudin placerat. Vivamus feugiat leo id euismod auctor. Nulla viverra velit in rhoncus dignissim. \nNulla volutpat ipsum libero, in porta ante fermentum vitae. Sed dignissim felis sed dui pulvinar ullamcorper. Sed nec tortor in erat sagittis lobortis id non lacus. Sed sagittis leo ut fermentum pellentesque. Fusce in vulputate ante. ",
            "category": "nearby_sydney sydney",
            "coords": {
                "lat": -33.856159,
                "lon": 151.215256,
            },
            "reviews": [
                "Mauris vitae ultrices quam.",
                "Curabitur volutpat bibendum mattis.",
            ]
        },
        {
            "listingID": 2,
            "name": "Sydney Harbour Bridge",
            "location": "Sydney",
            "width": {
                "width": 240,
            },
            "rating": 4,
            "images": [
                require("../assets/ListingImages/harbour-bridge.jpeg"),
                require("../assets/ListingImages/harbour-bridge.jpeg"),
                require("../assets/ListingImages/harbour-bridge.jpeg")
            ],
            "content": "Quisque nisi massa, aliquet et pretium tincidunt, lacinia sit amet libero. In ultricies aliquam odio, eu tempor tellus pretium suscipit. Sed id condimentum ipsum, quis volutpat tellus. \nSuspendisse lacinia lorem facilisis, fringilla risus id, placerat nibh. Aliquam eget eleifend urna. Aliquam erat volutpat.",
            "category": "nearby_sydney beach attraction sydney",
            "coords": {
                "lat": -33.8523,
                "lon": 151.2108,
            },
            "reviews": [
                "Sed finibus nulla et dignissim euismod.",
                "Suspendisse ornare aliquet dapibus.",
                "Aenean id tempor leo."
            ]
        },
        {
            "listingID": 3,
            "name": "Sydney Opera House",
            "location": "Sydney",
            "width": {
                "width": 240,
            },
            "rating": 4,
            "images": [
                require("../assets/ListingImages/opera-house.jpeg"),
                require("../assets/ListingImages/opera-house.jpeg"),
                require("../assets/ListingImages/opera-house.jpeg"),
                require("../assets/ListingImages/opera-house.jpeg")
            ],
            "content": "Vestibulum volutpat neque justo, semper pharetra orci dictum vitae. Sed molestie neque vulputate consectetur mollis. Integer sit amet fermentum lectus. Aliquam sollicitudin ipsum nec leo auctor scelerisque et eu lectus. \nNam gravida efficitur sapien, pharetra convallis eros posuere ut. Morbi accumsan, elit a egestas convallis, dolor tortor semper enim, et sodales augue lacus et sapien. Cras id velit consectetur tortor sodales mattis non malesuada sapien.",
            "category": "nearby_sydney food beach sydney top_sydney",
            "coords": {
                "lat": -33.856159,
                "lon": 151.215256,
            },
            "reviews": [
                "Mauris eu tempor sem.",
                "In dapibus sit amet dui id eleifend."
            ]
        }
    ]

    // categories array
    categories = [
        {
            "categoriesID": 1,
            "title": "Food & Dining",
            "iconName": "silverware",
            "iconSize": 42,
            "iconColor": "blue",
            "categoryName": "food",
        },
        {
            "categoriesID": 2,
            "title": "Nature & Parks",
            "iconName": "nature-people",
            "iconSize": 42,
            "iconColor": "green",
            "categoryName": "nature",

        },
        {
            "categoriesID": 3,
            "title": "Beaches",
            "iconName": "beach",
            "iconSize": 42,
            "iconColor": "yellow",
            "categoryName": "beach",
        },
        {
            "categoriesID": 4,
            "title": "Museums & Art Galleries",
            "iconName": "bank",
            "iconSize": 42,
            "iconColor": "orange",
            "categoryName": "museum",
        },
        {
            "categoriesID": 5,
            "title": "Theme Parks & Attractions",
            "iconName": "ticket",
            "iconSize": 42,
            "iconColor": "red",
            "categoryName": "attraction",
        },
    ]

    // location array
    location = [
        {
            "key": 0,
            "label": "Sydney"
        },
    ]

    // favorites array
    favorites = [{
        "listingID": 1,
        "userID": 1,
    },]

    static getInstance() {
        if (DataManager.myInstance==null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID() {
        console.log(this.userID)
        return this.userID;
    }

    setUserID(id) {
        this.userID = id;
    }

    getListingID() {
        return this.listingID;
    }

    setListingID(id) {
        this.listingID = id;
    }

    addListing(listing) {
        this.listings.push(listing)
    }

    getCategory() {
        return this.categoryID;
    }

    setCategory(id) {
        this.categoryID = id;
    }

    getLocations() {
        return this.locationValue;
    }

    setLocations(id) {
        this.locationValue = id;
    }

    addFavorites(listing) {
        let arr = this.favorites
        for (let i=0; i<arr.length; i++) {
            if (arr[i].listingID !== listing.listingID && arr[i].userID !== listing.userID) {
                this.favorites.push(listing);
            }
        }
        console.log(this.favorites)
    }

    removeFavorites(listing) {
        let arr = this.favorites
        for (let i=0; i<arr.length; i++) {
            if (arr[i].listingID === listing.listingID && arr[i].userID === listing.userID) {
                this.favorites.splice(i, 1)
            }
        }
    }
}
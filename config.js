// Ba Du Ao Tian October 10, 2019 https://github.com/AJLoveChina/birthday
var config = {
    // The length of each sentence can be arbitrary; you can write ten or twenty sentences.
    // Try to keep each sentence under 15 words for better display.
    texts: [
        "To my", // Important: The last comma in each sentence must be in English!
        "Beloved sweetheart", // Same as above...
        "Today is your birthday",
        "This marks our",
        "Third birthday together",
        "Remember last year's",
        "Birthday celebrated at Wang Po's skewers",
        "This year, let's eat well",
        "Feed my cute piggy",
        "Then take her away",
        "NOBITA~~",
    ],
    /**
     * You can leave 'imgs' empty, but if you want to fill it, follow the format below:
     * "Matching the above text exactly": "Image address, you can put the image in the 'imgs' folder"
     * For example:
     * "Beloved sweetheart": "./imgs/xiaokeai.jpg"
     *
     * If you don't want images, just add two slashes at the beginning of each line, like the "Today is your birthday" image won't be displayed :)
     * Tip: Images are best square or close to square for better visual appeal.
     */
    imgs: {
        "Beloved sweetheart": "./imgs/xiaokeai.png",
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    // Button text descriptions; the following are the default English button texts, you can change them to your liking.
    desc: {
        turn_on: "Start",
        play: "Music",
        bannar_coming: "Color",
        balloons_flying: "Something seems missing",
        cake_fadein: "Cake?",
        light_candle: "Candles?",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR YOU",
    }
};
